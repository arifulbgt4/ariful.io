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
- invitee fields: Calendly's required name and email only;
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

Current external acceptance status (verified 2026-07-14): the public URL
responds, and the click-to-load iframe and cookie banner render, but Calendly
reports `This calendar is currently unavailable.` Enable or republish the event,
add future availability, and complete a real booking test before treating the
consultation path as operational. The project brief and direct-email paths remain
the live fallbacks until that provider-side check passes.

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
- `/resume` and the retired GraphQL project route permanent redirects plus their
  absence from `/sitemap.xml`; and
- no client or server console errors.

The `production-watch.yml` workflow checks Vercel deployment-status failures,
repeats the public endpoint check every six hours, and can be started manually.
A failed deployment or smoke check creates a visible GitHub Actions failure;
inspect the Vercel deployment commit and logs before patching, then rerun the
full verification chain.

If Vercel's dashboard shows `404` while the production origin still returns a
healthy response, do not create a duplicate project. Sign in to the Vercel
account/team that owns the GitHub-connected project and verify its deployment
settings there.

## Monitoring

At minimum configure:

- deployment failure notifications;
- uptime checks for homepage and contact endpoint availability;
- Resend delivery/bounce monitoring;
- privacy-respecting web analytics after updating `/privacy`; and
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
