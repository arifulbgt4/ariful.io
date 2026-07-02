import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/content/site';

export const metadata: Metadata = {
  title: 'Software Engineering Services',
  description: 'SaaS product engineering, AI integration, backend API systems, and connected-product prototyping from Ariful Islam.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="page-shell">
      <div className="site-container">
        <p className="section-kicker">Services / Engineering partner</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">Product engineering scoped around an outcome.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Choose the closest starting point. The actual engagement is shaped around your users, current system, constraints, and business decision.</p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="surface-card flex flex-col p-6 sm:p-8">
              <p className="section-kicker">{service.eyebrow}</p>
              <h2 className="mt-4 text-2xl font-black text-white">{service.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-slate-400">{service.summary}</p>
              <Link href={`/services/${service.slug}`} className="mt-7 font-semibold text-cyan-200 hover:text-white">View service →</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
