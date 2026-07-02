# Deployment and Operations

## Recommended deployment

Use Vercel with the GitHub repository connected to the production project. A
Node-compatible Next.js host also works if it supports Route Handlers and image
generation.

## Environment variables

Copy `.env.example` locally. Production values belong in the hosting provider's
encrypted environment settings, never in Git.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For form delivery | Server-only Resend API key |
| `CONTACT_TO_EMAIL` | Recommended | Inbox receiving project briefs |
| `CONTACT_FROM_EMAIL` | Recommended | Verified sender such as `Ariful.io <hello@ariful.io>` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Temporary/optional | Search Console HTML verification token |

Verify the `ariful.io` sender domain in Resend before using a custom From address.
The default Resend onboarding sender is suitable only for initial account tests
under Resend's restrictions.

## Pre-deployment

```bash
npm ci
npm run content:check
npm run typecheck
npm run lint
npm run build
```

Review the production diff, public URLs, environment target, and migration risk.
This repository currently has no database migration.

## Domain and redirects

- Use `https://ariful.io` as the canonical origin.
- Redirect HTTP to HTTPS.
- Redirect `www.ariful.io` to `ariful.io` unless the canonical policy is changed
  everywhere.
- Preserve old indexed paths with permanent redirects when renaming a route.
- Do not change blog slugs after publication without a redirect.

## Launch smoke test

After deployment, verify:

- `/`, `/services`, one service, `/work`, one case study, `/blog`, and one article;
- mobile menu and keyboard navigation;
- public repository, demo, LinkedIn, and email links;
- valid contact delivery and Reply-To behavior;
- direct-email fallback by observing a controlled provider/configuration failure;
- `/robots.txt`, `/sitemap.xml`, `/rss.xml`, `/manifest.webmanifest`, `/icon`, and
  `/opengraph-image`;
- canonical and Open Graph tags in rendered HTML;
- structured data validation; and
- no client or server console errors.

## Monitoring

At minimum configure:

- deployment failure notifications;
- uptime checks for homepage and contact endpoint availability;
- Resend delivery/bounce monitoring;
- privacy-respecting web analytics after updating `/privacy`; and
- Search Console coverage and Core Web Vitals.

Do not log contact message bodies or API keys. The contact route logs only a
provider failure status.

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
- review Search Console, Core Web Vitals, and lead quality; and
- archive or update stale claims.
