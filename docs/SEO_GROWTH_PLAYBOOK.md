# SEO and Growth Playbook

## Objective

Earn qualified discovery for Ariful Islam and the services he can credibly
deliver. Search traffic is useful only when it produces relevant conversations,
public-work review, or repeat readership. The canonical entity narrative is
`End-to-End Product Engineer for Software, AI & Connected/IoT Products`, aimed
at international founders, product teams, and research teams.

## Search architecture

### Identity intent

The homepage targets Ariful Islam Product Engineer, end-to-end Product Engineer,
Bangladesh/remote Product Engineer, Engineer Arif, and `arifulbgt4`. Dhaka,
Bangladesh remains a secondary entity and trust fact rather than the main
commercial phrase. `Person.jobTitle` is `End-to-End Product Engineer`; visible
About and evidence content carries the broader Software Engineer,
multidisciplinary product builder, and inventor context.

Use `AI commerce` only for the AI Dropshipping Commerce Platform project, its
application domain, the evidence-backed service derived from that work, and
related articles. Do not present it as Ariful's technology stack or general
professional title.

### Commercial intent

The `/hire` route targets direct identity-plus-commercial intent such as `hire a
Product Engineer` and `product development from idea to launch`; its canonical
conversion target is `/hire#project-brief`. `/services` targets software product
engineering, AI product engineering, and IoT/connected product prototyping.
Each `/services/[slug]` route targets one outcome-led service family:

- software product engineering;
- AI commerce and dropshipping platform engineering;
- AI product integration and automation;
- backend, API, and realtime product systems; and
- connected/IoT product prototyping.

Do not create thin city/technology pages with nearly identical text. Add a new
landing page only when it serves a distinct audience and can carry useful,
specific content.

### Evidence intent

`/work/[slug]` routes establish domain-specific entity and capability evidence.
The four equal core products are AI Dropshipping Commerce Platform, Otask,
Underwater Monitoring R&D, and Reusable B2C Marketplace Platform. GraphQL Todo
Application and Local LLM Workflows are separate Lab & Experiments records.
Public source links, visible maturity, role, constraints, and lifecycle evidence
are stronger than keyword repetition or a flagship badge.

### Informational intent

Articles should answer realistic decisions made by target clients. Topic
clusters should link to the matching service and relevant work.

## Technical SEO implemented

- consistent `https://ariful.io` metadata base and canonicals;
- unique route titles and descriptions;
- index/follow crawler policy and generated sitemap;
- RSS feed;
- responsive semantic HTML and accessible navigation;
- generated Open Graph image and icon;
- Person, ProfilePage, ProfessionalService, WebSite, Service, FAQPage, ItemList,
  Blog, BlogPosting, SoftwareApplication, CreativeWork, and Breadcrumb structured
  data where appropriate;
- server-rendered content with minimal client JavaScript;
- internal links among home, services, work, articles, and contact;
- a permanent `/resume` → `/hire` redirect with the legacy route excluded from
  navigation and sitemap discovery;
- custom 404 recovery; and
- honest project status to support trust and entity consistency.

Structured data improves machine understanding but does not guarantee a rich
result. Never add ratings, reviews, prices, or credentials that are not visibly
supported on the page.

For Google's `ProfilePage` feature, `mainEntity` must resolve explicitly to a
`Person` or `Organization`. For this personal portfolio, keep every
`ProfilePage.mainEntity` typed as `Person` and include the visible name in that
object; an `@id`-only reference can be interpreted as an untyped object and
trigger a critical Search Console error.

## Answer-engine optimization

AI search and answer engines need the same evidence discipline as traditional
SEO, but they reward pages that are easy to quote, summarize, and trace back to
sources. The site supports this through:

- a homepage summary and FAQ with the three product lanes and six lifecycle
  stages expressed in concise, quotable language;
- a visible evidence table covering role, location, delivery ownership,
  specialist-partner boundaries, proof, and claim boundaries;
- source links to GitHub, LinkedIn, selected work, engineering articles, and the
  project-brief guide;
- homepage profile FAQ content mirrored by FAQPage structured data;
- visible author information on article pages;
- GFM table support in Markdown articles; and
- schema graph links between Person, ProfilePage, services, FAQs, source lists,
  articles, and case studies.

When adding or changing an indexable page, include a clear `h1`, descriptive
`h2` sections, a short summary near the top, source links for claims that can be
verified, and FAQ or table content only where it genuinely helps the reader.
Do not create FAQ entries, source links, or schema properties for facts that are
not visible on the page.

The visible end-to-end boundary must say that Ariful owns discovery,
architecture, software, integration, and validated connected-product
prototyping, while specialist PCB, certification, production engineering, and
manufacturing work is coordinated with qualified partners. Do not infer or
encode unsupported in-house manufacturing capability in copy or schema.

## Search operations baseline

The following account state was rechecked on July 11, 2026. It is an operational
snapshot, not a permanent indexing guarantee:

- the Google Search Console Domain property `sc-domain:ariful.io` was verified
  through DNS;
- `https://ariful.io/sitemap.xml` was submitted and read by Google on July 11,
  with `Success` status and 27 discovered pages;
- the verified Google property was imported into Bing Webmaster Tools;
- Bing reported one known sitemap, last submitted and crawled on July 11, with
  `Success` status, 27 discovered URLs, no warnings, and no errors;
- on July 10, eight priority URLs were accepted through Bing URL Submission.

