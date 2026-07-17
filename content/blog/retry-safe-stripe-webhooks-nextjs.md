---
title: Designing Retry-Safe Stripe Webhooks in Next.js
description: Learn how to build retry-safe Stripe webhooks in Next.js with signature verification, durable event storage, ordering guards, queues, and reconciliation.
date: 2026-07-17
updated: 2026-07-17
category: Product Engineering
tags: [Stripe, Next.js, Webhooks, SaaS, Payments, Reliability]
faqs:
  - question: "Should a Stripe webhook return 200 before processing the event?"
    answer: "Return a successful response after the event has been authenticated and durably recorded, but before slow business processing. Acknowledging before durable storage can lose work, while completing every side effect inside the request makes timeouts and retries more likely."
  - question: "Is storing the Stripe event ID enough for idempotency?"
    answer: "No. The event ID prevents repeat processing of the same delivery, but a reliable integration also needs unique business-operation keys and idempotent downstream calls because separate events can represent the same underlying change."
  - question: "How should a Next.js app handle Stripe events that arrive out of order?"
    answer: "Do not treat delivery order as a state machine. Use the event as a signal, retrieve the current Stripe object when freshness matters, and update local state with explicit transition or version guards."
---

A customer pays for a subscription, Stripe sends an event, and a Next.js Route Handler updates the database. The happy path looks simple. The production problem begins when the same event arrives twice, a newer event arrives first, a database transaction fails after an email is sent, or the endpoint times out while Stripe is deciding whether to retry.

The useful target is not “exactly once.” A webhook crosses networks and systems that cannot share one transaction. Design for **at-least-once delivery with idempotent effects**: repeated or reordered messages may arrive, but they do not create duplicate access grants, emails, credits, invoices, or external operations.

This guide presents a practical Next.js and Stripe architecture for that target. It focuses on subscription billing, but the same pattern applies to payment, refund, dispute, and Connect workflows.

## The reliability contract in one table

| Failure | Unsafe assumption | Reliable design response |
| --- | --- | --- |
| Duplicate delivery | Every request represents new work | Store the Stripe event ID under a unique constraint |
| Two events describe one change | Event ID deduplication solves all duplication | Add a stable business-operation key such as `provision:invoice_123` |
| Out-of-order delivery | Events form an ordered state machine | Fetch current provider state or enforce local transition guards |
| Endpoint timeout | Slow work can finish before acknowledgement | Authenticate, persist, enqueue, and return `2xx` quickly |
| Crash between database and queue | An in-memory enqueue is durable | Write an outbox/job record in the same database transaction |
| Worker retry | Side effects are safe to repeat | Give every side effect its own idempotency boundary |
| Missed delivery | Provider retries guarantee eventual recovery | Reconcile local state against Stripe and expose failed work |

Stripe documents that live-mode event delivery can be retried for up to three days, duplicate events can occur, and event order is not guaranteed. It also recommends asynchronous handling and a quick `2xx` response. These are not edge cases to add later; they define the integration contract. See Stripe's [webhook delivery and security guidance](https://docs.stripe.com/webhooks).

## Keep the webhook endpoint deliberately small

The endpoint has four responsibilities:

1. read the unmodified request body;
2. verify the Stripe signature;
3. durably record accepted work;
4. return a successful response.

It should not send customer email, grant features, call several internal services, or run a long subscription workflow synchronously.

In the Next.js App Router, a Route Handler uses the Web Request API. Read the body once with `request.text()` and pass that exact string to Stripe's signature verifier. Stripe requires the raw body; parsing and re-serializing JSON first can invalidate the signature. The [Next.js Route Handler documentation](https://nextjs.org/docs/app/getting-started/route-handlers) describes the request boundary, while Stripe documents the raw-body requirement in its [webhook guide](https://docs.stripe.com/webhooks).

The following is an architectural skeleton, not a copy-paste data model:

```ts
// app/api/stripe/webhook/route.ts
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe/server';
import { db } from '@/lib/db';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const signature = (await headers()).get('stripe-signature');
  const payload = await request.text();

  if (!signature) {
    return new Response('Missing signature', { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch {
    return new Response('Invalid signature', { status: 400 });
  }

  await db.$transaction(async (tx) => {
    const inserted = await tx.stripeEvent.createMany({
      data: {
        stripeEventId: event.id,
        type: event.type,
        createdAtStripe: new Date(event.created * 1000),
        livemode: event.livemode,
        status: 'RECEIVED',
      },
      skipDuplicates: true,
    });

    if (inserted.count === 0) return;

    await tx.outboxJob.create({
      data: {
        key: `stripe-event:${event.id}`,
        kind: 'PROCESS_STRIPE_EVENT',
        payload: { eventId: event.id },
      },
    });
  });

  return Response.json({ received: true });
}
```

