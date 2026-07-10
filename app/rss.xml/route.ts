import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/content/site';
import { journalEntries } from '@/content/site';

export const dynamic = 'force-static';

export function GET() {
  const posts = getAllPosts();
  const items = [...posts.map((post) => ({ title: post.title, description: post.description, date: post.date, category: post.category, url: `/blog/${post.slug}` })), ...journalEntries.map((entry) => ({ title: entry.title, description: entry.problem, date: entry.date, category: 'Engineering Journal', url: `/journal/${entry.slug}` }))]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteConfig.url}${post.url}</link>
      <guid isPermaLink="true">${siteConfig.url}${post.url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
    </item>`,
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ariful Islam — Engineering Articles & Journal</title>
    <link>${siteConfig.url}</link>
    <description>Technical articles and dated engineering journal entries on software, AI, product engineering, and connected systems.</description>
    <language>en-us</language>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[character] || character);
}
