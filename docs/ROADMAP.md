# Roadmap

The foundational portfolio, hire page, five service pages, case studies,
Markdown CMS, contact API, SEO outputs, and operating documentation are
implemented. The AI commerce case study, dedicated service page, and two-article
topic cluster form the primary client-hunting proof funnel. These next items
require owner credentials, new evidence, or an explicit product decision.

## P0 — Launch configuration

- Verify an `ariful.io` sending domain in Resend.
- Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in production.
- Verify end-to-end contact delivery and Reply-To.
- Confirm canonical domain redirects and deploy.
- Deploy the homepage and resume `ProfilePage.mainEntity` schema fixes, validate
  both live URLs with Rich Results Test, and start Search Console's validation
  flow.

Google Search Console domain verification, Bing property import, and the initial
shared sitemap submission were completed on July 10, 2026; current sitemap and
enhancement status was rechecked on July 11. The dated operational snapshot is
maintained in `SEO_GROWTH_PLAYBOOK.md`.

## P1 — SEO and AEO operations

- Replace the cache-only search-submission state with a durable mechanism so the
  rolling seven-day contract survives cache eviction.
- Confirm that the live deployment contains the changed indexable content before
  saving its fingerprint as successfully submitted, and pin Node in the search
  workflow.
- Normalize route-specific Open Graph and Twitter metadata, including a reliable
  social-image fallback for index, service, work, and image-free article pages.
- Show evidence-backed last-reviewed dates on materially updated articles and use
  those dates consistently in RSS and sitemap freshness signals.
- Review Bing AI Performance monthly and expand older technical articles with
  relevant primary sources and answer-focused sections where they help readers.
- Keep the scheduled Vercel production watch green for the homepage, resume,
  robots, sitemap, and RSS endpoints.

## P1 — Credibility upgrades

- Add two client-approved case studies with real constraints, Ariful's role,
  delivery details, and measurable outcomes.
- Add two specific testimonials with the client's name, role, company, and
  publication permission.
- Add current screenshots or short demos for public projects after visual review.
- Decide whether to publish commercial starting ranges or a paid discovery offer.

## P1 — Measurement

- Choose a privacy-respecting analytics provider.
- Update the privacy page before enabling it.
- Track contact submissions, email/LinkedIn/GitHub clicks, service CTA clicks,
  public-work clicks, and article-assisted enquiries.
- Add uptime and contact-delivery monitoring.

## P2 — Distribution

- Publish one evidence-rich article every two to four weeks.
- Repurpose each article into one LinkedIn post and one GitHub/profile update.
- Add relevant portfolio links to public repository descriptions and READMEs.
- Operate the targeted outreach cadence in `CLIENT_ACQUISITION_PLAYBOOK.md`.

## P2 — Optional product features

- Add a booking link only after Ariful chooses a scheduling provider and defines
  available meeting boundaries.
- Add downloadable capability material only when it stays synchronized with the
  site source of truth.
- Add a hosted CMS only when another editor needs it frequently enough to justify
  authentication, preview, audit, backup, and migration complexity.