Do not store a webhook secret in public configuration, commit it to Git, or log the raw payload. Persist only the fields needed for audit and recovery, or encrypt sensitive retained payloads under a defined retention policy.

## Acknowledge only after durable receipt

“Return `200` quickly” is sometimes misread as “return before saving anything.” That creates a loss window:

1. the endpoint returns `200`;
2. the process crashes;
3. no durable record or job exists;
4. Stripe believes delivery succeeded and has no reason to retry.

The safer boundary is: verify, write the event receipt and outbox job atomically, then acknowledge. The worker can begin a millisecond or a minute later without changing the delivery guarantee.

If the database is unavailable, return a failure so Stripe can retry. If the event is already stored, the unique constraint turns the repeat request into a harmless acknowledgement.

An in-memory queue call immediately after a database insert still leaves a crash gap. A transactional outbox closes that gap by placing the job record in the same transaction as the event receipt. A dispatcher can publish pending outbox rows to a managed queue, or a database-backed worker can claim them directly.

## Use three idempotency layers, not one

Teams often call an endpoint idempotent after adding a `processedEventIds` table. That is only the first layer.

### 1. Delivery idempotency

Put a database unique constraint on the Stripe event ID. Do not use an in-memory set; serverless instances restart and multiple instances do not share memory.

Stripe notes that in some cases separate Event objects can describe duplicates. Its guidance suggests considering the object ID in `data.object` together with the event type. That leads to the next boundary.

### 2. Business-operation idempotency

Derive a stable key for the effect your product intends to perform:

```text
grant-subscription-access:sub_123:period_2026-07
send-payment-receipt:invoice_123
apply-account-credit:credit_note_123
record-refund:refund_123
```

Store that key under a unique constraint before performing the effect. The key should describe the business operation, not the worker attempt. A retry gets the same key; a genuinely new billing period or refund gets a different one.

For local state, prefer an upsert or guarded transition over “read, then insert.” Concurrent workers can both pass a read check before either writes. The database constraint is the final arbiter.

### 3. Downstream idempotency

If the worker makes a Stripe `POST` request, send a stable idempotency key. Stripe's [idempotent request documentation](https://docs.stripe.com/api/idempotent_requests) explains how repeated API requests with the same key are handled.

Other side effects need equivalent protection. An email provider may accept its own idempotency header; otherwise store a notification record with a unique business key and delivery state. For a fulfilment or entitlement service, pass a stable operation identifier across the boundary.

## Do not build a state machine from arrival order

Suppose `customer.subscription.updated` describes an active subscription and a delayed older event describes it as incomplete. Applying each payload blindly can move a customer backward.

There are two practical strategies:

- **Signal then fetch:** treat the event as a prompt to retrieve the current Subscription, Invoice, or PaymentIntent from Stripe. Apply the fresh provider state to the local projection.
- **Guarded projection:** when avoiding a provider call, persist relevant provider timestamps or versions and allow only valid local transitions. Reject stale updates and record why.

Fetching current state is often the clearer choice for access and billing decisions. It costs an API call but reduces the number of assumptions encoded in the worker. A guarded projection is useful at higher volume or when the event itself is the historical record, but it requires careful transition design.

Do not compare only your local processing time. It says when your system saw the event, not when the provider state changed. Also avoid one generic rule such as “newer event wins” across unrelated object types; an invoice and a subscription have different lifecycles.

Stripe's [subscription webhook guide](https://docs.stripe.com/billing/subscriptions/webhooks) lists the events and status changes a billing integration may need. Subscribe only to the event types that drive a defined local decision.

## Model local billing state as a projection

Stripe owns payment and subscription facts. Your application needs a local projection for fast authorization and product behavior.

A useful subscription projection may include:

- local account or workspace ID;
- Stripe customer and subscription IDs;
- current price or plan mapping;
- provider status;
- current period boundary;
- cancellation state;
- last synchronized provider object;
- last successful reconciliation time; and
- an explicit access decision with its reason.

Keep the access rule in one domain function. Do not let the checkout success page, webhook handler, middleware, and UI each invent a slightly different interpretation of `active`, `trialing`, `past_due`, or `unpaid`.

