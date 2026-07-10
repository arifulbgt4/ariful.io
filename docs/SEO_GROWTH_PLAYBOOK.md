# SEO and Growth Playbook

## Objective

Earn qualified discovery for Ariful Islam and the services he can credibly
deliver. Search traffic is useful only when it produces relevant conversations,
public-work review, professional connections, or repeat readership.

## Search architecture

### Identity intent

The homepage targets Ariful Islam, Engineer Arif, `arifulbgt4`, software engineer
in Bangladesh, and the combined SaaS/applied-AI/backend positioning.

Use `AI commerce` only for the AI Dropshipping Commerce Platform project, its
application domain, the evidence-backed service derived from that work, and
related articles. Do not present it as Ariful's technology stack or general
professional title.

### Commercial intent

The `/hire` route targets direct identity-plus-commercial intent such as hiring
Ariful for product engineering. Each `/services/[slug]` route targets one
service family:

- SaaS and web product engineering;
- AI commerce and dropshipping platform engineering;
- AI integration and workflow automation;
- backend, API, and realtime systems; and
- connected-product prototyping.

Do not create thin city/technology pages with nearly identical text. Add a new
landing page only when it serves a distinct audience and can carry useful,
specific content.

### Evidence intent

`/work/[slug]` routes establish entity and capability evidence. Public source and
live links are stronger than keyword repetition.

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
- custom 404 recovery; and
- honest project status to support trust and entity consistency.

Structured data improves machine understanding but does not guarantee a rich
result. Never add ratings, reviews, prices, or credentials that are not visibly
supported on the page.

## Answer-engine optimization

AI search and answer engines need the same evidence discipline as traditional
SEO, but they reward pages that are easy to quote, summarize, and trace back to
sources. The site now supports this through:

- a homepage quick-facts section with a concise profile summary;
- a visible evidence table covering role, location, availability, services,
  proof, and claim boundaries;
- source links to GitHub, LinkedIn, selected work, engineering articles, and the
  client-fit guide;
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

## Launch actions requiring owner access

1. Verify `https://ariful.io` in Google Search Console and Bing Webmaster Tools.
2. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` during the verification window.
3. Submit `https://ariful.io/sitemap.xml`.
4. Inspect the homepage, service pages, and first three articles for indexing.
5. Confirm the canonical host redirects: HTTP to HTTPS and `www` to the chosen
   apex domain, or the reverse if deployment policy changes.
6. Test structured data with Google's Rich Results Test and Schema.org validator.
7. Test Open Graph output on LinkedIn's post inspector.
8. Add privacy-respecting analytics and update `/privacy` before collection.

## Automated search-console updates

The scheduled `search-indexing.yml` workflow checks every day so a pending
content change is handled at the first eligible run. It submits
`https://ariful.io/sitemap.xml` only when the fingerprint of `content/site.ts`
or a published blog article differs from the last successful submission. A
rolling seven-day gate guarantees at most one successful Google/Bing submission
per week, and unchanged content produces no submission.

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
should be distributed as the first commercial topic cluster. Both link to the
flagship case study and the dedicated AI commerce service page.

Each article needs a specific query, unique point of view, technical examples,
and an honest route to a service or project.

## Authority building

- Keep GitHub profile, LinkedIn headline, and portfolio positioning consistent.
- Use `/hire` as the broad direct-response link and use the AI commerce service,
  case study, or article when outreach is based on a commerce-specific signal.
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
- article engagement and assisted enquiries; and
- Core Web Vitals by route template.

Do not optimize around raw traffic. A lower-volume service query that produces a
qualified project is more valuable than a broad tutorial query with no business
fit.

## Maintenance

- Quarterly: verify public URLs, project status, profile metrics, metadata, and
  contact delivery.
- After every route addition: confirm metadata, canonical, sitemap, internal
  linking, mobile layout, and schema.
- After a major deployment: let the weekly-gated workflow submit the sitemap
  only when public content changed; use manual URL inspection only for an
  exceptional priority-page diagnosis.
