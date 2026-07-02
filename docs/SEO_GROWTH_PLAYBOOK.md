# SEO and Growth Playbook

## Objective

Earn qualified discovery for Ariful Islam and the services he can credibly
deliver. Search traffic is useful only when it produces relevant conversations,
public-work review, professional connections, or repeat readership.

## Search architecture

### Identity intent

The homepage targets Ariful Islam, Engineer Arif, `arifulbgt4`, software engineer
in Bangladesh, and the combined SaaS/AI/backend positioning.

### Commercial intent

Each `/services/[slug]` route targets one service family:

- SaaS and web product engineering;
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
- Person, ProfessionalService, WebSite, Service, FAQPage, Blog, BlogPosting,
  CreativeWork, and Breadcrumb structured data where appropriate;
- server-rendered content with minimal client JavaScript;
- internal links among home, services, work, articles, and contact;
- custom 404 recovery; and
- honest project status to support trust and entity consistency.

Structured data improves machine understanding but does not guarantee a rich
result. Never add ratings, reviews, prices, or credentials that are not visibly
supported on the page.

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

## Content plan

Publish one substantial article every two to four weeks. Recommended sequence:

1. Stripe webhook idempotency in Next.js SaaS products;
2. multi-tenant authorization with PostgreSQL and Prisma;
3. an evaluation plan for RAG before production;
4. when an AI agent is worse than a deterministic workflow;
5. WebSocket command acknowledgement for IoT dashboards;
6. modernizing a Node.js backend without a rewrite;
7. architecture and delivery documentation for a founder handover; and
8. lessons from building a public Storybook/MUI design-system workflow.

Each article needs a specific query, unique point of view, technical examples,
and an honest route to a service or project.

## Authority building

- Keep GitHub profile, LinkedIn headline, and portfolio positioning consistent.
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
- After a major deployment: request indexing only for genuinely changed priority
  pages, not every URL.
