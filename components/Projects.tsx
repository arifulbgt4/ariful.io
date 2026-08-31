import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/content/site';

export default function Projects() {
  const coreProjects = projects
    .filter((project) => project.tier === 'core')
    .sort((a, b) => a.displayOrder - b.displayOrder);
  const highlightedLab = projects.find((project) => project.tier === 'lab' && project.highlighted);

  return (
    <section id="work" className="section-shell border-y border-white/[0.06] bg-[#090D14]">
      <div className="site-container">
        <SectionHeading
          eyebrow="Core products / Equal evidence"
          title="Five product directions, each shown at its real maturity."
          description="Every case study explains the buyer problem, owned scope, delivery evidence, limits, and next gate. A complete page never turns unfinished work into a completed product claim."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {coreProjects.map((project, index) => (
            <article key={project.slug} className="surface-card group flex min-h-full flex-col overflow-hidden">
              <div className="flex-1 border-b border-white/[0.07] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300/60">{project.category}</p>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{project.maturity.label}</span>
                </div>
                <h3 className="mt-5 text-3xl font-black tracking-tight text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.summary}</p>

                <div className="mt-6 rounded-xl border border-white/[0.07] bg-black/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Client outcome</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.buyerOutcome}</p>
                </div>

                <ul className="timeline-list mt-6 space-y-3">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="text-sm leading-6 text-slate-400">{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between gap-4 p-6 sm:px-8">
                <span className="text-xs uppercase tracking-[0.14em] text-slate-500">Product {String(index + 1).padStart(2, '0')}</span>
                <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 font-semibold text-cyan-200 group-hover:text-white">
                  View case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {highlightedLab ? (
          <article className="mt-8 overflow-hidden rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.1),transparent_42%),rgba(255,255,255,0.025)]">
            <div className="grid gap-px bg-white/[0.07] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="bg-[#0B1018]/95 p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-3 py-1 font-semibold uppercase tracking-[0.12em] text-cyan-200">
                    Highlighted Lab
                  </span>
                  <span className="uppercase tracking-[0.14em] text-slate-500">{highlightedLab.maturity.label}</span>
                </div>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-cyan-300/60">{highlightedLab.category}</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">{highlightedLab.title}</h3>
                <p className="mt-5 max-w-3xl leading-7 text-slate-400">{highlightedLab.summary}</p>
                <Link href={`/work/${highlightedLab.slug}`} className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-200 hover:text-white">
                  Explore the research foundation <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="bg-[#090D14]/95 p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Current evidence</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{highlightedLab.maturity.summary}</p>
                <ul className="timeline-list mt-6 space-y-3">
                  {highlightedLab.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="text-sm leading-6 text-slate-400">{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/work" className="button-secondary">View all work</Link>
          <a href="https://github.com/arifulbgt4?tab=repositories" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-400 hover:text-white">
            Browse public repositories ↗
          </a>
        </div>
      </div>
    </section>
  );
}
