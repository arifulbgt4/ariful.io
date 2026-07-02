import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import JsonLd from '@/components/JsonLd';
import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Software, AI & Product Engineering Insights',
  description: 'Practical engineering notes from Ariful Islam about SaaS architecture, applied AI, backend systems, and connected-product prototyping.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Software, AI & Product Engineering Insights',
    description: 'Decision-focused engineering notes for teams building real products.',
    url: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main id="main-content" className="page-shell">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Ariful Islam — Engineering Insights',
          description: metadata.description,
          url: `${siteConfig.url}/blog`,
          author: { '@id': `${siteConfig.url}/#person` },
          blogPost: posts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `${siteConfig.url}/blog/${post.slug}`,
            datePublished: post.date,
          })),
        }}
      />
      <div className="site-container">
        <p className="section-kicker">Insights / Field notes</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">Useful engineering decisions, explained without the theatre.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Architecture, AI reliability, product delivery, and connected-system lessons written for founders and engineers making real tradeoffs.</p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </div>
    </main>
  );
}