A redirect from Checkout is a user-experience signal, not payment proof. The page can show “confirming subscription” while the webhook worker updates the durable local projection.

## Make worker state visible and repairable

A queue without an operating surface moves failure out of sight.

Track at least:

| Field | Purpose |
| --- | --- |
| `status` | `RECEIVED`, `PROCESSING`, `SUCCEEDED`, `RETRYABLE`, or `DEAD` |
| `attemptCount` | Detect repeated failure and retry storms |
| `nextAttemptAt` | Apply controlled backoff |
| `lastErrorCode` | Group failures without storing secrets or raw provider bodies |
| `lockedAt` / `lockedBy` | Recover abandoned worker claims |
| `processedAt` | Measure webhook lag |
| `businessOperationKey` | Explain why a side effect was or was not repeated |

An authorized operator should be able to search by customer, subscription, invoice, and event ID; see the local and provider states; retry a safe job; and understand whether access was granted, withheld, or repaired.

Dead-lettering is not completion. A dead job needs an alert, an owner, and a documented repair path.

## Reconcile instead of trusting delivery forever

Even a strong webhook path can miss work because of a deployment incident, expired retry window, misconfigured endpoint, or application bug. Add a scheduled reconciliation job that compares local billing projections with Stripe.

Useful checks include:

- active local access without a qualifying provider state;
- qualifying paid subscriptions without local access;
- webhook events stuck in `RECEIVED` or `PROCESSING`;
- invoices paid in Stripe but not reflected locally;
- subscriptions without a recent successful synchronization; and
- repeated dead-letter failures for the same account or event type.

Repair through the same idempotent domain functions used by normal workers. Do not build a separate “force correct” path that bypasses invariants.

During an outage, Stripe's [undelivered-event recovery guide](https://docs.stripe.com/webhooks/process-undelivered-events) can help retrieve recent failed deliveries. Reconciliation remains necessary because provider delivery history is not your complete operational model.

## Test failures, not only checkout success

A production acceptance plan should cover this matrix:

| Test | Expected result |
| --- | --- |
| Valid signed event | One receipt and one queued business operation |
| Invalid or missing signature | `400`; no event or job stored |
| Same event delivered concurrently | One durable receipt; both requests can safely return `2xx` |
| Two events for the same business effect | One effect record under the semantic key |
| Newer event processed before older event | Local state does not regress |
| Database unavailable before receipt | Non-`2xx`; provider retry remains possible |
| Crash after transaction commit | Outbox job remains available |
| Worker crashes after side effect | Retry observes idempotency record and does not repeat the effect |
| Provider API timeout | Controlled retry with the same downstream idempotency key |
| Event remains unprocessed | Monitoring alerts and reconciliation can repair it |

Use Stripe testing environments for real object lifecycles, the Stripe CLI for delivery and resend scenarios, and Test Clocks for subscription renewals and time-dependent status changes. Stripe's [testing overview](https://docs.stripe.com/testing/overview) and [Test Clocks reference](https://docs.stripe.com/api/test_clocks) describe those tools.

Test the API version configured on the event destination. Event payload shape follows the version active for that destination or account when the event is created; changing application code does not rewrite old Event objects.

## Should a Stripe webhook return 200 before processing the event?

Return a successful response after the event has been authenticated and durably recorded, but before slow business processing. Acknowledging before durable storage can lose work, while completing every side effect inside the request makes timeouts and retries more likely.

## Is storing the Stripe event ID enough for idempotency?

No. The event ID prevents repeat processing of the same delivery, but a reliable integration also needs unique business-operation keys and idempotent downstream calls because separate events can represent the same underlying change.

## How should a Next.js app handle Stripe events that arrive out of order?

Do not treat delivery order as a state machine. Use the event as a signal, retrieve the current Stripe object when freshness matters, and update local state with explicit transition or version guards.

## Turn payment reliability into an explicit product boundary

The webhook endpoint is only one part of billing. Reliable subscription behavior also depends on tenant authorization, plan mapping, access policy, operator tooling, monitoring, recovery, and a handover another engineer can run.

My [production-ready Next.js SaaS architecture guide](/blog/production-ready-nextjs-saas-architecture) places billing inside that wider product system. The [Software Product Engineering service](/services/saas-product-engineering) covers discovery through launch and handover for products that need dependable payment, data, API, and operational boundaries.

If your product is losing subscription state, duplicating billing side effects, or relying on a fragile checkout callback, [send a project brief](/hire#project-brief) with the current Stripe flow, failure symptoms, stack, and launch constraint.
