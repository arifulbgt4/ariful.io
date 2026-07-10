import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import AuthorCard from '@/components/AuthorCard';
import JsonLd from '@/components/JsonLd';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { profileSummary, siteConfig } from '@/content/site';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [siteConfig.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      mainEntityOfPage: articleUrl,
      url: articleUrl,
      inLanguage: 'en-US',
      author: {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
      },
      publisher: {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
      },
      keywords: post.tags.join(', '),
      about: post.tags,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: siteConfig.brandName,
      url: siteConfig.url,
      jobTitle: 'Software Engineer and Product Builder',
      description: profileSummary.summary,
      sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Insights', item: `${siteConfig.url}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
      ],
    },
  ];

  return (
    <main id="main-content" className="page-shell">
      <JsonLd data={structuredData} />
      <article className="site-container">
        <header className="mx-auto max-w-4xl border-b border-white/[0.07] pb-10 text-center">
          <Link href="/blog" className="section-kicker hover:text-cyan-200">← All insights</Link>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">{post.title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">{post.description}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-500">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>
              By <Link href="/#about" rel="author" className="font-semibold text-cyan-200 hover:text-white">{siteConfig.name}</Link>
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <AuthorCard />

        <div className="prose-portfolio mx-auto mt-10 max-w-3xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>

        <footer className="mx-auto mt-14 max-w-3xl rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-6 sm:p-8">
          <p className="section-kicker">Need this applied to your product?</p>
          <h2 className="mt-3 text-2xl font-black text-white">Turn the architecture into a working release.</h2>
          <p className="mt-3 leading-7 text-slate-400">Share the current system and the outcome you need. I will reply with fit, missing context, and a practical next step.</p>
          <Link href="/#contact" className="button-primary mt-6">Discuss your project ↗</Link>
        </footer>
      </article>
    </main>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date));
}
