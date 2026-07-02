import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { projects, siteConfig } from '@/content/site';

type WorkPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} Case Study`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: `${project.title} — Case Study`, description: project.summary, url: `/work/${project.slug}` },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const url = `${siteConfig.url}/work/${project.slug}`;

  return (
    <main id="main-content" className="page-shell">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.summary,
        url,
        creator: { '@id': `${siteConfig.url}/#person` },
        keywords: project.tags.join(', '),
        dateCreated: `${project.year.split('–')[0]}-01-01`,
      }} />

      <article className="site-container">
        <header className="mx-auto max-w-5xl">
          <Link href="/work" className="section-kicker hover:text-cyan-200">← All work</Link>
          <div className="mt-7 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-3 py-1 text-cyan-200">{project.category}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-slate-400">{project.status}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-slate-400">{project.year}</span>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-400">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-primary">View live ↗</a> : null}
            {project.repository ? <a href={project.repository} target="_blank" rel="noreferrer" className="button-secondary">Source code ↗</a> : null}
          </div>
        </header>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 lg:grid-cols-3">
          <CaseStudyBlock title="Challenge" body={project.challenge} />
          <CaseStudyBlock title="Approach" body={project.approach} />
          <CaseStudyBlock title="Outcome & status" body={project.outcome} />
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">Engineering highlights</h2>
            <ul className="mt-5 space-y-3">
              {project.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="text-cyan-300">✓</span>{highlight}</li>)}
            </ul>
          </div>
          <div className="surface-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">Technology and domains</h2>
            <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="skill-pill">{tag}</span>)}</div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
          <div>
            <p className="section-kicker">Have a related problem?</p>
            <h2 className="mt-3 text-2xl font-black text-white">Let&apos;s define the smallest useful next step.</h2>
          </div>
          <Link href="/#contact" className="button-primary mt-6 shrink-0 sm:mt-0">Discuss your project ↗</Link>
        </div>
      </article>
    </main>
  );
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
  return <section className="surface-card p-6 sm:p-7"><h2 className="text-lg font-bold text-white">{title}</h2><p className="mt-4 text-sm leading-7 text-slate-400">{body}</p></section>;
}
