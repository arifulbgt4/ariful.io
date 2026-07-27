import type { Metadata } from 'next';
import Image from 'next/image';
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

  const ogImage = post.image ? { url: `${siteConfig.url}${post.image}`, alt: post.imageAlt || post.title, width: 1200, height: 630, type: 'image/svg+xml' as const } : undefined;

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
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      ...(post.image ? { images: [`${siteConfig.url}${post.image}`] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;
  const posts = getAllPosts();
  const postIndex = posts.findIndex((item) => item.slug === post.slug);
  const relatedPosts = posts.filter((item) => item.slug !== post.slug && item.tags.some((tag) => post.tags.includes(tag))).slice(0, 2);
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
      ...(post.image ? { image: `${siteConfig.url}${post.image}` } : {}),
      articleSection: post.category,
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
      jobTitle: 'End-to-End Product Engineer',
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
    ...(post.faqs.length > 0
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          },
        ]
      : []),
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
            <span>Published <time dateTime={post.date}>{formatDate(post.date)}</time></span>
            <span aria-hidden="true">·</span>
            <span>Last reviewed <time dateTime={post.updated || post.date}>{formatDate(post.updated || post.date)}</time></span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-6 sm:p-8" aria-labelledby="article-quick-answer">
          <p className="section-kicker">Quick answer</p>
          <h2 id="article-quick-answer" className="mt-3 text-2xl font-black text-white">The decision in brief</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{post.summary}</p>
          <div className="mt-7 grid gap-7 border-t border-white/[0.08] pt-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-cyan-200">Key takeaways</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {post.takeaways.map((takeaway) => <li key={takeaway} className="flex gap-3"><span aria-hidden="true" className="text-cyan-300">✓</span><span>{takeaway}</span></li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-cyan-200">Who this is for</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{post.audience}</p>
            </div>
          </div>
        </section>

        <AuthorCard />

        {post.image && post.imageAlt ? (
          <figure className="mx-auto mt-10 max-w-3xl">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1200}
              height={630}
              sizes="(min-width: 768px) 768px, calc(100vw - 2rem)"
              className="w-full rounded-2xl border border-white/[0.07]"
            />
          </figure>
        ) : null}

        <div className="prose-portfolio mx-auto mt-10 max-w-3xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>

        {relatedPosts.length ? <aside className="mx-auto mt-12 max-w-3xl"><h2 className="text-xl font-bold text-white">Related engineering articles</h2><div className="mt-5 grid gap-4">{relatedPosts.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="link-card"><span>{item.title}</span><span>→</span></Link>)}</div></aside> : null}

        <nav aria-label="Article navigation" className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {posts[postIndex - 1] ? <Link href={`/blog/${posts[postIndex - 1].slug}`} className="link-card">← Newer article</Link> : <span />}
          {posts[postIndex + 1] ? <Link href={`/blog/${posts[postIndex + 1].slug}`} className="link-card sm:justify-end">Older article →</Link> : null}
        </nav>

        <footer className="mx-auto mt-14 max-w-3xl rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-6 sm:p-8">
          <p className="section-kicker">Need this applied to your product?</p>
          <h2 className="mt-3 text-2xl font-black text-white">Turn the architecture into a working release.</h2>
          <p className="mt-3 leading-7 text-slate-400">Share the current system and the outcome you need. I will reply with fit, missing context, and a practical next step.</p>
          <Link href="/hire#consultation" className="button-primary mt-6">Book a free consultation ↗</Link>
        </footer>
      </article>
    </main>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date));
}
