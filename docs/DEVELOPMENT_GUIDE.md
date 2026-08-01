# Development Guide

## Prerequisites

- Node.js 20.9 or newer
- npm 10 or a version compatible with the installed Node release
- Git

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The site builds without contact credentials. Form delivery returns a controlled
configuration error and the interface offers direct email until Resend is set.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run dev:restart` | Stop the current port process and restart development |
| `npm run content:check` | Validate blog frontmatter, article structure, images, and optional FAQs |
| `npm run portfolio:check` | Validate the four-core/two-lab portfolio contract, evidence fields, unique slugs, and retired flagship language |
| `npm run seo:check` | Guard inline ProfilePage source objects against missing Google-required entity types and names |
| `npm run search:check` | Test the durable state, sitemap-parity, and workflow contract, then check pending content without contacting either provider |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm run lint` | Run Next.js and TypeScript ESLint rules |
| `npm run lint:fix` | Apply safe lint fixes |
| `npm run build` | Produce the production build |
| `npm run start` | Serve the production build |

## Change workflow

1. Read `AGENTS.md` and the relevant guide.
2. Check `git status` and preserve unrelated work.
3. Identify the source of truth before editing a component.
4. Make the smallest coherent vertical change across content, UI, SEO, and docs.
5. Run content validation, portfolio validation, SEO validation, search dry-run,
   typecheck, lint, and build.
6. Test affected routes and interactions at desktop and mobile widths.
7. Review `git diff --check` and the final diff.

## Code conventions

- Prefer server components and data passed from server modules.
- Name components and exported types explicitly.
- Keep content records out of JSX when the value is reused by metadata, schema,
  sitemap, or another page.
- Use `next/link` for internal navigation and normal anchors for external links.
- External links opening a new tab need `rel="noreferrer"` or
  `rel="noopener noreferrer"`.
- Keep the Calendly event URL in the typed public content configuration. Do not
  paste provider embed HTML through `dangerouslySetInnerHTML` or add a client
  token, OAuth flow, webhook, or SDK for the consultation link.
- Use semantic elements and one clear `h1` per route.
- Bound all untrusted input on the server. Client validation is usability, not a
  security control.
- Do not use `dangerouslySetInnerHTML` for user content. The only deliberate use
  is JSON-LD serialization through `components/JsonLd.tsx`.

## Adding a service

1. Add a complete record to `services` in `content/site.ts`.
2. Use a stable lowercase slug.
3. Include buyer problem, intended outcome, lifecycle coverage, deliverables,
   public evidence, related products/articles, honest FAQs, and the canonical
   `/hire#project-brief` next step.
4. Treat technologies as supporting evidence on the detail page, not the
   service card's primary message.
5. The service index, homepage cards, dynamic route, footer, JSON-LD, and sitemap
   update from the shared record.
6. Run the full verification chain.

## Adding a case study

1. Add a record to `projects` in `content/site.ts`.
2. Assign `core` or `lab`, a stable display order, target users, buyer outcome,
   maturity, lifecycle states, constraints, public evidence, and an explicit
   schema type.
3. Separate `Delivered`, `Validated`, `In progress`, and `Planned` work.
4. Link only public evidence, check every URL, and use a verified ISO date only
   when emitting `dateCreated`.
5. Keep all four core products at equal presentation priority. Do not add a
   flagship or use a generic commerce-specific template for unrelated work.
6. Use `highlighted: true` only for a Lab record that needs an explicit
   discovery treatment. Keep exactly one highlighted Lab, never use the field
   to alter core ordering, and keep its maturity boundary visible.
7. Never turn a planned feature, experiment, prototype, or R&D activity into a
   completed outcome.

## Contact testing

Without credentials, submit a valid brief and verify the direct-email fallback.
With a test Resend key and verified sender, verify:

