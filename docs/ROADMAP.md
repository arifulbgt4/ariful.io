# Roadmap

The foundational portfolio, six service pages, case studies, Markdown CMS,
contact API, SEO outputs, and operating documentation are implemented around
the `End-to-End Product Engineer for Software, AI & Connected/IoT Products`
positioning. The three product lanes, six-stage lifecycle, five equal core
products, separate Lab & Experiments tier, and `/hire#project-brief` conversion
path form the client-acquisition system. `/hire#consultation` adds an optional
free 30-minute Calendly fit call on the same conversion surface. These next
items require owner
credentials, production rollout, new evidence, or an explicit product decision.

## P0 — Launch configuration

- Verify an `ariful.io` sending domain in Resend.
- Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in production.
- Verify end-to-end contact delivery and Reply-To.
- Confirm canonical-domain consistency and deploy.
- Verify the removed `/resume` path returns `404`, stays outside the sitemap, and all
  navigation/service/work/article CTAs ending at the appropriate
  `/hire#consultation` or `/hire#project-brief` anchor.
- Maintain the accepted `Free product consultation` contract. A controlled
  booking, Google Meet confirmation, cancellation, 30-day public boundary,
  name/email-only form, disabled guest collection, 4-hour notice, no buffer,
  four-per-day limit, cookie controls, and site fallback flow passed on July 27,
  2026. Repeat reschedule and full lifecycle checks after material provider or
  connected-calendar changes.
- Monitor the legacy `/resume` Profile page validation until Google's stored
  result refreshes. The historical July 28 live test selected `/hire` as
  canonical and found one valid Profile item; do not request
  indexing for the retired `/resume` URL.

Google Search Console domain verification, Bing property import, and the initial
shared sitemap submission were completed on July 10, 2026; current sitemap and
enhancement status was rechecked on July 11. The dated operational snapshot is
maintained in `SEO_GROWTH_PLAYBOOK.md`.

The live crawl surface and provider dashboards were rechecked through July 29.
The public sitemap has 30 canonical URLs and Search Console reports it as
`Success`, submitted and last read on July 27. The July 24 indexing snapshot
contains 23 indexed and five excluded URLs: two expected canonical-host
alternate-host URLs, two retired 404 records whose validation started July 28, and the
expected generated `/opengraph-image` exclusion. `/hire` is indexed, HTTPS, and
has one valid Profile item. Both newly published roadmap articles passed live
URL inspection and were added to Google's priority crawl queue on July 29;
submission is not an indexing guarantee.

Search workflow reliability hardening is implemented: Node is pinned from
`.nvmrc`, the rolling 24-hour state is restored from a durable branch-scoped
artifact with a one-time legacy-cache fallback, malformed state fails closed,
and the deployed sitemap must exactly match the current production build before
Google/Bing submission state can be saved. Remote runs `#23` and `#24` accepted
the migration and steady-state paths respectively: `#23` migrated the cached
state into a durable artifact, and `#24` restored that artifact, skipped the
legacy fallback and unchanged-content provider calls, then refreshed retention.

## P1 — SEO and AEO operations

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
  removed `/resume` path, robots, sitemap, and RSS endpoints.

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
- Complete SMTP Server & Email Delivery Platform production acceptance on an authorized VM with
  public HTTPS, dedicated IP, PTR and forward DNS, inbound/outbound TCP 25,
  authoritative sender records, controlled remote-MX/DSN evidence, monitoring,
  and post-deployment observations before making a public-production or inbox
  placement claim.
- Keep EEE Simulator in the highlighted Lab tier at `Documentation foundation`
  until executable editor, solver, validation, and deployment evidence exists;
  do not interpret its detailed requirements, ADRs, catalog, or task plan as a
  working simulator.
- Decide whether to publish commercial starting ranges or a paid discovery offer.

## P1 — Measurement

- Use the accepted Vercel measurement baseline for trend review. Web Analytics
  production intake and dashboard visibility were accepted on July 29 with 6
  visitors, 12 page views, and route data for `/`, `/hire`, and `/work`;
  Speed Insights intake and processed Web Vitals were accepted on July 27.
- Track contact submissions, email/LinkedIn/GitHub clicks, service CTA clicks,
  public-work clicks, and article-assisted enquiries.
- Track consultation bookings, attendance, qualified next steps, and progression
  to a project brief or paid scope without sending invitee personal data to web
  analytics.
- Deploy and accept the implemented non-personal hire-flow custom events after
  upgrading the authenticated Vercel team from Hobby to Pro or higher. Inspect
  every event property for privacy before treating the dashboard as accepted;
  automatic page views must not be interpreted as completed form or booking
  events.
- Add uptime and contact-delivery monitoring.

## P2 — Distribution

- Execute the evidence-rich editorial sequence in SEO_CONTENT_ROADMAP.md;
  publish two substantial, technically reviewed articles per month rather than
  thin daily content.
- Repurpose each article into one LinkedIn post and one GitHub/profile update.
- Add relevant portfolio links to public repository descriptions and READMEs.
- Operate the targeted outreach cadence in `CLIENT_ACQUISITION_PLAYBOOK.md`.

## P2 — Optional product features
- Add downloadable capability material only when it stays synchronized with the
  site source of truth.
- Add a hosted CMS only when another editor needs it frequently enough to justify
  authentication, preview, audit, backup, and migration complexity.
