# Development Guide

## Prerequisites

- Node.js 20.9 or newer
- npm 10 or a version compatible with the installed Node release
- Git

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The site builds without contact credentials. Form delivery returns a controlled
configuration error and the interface offers direct email until Resend is set.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run dev:restart` | Stop the current port process and restart development |
| `npm run content:check` | Validate profile records and blog frontmatter/content |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm run lint` | Run Next.js and TypeScript ESLint rules |
| `npm run lint:fix` | Apply safe lint fixes |
| `npm run build` | Produce the production build |
| `npm run start` | Serve the production build |

## Change workflow

1. Read `AGENTS.md` and the relevant guide.
2. Check `git status` and preserve unrelated work.
3. Identify the source of truth before editing a component.
4. Make the smallest coherent vertical change across content, UI, SEO, and docs.
5. Run content validation, typecheck, lint, and build.
6. Test affected routes and interactions at desktop and mobile widths.
7. Review `git diff --check` and the final diff.

## Code conventions

- Prefer server components and data passed from server modules.
- Name components and exported types explicitly.
- Keep content records out of JSX when the value is reused by metadata, schema,
  sitemap, or another page.
- Use `next/link` for internal navigation and normal anchors for external links.
- External links opening a new tab need `rel="noreferrer"` or
  `rel="noopener noreferrer"`.
- Use semantic elements and one clear `h1` per route.
- Bound all untrusted input on the server. Client validation is usability, not a
  security control.
- Do not use `dangerouslySetInnerHTML` for user content. The only deliberate use
  is JSON-LD serialization through `components/JsonLd.tsx`.

## Adding a service

1. Add a complete record to `services` in `content/site.ts`.
2. Use a stable lowercase slug.
3. Include specific ideal-fit text, deliverables, process, technologies, and
   honest FAQs.
4. The service index, homepage cards, dynamic route, footer, JSON-LD, and sitemap
   update from the shared record.
5. Run the full verification chain.

## Adding a case study

1. Add a record to `projects` in `content/site.ts`.
2. Separate challenge, approach, and outcome/status.
3. Link only public evidence and check the URLs.
4. Set `featured: true` only when it should appear on the homepage.
5. Never turn a planned feature into a completed outcome.

## Contact testing

Without credentials, submit a valid brief and verify the direct-email fallback.
With a test Resend key and verified sender, verify:

- a valid message arrives and sets `reply_to` correctly;
- invalid email and short messages return `400`;
- the honeypot returns success without sending;
- repeated requests eventually return `429`; and
- provider failures do not expose API response bodies.

## Visual verification matrix

Minimum widths: 390px, 768px, 1280px, and 1440px.

Check:

- no horizontal overflow;
- navigation and mobile menu;
- heading wraps and CTA visibility;
- keyboard focus order;
- service, work, and blog card heights;
- article typography and code blocks;
- form labels, errors, and touch targets;
- reduced-motion behavior; and
- missing route recovery.
