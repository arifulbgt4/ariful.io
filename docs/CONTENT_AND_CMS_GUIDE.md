# Content and CMS Guide

## CMS model

The site uses a Git-backed CMS:

- structured portfolio content in `content/site.ts`;
- structured Engineering Journal entries in `content/site.ts`;
- Markdown articles in `content/blog/*.md`;
- repository review as editorial approval; and
- deployment as publication.

This model is small, secure, versioned, portable, and sufficient for one owner.
It deliberately avoids a public admin login, database, vendor lock-in, and an
additional security boundary.

## Canonical portfolio narrative

The public identity is `End-to-End Product Engineer for Software, AI &
Connected/IoT Products`. Write for international founders, product teams, and
research teams in English. Dhaka, Bangladesh is a secondary trust fact; it is
not the headline. Technologies support the product narrative and must not
replace the buyer problem, outcome, lifecycle ownership, or evidence.

Use these three product lanes consistently:

- Software Products;
- AI-Enabled Products; and
- Connected/IoT Products.

Use these six lifecycle stages consistently: Discover; Scope & Architecture;
Design & Prototype; Build & Integrate; Verify & Launch; Handover & Iterate.
Connected-product copy may promise ownership of discovery, architecture,
software, integration, and validated prototyping. Qualify PCB design,
certification, production engineering, and manufacturing as specialist-partner
work unless new verified capability evidence is approved.

## Blog publishing workflow

1. Copy an existing Markdown post in `content/blog/`.
2. Use a descriptive lowercase filename with hyphens. The filename becomes the
   URL slug and should not change after indexing.
3. Complete the frontmatter:

```yaml
---
title: A specific reader outcome
description: A unique 140 to 160 character search description.
date: 2026-07-02
updated: 2026-07-02
category: Product Engineering
tags: [Next.js, SaaS, Architecture]
---
```

4. Write the article in Markdown. GFM tables, lists, links, blockquotes, inline
   code, and fenced code blocks are supported.
5. Link to relevant primary sources when making claims that can change.
6. Add one useful next step or service connection; do not turn every paragraph
   into a sales pitch.
7. Run `npm run content:check`, `npm run seo:check`, `npm run lint`, and the full
   build.
8. Review the rendered article on mobile and desktop.
9. Commit and deploy. The article index, homepage, sitemap, RSS, metadata, and
   Article JSON-LD update automatically.
10. The daily search-submission workflow detects the content fingerprint after
    publication. It submits the sitemap to Google and Bing when content changed,
    subject to the best-effort rolling 24-hour state gate; otherwise it
    performs no submission.

## Engineering Journal workflow

Add a complete `JournalEntry` to `journalEntries` in `content/site.ts`. Use a
stable slug and date, connect it to an existing project slug, and complete the
problem, context, experiments, decisions, result, limitation, lessons, and next
step fields. The journal index, detail route, project backlink, sitemap, RSS,
metadata, and structured data update from the same record. Never describe a
planned test as a completed experiment.

## Answer-friendly content checklist

For articles, service pages, and case studies, make the page easy for a person
or answer engine to understand without guessing:

- start with a direct summary of the reader outcome or project evidence;
- use specific `h2` headings that describe the decision, risk, or workflow;
- use Markdown tables when comparison, lifecycle state, or tradeoff information
  would otherwise become a long paragraph;
- link to public primary sources when making claims that can change;
- keep author and profile information visible through the shared article
  template;
- add FAQs only when they answer real buyer or implementation questions; and
- keep schema aligned with visible content instead of adding hidden claims.
- end the relevant buyer journey on the shared `/hire` conversion surface:
  `/hire#consultation` for a prospect who needs a fit conversation or
  `/hire#project-brief` for a prospect ready to provide qualified context;
  never invent a separate contact or resume conversion surface.

## Editorial voice

- Direct, technically grounded, and useful to a working team.
- Explain tradeoffs and failure modes, not only happy paths.
- Distinguish opinion, experience, public evidence, and inference.
- Prefer concrete nouns and verbs over marketing adjectives.
- Use English for public articles to reach the target international audience.
- Define specialized terms when the likely reader is a founder rather than an
  engineer.

