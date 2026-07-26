# Deployment and Operations

## Recommended deployment

Use Vercel with the GitHub repository connected to the production project. A
Node-compatible Next.js host also works if it supports Route Handlers and image
generation.

The repository pins the intended deployment major in `package.json` and the
exact local/CI patch in `.nvmrc`. Keep the Vercel project's Node.js runtime on
the Node 20 line and let GitHub Actions verify the same build contract.

## Environment variables

Copy `.env.example` locally. Production values belong in the hosting provider's
encrypted environment settings, never in Git.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For form delivery | Server-only Resend API key |
| `CONTACT_TO_EMAIL` | Recommended | Inbox receiving project briefs |
| `CONTACT_FROM_EMAIL` | Recommended | Verified sender such as `Ariful.io <hello@ariful.io>` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Temporary/optional | Search Console HTML verification token |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Temporary/optional | Bing Webmaster Tools HTML verification token |

Verify the `ariful.io` sender domain in Resend before using a custom From address.
The default Resend onboarding sender is suitable only for initial account tests
under Resend's restrictions.

## Calendly consultation setup

The free product consultation uses the public event URL
`https://calendly.com/arifulbgt4/free-product-consultation`. It is public
configuration in `content/site.ts`, not an environment variable or secret. The
site uses a click-to-load direct iframe with an external-link fallback; it does
not need a Calendly API token, OAuth application, webhook, npm dependency, or
server route.

Configure the Calendly event as follows:

- event name: `Free product consultation`;
- one-to-one duration: 30 minutes;
- location: Google Meet through the connected calendar;
- invitee fields: Calendly's required name and email only, with custom
  questions and invitee-added guests disabled;
- minimum scheduling notice: 4 hours;
- buffer: none;
- meeting limit: no more than 4 consultations per day;
- booking date range: 30 days into the future; and
- cookie banner: enabled for the inline booking surface.

Availability hours and date-specific overrides remain owner-controlled Calendly
settings. Connect the calendar used to detect conflicts and receive bookings,
confirm the account timezone, and keep reschedule and cancellation links in the
provider notifications. The 30-minute call is for fit, goals, constraints, and
the next useful decision; do not configure its copy as free complete solution
design.

Current external acceptance status (verified 2026-07-27): the public event is
active and exposes 30-minute times in `Asia/Dhaka`. A controlled future booking
completed, generated host and invitee confirmations with a Google Meet location,
and was then cancelled successfully. The public scheduler retained its cookie
controls, and adjacent 30-minute slots showed no provider buffer. The
authenticated event editor confirmed Google Meet, a 4-hour minimum notice, no
buffer, and a host-wide limit of 4 meetings per day.

The same acceptance pass corrected the booking horizon from 60 to 30 calendar
days, removed the optional preparation question, and disabled invitee-added
guests. A fresh public check then exposed bookable dates only through August 25;
August 26–31 were unavailable, and the final booking form contained exactly the
required name and email fields.

The site-side click-to-load flow, external Calendly link, project brief, and
direct email are operational and remain required fallbacks. Recheck the
provider settings and complete booking lifecycle after material Calendly or
calendar changes; rescheduling was not repeated during this acceptance pass.

## Vercel Web Analytics and Speed Insights

The shared root layout loads `@vercel/analytics` and
`@vercel/speed-insights`. Neither integration uses an application analytics ID
or repository environment variable.

For the production Vercel project:

1. confirm **Analytics** and **Speed Insights** remain enabled for `ariful-io`
   (both were verified enabled on July 27, 2026);
2. confirm the deployment contains the root-layout integrations and that each
   injected `/<unique-path>/script.js` request succeeds; version 2 may generate
   a different randomized path for each deployment, so do not hard-code it;
3. with content blockers disabled, hard-load `/`, wait for the page to settle,
   interact once, then navigate away, background the tab, or close it;
4. confirm a successful request to the Analytics `/<unique-path>/view` intake
   and a successful `POST` to the Speed Insights `/<unique-path>/vitals`
   intake; and
5. use the correct Vercel project, environment, device, and time range, then
   verify the processed measurements in both dashboards.

