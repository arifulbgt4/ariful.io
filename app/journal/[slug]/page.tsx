import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { journalEntries, siteConfig } from '@/content/site';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return journalEntries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = journalEntries.find((item) => item.slug === slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.problem, alternates: { canonical: `/journal/${entry.slug}` }, openGraph: { type: 'article', title: entry.title, description: entry.problem, url: `/journal/${entry.slug}`, publishedTime: entry.date } };
}

export default async function JournalEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = journalEntries.find((item) => item.slug === slug);
  if (!entry) notFound();
  const index = journalEntries.findIndex((item) => item.slug === entry.slug);
  const newer = journalEntries[index - 1];
  const older = journalEntries[index + 1];
  const url = `${siteConfig.url}/journal/${entry.slug}`;
  return (
    <main id="main-content" className="page-shell">
      <JsonLd data={[{ '@context': 'https://schema.org', '@type': 'TechArticle', headline: entry.title, description: entry.problem, datePublished: entry.date, dateModified: entry.date, url, mainEntityOfPage: url, author: { '@id': `${siteConfig.url}/#person` }, about: entry.tags }, { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url }, { '@type': 'ListItem', position: 2, name: 'Engineering Journal', item: `${siteConfig.url}/journal` }, { '@type': 'ListItem', position: 3, name: entry.title, item: url }] }]} />
      <article className="site-container">
        <header className="mx-auto max-w-4xl border-b border-white/[0.07] pb-10">
          <Link href="/journal" className="section-kicker hover:text-cyan-200">← Engineering journal</Link>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">{entry.title}</h1>
          <p className="mt-6 text-xl leading-9 text-slate-400">{entry.problem}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500"><time dateTime={entry.date}>{formatDate(entry.date)}</time><span>·</span><Link href={`/work/${entry.projectSlug}`} className="text-cyan-200 hover:text-white">{entry.project}</Link></div>
        </header>
        <div className="mx-auto mt-10 grid max-w-4xl gap-5">
          <TextSection title="Context" text={entry.context} />
          <ListSection title="Experiments and investigation" items={entry.experiments} />
          <ListSection title="Decisions" items={entry.decisions} />
          <TextSection title="Result and current status" text={entry.result} />
          <TextSection title="Failure or limitation" text={entry.limitation} />
          <ListSection title="Lessons learned" items={entry.lessons} />
          <TextSection title="Next step" text={entry.nextStep} />
        </div>
        <nav aria-label="Journal entry navigation" className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {newer ? <Link href={`/journal/${newer.slug}`} className="link-card">← Newer: {newer.title}</Link> : <span />}
          {older ? <Link href={`/journal/${older.slug}`} className="link-card sm:text-right">Older: {older.title} →</Link> : null}
        </nav>
      </article>
    </main>
  );
}
function TextSection({ title, text }: { title: string; text: string }) { return <section className="surface-card p-6 sm:p-8"><h2 className="text-xl font-bold text-white">{title}</h2><p className="mt-4 leading-8 text-slate-400">{text}</p></section>; }
function ListSection({ title, items }: { title: string; items: string[] }) { return <section className="surface-card p-6 sm:p-8"><h2 className="text-xl font-bold text-white">{title}</h2><ul className="mt-4 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 leading-7 text-slate-400"><span className="text-cyan-300">✓</span>{item}</li>)}</ul></section>; }
function formatDate(date: string) { return new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date)); }