Search Console's Profile page report showed one valid and one invalid item. The
invalid item was `/resume`, last crawled on July 10, with validation not started;
its critical issue was an invalid object type for `mainEntity`. Diagnosis also
found the same `@id`-only pattern on the deployed homepage, although that URL was
not listed in the invalid-item report. This is a dated historical finding: the
client-first information architecture retires the resume page through a
permanent redirect to `/hire`. After deployment, validate the homepage's
rendered Person/ProfilePage graph, verify the `/resume` redirect and sitemap
removal, then use Search Console validation or URL inspection to close the
legacy report.

Bing AI Performance reported zero citations and zero cited pages for the
three-month window ending July 10. Bing also reported that site data was still
being processed. Treat this as the initial AEO measurement baseline, not as a
conclusion about content quality or future citation eligibility.

## Owner-controlled search actions

1. Inspect the homepage, `/hire`, service pages, four core case studies, and
   priority articles for indexing.
2. Confirm the canonical host redirects: HTTP to HTTPS and `www` to the chosen
   apex domain, or the reverse if deployment policy changes.
3. Test changed structured data with Google's Rich Results Test and Schema.org
   validator before starting a Search Console validation request; also confirm
   `/resume` returns a permanent redirect without indexable profile markup.
4. Test Open Graph output on LinkedIn's post inspector.
5. Add privacy-respecting analytics and update `/privacy` before collection.

## Automated search-console updates

The scheduled `search-indexing.yml` workflow checks every day so a pending
content change is handled at the first eligible run. It submits
`https://ariful.io/sitemap.xml` only when the fingerprint of `content/site.ts`
or a published blog article differs from the last successful submission. A
rolling seven-day gate suppresses repeat submissions while the prior state is
available, and unchanged content produces no submission. The state currently
lives in an evictable GitHub Actions cache, so the gate is best-effort rather
than a permanent rate-limit guarantee.

The publishing contract remains: submit only after indexable content changes
and no more than once in a rolling seven-day period. The cache limitation is an
identified operational risk, not permission to submit unchanged content or
intentionally bypass the interval.

Google receives a sitemap submission through the Search Console API. Do not use
Google's Indexing API for normal portfolio pages; it is restricted to eligible
`JobPosting` and livestream `BroadcastEvent` pages. Bing receives the same
sitemap through the Webmaster `SubmitFeed` API. Provider credentials remain in
GitHub Actions secrets and never enter the application bundle.

## Content plan

Publish one substantial article every two to four weeks. Recommended sequence:

1. Stripe webhook idempotency in Next.js SaaS products;
2. multi-tenant authorization with PostgreSQL and Prisma;
3. an evaluation plan for RAG before production;
4. when an AI agent is worse than a deterministic workflow;
5. WebSocket command acknowledgement for IoT dashboards;
6. modernizing a Node.js backend without a rewrite;
7. architecture and delivery documentation for a founder handover; and
8. designing review-gated AI workflows for an international dropshipping platform.

The AI dropshipping architecture and human-approval articles are published and
can be distributed as the first commercial topic cluster. Both link to the AI
commerce case study and dedicated service page without elevating that product
above the other three core products in the portfolio hierarchy.

Each article needs a specific query, unique point of view, technical examples,
and an honest route to a service or project.

## Authority building

- Keep GitHub profile, LinkedIn headline, and portfolio positioning consistent.
- Use `/hire#project-brief` as the broad direct-response link and use the AI
  commerce service, case study, or article when outreach is based on a
  commerce-specific signal.
- Add the portfolio and relevant article links to public repository descriptions.
- Turn public project decisions into technical articles and short LinkedIn posts.
- Contribute useful fixes or documentation to relevant open-source projects.
- Seek podcast, community, and guest-post opportunities only where the audience
  matches the services.
- Ask a real client for a specific testimonial only after a successful outcome
  and with permission to publish.

## Measurement

Review monthly:

- indexed pages and crawl errors;
- non-branded impressions by service/topic cluster;
- qualified landing-page sessions;
- service-to-contact click rate;
- submitted briefs and lead quality;
- public-work outbound clicks;
- article engagement and assisted enquiries;
- Core Web Vitals by route template; and
- Bing AI Performance citations, cited pages, grounding queries, topics, and
  citation share once processing produces enough data.

For the repositioning rollout, record explicit checkpoints 28, 56, and 90 days
after production deployment. Compare Google Search Console query clusters for
identity, software products, AI-enabled products, and connected/IoT products;
qualified project briefs and their lane/stage fit; and Bing AI Performance
citations, cited pages, and grounding queries. Treat changes as directional
evidence rather than attribution proof when sample sizes are small.

Do not optimize around raw traffic. A lower-volume service query that produces a
qualified project is more valuable than a broad tutorial query with no business
fit.

## Maintenance

- Quarterly: verify public URLs, project maturity, profile metrics, metadata,
  specialist-partner wording, and contact delivery.
- Weekly: review Search Console and Bing messages for crawl, indexing, security,
  manual-action, and structured-data alerts; record only actionable site state.
- After every route addition: confirm metadata, canonical, sitemap, internal
  linking, mobile layout, and schema.
- After every schema change: validate the rendered production URL, not only the
  TypeScript source, and resolve critical Search Console errors before adding
  more schema features.
- After a major deployment: let the weekly-gated workflow submit the sitemap
  only when public content changed; use manual URL inspection only for an
  exceptional priority-page diagnosis.
