---
title: Multi-Tenant Authorization with PostgreSQL and Prisma
description: Design multi-tenant authorization with tenant-owned data, server-side permission checks, Prisma constraints, PostgreSQL RLS, and isolation tests.
date: 2026-07-29
updated: 2026-07-29
category: Systems Engineering
tags: [PostgreSQL, Prisma, SaaS, Authorization, Multi-Tenant]
summary: "Reliable multi-tenant authorization makes tenant ownership part of every sensitive data path. Authenticate the actor, resolve active membership on the server, authorize the requested operation, query by tenant and record together, enforce database constraints, and test hostile cross-tenant identifiers. PostgreSQL row-level security can add defence in depth, but only with verified roles and connection context."
takeaways:
  - "Treat tenant context as trusted server state derived from membership, never as authority supplied by a URL, form, or client token alone."
  - "Model ownership in keys and relations so tenant-scoped queries and constraints are natural rather than optional conventions."
  - "Centralize operation-level authorization close to data access and return only the fields the caller needs."
  - "Use PostgreSQL RLS as a tested database boundary, not as compensation for unclear application authorization."
  - "Prove isolation with negative tests across reads, writes, nested relations, jobs, exports, caches, and administrator paths."
audience: "SaaS engineers and technical founders using PostgreSQL and Prisma who need to prevent users, workers, or support tools from reading or changing another tenant's records."
faqs:
  - question: "Is filtering every Prisma query by tenantId enough?"
    answer: "Tenant filters are necessary but not sufficient. The server must also verify active membership and operation permission, the data model should enforce tenant-aware relations and uniqueness, indirect access paths must remain scoped, and negative tests must prove that hostile cross-tenant identifiers fail."
  - question: "Should a Prisma application use PostgreSQL row-level security?"
    answer: "Use PostgreSQL row-level security when the team can set and reset trusted tenant context per transaction, connect through a role that does not bypass policies, test every access path, and operate migrations and background jobs without silently weakening the boundary."
  - question: "How should cross-tenant access failures respond?"
    answer: "For tenant-owned records, a not-found response often avoids confirming that another tenant's identifier exists. Log the denied attempt with safe identifiers for authorized operators, but do not expose record details, policy internals, credentials, or sensitive query data."
---

## Tenant isolation is an authorization system

Adding `tenantId` to a table does not create tenant isolation. Isolation exists only when every path that reads, changes, exports, caches, searches, or processes tenant-owned data derives a trusted tenant context and enforces the requested operation.

The dangerous request is rarely labelled “cross-tenant.” It looks like an ordinary route:

```text
PATCH /api/projects/project_from_another_workspace
```

If the handler authenticates the user and then updates by `project.id` alone, the user may alter a record they do not own. A hidden button, a tenant name in the URL, or a workspace ID sent by the browser does not repair that boundary.