## Evidence and confidentiality

Before publishing a project claim, answer:

- Is the source public or approved for disclosure?
- Does the wording distinguish built, planned, and researched work?
- Is a number reproducible and dated?
- Does the claim expose a client, private repository, credential, architecture,
  vulnerability, or personal data?
- Would a reasonable prospect interpret the statement more strongly than the
  evidence supports?

If the last answer is yes, narrow the claim.

## Portfolio record workflow

Edit `content/site.ts` for profile, service, work, social, skills, and proof
updates. Dynamic pages and navigation surfaces use those records. Keep public
URLs absolute and verify them before deployment.

The portfolio has four equal core products: AI Dropshipping Commerce Platform,
OTask, Underwater Monitoring R&D, and Reusable B2C Marketplace Platform. EEE
Simulator and Local LLM Workflows belong in `Lab & Experiments`. EEE Simulator
is the one highlighted Lab record; that visual discovery treatment must not
promote it to core, imply working software, or reduce the equal presentation of
the four core products. Do not use a flagship label or allow one core project
to receive an oversized editorial or visual treatment.

Every project record and case study must state target users, buyer outcome,
Ariful's role and owned scope, constraints, public evidence, client relevance,
and current maturity. Use the same lifecycle vocabulary and separate
`Delivered`, `Validated`, `In progress`, and `Planned`. A complete case-study
page is not proof that the underlying product is complete.

The current public maturity boundary is:

- AI Dropshipping Commerce Platform: operational foundation built;
  credentialed sandbox and production acceptance pending;
- OTask: GUI-first, local-first orchestration foundation in development; P00–P02
  and P03-001 through P03-005 have recorded six-job CI evidence, while P03-006
  SQLite persistence is active local, uncommitted work and is not yet remotely
  validated;
- Underwater Monitoring R&D: active R&D; integrated pond validation pending;
- Reusable B2C Marketplace Platform: architecture and product foundation
  planned;
- EEE Simulator: highlighted Lab documentation foundation only, with no
  application code, runtime, deployment, working simulator, or numerical
  validation evidence; and
- Local LLM Workflows: experiment.

Use an explicit evidence-supported schema type. Do not emit `dateCreated`
without a verified ISO date. Verify each public source or live URL before
publication; remove a broken link when no correct public destination can be
confirmed. When verified screenshots do not exist, use truthful architecture
maps, lifecycle tables, and evidence blocks instead of generated or fabricated
product UI.

Rounded public profile metrics should be updated only when crossing the displayed
threshold. Record the exact source and verification date in
`docs/PROJECT_CONTEXT.md`.

Changes to `content/site.ts` and published `content/blog/*.md` files are the
indexing trigger. Documentation, styling, tests, and application-only changes do
not trigger search-console submission. If multiple content changes happen within
24 hours, they are consolidated into the next eligible sitemap submission.

All service, work, article, navigation, and footer conversion copy must keep the
buyer on `/hire`. Use `/hire#consultation` when the promise is a free 30-minute
fit conversation and `/hire#project-brief` when asking for project details.
Direct email remains the fallback. `/resume` is a legacy URL that permanently
redirects to `/hire`; do not restore resume navigation, metadata, sitemap,
schema, or recruiter-first copy.

The public Calendly event URL, provider name, 30-minute duration, and
consultation wording belong in `content/site.ts` so UI, validation, and docs do
not drift. Do not put a Calendly token, calendar credential, invitee data, or
private availability note in public content. The event asks only for name and
email; deeper project context belongs in the project brief or the conversation.

## Topic selection

Prioritize articles that demonstrate the paid services:

1. a costly product or architecture decision;
2. a realistic implementation approach;
3. failure modes and verification;
4. a checklist a team can use immediately; and
5. a natural connection to a case study or service.

Avoid generic news summaries and high-volume AI content. One evidence-rich post
is worth more than several interchangeable posts.

## When to add a hosted CMS

Consider a hosted or authenticated CMS only when a non-technical editor publishes
frequently enough that Git is the actual bottleneck. Requirements must include
authentication, authorization, drafts, preview, audit history, backups, schema
validation, and a migration/export path.