Current production acceptance on July 27, 2026: both project features were
enabled, the deployed `@vercel/speed-insights@2.0.0` matched npm's `latest`
tag, and Vercel served the build-generated script and vitals routes. After a
real production hard navigation and page exit, **Production / Desktop / Last 7
Days** showed a **Real Experience Score of 100 (Great)** based on 10 data
points. Before that exit event was processed, the RES panel showed Vercel's
generic “No data available” package warning while FCP, LCP, INP, and FID cards
already contained measurements. That warning alone is therefore not proof of a
missing or outdated SDK. RES depends on FCP, LCP, INP, and CLS inputs; inspect
the individual metrics and intake request before changing code.

The privacy page already discloses both services. Keep personal or confidential
data out of URLs, query parameters, and future custom events. Automatic page
views do not prove that an enquiry was delivered or a Calendly booking was
completed.

### GitHub Actions search credentials

The 24-hour-gated search workflow uses repository Actions settings rather than
deployment environment variables:

- Secret `GOOGLE_SEARCH_CONSOLE_SERVICE_ACCOUNT_JSON`: the complete JSON for a
  Google Cloud service account with Search Console API access. Add its
  `client_email` as an owner or full user of the `ariful.io` Search Console
  property.
- Repository variable `GOOGLE_SEARCH_CONSOLE_SITE_URL`: use
  `sc-domain:ariful.io` for the domain property; the workflow defaults to that
  value when the variable is blank.
- Secret `BING_WEBMASTER_API_KEY`: an API key from the verified Bing Webmaster
  Tools account.

After adding the secrets, enable scheduled Actions on the default branch. The
workflow checks daily and normally submits only when indexed content changed
and at least 24 hours passed since the last successful run. Its prior state is
stored in an evictable Actions cache, so the 24-hour gate is best-effort. Run
it manually once after setup; later manual runs use the same change and interval
checks while that state remains available.

Current search-submission evidence (verified 2026-07-27): workflow run `#9`
successfully submitted the sitemap to Google Search Console and Bing on July
17. The latest reviewed run, `#19` on July 26, restored the previous state and
correctly skipped submission because no indexable content changed. The public
sitemap currently contains 28 canonical URLs.

The authenticated Search Console review on July 27 showed the sitemap as
`Success`, submitted July 17, last read July 21, with 28 discovered pages. URL
Inspection reported both `/` and `/hire` as indexed, HTTPS, and carrying one
valid Profile page item. The Page indexing snapshot, last updated July 10,
reported 23 indexed and 10 not indexed URLs: two expected canonical-host
redirects, five discovered but not yet indexed pages, the generated
`/opengraph-image`, and two retired collection URLs (`/projects` and `/lab`)
returning 404. Those retired URLs now have permanent `/work` redirects in the
repository and require deployment before validation.

The stale Profile page issue for `/resume` remained in Google's stored index,
but a fresh live test followed the current destination and detected a valid
Profile page item. **Validate fix** was started on July 27. No duplicate sitemap
submission or indexing request was made because the sitemap is healthy and the
indexed content fingerprint did not change.

## Pre-deployment

```bash
npm ci
npm run content:check
npm run portfolio:check
npm run seo:check
npm run search:check
npm run typecheck
npm run lint
npm run build
npm run production:check
```

Review the production diff, public URLs, environment target, and migration risk.
This repository currently has no database migration.

## Domain and redirects

- Use `https://ariful.io` as the canonical origin.
- Redirect HTTP to HTTPS.
- Redirect `www.ariful.io` to `ariful.io` unless the canonical policy is changed
  everywhere.
- Preserve old indexed paths with permanent redirects when renaming a route.
- Keep `/resume` as a permanent `308` redirect to `/hire`; do not restore it to
  the sitemap or navigation.
- Keep the retired `/work/graphql-todo-application` route as a permanent `308`
  redirect to `/work`; do not restore the project to content, navigation, or the
  sitemap.
- Keep the retired `/projects` and `/lab` collection routes as permanent `308`
  redirects to `/work`; after deployment, start validation for the two stale
  404 examples in Search Console.
- Do not change blog slugs after publication without a redirect.

## Launch smoke test

After deployment, verify:

- `/`, `/hire`, `/services`, one service, `/work`, all four core case studies,
  the highlighted EEE Simulator Lab case study, Local LLM Workflows, `/blog`,
  and one article;
