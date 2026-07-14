# Portfolio SEO Implementation

Last audited: 2026-07-13

## Existing system and findings

The repository was already a strong static-first Next.js 16 App Router portfolio using React 19, strict TypeScript, Tailwind CSS, typed public records in `content/site.ts`, and Markdown articles loaded at build time. It included service and case-study routes, native metadata, JSON-LD, an XML sitemap, robots policy, RSS, generated social imagery, a custom 404, and a server-validated Resend contact form with a honeypot, bounded input, rate limiting, and safe escaping.

- Rendering: static pages and generated dynamic routes; Node runtime only for `/api/contact`.
- Images and fonts: `next/image` handles the GitHub avatar; generated images use Next.js; system fonts avoid third-party loading cost.
- Accessibility: skip link, semantic landmarks, focus styles, minimum control sizing, reduced-motion styles, labels, and keyboard-aware mobile navigation were present.
- Performance: mostly server components and static content; navigation and contact are the intentional client boundaries.
- The earlier audit identified missing Journal, visitor site map, detailed underwater R&D maturity, Bing verification, and security-header coverage. Those foundation items now exist; the current client-acquisition architecture replaces the former recruiter-first Resume surface with a qualified project brief.
- No confirmed duplicate route content was found. No test runner, Lighthouse runner, or broken-link package is configured; the available local gates are content validation, TypeScript, ESLint, build output, and route smoke tests.

## Implemented changes

- Added `/journal` and static `/journal/[slug]` entries with date, project, problem, context, experiments, decisions, result, limitation, lessons, next step, tags, previous/next navigation, JSON-LD, canonical metadata, and project backlinks.
- Repositioned the public site around end-to-end Product Engineering for software, AI-enabled, and connected/IoT products, with one `/hire` conversion surface containing an optional free consultation and qualified project brief.
- Retired the recruiter brief from discovery and changed legacy `/resume` requests to a permanent `308` redirect to `/hire`.
- Split portfolio work into four equal-priority core products and two Lab items:
  the highlighted, documentation-only EEE Simulator research foundation and the
  Local LLM Workflows experiment. Each record carries visible maturity,
  lifecycle, constraints, and evidence fields instead of a flagship hierarchy.
- Added `/site-map` for visitor discovery.
- Expanded underwater monitoring with explicit Researched, Designed, Prototyped, and Planned boundaries plus imaging, embedded, communication, mechanical, power, validation, and productization sections.
- Added Journal entries to sitemap and the combined RSS feed; connected case studies and journal entries; added related/previous/next article links.
- Added Bing verification configuration, conservative response security headers, and navigation/internal-link improvements.

## Architectural decisions

Journal entries are typed records in `content/site.ts`. The initial corpus is small and structured, so another Markdown loader would add maintenance without editorial benefit. If entries become long-form or numerous, migrate to `content/journal/*.md` behind a server-only loader while preserving slugs and the exported shape.

Articles remain Markdown because long prose, headings, code, tables, and references benefit from it. Public business facts remain in `content/site.ts`. The portfolio stays static-first and no public CMS was added. RSS intentionally combines articles and journal entries at the current content volume.

Security headers avoid an untested Content Security Policy. The free product
consultation uses a click-to-load direct Calendly iframe and external fallback,
without a provider script, API token, OAuth flow, webhook, or npm dependency.
Add CSP only after production reporting identifies every required script, image,
connection, style, and frame source; a future policy must validate the exact
Calendly frame origin before enforcement.

## Content maintenance

1. Edit profile, service, project, FAQ, capability, and journal records in `content/site.ts`.
2. Keep journal status reproducible; separate research, design, prototype, implementation, validation, and production.
3. Add articles under `content/blog/*.md` using `docs/CONTENT_AND_CMS_GUIDE.md`.
4. Keep indexed slugs stable and add permanent redirects before renaming routes.
5. Maintain a unique title, description, canonical, H1, evidence, internal links, and visible-text-aligned schema for every indexable page.
6. Keep consultation copy and links on `/hire#consultation`, qualified written
   enquiries on `/hire#project-brief`, and direct email as the shared fallback.
7. Run the full verification chain before deployment.

## Search-engine verification

After deployment:

1. Confirm `https://ariful.io` is canonical and HTTP/`www` redirect consistently.
2. Add a Google Search Console Domain property (DNS) or URL-prefix property. For HTML verification, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
3. Add Bing Webmaster Tools. Set `NEXT_PUBLIC_BING_SITE_VERIFICATION` for HTML meta verification, or import the verified Search Console property.
4. Deploy, inspect rendered verification tags, and complete ownership verification.
5. Submit `https://ariful.io/sitemap.xml` to both services.
6. Request indexing for the homepage, Hire, Services, core case studies, Journal, and strongest articles. Do not submit the redirected `/resume` URL.
7. Review crawl, canonical, schema, Core Web Vitals, and indexing reports monthly.
8. Yandex may use the same sitemap if relevant. Baidu is optional for a future China-market requirement.

IndexNow was not added: the current update volume does not justify a key endpoint and submission workflow. Bing sitemap submission is simpler.

## Manual setup and limitations

- Configure domain redirects, Resend variables, and verified sender ownership.
- Configure the public 30-minute Calendly event, connected Google calendar and
  Meet location, 4-hour minimum notice, no buffer, four-per-day limit, 30-day
  horizon, required name/email fields, and provider cookie banner; then test the
  complete booking, reschedule, and cancellation lifecycle.
- Connect privacy-conscious analytics only after selecting a provider and updating `/privacy`; placeholder variables load no tracking.
- Validate the deployed origin with Rich Results Test, Schema.org Validator, LinkedIn Post Inspector, and Lighthouse.
- No verified employment timeline, education record, testimonial, client result, or production metric was invented. The site is intentionally a client-acquisition portfolio rather than a recruiter resume.
- Underwater R&D has no published field dataset, integrated prototype result, or accuracy metric.
- Search Console, Bing, Resend, analytics, DNS, and production Lighthouse require owner-controlled accounts or a live origin.
