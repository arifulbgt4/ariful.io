import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { productLanes } from '@/content/site';

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Product lanes / What I can own"
            title="One delivery system across software, AI, and connected products."
            description="The product problem sets the tools. Each engagement connects the customer experience, system boundaries, evidence, launch, and handover around one outcome."
          />
          <Link href="/services" className="button-secondary shrink-0">Explore product engineering services</Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {productLanes.map((lane) => (
            <article key={lane.id} className="surface-card flex min-h-full flex-col p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300/60">{lane.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{lane.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{lane.summary}</p>
              <ul className="mt-6 space-y-3 border-t border-white/[0.07] pt-5">
                {lane.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
