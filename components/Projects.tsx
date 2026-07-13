import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/content/site';

export default function Projects() {
  const coreProjects = projects
    .filter((project) => project.tier === 'core')
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="work" className="section-shell border-y border-white/[0.06] bg-[#090D14]">
      <div className="site-container">
        <SectionHeading
          eyebrow="Core products / Equal evidence"
          title="Four product directions, each shown at its real maturity."
          description="Every case study explains the buyer problem, owned scope, delivery evidence, limits, and next gate. A complete page never turns unfinished work into a completed product claim."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
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

                <ul className="mt-6 grid gap-3">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {highlight}
                    </li>
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