- a valid message arrives and sets `reply_to` correctly;
- each allowed product lane and lifecycle stage is accepted;
- unknown lane/stage values and invalid product URLs return `400`;
- invalid email and short messages return `400`;
- the honeypot returns success without sending;
- repeated requests eventually return `429`; and
- provider failures do not expose API response bodies.

## Consultation testing

Use the published 30-minute Calendly event and verify:

- the `/hire#consultation` call to action reaches the consultation section;
- no Calendly iframe or third-party request is created before the visitor
  chooses to load available times;
- the inline scheduler loads after that action and the external Calendly link
  remains available;
- only name and email are requested in addition to the selected date and time;
- the invitee sees times in their local timezone and the host calendar records
  the equivalent Asia/Dhaka time;
- a test booking creates the Google Meet event and sends confirmations to host
  and invitee;
- reschedule and cancellation update both calendars and notifications;
- the 4-hour minimum notice, no-buffer behavior, maximum four consultations per
  day, and 30-day booking horizon are enforced; and
- a blocked or unavailable Calendly frame does not block the project brief or
  direct-email fallback.

Cancel the production test booking after verifying the complete lifecycle.

## Measurement testing

Vercel Web Analytics and Speed Insights are mounted once in `app/layout.tsx`.
Local development may load the components without sending production data.
Both production project features and the deployed root-layout integrations were
verified on July 27, 2026. For production acceptance:

- disable content blockers, hard-load a public page, wait for it to settle,
  interact once, and use an internal link or background/exit the page;
- confirm both build-generated `/<unique-path>/script.js` requests succeed;
- confirm a successful request to the Analytics `/<unique-path>/view` intake
  and a successful `POST` to the Speed Insights `/<unique-path>/vitals` intake;
- confirm the visited routes appear in the Web Analytics dashboard after
  processing;
- confirm an individual Web Vital appears in Speed Insights, then check RES
  after FCP, LCP, INP, and CLS data are available; and
- verify that URLs, query parameters, and custom events contain no
  names, email addresses, project-brief content, meeting details, credentials,
  or private identifiers.

The hire flow also emits four allowlisted custom conversion events. In local
development, verify the analytics debug output or queued calls for scheduler
load, external Calendly fallback, and service-to-hire CTA clicks. Verify
`project_brief_success` only after a controlled successful API response; do not
place test identity or brief content in analytics. The CTA event may contain
only its code-defined `source` and `intent` strings, while the other three
events contain no properties. Custom-event dashboard acceptance requires a
Vercel Pro or Enterprise team; the project team was Hobby on August 1, 2026.

Version 2 can randomize the script and intake paths for each deployment. Inspect
the injected element or Network panel instead of hard-coding a previous path.
Speed Insights flushes some measurements when the page is backgrounded or
exited, and dashboard processing is not immediate. The RES-only “No data
available” package warning may therefore appear while individual metric cards
already contain data; it is not, by itself, evidence that the package is stale.

Automatic page views are route evidence only. The project-brief event proves a
successful form API response, not inbox receipt or lead quality. Scheduler and
Calendly-link events do not prove a booking, consultation attendance, or paid
scope.

Accepted production baseline: on July 29, 2026, Web Analytics showed 6
visitors, 12 page views, and processed route data for `/`, `/hire`, and `/work`.
Speed Insights acceptance on July 27 showed RES 100 after a real page-exit
flush. Recheck these dated snapshots after measurement configuration or provider
changes.

## Visual verification matrix

Minimum widths: 390px, 768px, 1280px, and 1440px.

Check:

- no horizontal overflow;
- navigation and mobile menu;
- heading wraps and CTA visibility;
- keyboard focus order;
- equal core-product hierarchy plus service, work, and blog card heights;
- article typography and code blocks;
- `/hire#project-brief` form labels, neutral select placeholders, errors, and
  touch targets;
- `/hire#consultation` load control, iframe title, keyboard order, cookie
  banner, external fallback, and a usable scheduler without page overflow;
- reduced-motion behavior; and
- missing route recovery.
