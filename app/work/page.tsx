import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/content/site';

export const metadata: Metadata = {
  title: 'Selected Software, AI & Connected-Product Work',
  description: 'Selected public projects, active product work, and connected-product research by software engineer Ariful Islam.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <main id="main-content" className="page-shell">
      <div className="site-container">
        <p className="section-kicker">Work / Case studies</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">Work shown with its real status and evidence.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Public repositories and deployments are linked where available. In-progress products and research remain explicitly labelled.</p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className={`surface-card flex flex-col p-6 sm:p-8 ${
                project.flagship ? 'md:col-span-2 border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.055] via-[#0B1018] to-blue-500/[0.04] lg:p-10' : ''
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="uppercase tracking-[0.14em] text-cyan-300/60">{project.category}</span>
                <div className="flex flex-wrap items-center gap-2">
                  {project.flagship ? <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 font-semibold text-cyan-200">Flagship build</span> : null}
                  <span className="text-slate-500">{project.year} · {project.status}</span>
                </div>
              </div>
              <h2 className={`mt-5 font-black text-white ${project.flagship ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{project.title}</h2>
              <p className={`mt-4 flex-1 text-slate-400 ${project.flagship ? 'max-w-4xl text-lg leading-8' : 'leading-7'}`}>{project.summary}</p>
              {project.flagship ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="text-cyan-300">✓</span>{highlight}</li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="skill-pill">{tag}</span>)}</div>
              <Link href={`/work/${project.slug}`} className="mt-7 font-semibold text-cyan-200 hover:text-white">{project.flagship ? 'Read flagship case study' : 'Read case study'} →</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
