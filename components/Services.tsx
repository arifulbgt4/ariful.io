import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/content/site';

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Services / Where I help"
            title="Focused engineering for products that need to work."
            description="Engagements are shaped around an outcome, not a pile of disconnected tickets. I can own a defined build or work alongside your existing team."
          />
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Best fit: technically ambitious founders and small product teams with a real user problem, access to decision-makers, and room for disciplined delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="surface-card group flex min-h-full flex-col p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300/60">{service.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{service.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-400">{service.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.slice(0, 5).map((technology) => (
                  <span key={technology} className="skill-pill">{technology}</span>
                ))}
              </div>
              <Link href={`/services/${service.slug}`} className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-200 transition group-hover:text-white">
                Service details <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
