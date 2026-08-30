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
Product Engineer` and `product development from idea to launch`. It remains the
canonical conversion surface, with `/hire#consultation` for a free 30-minute fit
conversation and `/hire#project-brief` for a qualified written enquiry.
`/services` targets software product engineering, AI product engineering, and
IoT/connected product prototyping.
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
The five equal core products are AI Dropshipping Commerce Platform, OTask,
OTask Mail Server, Underwater Monitoring R&D, and Reusable B2C Marketplace
Platform. The
documentation-only EEE Simulator foundation and Local LLM Workflows are
separate Lab & Experiments records. EEE Simulator may receive a visible
`Highlighted Lab` treatment for discovery, but that label is not a core,
flagship, finished-runtime, or validated-simulator claim. Public source links,
visible maturity, role, constraints, and lifecycle evidence are stronger than
keyword repetition or a flagship badge.

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
  client-fit guide on `/hire`;
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
permanent redirect to `/hire`. The live redirect, sitemap removal, structured
data, and validation outcome are recorded in the current snapshot below; keep
the stored legacy report under validation instead of requesting indexing for
the retired URL.

The public crawl and submission surface was rechecked through July 29, 2026:

- `/` and `/hire` return indexable `200` responses with exact self-canonicals;
- `/resume` returns a permanent `308` to `/hire` and is absent from the
  30-URL sitemap;
- `robots.txt` allows public routes, blocks `/api/`, and advertises the sitemap;
- the rendered homepage and `/hire` ProfilePage objects both contain an explicit
  `Person` `mainEntity` with `name`;
- search workflow run `#20` successfully submitted the sitemap to Google and
  Bing;
- hardened run `#23` migrated the prior cache state into a durable artifact;
  and
- run `#24` restored and refreshed that artifact while correctly skipping the
  legacy fallback, build, and provider calls for unchanged content.

The authenticated Search Console review through July 29 added current dashboard
evidence:

- the sitemap status is `Success`, with 30 discovered pages and July 27
  submitted and last-read dates;
- URL Inspection reports `/hire` as indexed, HTTPS, and carrying one valid
  Profile item;
- the July 24 Page indexing snapshot reports 23 indexed and five excluded URLs;
- `/opengraph-image` is the expected generated-image
  crawled-but-not-indexed example and its validation started July 25;
- the two canonical-host redirects are expected; and
- `/projects` and `/lab` are historical 404 examples that now redirect
  permanently to `/work`; their validation started July 28.

The stale `/resume` Profile page validation started July 27. Google's stored
result still shows the legacy issue, but a July 28 live test followed the
redirect, selected `/hire` as canonical, and found one valid Profile item. Do
not request indexing for `/resume`. The two newly published roadmap articles
both passed live URL inspection and received **Indexing requested**
confirmations by July 29. A crawl-queue request is not an indexing guarantee.
Keep the historical 27-discovered-page snapshot above dated rather than
replacing it silently.

Bing AI Performance reported zero citations and zero cited pages for the
three-month window ending July 10. Bing also reported that site data was still
being processed. Treat this as the initial AEO measurement baseline, not as a
conclusion about content quality or future citation eligibility.

## Owner-controlled search actions

1. Inspect the homepage, `/hire`, service pages, five core case studies, and
   priority articles for indexing.
2. Confirm the canonical host redirects: HTTP to HTTPS and `www` to the chosen
   apex domain, or the reverse if deployment policy changes.
3. Test changed structured data with Google's Rich Results Test and Schema.org
   validator before starting a Search Console validation request; also confirm
   `/resume` returns a permanent redirect without indexable profile markup.
4. Test Open Graph output on LinkedIn's post inspector.
5. Verify the consultation CTA, Calendly fallback, and project brief without
   adding a second indexable booking route.
6. Monitor the deployed Vercel Web Analytics and Speed Insights integrations.
   Both features, production intake paths, and dashboards are accepted. The
   July 29 Web Analytics snapshot showed 6 visitors, 12 page views, and route
   data for `/`, `/hire`, and `/work`; Speed Insights acceptance on July 27
   showed RES 100 after exit-triggered processing. Keep `/privacy` synchronized
   and personal enquiry or booking data out of URLs and analytics events.

## Automated search-console updates

The scheduled `search-indexing.yml` workflow checks every day so a pending
content change is handled at the first eligible run. It submits
`https://ariful.io/sitemap.xml` only when the fingerprint of `content/site.ts`
or a published blog article differs from the last successful submission. A
rolling 24-hour gate suppresses repeat submissions, and unchanged content
produces no submission. The newest unexpired branch-scoped artifact restores
validated state across runs; the former cache is only a migration fallback, and
valid state is re-uploaded on every run to refresh retention.

Pushes that change the workflow, search scripts, Node pin, or package manifests
run the same guarded job on `dev` for immediate implementation acceptance; they
do not bypass content-change or interval decisions.

Node is pinned from `.nvmrc`. Before a provider call, an eligible run builds the
current application and requires exact URL-set parity between the built sitemap
and production. Missing, duplicate, or unexpected URLs fail the run, malformed
state fails closed, and a new fingerprint is saved only after both providers
accept the sitemap. The publishing contract remains: submit only after
indexable content changes and no more than once in a rolling 24-hour period.

Google receives a sitemap submission through the Search Console API. Do not use
Google's Indexing API for normal portfolio pages; it is restricted to eligible
`JobPosting` and livestream `BroadcastEvent` pages. Bing receives the same
sitemap through the Webmaster `SubmitFeed` API. Provider credentials remain in
GitHub Actions secrets and never enter the application bundle.

## Content plan

The canonical query-ownership map, 130 strategic seed phrases, Tier-1 focus,
twelve-month article sequence, quality contract, linking model, and 28/56/90
day execution checkpoints live in
[SEO_CONTENT_ROADMAP.md](SEO_CONTENT_ROADMAP.md).

Publish two substantial, technically reviewed articles each month, not a batch
of thin search pages. The first two roadmap articles are published and their
July 29 indexing requests are tracked separately from sitemap submission:
“What an End-to-End Product Engineer Actually Owns” and “From Product Idea to
Launch: A Founder's Engineering Roadmap.” The AI dropshipping
architecture and human-approval articles remain the first commercial topic
cluster and must continue to link to the AI commerce case study and dedicated
service without elevating that product above the other three core products.

The Month 2 articles, “How to Scope a Production-Ready SaaS MVP Without
Overbuilding” and “Multi-Tenant Authorization with PostgreSQL and Prisma,” are
implemented locally as of July 29. They extend the SaaS cluster through first
release scope, tenant ownership, trusted authorization, database constraints,
failure handling, and negative isolation tests. Do not describe them as
deployed, inspected, submitted, or indexed until the corresponding production
and provider evidence exists.

Each article needs a specific query, an original evidence-backed point of view,
technical examples, honest maturity language, and a natural route to the
relevant service, case study, and /hire path.

## Authority building

- Keep GitHub profile, LinkedIn headline, and portfolio positioning consistent.
- Use the relevant `/hire` anchor as the broad direct-response link:
  `/hire#consultation` when a fit conversation is the next step and
  `/hire#project-brief` when enough context is available for a written enquiry.
  Use the AI commerce service, case study, or article when outreach is based on
  a commerce-specific signal.
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
- free consultation bookings, attendance, and qualified next actions;
- consultation-to-brief and consultation-to-paid-scope progression;
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
- After a major deployment: let the 24-hour-gated workflow submit the sitemap
  only when public content changed; use manual URL inspection only for an
  exceptional priority-page diagnosis.
