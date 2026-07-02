import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/content/site';

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="work" className="section-shell border-y border-white/[0.06] bg-[#090D14]">
      <div className="site-container">
        <SectionHeading
          eyebrow="Selected work / Evidence"
          title="Public builds, active products, and clearly labelled R&D."
          description="Each project page separates what was built, what is still in progress, and what can be verified publicly."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className={`surface-card group overflow-hidden ${
                project.flagship ? 'lg:col-span-2 border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.055] via-[#0B1018] to-blue-500/[0.045]' : ''
              }`}
            >
              <div className={`border-b border-white/[0.07] p-6 sm:p-8 ${project.flagship ? 'lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:p-10' : ''}`}>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300/60">{project.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.flagship ? <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 text-xs font-semibold text-cyan-200">Flagship build</span> : null}
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{project.status}</span>
                    </div>
                  </div>
                  <h3 className={`mt-5 font-black tracking-tight text-white ${project.flagship ? 'text-3xl sm:text-4xl' : 'text-3xl'}`}>{project.title}</h3>
                  <p className={`mt-4 leading-7 text-slate-400 ${project.flagship ? 'max-w-3xl text-base sm:text-lg sm:leading-8' : ''}`}>{project.summary}</p>
                </div>

                {project.flagship ? (
                  <div className="mt-8 rounded-2xl border border-white/[0.07] bg-black/10 p-5 lg:mt-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Platform scope</p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      {project.highlights.slice(0, 4).map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="flex items-center justify-between gap-4 p-6 sm:px-8">
                <div className="flex -space-x-2" aria-label={`${project.tags.length} technologies`}>
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      title={tag}
                      className="grid h-9 w-9 place-items-center rounded-full border border-[#161D29] bg-[#101620] text-[0.65rem] font-bold text-slate-300"
                    >
                      {tag.slice(0, 2).toUpperCase()}
                    </span>
                  ))}
                </div>
                <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 font-semibold text-cyan-200 group-hover:text-white">
                  {project.flagship ? 'Read flagship case study' : 'View case study'} <span aria-hidden="true">→</span>
                </Link>
              </div>
              <span className="sr-only">Project {index + 1}</span>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/work" className="button-secondary">View all work</Link>
          <a href="https://github.com/arifulbgt4?tab=repositories" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-400 hover:text-white">
            Browse 40+ public repositories ↗
          </a>
        </div>
      </div>
    </section>
  );
}
