# Blog CMS

The blog is a Git-backed Markdown CMS. Each published post is one `.md` file in
this directory. No public admin route or database is required.

## Create a post

1. Copy a current post.
2. Rename it with a lowercase, hyphenated slug.
3. Update every required frontmatter field.
4. Write the body using Markdown.
5. Run `npm run content:check`, `npm run lint`, and `npm run build`.
6. Commit and deploy. The post, sitemap, RSS feed, and homepage insight list are
   updated automatically.

Required frontmatter:

```yaml
---
title: A specific, useful title
description: 140 to 160 characters describing the reader outcome.
date: 2026-07-02
updated: 2026-07-02
category: Engineering
tags: [Next.js, Architecture]
---
```

Do not publish confidential client details, private repository names, secrets,
unverified performance claims, or AI-generated text that has not been reviewed.