- mobile menu and keyboard navigation;
- public repository, demo, LinkedIn, and email links;
- valid contact delivery and Reply-To behavior;
- direct-email fallback by observing a controlled provider/configuration failure;
- the `/hire#consultation` load action, inline Calendly scheduler, provider
  cookie banner, and external Calendly fallback;
- a real test consultation across another email and timezone, including Google
  Meet creation, host/invitee confirmation, reschedule, and cancellation;
- the 4-hour minimum notice, no-buffer schedule, four-per-day limit, and 30-day
  booking horizon;
- `/robots.txt`, `/sitemap.xml`, `/rss.xml`, `/manifest.webmanifest`, `/icon`, and
  `/opengraph-image`;
- canonical and Open Graph tags in rendered HTML;
- structured data validation;
- Vercel Web Analytics automatic page-view intake after a page load and a
  client-side route transition, plus dashboard visibility after processing;
- a Speed Insights script load and `POST` to the build-generated vitals route
  after the page is backgrounded or exited, plus an individual Web Vital and
  RES dashboard check without sending personal enquiry or booking data;
- `/resume`, `/projects`, `/lab`, and the retired GraphQL project route
  permanent redirects plus their absence from `/sitemap.xml`; and
- no client or server console errors.

The `production-watch.yml` workflow checks Vercel deployment-status failures,
repeats the public endpoint check every six hours, and can be started manually.
A failed deployment or smoke check creates a visible GitHub Actions failure;
inspect the Vercel deployment commit and logs before patching, then rerun the
full verification chain.

`npm run production:check` validates public HTTP outputs and redirects. It
cannot execute the client-side measurement SDKs, trigger their exit-time
intake, or inspect authenticated Vercel dashboards; those remain manual
production release gates.

If Vercel's dashboard shows `404` while the production origin still returns a
healthy response, do not create a duplicate project. Sign in to the Vercel
account/team that owns the GitHub-connected project and verify its deployment
settings there.

If Speed Insights shows no data, first inspect an individual metric rather than
only RES. Then hard-reload with content blockers disabled, trigger a page exit
or tab background, and confirm the generated script and `vitals` POST in the
browser Network panel. Allow for ingestion processing and recheck the project,
environment, device, and date filters. If a reverse proxy is introduced later,
it must forward both randomized measurement paths and the `/_vercel/*`
fallback routes to Vercel.

## Monitoring

At minimum configure:

- deployment failure notifications;
- uptime checks for homepage and contact endpoint availability;
- Resend delivery/bounce monitoring;
- Vercel Web Analytics route/referrer/device trends and Speed Insights Core Web
  Vitals, with `/privacy` kept synchronized;
- Calendly event availability, failed-booking reports, and consultation
  attendance as an external service health and lead-quality signal;
- Search Console coverage and Core Web Vitals.

Do not log contact message bodies or API keys. The contact route logs only a
provider failure status.

## Consultation incident response

If prospects cannot schedule:

1. open the public event URL directly and confirm that the event is active;
2. verify the connected calendar, Google Meet connection, availability,
   timezone, date overrides, daily limit, and event ownership;
3. test the inline iframe with privacy extensions enabled and disabled;
4. keep the external Calendly link, project brief, and direct email visible;
5. inspect browser errors before changing application security headers; and
6. complete and then cancel a controlled booking after the provider recovers.

Do not add a token, webhook, duplicate booking database, or weaker response
headers as an incident workaround.

## Contact incident response

If enquiries stop arriving:

1. submit a controlled test through production;
2. inspect the HTTP response and deployment logs;
3. check Resend domain verification, API key, quota, and delivery events;
4. confirm `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` in the production scope;
5. keep direct email visible while fixing delivery; and
6. retest Reply-To and a real inbox after the change.

## Rollback

Use the hosting provider's prior successful deployment or redeploy the last known
good commit. Do not remove new indexed routes during a temporary incident when a
route-level fix or rollback is sufficient.

## Quarterly maintenance

- update dependencies after reviewing release notes;
- run `npm audit` and assess, do not blindly force breaking upgrades;
- verify public profile facts, links, project status, and articles;
- test contact delivery;
- test consultation booking, Google Meet creation, cancellation, availability
  limits, and fallback links;
- review Search Console, Core Web Vitals, and lead quality; and
- archive or update stale claims.
