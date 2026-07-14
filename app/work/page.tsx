import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { projects, siteConfig, type Project } from '@/content/site';

export const metadata: Metadata = {
  title: 'Product Engineering Case Studies & Lab Work',
  description:
    'Software, AI-enabled, and connected/IoT product engineering case studies by Ariful Islam, with explicit maturity, evidence, constraints, and client relevance.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Product Engineering Case Studies — Ariful Islam',
    description: 'Four core products plus a highlighted EEE Simulator Lab and supporting experiments, each presented at its verified maturity.',
    url: '/work',
  },
};

export default function WorkPage() {
  const coreProjects = projects.filter((project) => project.tier === 'core').sort(sortByOrder);
  const labProjects = projects.filter((project) => project.tier === 'lab').sort(sortByOrder);

  return (
    <main id="main-content" className="page-shell">
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Ariful Islam product engineering work',
            description: 'Evidence-led software, AI-enabled, and connected-product case studies and experiments.',
            url: `${siteConfig.url}/work`,
            about: { '@id': `${siteConfig.url}/#person` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Product engineering case studies and Lab work',
            itemListElement: projects
              .slice()
              .sort((a, b) => (a.tier === b.tier ? a.displayOrder - b.displayOrder : a.tier === 'core' ? -1 : 1))
              .map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: project.title,
                url: `${siteConfig.url}/work/${project.slug}`,
              })),
          },
        ]}
      />

      <div className="site-container">
        <header className="max-w-5xl">
          <p className="section-kicker">Work / Product evidence</p>
          <h1 className="mt-5 max-w-5xl text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
            Complete case studies. Honest product maturity.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Each page explains the user problem, owned scope, architecture, delivery state, public evidence, constraints, and next gate. A polished presentation never turns planned or in-progress work into a production claim.
          </p>
        </header>

        <section className="mt-16" aria-labelledby="core-products-heading">
          <div className="max-w-3xl">
            <p className="section-kicker">Core products / Equal weight</p>
            <h2 id="core-products-heading" className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Four product directions across software, AI, commerce, and connected systems.
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {coreProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>

        <section className="mt-20 border-t border-white/[0.07] pt-16" aria-labelledby="lab-heading">
          <div className="max-w-3xl">
            <p className="section-kicker">Lab / References and experiments</p>
            <h2 id="lab-heading" className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Research foundations, references, and focused experiments.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Lab work can document an ambitious engineering direction or test a focused tradeoff. It remains intentionally separated from end-to-end product case studies and carries its real maturity boundary.
            </p>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {labProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact={!project.highlighted} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
          <div>
            <p className="section-kicker">Have a product problem?</p>
            <h2 className="mt-3 text-2xl font-black text-white">Start with the outcome and current stage.</h2>
          </div>
          <Link href="/hire#consultation" className="button-primary mt-6 shrink-0 sm:mt-0">Book a free consultation ↗</Link>
        </section>
      </div>
    </main>
  );
}

function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article
      className={`surface-card flex min-h-full flex-col p-6 sm:p-8 ${
        project.highlighted
          ? 'border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.09),transparent_42%)] lg:col-span-2'
          : ''
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <span className="uppercase tracking-[0.14em] text-cyan-300/60">{project.category}</span>
          {project.highlighted ? (
            <span className="rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-3 py-1 font-semibold uppercase tracking-[0.12em] text-cyan-200">
              Highlighted Lab
            </span>
          ) : null}
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-slate-400">{project.maturity.label}</span>
      </div>
      <h3 className="mt-5 text-2xl font-black text-white">{project.title}</h3>
      <p className="mt-4 leading-7 text-slate-400">{project.summary}</p>
      {!compact ? (
        <div className="mt-6 rounded-xl border border-white/[0.07] bg-black/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Client outcome</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{project.buyerOutcome}</p>
        </div>
      ) : null}
      {project.highlighted ? (
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {project.highlights.slice(0, 4).map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.slice(0, compact ? 4 : 3).map((tag) => <span key={tag} className="skill-pill">{tag}</span>)}
      </div>
      <Link href={`/work/${project.slug}`} className="mt-7 font-semibold text-cyan-200 hover:text-white">Read case study →</Link>
    </article>
  );
}

function sortByOrder(a: Project, b: Project) {
  return a.displayOrder - b.displayOrder;
}
