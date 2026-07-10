# AGENTS.md — Ariful.io

This file is the mandatory starting point for every AI agent working in this
repository.

## Mission

Build and maintain `ariful.io` as Ariful Islam's evidence-based client
acquisition portfolio. The site must make it easy for a qualified prospect to:

1. understand what Ariful can deliver;
2. verify public engineering evidence;
3. evaluate service fit and working style;
4. learn from useful technical content; and
5. send a well-qualified project enquiry.

The portfolio is a business system, not a visual demo. Prioritize credibility,
clarity, accessibility, performance, search discoverability, and conversion.

## Personal context inheritance

- Apply the safe durable user context and collaboration preferences from the
  global `~/.codex/AGENTS.md` in every task in this repository. Do not depend on
  memory recall alone for Ariful's core professional context.
- Position Ariful as a Software Engineer, multidisciplinary product builder,
  and inventor rather than limiting the current narrative to frontend,
  backend, or full-stack labels.
- When relevant, the broader portfolio narrative may connect software and AI
  with embedded electronics, sensors, mechanical/CAD work, automation,
  aquaculture technology, and the AI-enabled underwater/submarine R&D effort.
- Treat this personal context as direction for understanding and positioning,
  not as automatic permission to publish an unverified claim. Public content
  must still follow the evidence rules and repository sources of truth below.

## Read before changing code

Read these documents in order:

1. `docs/PROJECT_CONTEXT.md`
2. `docs/ARCHITECTURE.md`
3. `docs/DEVELOPMENT_GUIDE.md`
4. `docs/DESIGN_GUIDE.md`
5. `docs/CONTENT_AND_CMS_GUIDE.md`
6. `docs/SEO_GROWTH_PLAYBOOK.md`
7. `docs/DEPLOYMENT_OPERATIONS.md`

Use `docs/README.md` as the full documentation index.

## Source-of-truth map

- Personal, social, proof, service, project, domain, and process data:
  `content/site.ts`
- Blog content: `content/blog/*.md`
- Global SEO defaults and shared shell: `app/layout.tsx`
- Route-level SEO: each route's `metadata` or `generateMetadata`
- Search discovery: `app/sitemap.ts`, `app/robots.ts`, `app/rss.xml/route.ts`
- Contact delivery: `app/api/contact/route.ts` and `.env.example`
- Visual tokens and shared CSS classes: `app/globals.css` and
  `tailwind.config.js`

Do not duplicate business facts in a component when they can be imported from
`content/site.ts`.

## Non-negotiable content rules

- Never invent employers, education, client names, testimonials, revenue,
  performance gains, user counts, production status, or years of professional
  experience.
- Label concepts, experiments, active development, and R&D honestly.
- Keep private repositories, customer data, infrastructure, and credentials
  private.
- Public proof may link to Ariful's GitHub, LinkedIn, live deployments, and
  public repositories already recorded in `content/site.ts`.
- When a public metric changes, update the metric and record the verification
  date in `docs/PROJECT_CONTEXT.md`.
- AI-generated content must be technically reviewed before publication.

## Engineering rules

- Use TypeScript in strict mode and Next.js App Router conventions.
- Prefer server components. Add `'use client'` only for actual browser state or
  interaction.
- Keep secrets and provider calls in server-only modules or Route Handlers.
- Keep pages accessible without animation; respect reduced-motion preferences.
- Preserve semantic headings, keyboard focus, readable contrast, and 44px
  minimum interactive targets.
- Do not add an unauthenticated public CMS admin page. The Markdown workflow is
  intentionally Git-backed.
- A contact-form change must preserve server validation, the honeypot, rate
  limiting, safe HTML escaping, and the direct-email fallback.
- New indexable pages need unique metadata, canonical URLs, and sitemap entries.
- New blog posts are included automatically through the content loader.
- Search-console submission is content-driven: keep the scheduled workflow in
  `.github/workflows/search-indexing.yml` enabled. It must submit the sitemap to
  Google Search Console and Bing Webmaster Tools only after `content/site.ts` or
  a published `content/blog/*.md` article changes, and never more than once in
  any rolling seven-day period. Do not submit when the indexed content is
  unchanged.

## Required verification

For content-only changes:

```bash
npm run content:check
npm run lint
npm run build
```

For application changes:

```bash
npm run content:check
npm run typecheck
npm run lint
npm run build
```

For visual or interaction changes, also test the production or development site
at desktop and mobile widths. Check the homepage, one service page, one work
page, the blog index, one article, the mobile menu, the contact form's success
or fallback state, `/robots.txt`, `/sitemap.xml`, and `/rss.xml`.

## Definition of done

A change is complete only when code, content, metadata, documentation, and
verification are consistent. Report any required external configuration—such
as Resend, DNS, Search Console, or analytics—as an explicit deployment step.
