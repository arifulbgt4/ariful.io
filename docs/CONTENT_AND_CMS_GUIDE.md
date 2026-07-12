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
    subject to the best-effort rolling seven-day state gate; otherwise it
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

Rounded public profile metrics should be updated only when crossing the displayed
threshold. Record the exact source and verification date in
`docs/PROJECT_CONTEXT.md`.

Changes to `content/site.ts` and published `content/blog/*.md` files are the
indexing trigger. Documentation, styling, tests, and application-only changes do
not trigger search-console submission. If multiple content changes happen in one
week, they are consolidated into the next eligible sitemap submission.

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
