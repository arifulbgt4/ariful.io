import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { journalEntries, siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Engineering Journal',
  description: 'Dated engineering decisions, experiments, limitations, and next steps from Ariful Islam across software, AI, commerce, IoT, and underwater R&D.',
  alternates: { canonical: '/journal' },
  openGraph: { title: 'Engineering Journal — Ariful Islam', description: 'Transparent engineering decisions, experiments, limitations, and next steps.', url: '/journal' },
};

export default function JournalPage() {
  return (
    <main id="main-content" className="page-shell">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Ariful Islam Engineering Journal', url: `${siteConfig.url}/journal`, hasPart: journalEntries.map((entry) => ({ '@type': 'CreativeWork', name: entry.title, url: `${siteConfig.url}/journal/${entry.slug}`, datePublished: entry.date })) }} />
      <div className="site-container">
        <p className="section-kicker">Engineering journal / Build log</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">Decisions, experiments, failures, and next steps.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">Short, dated records from active product and research work. Entries separate what was investigated, decided, learned, and still remains unverified.</p>
        <div className="mt-12 flex flex-wrap gap-2" aria-label="Topics represented">
          {Array.from(new Set(journalEntries.flatMap((entry) => entry.tags))).map((tag) => <span key={tag} className="skill-pill">{tag}</span>)}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {journalEntries.map((entry) => (
            <article key={entry.slug} className="surface-card flex flex-col p-6 sm:p-8">
              <div className="flex flex-wrap justify-between gap-3 text-xs text-slate-500"><time dateTime={entry.date}>{formatDate(entry.date)}</time><span>{entry.project}</span></div>
              <h2 className="mt-5 text-2xl font-black leading-tight text-white"><Link href={`/journal/${entry.slug}`} className="hover:text-cyan-200">{entry.title}</Link></h2>
              <p className="mt-4 flex-1 leading-7 text-slate-400">{entry.problem}</p>
              <Link href={`/journal/${entry.slug}`} className="mt-6 font-semibold text-cyan-200 hover:text-white">Read journal entry →</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

function formatDate(date: string) { return new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date)); }
