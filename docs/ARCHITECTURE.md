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
/hire project brief -> /api/contact -> validation ─> Resend -> inbox
/hire consultation -> explicit visitor action -> Calendly iframe / external link
public route visit -> Vercel Web Analytics + Speed Insights -> aggregated dashboards

content fingerprint -> daily scheduled check -> 24-hour gate
                                      └─> Google + Bing sitemap submission
```

## Runtime and dependencies

- Next.js 16 App Router
- React 19
- TypeScript in strict mode
- Tailwind CSS 3 plus shared component classes in `app/globals.css`
- `gray-matter` for Markdown frontmatter
- `react-markdown` and `remark-gfm` for safe React-based Markdown rendering
- `@vercel/analytics` for automatic public-route page views
- `@vercel/speed-insights` for anonymous real-user performance measurements

Node.js 20.9 or newer is required by the package manifest.

## Route map

| Route | Rendering | Purpose |
| --- | --- | --- |
| `/` | Static | Product-engineering positioning, delivery model, and evidence entry page |
| `/hire` | Static | Sole on-site conversion surface with fit, proof, a Calendly `#consultation`, and the `#project-brief` form |
| `/services` | Static | End-to-End Product Engineering Services hub |
| `/services/[slug]` | Static params | Search landing pages, deliverables, process, and FAQs |
| `/work` | Static | Four equal core products plus a highlighted EEE Simulator research foundation and separate Lab experiments |
| `/work/[slug]` | Static params | Honest product evidence, lifecycle state, and client relevance |
| `/journal` | Static | Dated engineering decision and experiment index |
| `/journal/[slug]` | Static params | Typed journal entries with lifecycle transparency |
| `/blog` | Static | Engineering article index |
| `/blog/[slug]` | Static params | Markdown article with Article schema |
| `/privacy` | Static | Contact-data disclosure |
| `/resume` | Permanent redirect | Legacy URL redirected with `308` to `/hire` |
| `/projects`, `/lab` | Permanent redirects | Retired collection URLs redirected with `308` to `/work` |
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

It is also the canonical source for the shared positioning, three product lanes,
six delivery stages, service records, and project evidence. Project records
declare `core` or `lab` tier, target users, buyer outcome, maturity, lifecycle
states, constraints, public evidence, display order, and an evidence-supported
schema type. The optional `highlighted` treatment is reserved for a Lab record
and must not change the four-core hierarchy or imply a higher maturity stage.
Pages must not reconstruct these facts inside JSX.

`lib/blog.ts` is server-only because it reads files through Node's filesystem.
Blog pages and RSS/sitemap generation call that loader during build.

## Contact boundary

The browser sends the project brief from `/hire#project-brief` as JSON to
`/api/contact`. The payload includes name, work email, company/product,
optional product URL, product lane, current lifecycle stage, budget, timeline,
desired outcome/current-state brief, and a honeypot. The server:

1. applies an in-memory IP-based request limit;
2. accepts the honeypot silently;
3. normalizes and bounds every string and URL;
4. validates the email, minimum brief length, and known product-lane and
   lifecycle-stage values against allowlists;
5. keeps the Resend API key on the server;
6. escapes all user content before HTML-email generation; and
7. returns a generic delivery failure without exposing provider details.

The in-memory rate limit is a low-cost abuse control, not a distributed security
boundary. A multi-instance, high-traffic deployment should use a shared store or
edge rate-limiting service.

## Consultation boundary

The free product consultation is a public 30-minute Calendly event rendered on
`/hire#consultation`. Calendly is loaded only after an explicit visitor action,
using a direct inline iframe; a normal external Calendly link remains visible as
the failure and accessibility fallback. The Calendly cookie banner remains
enabled.

The integration uses only the public event URL recorded in `content/site.ts`.
It does not call the Calendly API, register OAuth, receive webhooks, add an npm
SDK, or expose a token. The application does not prefill or transfer project
brief data into Calendly. The provider form requests only the invitee name and
email; custom questions and invitee-added guests are disabled. Calendly also
processes the selected time, timezone, cookie, device, network, and other
scheduling or security metadata needed to provide the third-party service.

The iframe is a third-party processing and availability boundary. If it cannot
load, the project brief and direct email remain usable. The existing
`X-Frame-Options: DENY` response header protects Ariful.io from being framed by
other sites; it does not prevent Ariful.io from displaying the Calendly iframe.
No Content Security Policy is currently shipped. A future CSP must validate the
live embed in report-only mode and allow the exact required Calendly frame
origin before enforcement.

## SEO boundary

Global defaults live in `app/layout.tsx`. Every indexable route must provide a
unique title, description, and canonical. Dynamic content pages generate route
metadata. Structured data is rendered through `components/JsonLd.tsx` with `<`
escaped before insertion.

The homepage, `/hire`, `/services`, and `/work` share the canonical
“End-to-End Product Engineer for Software, AI & Connected/IoT Products” entity
narrative. `Person.jobTitle` uses `End-to-End Product Engineer`; visible content
retains the broader Software Engineer, multidisciplinary product builder, and
inventor context. The legacy `/resume` redirect is not indexable and must not
appear in the sitemap or site-navigation discovery surfaces.

## Measurement boundary

`app/layout.tsx` loads Vercel Web Analytics and Speed Insights once for the
shared application shell. Web Analytics records automatic page loads and
client-side route transitions; Speed Insights records anonymous Web Vitals and
supporting route, device, network, browser, operating-system, and country
context. Both integrations depend on the corresponding Vercel project features
being enabled and on a deployment made after enablement. They require no public
analytics ID or application environment variable.

Only public route and performance measurements are in scope. Do not send names,
email addresses, project-brief content, consultation or meeting details,
credentials, private identifiers, or confidential data through URLs, query
parameters, custom events, or analytics configuration. The current integration
does not emit custom conversion events and cannot prove a contact submission,
booking, attendance, or paid engagement.

## Deployment model

The recommended deployment is Vercel or another Node-compatible Next.js host.
Static content is generated at build time. The contact endpoint needs a Node
runtime and outbound HTTPS access to Resend. Consultation booking depends on
the public Calendly event, the connected Google calendar, and Google Meet, but
adds no application server runtime or credential.

## Search submission boundary

`scripts/submit-search-updates.mjs` fingerprints the public structured content
and published Markdown articles. The scheduled GitHub Actions workflow restores
the last successful fingerprint, does nothing when content is unchanged, and
keeps a changed fingerprint pending when the previous successful submission was
less than 24 hours ago. It records new state only after both Google Search
Console and Bing Webmaster Tools accept the sitemap.

This workflow submits the sitemap, not arbitrary pages through Google's
Indexing API. Google limits that API to eligible job-posting and livestream
pages, which this portfolio does not publish.
