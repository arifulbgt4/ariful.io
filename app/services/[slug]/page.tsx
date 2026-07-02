import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { services, siteConfig } from '@/content/site';

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
    keywords: service.technologies,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.summary, url: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const serviceUrl = `${siteConfig.url}/services/${service.slug}`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.summary,
      url: serviceUrl,
      provider: { '@id': `${siteConfig.url}/#person` },
      areaServed: 'Worldwide',
      serviceType: service.title,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
        { '@type': 'ListItem', position: 3, name: service.title, item: serviceUrl },
      ],
    },
  ];

  return (
    <main id="main-content" className="page-shell">
      <JsonLd data={structuredData} />
      <div className="site-container">
        <header className="max-w-5xl">
          <Link href="/services" className="section-kicker hover:text-cyan-200">← All services</Link>
          <p className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300/60">{service.eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-400">{service.summary}</p>
          <Link href="/#contact" className="button-primary mt-8">Discuss your project ↗</Link>
        </header>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="h-fit rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-6 sm:p-8">
            <p className="section-kicker">Best fit</p>
            <p className="mt-4 leading-7 text-slate-300">{service.idealFor}</p>
            <div className="mt-6 flex flex-wrap gap-2">{service.technologies.map((technology) => <span key={technology} className="skill-pill">{technology}</span>)}</div>
          </aside>

          <div className="space-y-10">
            <section>
              <h2 className="text-3xl font-black text-white">What the engagement can include</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="surface-card flex gap-3 p-5 text-sm leading-6 text-slate-300"><span className="text-cyan-300">✓</span>{deliverable}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white">How the work moves</h2>
              <ol className="mt-6 space-y-3">
                {service.process.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                    <span className="font-mono text-sm text-cyan-300/60">0{index + 1}</span>
                    <p className="text-sm leading-6 text-slate-300">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white">Common questions</h2>
              <div className="mt-6 divide-y divide-white/[0.07] rounded-2xl border border-white/[0.07] bg-[#0B1018] px-6">
                {service.faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="cursor-pointer list-none pr-6 font-bold text-white marker:hidden">{faq.question}<span className="float-right text-cyan-300 group-open:rotate-45">+</span></summary>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section className="mt-16 rounded-2xl border border-cyan-300/10 bg-gradient-to-r from-cyan-300/[0.05] to-blue-400/[0.05] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
          <div>
            <p className="section-kicker">Next step</p>
            <h2 className="mt-3 text-2xl font-black text-white">Start with the problem, not a fixed solution.</h2>
            <p className="mt-2 text-slate-400">Send the current context, desired outcome, timeline, and budget range.</p>
          </div>
          <Link href="/#contact" className="button-primary mt-6 shrink-0 sm:mt-0">Send a project brief ↗</Link>
        </section>
      </div>
    </main>
  );
}
