# Roadmap

The foundational portfolio, five service pages, case studies, Markdown CMS,
contact API, SEO outputs, and operating documentation are implemented around
the `End-to-End Product Engineer for Software, AI & Connected/IoT Products`
positioning. The three product lanes, six-stage lifecycle, four equal core
products, separate Lab & Experiments tier, and `/hire#project-brief` conversion
path form the client-acquisition system. These next items require owner
credentials, production rollout, new evidence, or an explicit product decision.

## P0 — Launch configuration

- Verify an `ariful.io` sending domain in Resend.
- Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in production.
- Verify end-to-end contact delivery and Reply-To.
- Confirm canonical domain redirects and deploy.
- Verify the permanent `/resume` → `/hire` redirect, sitemap removal, and all
  navigation/service/work/article CTAs ending at `/hire#project-brief`.
- Validate the live homepage Person/ProfilePage graph with Rich Results Test and
  close the legacy `/resume` Search Console issue through validation or URL
  inspection.

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
  Commerce foundation, Otask delivery milestones, integrated pond validation
  for Underwater Monitoring R&D, and implementation evidence for the Reusable
  B2C Marketplace Platform before advancing any public maturity label.
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
