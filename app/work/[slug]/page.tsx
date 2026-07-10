import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { journalEntries, projects, siteConfig } from '@/content/site';

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
  const relatedJournal = journalEntries.filter((entry) => entry.projectSlug === project.slug);

  return (
    <main id="main-content" className="page-shell">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': project.flagship ? 'SoftwareApplication' : 'CreativeWork',
        name: project.title,
        description: project.summary,
        url,
        creator: { '@id': `${siteConfig.url}/#person` },
        keywords: project.tags.join(', '),
        featureList: project.highlights,
        dateCreated: `${project.year.split('–')[0]}-01-01`,
        ...(project.flagship ? { applicationCategory: 'BusinessApplication', operatingSystem: 'Web' } : {}),
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
          {project.role ? (
            <div className="mt-8 inline-flex max-w-full flex-col gap-1 rounded-xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 sm:flex-row sm:items-center sm:gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">My role</span>
              <span className="text-sm font-semibold text-white">{project.role}</span>
            </div>
          ) : null}
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

        {project.systemMap ? (
          <section className="mx-auto mt-16 max-w-5xl">
            <p className="section-kicker">System architecture</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">A controlled path from supplier data to business decisions.</h2>
            <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] lg:grid-cols-4">
              {project.systemMap.map((node, index) => (
                <li key={node.title} className="relative bg-[#0B1018] p-6">
                  <span className="font-mono text-xs text-cyan-300/60">0{index + 1}</span>
                  <h3 className="mt-7 text-lg font-bold text-white">{node.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{node.description}</p>
                  {index < project.systemMap!.length - 1 ? <span aria-hidden="true" className="absolute -right-3 top-7 z-10 hidden h-6 w-6 place-items-center rounded-full border border-cyan-300/20 bg-[#0B1018] text-xs text-cyan-200 lg:grid">→</span> : null}
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {project.caseStudySections ? (
          <div className="mx-auto mt-20 max-w-5xl space-y-16">
            {project.caseStudySections.map((section, sectionIndex) => (
              <section key={section.title} className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                <div>
                  <p className="section-kicker">{section.eyebrow}</p>
                  <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">{section.title}</h2>
                  <p className="mt-5 leading-7 text-slate-400">{section.description}</p>
                </div>
                <ol className="grid gap-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={item} className="flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 text-sm leading-7 text-slate-300">
                      <span className="font-mono text-xs text-cyan-300/60">{String(sectionIndex + 1).padStart(2, '0')}.{itemIndex + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        ) : null}

        {project.clientApplications ? (
          <section className="mx-auto mt-20 max-w-5xl rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.055] via-[#0B1018] to-blue-500/[0.04] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <div>
                <p className="section-kicker">Client relevance</p>
                <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">What this build means for a commerce team.</h2>
                <p className="mt-5 leading-7 text-slate-400">This is not presented as a revenue or production-scale claim. It is engineering evidence for the platform, workflow, and operating problems I can help a client solve.</p>
                {project.relatedService ? (
                  <Link href={project.relatedService.href} className="button-primary mt-7">
                    Explore {project.relatedService.title} ↗
                  </Link>
                ) : null}
              </div>
              <ul className="grid gap-3">
                {project.clientApplications.map((application) => (
                  <li key={application} className="flex gap-3 rounded-xl border border-white/[0.07] bg-black/10 p-5 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {project.relatedArticles ? (
          <section className="mx-auto mt-12 max-w-5xl">
            <p className="section-kicker">Related engineering notes</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {project.relatedArticles.map((article) => (
                <Link key={article.href} href={article.href} className="link-card">
                  <span className="font-semibold leading-6 text-white">{article.title}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {relatedJournal.length ? (
          <section className="mx-auto mt-12 max-w-5xl">
            <p className="section-kicker">Related engineering journal</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {relatedJournal.map((entry) => (
                <Link key={entry.slug} href={`/journal/${entry.slug}`} className="link-card">
                  <span><span className="font-semibold leading-6 text-white">{entry.title}</span><span className="mt-1 block text-xs text-slate-500">{entry.date}</span></span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

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
