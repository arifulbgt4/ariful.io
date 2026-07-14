import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import {
  journalEntries,
  projects,
  siteConfig,
  type LifecycleState,
  type ProjectEvidence,
} from '@/content/site';

type WorkPageProps = { params: Promise<{ slug: string }> };

const lifecycleLabels: Record<LifecycleState, string> = {
  complete: 'Complete',
  'in-progress': 'In progress',
  planned: 'Planned',
};

const lifecycleStyles: Record<LifecycleState, string> = {
  complete: 'border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-200',
  'in-progress': 'border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-200',
  planned: 'border-white/10 bg-white/[0.025] text-slate-400',
};

function absoluteUrl(href: string) {
  return href.startsWith('http') ? href : `${siteConfig.url}${href}`;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const pageLabel = project.highlighted
    ? 'Highlighted Lab'
    : project.tier === 'core'
      ? 'Product Case Study'
      : 'Lab & Experiment';

  return {
    title: `${project.title} — ${pageLabel}`,
    description: project.buyerOutcome,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${pageLabel}`,
      description: project.buyerOutcome,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const url = `${siteConfig.url}/work/${project.slug}`;
  const relatedJournal = journalEntries.filter((entry) => entry.projectSlug === project.slug);
  const systemMap = project.systemMap ?? [];
  const caseStudySections = project.caseStudySections ?? [];
  const clientApplications = project.clientApplications ?? [];
  const relatedArticles = project.relatedArticles ?? [];
  const tierLabel = project.tier === 'core' ? 'Core product' : 'Lab & experiment';

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': project.schemaType,
      name: project.title,
      description: project.summary,
      url,
      mainEntityOfPage: url,
      creator: {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
      },
      audience: {
        '@type': 'Audience',
        audienceType: project.targetUsers,
      },
      keywords: project.tags.join(', '),
      ...(project.schemaType === 'SoftwareApplication'
        ? { applicationCategory: 'BusinessApplication', operatingSystem: 'Web' }
        : {}),
      subjectOf: project.evidence
        .filter((item) => item.href)
        .map((item) => ({
          '@type': 'WebPage',
          name: item.label,
          description: item.detail,
          url: absoluteUrl(item.href!),
        })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Work', item: `${siteConfig.url}/work` },
        { '@type': 'ListItem', position: 3, name: project.title, item: url },
      ],
    },
  ];

  return (
    <main id="main-content" className="page-shell">
      <JsonLd data={structuredData} />

      <article className="site-container">
        <header className="mx-auto max-w-5xl">
          <Link href="/work" className="section-kicker hover:text-cyan-200">
            ← All work
          </Link>
          <div className="mt-7 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-3 py-1 text-cyan-200">
              {tierLabel}
            </span>
            {project.highlighted ? (
              <span className="rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-3 py-1 font-semibold uppercase tracking-[0.12em] text-cyan-200">
                Highlighted Lab
              </span>
            ) : null}
            <span className="rounded-full border border-white/10 px-3 py-1 text-slate-400">{project.category}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-slate-400">{project.maturity.label}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-slate-400">{project.year}</span>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-300">{project.buyerOutcome}</p>
          <p className="mt-5 max-w-3xl leading-8 text-slate-500">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-primary">
                View live evidence ↗
              </a>
            ) : null}
            {project.repository ? (
              <a href={project.repository} target="_blank" rel="noreferrer" className="button-secondary">
                Review source ↗
              </a>
            ) : null}
          </div>
        </header>

        <section className="mx-auto mt-16 max-w-5xl" aria-labelledby="project-brief-heading">
          <p className="section-kicker">Project brief</p>
          <h2 id="project-brief-heading" className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            The product context, ownership, and current evidence.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <BriefCard label="Target users" value={project.targetUsers} />
            <BriefCard label="Intended buyer outcome" value={project.buyerOutcome} />
            <BriefCard label="Owned scope" value={project.role ?? 'Independent product exploration and engineering evidence.'} />
            <BriefCard label="Evidence status" value={project.maturity.summary} />
          </div>
        </section>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 lg:grid-cols-3">
          <CaseStudyBlock title="Problem" body={project.challenge} />
          <CaseStudyBlock title="Approach" body={project.approach} />
          <CaseStudyBlock title="Current outcome" body={project.outcome} />
        </div>

        <section className="mx-auto mt-20 max-w-5xl" aria-labelledby="lifecycle-heading">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div>
              <p className="section-kicker">Maturity & lifecycle</p>
              <h2 id="lifecycle-heading" className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
                What is complete, active, and still planned.
              </h2>
              <p className="mt-5 leading-7 text-slate-400">{project.maturity.summary}</p>
              {project.maturity.verifiedOn ? (
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-slate-500">
                  Evidence reviewed <time dateTime={project.maturity.verifiedOn}>{project.maturity.verifiedOn}</time>
                </p>
              ) : null}
            </div>
            <ol className="grid gap-4">
              {project.lifecycle.map((item, index) => (
                <li key={`${item.stage}-${index}`} className="surface-card p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-bold text-white">{item.stage}</h3>
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${lifecycleStyles[item.status]}`}>
                      {lifecycleLabels[item.status]}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.summary}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {systemMap.length ? (
          <section className="mx-auto mt-20 max-w-5xl" aria-labelledby="system-map-heading">
            <p className="section-kicker">System map</p>
            <h2 id="system-map-heading" className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              How the product boundary fits together.
            </h2>
            <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] lg:grid-cols-4">
              {systemMap.map((node, index) => (
                <li key={node.title} className="relative bg-[#0B1018] p-6">
                  <span className="font-mono text-xs text-cyan-300/60">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-7 text-lg font-bold text-white">{node.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{node.description}</p>
                  {index < systemMap.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute -right-3 top-7 z-10 hidden h-6 w-6 place-items-center rounded-full border border-cyan-300/20 bg-[#0B1018] text-xs text-cyan-200 lg:grid"
                    >
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        <section className="mx-auto mt-20 grid max-w-5xl gap-5 lg:grid-cols-2" aria-label="Project constraints and evidence">
          <div className="surface-card p-6 sm:p-8">
            <p className="section-kicker">Claim boundary</p>
            <h2 className="mt-4 text-2xl font-black text-white">Constraints and unresolved risks</h2>
            <ul className="mt-6 space-y-4">
              {project.constraints.map((constraint) => (
                <li key={constraint} className="flex gap-3 text-sm leading-7 text-slate-400">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                  {constraint}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <p className="section-kicker">Public evidence</p>
            <h2 className="mt-4 text-2xl font-black text-white">What supports this case study</h2>
            <div className="mt-6 space-y-5">
              {project.evidence.map((item) => (
                <article key={`${item.label}-${item.href ?? item.detail}`} className="border-b border-white/[0.07] pb-5 last:border-0 last:pb-0">
                  <h3 className="font-bold text-white">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
                    {item.verifiedOn ? (
                      <span className="text-slate-500">
                        Verified <time dateTime={item.verifiedOn}>{item.verifiedOn}</time>
                      </span>
                    ) : null}
                    {item.href ? <EvidenceLink evidence={item} /> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2" aria-label="Engineering highlights and technologies">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">Engineering highlights</h2>
            <ul className="mt-5 space-y-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-400">
                  <span className="text-cyan-300">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">Technology and domains</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="skill-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {caseStudySections.length ? (
          <div className="mx-auto mt-20 max-w-5xl space-y-16">
            {caseStudySections.map((section, sectionIndex) => (
              <section key={section.title} className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                <div>
                  <p className="section-kicker">{section.eyebrow}</p>
                  <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">{section.title}</h2>
                  <p className="mt-5 leading-7 text-slate-400">{section.description}</p>
                </div>
                <ol className="grid gap-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={item} className="flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 text-sm leading-7 text-slate-300">
                      <span className="font-mono text-xs text-cyan-300/60">
                        {String(sectionIndex + 1).padStart(2, '0')}.{itemIndex + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        ) : null}

        {clientApplications.length ? (
          <section className="mx-auto mt-20 max-w-5xl rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.055] via-[#0B1018] to-blue-500/[0.04] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <div>
                <p className="section-kicker">Client relevance</p>
                <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
                  What this evidence can support in a product engagement.
                </h2>
                <p className="mt-5 leading-7 text-slate-400">
                  These applications reflect demonstrated product reasoning and the stated maturity boundary—not an unsupported production or client-result claim.
                </p>
                {project.relatedService ? (
                  <Link href={project.relatedService.href} className="button-primary mt-7">
                    Explore {project.relatedService.title} ↗
                  </Link>
                ) : null}
              </div>
              <ul className="grid gap-3">
                {clientApplications.map((application) => (
                  <li key={application} className="flex gap-3 rounded-xl border border-white/[0.07] bg-black/10 p-5 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {relatedArticles.length ? (
          <section className="mx-auto mt-12 max-w-5xl">
            <p className="section-kicker">Related engineering notes</p>
            <h2 className="sr-only">Related engineering notes</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {relatedArticles.map((article) => (
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
            <h2 className="sr-only">Related engineering journal</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {relatedJournal.map((entry) => (
                <Link key={entry.slug} href={`/journal/${entry.slug}`} className="link-card">
                  <span>
                    <span className="font-semibold leading-6 text-white">{entry.title}</span>
                    <span className="mt-1 block text-xs text-slate-500">{entry.date}</span>
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
          <div>
            <p className="section-kicker">Have a related product problem?</p>
            <h2 className="mt-3 text-2xl font-black text-white">Define the smallest useful next step.</h2>
          </div>
          <div className="mt-6 flex shrink-0 flex-wrap gap-3 sm:mt-0">
            <Link href="/hire#consultation" className="button-primary">
              Book a free consultation ↗
            </Link>
            <Link href="/hire#project-brief" className="button-secondary">
              Send a project brief
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

function BriefCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="surface-card p-6 sm:p-7">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">{label}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-400">{value}</p>
    </div>
  );
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="surface-card p-6 sm:p-7">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-400">{body}</p>
    </section>
  );
}

function EvidenceLink({ evidence }: { evidence: ProjectEvidence }) {
  if (!evidence.href) return null;

  if (evidence.href.startsWith('http')) {
    return (
      <a href={evidence.href} target="_blank" rel="noreferrer" className="font-semibold text-cyan-200 hover:text-white">
        Open evidence ↗
      </a>
    );
  }

  return (
    <Link href={evidence.href} className="font-semibold text-cyan-200 hover:text-white">
      Open evidence →
    </Link>
  );
}