[OWASP's Broken Access Control guidance](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/) recommends deny-by-default, server-side enforcement, reusable controls, and record-ownership checks. For multi-tenant SaaS, those principles need to appear in the session, membership model, data access layer, database constraints, jobs, and tests.

## Build a trusted request context

A useful authorization flow is:

```text
Untrusted request
      ↓
Authenticate identity
      ↓
Resolve active tenant membership from trusted storage
      ↓
Authorize operation and resource boundary
      ↓
Execute tenant-scoped query
      ↓
Return a minimal DTO and record consequential changes
```

The browser may request a workspace slug or ID, but the server must resolve whether the authenticated identity has an active membership in that tenant. The trusted context can then contain:

```ts
type AuthContext = {
  userId: string;
  tenantId: string;
  membershipId: string;
  roles: Array<'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER'>;
};
```

Do not accept `roles`, `membershipId`, or an unrestricted `tenantId` from form data. A signed session can carry a tenant hint for performance, but sensitive operations should still confirm current membership or use a server-maintained session version so removal and role changes take effect predictably.

Next.js distinguishes optimistic route or interface checks from secure authorization checks near the data source. Its [authentication guide](https://nextjs.org/docs/app/guides/authentication) recommends a Data Access Layer for centralized authorization and DTOs that return only required data.

## Model tenant ownership in PostgreSQL and Prisma

Make ownership explicit on every tenant-owned row:

```prisma
model Tenant {
  id          String       @id @default(cuid())
  memberships Membership[]
  projects    Project[]
}

model Membership {
  tenantId String
  userId   String
  role     MembershipRole
  status   MembershipStatus

  tenant Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@id([tenantId, userId])
}

model Project {
  id       String @default(cuid())
  tenantId String
  slug     String
  name     String

  tenant Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  tasks  Task[]

  @@id([tenantId, id])
  @@unique([tenantId, slug])
}

model Task {
  tenantId String
  projectId String
  id        String @default(cuid())
  title     String

  project Project @relation(
    fields: [tenantId, projectId],
    references: [tenantId, id],
    onDelete: Cascade
  )

  @@id([tenantId, id])
}
```

The composite project relation prevents a task from pointing at a project under a different tenant. Tenant-scoped uniqueness lets two tenants use the same human-readable slug without creating a global collision. Prisma documents compound IDs and unique constraints through `@@id` and `@@unique`, including their use in unique queries, updates, upserts, and relation connections in its [compound constraint guide](https://www.prisma.io/docs/orm/prisma-client/special-fields-and-types/working-with-composite-ids-and-constraints).

Not every model needs a composite primary key, and changing an established schema has migration costs. The invariant matters: tenant-owned relations and unique operations should include enough tenant context that a cross-tenant association cannot be created accidentally.

## Authorize the operation, then scope the query

Avoid this pattern:

```ts
await prisma.project.update({
  where: { id: input.projectId },
  data: { name: input.name },
});
```

The secure path resolves membership, checks the operation, and identifies the record inside the same tenant boundary:

```ts
async function renameProject(
  ctx: AuthContext,
  input: { projectId: string; name: string },
) {
  if (!ctx.roles.some((role) => role === 'OWNER' || role === 'ADMIN')) {
    throw new NotFoundError();
  }

  const result = await prisma.project.updateMany({
    where: {
      tenantId: ctx.tenantId,
      id: input.projectId,
    },
    data: { name: input.name },
  });

  if (result.count !== 1) {
    throw new NotFoundError();
  }
}
```

`updateMany` is useful here because the filter can include both fields and the result exposes whether one row changed. A compound unique input is another option when the schema defines it. The important property is that the record ID is never used without the trusted tenant context.

Do not reduce authorization to roles alone. A member may edit projects but not billing; a project manager may modify only assigned projects; a support operator may view metadata without opening customer content. Define permissions around operations and resource relationships:

```text
project.read
project.rename
member.invite
billing.manage
export.create
```

Roles can grant those permissions, while resource rules narrow them further. Centralize the decision in a policy or DAL function so routes, Server Actions, workers, and APIs do not invent different meanings.

## Keep indirect access paths tenant-scoped

The obvious CRUD route is only one path. Review:

- nested relation queries;
- search and autocomplete;
- file and object-storage keys;
- exports and reports;
- background jobs and scheduled work;
- webhook-to-account mappings;
- cache and revalidation keys;
- realtime channels;
- audit and support views;
- analytics datasets; and
- soft-deleted or archived records.

A job payload such as `{ projectId }` is incomplete. Store `{ tenantId, projectId, requestedByUserId }`, then re-authorize or use a narrowly defined system authority when the worker executes. A cache key named `project:${id}` can collide or expose data if IDs are not globally unique; include the tenant and permission-relevant variation.

For object storage, do not treat a path containing the tenant ID as proof of access. Authorize the requested object in trusted code and issue a short-lived scoped URL only after the check.

## Add PostgreSQL row-level security carefully

PostgreSQL Row-Level Security can enforce a database predicate on `SELECT`, `INSERT`, `UPDATE`, and `DELETE`. Once RLS is enabled, no applicable policy means default deny for normal access. `USING` controls which existing rows are visible or modifiable, while `WITH CHECK` validates proposed rows for inserts and updates. See PostgreSQL's [row security documentation](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) and [`CREATE POLICY` reference](https://www.postgresql.org/docs/current/sql-createpolicy.html).

A simplified policy can use transaction-local context:

```sql
ALTER TABLE "Project" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Project" FORCE ROW LEVEL SECURITY;

CREATE POLICY project_tenant_isolation
ON "Project"
USING (
  "tenantId" = current_setting('app.tenant_id', true)
)
WITH CHECK (
  "tenantId" = current_setting('app.tenant_id', true)
);
```

The application must set that context on the same database connection and transaction used by the protected query:

```ts
await prisma.$transaction(async (tx) => {
  await tx.$executeRaw`
    SELECT set_config('app.tenant_id', ${ctx.tenantId}, true)
  `;

  return tx.project.findMany({
    orderBy: { name: 'asc' },
  });
});
```

This is an architectural example, not a complete drop-in policy. Role permissions, missing context, pooled connections, nested writes, migrations, administrator operations, and every protected table need explicit design and tests.

Important PostgreSQL caveats:

- superusers and roles with `BYPASSRLS` bypass policies;
- table owners normally bypass RLS unless `FORCE ROW LEVEL SECURITY` applies;
- policies do not replace normal `GRANT` privileges;
- permissive policies combine with `OR`, while restrictive policies combine with `AND`; and
- a missing or incorrectly reset connection context can deny valid work or expose data if the policy falls back unsafely.

Prisma's [Client Extensions documentation](https://www.prisma.io/docs/orm/prisma-client/client-extensions) lists request-specific clients and RLS as a use case, but query extensions have limitations around nested operations. Prisma also warns that client-level methods used incorrectly inside shared extensions may escape the current transaction context. Test the actual Prisma version, adapter, pooler, and deployment topology rather than assuming an extension makes every query safe.

## Keep transactions short and context-bound

Tenant context, permission-sensitive reads, and writes sometimes belong in one interactive transaction. Prisma's [transaction documentation](https://www.prisma.io/docs/orm/prisma-client/queries/transactions) supports isolation-level, wait, and timeout options, but warns against long transactions and network calls inside them.

Use the transaction for database invariants:

1. set or confirm tenant context;
2. read the permission-relevant state;
3. write the allowed transition;
4. create an audit or outbox record; and
5. commit.

Call email, payment, storage, or other network providers after the transaction through an idempotent job or transactional outbox. Holding a database transaction open during an external request increases contention and creates ambiguous failure boundaries.

## Choose responses and audit evidence deliberately

For a tenant-owned identifier, returning `404 Not Found` for both a missing record and an unauthorized cross-tenant record often avoids disclosing existence. That does not mean the server should lose the distinction internally.

Record safe audit context for consequential operations:

- authenticated user and active membership;
- tenant and resource identifiers;
- operation and decision;
- before/after state identifiers where appropriate;
- request or correlation ID;
- time and trusted server source; and
- a bounded reason code.

Do not log access tokens, passwords, full customer documents, raw payment payloads, or sensitive query parameters. Restrict audit access and define retention.

## Test isolation as an adversary

Create at least two tenants with users, overlapping slugs, and distinct records. Then prove:

| Test | Expected result |
| --- | --- |
| Tenant A lists projects | No Tenant B record is returned |
| Tenant A requests Tenant B ID | Not found or denied without existence details |
| Tenant A updates Tenant B ID | Zero rows changed and no side effect emitted |
| Tenant A links a task to Tenant B project | Database or domain constraint rejects it |
| Removed member reuses an old session | Sensitive access is rejected |
| Lower role calls an admin operation directly | Trusted server authorization rejects it |
| Search, export, cache, and realtime paths | Results contain only authorized tenant data |
| Worker receives mismatched tenant and record | Job fails safely and is visible for review |
| RLS context is absent | Default-deny behavior is proven |
| App connects as owner or bypass role | Acceptance test fails the deployment configuration |

Also fuzz nested identifiers, batch endpoints, relation connects, archive/restore paths, and bulk exports. Positive tests prove the product works; negative tests prove the tenant boundary holds when the caller is hostile or the application makes a mistake.

## Common failure modes

| Failure | Why it happens | Control |
| --- | --- | --- |
| `findUnique({ id })` on tenant data | Globally unique IDs feel safe | Query by tenant and record, then authorize operation |
| Tenant ID trusted from client input | Routing context is confused with authority | Resolve active membership on the server |
| Role check without resource check | Roles are too broad | Combine operation permission and resource relationship |
| Child relation crosses tenants | Foreign key omits ownership | Use tenant-aware composite relation or equivalent invariant |
| Admin client reused in user path | Convenience bypass spreads | Separate privileged clients and narrow their interfaces |
| RLS policy exists but app owns tables | Owner bypass is missed | Use a non-owner runtime role and test configuration |
| Query extension misses nested write | Middleware is assumed universal | Test nested operations and keep schema constraints |
| Background job lacks tenant context | Request assumptions disappear in async work | Persist tenant, actor, operation, and idempotency context |
| Cache key omits tenant | Shared cache returns another tenant's value | Namespace and vary cache by authorization-relevant context |

No single layer catches every failure. Use clear application authorization, tenant-aware queries, relational constraints, carefully operated RLS where appropriate, and hostile tests together.

## A multi-tenant authorization checklist

- Is every tenant-owned table and object clearly identifiable?
- Does the server resolve an active membership from trusted storage?
- Are permissions defined by operation, with resource rules where needed?
- Are reads and writes scoped by trusted tenant and resource together?
- Do compound uniqueness and relations prevent cross-tenant associations?
- Are DTOs limited to fields the caller needs?
- Are search, cache, file, export, realtime, webhook, and worker paths scoped?
- Are membership removal and role changes reflected within an accepted time?
- Does an absent tenant context fail closed?
- If RLS is used, does the runtime role avoid owner, superuser, and `BYPASSRLS` privileges?
- Are RLS context and protected queries guaranteed to share one connection and transaction?
- Are audit records useful without leaking sensitive content?
- Do two-tenant negative tests cover reads, writes, nested operations, and background work?
- Can an authorized operator investigate repeated denials and repair configuration safely?

## When not to rely on this pattern

Application filters alone are a poor fit when many independent tools connect directly to the database and cannot share the same authorization contract. A database-per-tenant or schema-per-tenant model may provide a clearer isolation and operational boundary, at the cost of migrations, connection management, reporting, and fleet operations.

RLS is also a poor fit when the team cannot control runtime roles, connection context, pooler behaviour, migration ownership, or acceptance tests. In that case, a partially configured policy can create false confidence. Start with explicit server authorization and tenant-aware schema constraints, then add RLS only when the complete operational boundary can be proven.

High-assurance financial, health, government, or regulated workloads need security, privacy, legal, and operational specialists. This article is an engineering design guide, not a compliance certification.

## Is filtering every Prisma query by tenantId enough?

Tenant filters are necessary but not sufficient. The server must also verify active membership and operation permission, the data model should enforce tenant-aware relations and uniqueness, indirect access paths must remain scoped, and negative tests must prove that hostile cross-tenant identifiers fail.

## Should a Prisma application use PostgreSQL row-level security?

Use PostgreSQL row-level security when the team can set and reset trusted tenant context per transaction, connect through a role that does not bypass policies, test every access path, and operate migrations and background jobs without silently weakening the boundary.

## How should cross-tenant access failures respond?

For tenant-owned records, a not-found response often avoids confirming that another tenant's identifier exists. Log the denied attempt with safe identifiers for authorized operators, but do not expose record details, policy internals, credentials, or sensitive query data.

## Connect the authorization boundary to delivery

The [SaaS product engineering service](/services/saas-product-engineering) treats authorization, data ownership, verification, deployment, and handover as part of the product rather than late hardening. The [Reusable B2C Marketplace Platform case study](/work/reusable-b2c-marketplace-platform) provides a relevant planned boundary across buyers, catalog operations, checkout, orders, and administration without claiming a production launch.

Read [how to scope a production-ready SaaS MVP](/blog/how-to-scope-production-ready-saas-mvp) before fixing the first release boundary, and [designing retry-safe Stripe webhooks](/blog/retry-safe-stripe-webhooks-nextjs) for a related example of durable, idempotent system design. If you need to review an existing tenant model or permission boundary, [book a free product consultation](/hire#consultation) or [send a project brief](/hire#project-brief).

## Sources and further reading

- [OWASP Top 10: Broken Access Control](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)
- [Next.js authentication and authorization guide](https://nextjs.org/docs/app/guides/authentication)
- [PostgreSQL row security policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [PostgreSQL CREATE POLICY reference](https://www.postgresql.org/docs/current/sql-createpolicy.html)
- [Prisma compound IDs and unique constraints](https://www.prisma.io/docs/orm/prisma-client/special-fields-and-types/working-with-composite-ids-and-constraints)
- [Prisma Client Extensions](https://www.prisma.io/docs/orm/prisma-client/client-extensions)
- [Prisma transactions](https://www.prisma.io/docs/orm/prisma-client/queries/transactions)

