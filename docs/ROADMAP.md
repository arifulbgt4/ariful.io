# Roadmap

The foundational portfolio, five service pages, case studies, Markdown CMS,
contact API, SEO outputs, and operating documentation are implemented around
the `End-to-End Product Engineer for Software, AI & Connected/IoT Products`
positioning. The three product lanes, six-stage lifecycle, four equal core
products, separate Lab & Experiments tier, and `/hire#project-brief` conversion
path form the client-acquisition system. `/hire#consultation` adds an optional
free 30-minute Calendly fit call on the same conversion surface. These next
items require owner
credentials, production rollout, new evidence, or an explicit product decision.

## P0 — Launch configuration

- Verify an `ariful.io` sending domain in Resend.
- Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in production.
- Verify end-to-end contact delivery and Reply-To.
- Confirm canonical domain redirects and deploy.
- Verify the permanent `/resume` → `/hire` redirect, sitemap removal, and all
  navigation/service/work/article CTAs ending at the appropriate
  `/hire#consultation` or `/hire#project-brief` anchor.
- Maintain the accepted `Free product consultation` contract. A controlled
  booking, Google Meet confirmation, cancellation, 30-day public boundary,
  name/email-only form, disabled guest collection, 4-hour notice, no buffer,
  four-per-day limit, cookie controls, and site fallback flow passed on July 27,
  2026. Repeat reschedule and full lifecycle checks after material provider or
  connected-calendar changes.
- Validate the live homepage Person/ProfilePage graph with Rich Results Test and
  close the legacy `/resume` Search Console issue through validation or URL
  inspection.

Google Search Console domain verification, Bing property import, and the initial
shared sitemap submission were completed on July 10, 2026; current sitemap and
enhancement status was rechecked on July 11. The dated operational snapshot is
maintained in `SEO_GROWTH_PLAYBOOK.md`.

The live crawl surface and workflow history were rechecked on July 27: the
public sitemap has 28 canonical URLs, `/resume` redirects permanently to
`/hire`, the rendered ProfilePage entities are valid, July 17 Google/Bing
submission succeeded, and the July 26 unchanged-content run skipped correctly.
The authenticated Search Console review confirmed 28 discovered sitemap pages,
23 indexed URLs, indexed and valid ProfilePage results for `/` and `/hire`, and
started validation of the stale `/resume` Profile page item. Deploy the new
`/projects` and `/lab` redirects before validating their two historical 404
examples.

## P1 — SEO and AEO operations

- Replace the cache-only search-submission state with a durable mechanism so the
  rolling 24-hour contract survives cache eviction.
- Confirm that the live deployment contains the changed indexable content before
  saving its fingerprint as successfully submitted, and pin Node in the search
  workflow.
- Normalize route-specific Open Graph and Twitter metadata, including a reliable
  social-image fallback for index, service, work, and image-free article pages.
- Show evidence-backed last-reviewed dates on materially updated articles and use
  those dates consistently in RSS and sitemap freshness signals.
- Review Bing AI Performance monthly and expand older technical articles with
  relevant primary sources and answer-focused sections where they help readers.
- Record 28-, 56-, and 90-day repositioning reviews across Search Console query
  clusters, qualified briefs by product lane/lifecycle stage, and Bing AI
  Performance citations, cited pages, and grounding queries.
- Keep the scheduled Vercel production watch green for the homepage, `/hire`,
  permanent `/resume` redirect, robots, sitemap, and RSS endpoints.

## P1 — Credibility upgrades

- Add two client-approved case studies with real constraints, Ariful's role,
  delivery details, and measurable outcomes.
- Add two specific testimonials with the client's name, role, company, and
  publication permission.
- Add current screenshots or short demos for public projects after visual review.
- Complete credentialed sandbox/production acceptance evidence for the AI
  Commerce foundation; advance OTask beyond the CI-validated P00–P02 and
  P03-001 through P03-005 foundation; complete integrated pond validation for
  Underwater Monitoring R&D; and add implementation evidence for the Reusable
  B2C Marketplace Platform before advancing any public maturity label.
- Keep EEE Simulator in the highlighted Lab tier at `Documentation foundation`
  until executable editor, solver, validation, and deployment evidence exists;
  do not interpret its detailed requirements, ADRs, catalog, or task plan as a
  working simulator.
- Decide whether to publish commercial starting ranges or a paid discovery offer.

## P1 — Measurement

- Deploy the installed root-layout Web Analytics integration and verify intake
  plus dashboard data. Web Analytics and Speed Insights were confirmed enabled,
  and the code and privacy disclosure were completed on July 27, 2026.
- Track contact submissions, email/LinkedIn/GitHub clicks, service CTA clicks,
  public-work clicks, and article-assisted enquiries.
- Track consultation bookings, attendance, qualified next steps, and progression
  to a project brief or paid scope without sending invitee personal data to web
  analytics.
- Decide whether non-personal custom conversion events are justified and
  supported by the Vercel plan; automatic page views must not be interpreted as
  completed form or booking events.
- Add uptime and contact-delivery monitoring.

## P2 — Distribution

- Publish one evidence-rich article every two to four weeks.
- Repurpose each article into one LinkedIn post and one GitHub/profile update.
- Add relevant portfolio links to public repository descriptions and READMEs.
- Operate the targeted outreach cadence in `CLIENT_ACQUISITION_PLAYBOOK.md`.

## P2 — Optional product features
- Add downloadable capability material only when it stays synchronized with the
  site source of truth.
- Add a hosted CMS only when another editor needs it frequently enough to justify
  authentication, preview, audit, backup, and migration complexity.
