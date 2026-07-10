# Architecture

## System overview

Ariful.io is a Next.js App Router application. Most content is statically
rendered from typed site data and Markdown files. A single server endpoint sends
qualified contact enquiries through Resend.

```text
content/site.ts ───────────────┐
                              ├─> server-rendered pages ─> HTML + metadata
content/blog/*.md -> lib/blog ─┘             │
                                             ├─> sitemap / RSS / JSON-LD
contact form -> /api/contact -> validation ──┴─> Resend -> inbox

content fingerprint -> daily scheduled check -> seven-day gate
                                      └─> Google + Bing sitemap submission
```

## Runtime and dependencies

- Next.js 16 App Router
- React 19
- TypeScript in strict mode
- Tailwind CSS 3 plus shared component classes in `app/globals.css`
- `gray-matter` for Markdown frontmatter
- `react-markdown` and `remark-gfm` for safe React-based Markdown rendering

Node.js 20.9 or newer is required by the package manifest.

## Route map

| Route | Rendering | Purpose |
| --- | --- | --- |
| `/` | Static | Primary portfolio and conversion page |
| `/hire` | Static | Shareable client-fit, engagement, and evidence landing page |
| `/services` | Static | Service index |
| `/services/[slug]` | Static params | Search landing pages, deliverables, process, and FAQs |
| `/work` | Static | Case-study index |
| `/work/[slug]` | Static params | Honest project evidence and status |
| `/journal` | Static | Dated engineering decision and experiment index |
| `/journal/[slug]` | Static params | Typed journal entries with lifecycle transparency |
| `/blog` | Static | Engineering article index |
| `/blog/[slug]` | Static params | Markdown article with Article schema |
| `/privacy` | Static | Contact-data disclosure |
| `/resume` | Static | Recruiter-focused verified profile |
| `/site-map` | Static | Visitor-facing content discovery |
| `/api/contact` | Node Route Handler | Validates and emails project enquiries |
| `/robots.txt` | Generated | Crawler policy |
| `/sitemap.xml` | Generated | Indexable route discovery |
| `/rss.xml` | Static Route Handler | Blog syndication |
| `/manifest.webmanifest` | Generated | Site identity metadata |
| `/opengraph-image` | Generated image | Default social-share image |
| `/icon` | Generated image | Site icon |

## Content boundaries

`content/site.ts` is imported by server and client components, so it must contain
public serializable data only. Never place credentials, private repository
details, unpublished client names, or internal notes in that file.

`lib/blog.ts` is server-only because it reads files through Node's filesystem.
Blog pages and RSS/sitemap generation call that loader during build.

## Contact boundary

The browser sends JSON to `/api/contact`. The server:

1. applies an in-memory IP-based request limit;
2. accepts the honeypot silently;
3. normalizes and bounds every string;
4. validates the email and minimum brief length;
5. keeps the Resend API key on the server;
6. escapes all user content before HTML-email generation; and
7. returns a generic delivery failure without exposing provider details.

The in-memory rate limit is a low-cost abuse control, not a distributed security
boundary. A multi-instance, high-traffic deployment should use a shared store or
edge rate-limiting service.

## SEO boundary

Global defaults live in `app/layout.tsx`. Every indexable route must provide a
unique title, description, and canonical. Dynamic content pages generate route
metadata. Structured data is rendered through `components/JsonLd.tsx` with `<`
escaped before insertion.

## Deployment model

The recommended deployment is Vercel or another Node-compatible Next.js host.
Static content is generated at build time. The contact endpoint needs a Node
runtime and outbound HTTPS access to Resend.

## Search submission boundary

`scripts/submit-search-updates.mjs` fingerprints the public structured content
and published Markdown articles. The scheduled GitHub Actions workflow restores
the last successful fingerprint, does nothing when content is unchanged, and
keeps a changed fingerprint pending when the previous successful submission was
less than seven days ago. It records new state only after both Google Search
Console and Bing Webmaster Tools accept the sitemap.

This workflow submits the sitemap, not arbitrary pages through Google's
Indexing API. Google limits that API to eligible job-posting and livestream
pages, which this portfolio does not publish.
