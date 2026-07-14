# Ariful.io

Ariful Islam's evidence-based client-acquisition portfolio for SaaS product
engineering, AI integration, backend systems, and connected-product prototyping.

The repository contains the public website, typed portfolio content, a Git-backed
Markdown blog CMS, a free Calendly consultation option, a qualified lead form,
technical SEO outputs, and complete operating documentation for human and AI
contributors.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS
- Markdown with `gray-matter`, `react-markdown`, and GFM
- Calendly direct iframe for optional 30-minute consultation booking
- Resend REST API for contact delivery

## Start locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Verify

```bash
npm run content:check
npm run portfolio:check
npm run seo:check
npm run typecheck
npm run lint
npm run build
npm run production:check
```

## Content management

- Profile, services, projects, skills, and proof: `content/site.ts`
- Published articles: `content/blog/*.md`
- Publishing instructions: `docs/CONTENT_AND_CMS_GUIDE.md`

Adding a Markdown post automatically updates the blog index, homepage insights,
static article route, sitemap, RSS feed, metadata, and Article structured data.

## Contact delivery

Set these server-side values in production:

```dotenv
RESEND_API_KEY=
CONTACT_TO_EMAIL=arifulbgt4@gmail.com
CONTACT_FROM_EMAIL="Ariful.io <hello@ariful.io>"
```

Without a key, the website remains buildable and provides a direct-email fallback.
See `docs/DEPLOYMENT_OPERATIONS.md` for sender verification and testing.

## Free product consultation

`/hire#consultation` offers an optional 30-minute Calendly call for prospects
who want to discuss fit, goals, constraints, and the next useful step before
deciding whether to hire Ariful. The scheduler loads only after an explicit
visitor action and retains a direct Calendly fallback. It uses the public event
URL in `content/site.ts` and needs no Calendly API token, OAuth application,
webhook, npm dependency, or environment variable.

The call does not include complete solution design. Ready prospects can instead
send a qualified brief at `/hire#project-brief`, and direct email remains
available when either provider path is unsuitable.

## Documentation

Every AI agent must start with [`AGENTS.md`](AGENTS.md). Humans can use the
[`docs/README.md`](docs/README.md) index for project context, architecture,
development, design, CMS, SEO, client acquisition, deployment, and roadmap.

## Public routes

- `/` — portfolio and lead funnel
- `/hire` — free consultation, client fit, engagement options, and project brief
- `/services` and `/services/[slug]` — commercial landing pages
- `/work` and `/work/[slug]` — project evidence
- `/blog` and `/blog/[slug]` — engineering articles
- `/privacy` — enquiry-data policy
- `/sitemap.xml`, `/robots.txt`, and `/rss.xml` — discovery feeds

## Deployment

Vercel is the recommended host. The canonical production origin is
`https://ariful.io`. Run the complete verification chain and the production smoke
test in `docs/DEPLOYMENT_OPERATIONS.md` before launch.
