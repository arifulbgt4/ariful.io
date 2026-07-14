import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { deliveryLifecycle, productLanes, services, siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'End-to-End Product Engineering Services',
  description:
    'Product engineering services for software, AI-enabled, and connected/IoT products—from discovery and architecture through build, launch, and handover.',
  keywords: [
    'end-to-end product engineering services',
    'software product engineering',
    'AI product engineering',
    'connected product prototyping',
    'IoT product engineering',
    'product development from idea to launch',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'End-to-End Product Engineering Services',
    description:
      'Build software, AI-enabled, and connected/IoT products through one evidence-led delivery lifecycle.',
    url: '/services',
  },
};

export default function ServicesPage() {
  const servicesUrl = `${siteConfig.url}/services`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${servicesUrl}#page`,
      name: 'End-to-End Product Engineering Services',
      description:
        'Software, AI-enabled, and connected/IoT product engineering from discovery through launch and handover.',
      url: servicesUrl,
      inLanguage: 'en-US',
      isPartOf: { '@id': `${siteConfig.url}/#website` },
      about: productLanes.map((lane) => ({
        '@type': 'Thing',
        name: lane.title,
        description: lane.summary,
      })),
      mainEntity: {
        '@type': 'ItemList',
        name: 'Product engineering service entry points',
        numberOfItems: services.length,
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            '@id': `${siteConfig.url}/services/${service.slug}#service`,
            name: service.title,
            description: service.summary,
            url: `${siteConfig.url}/services/${service.slug}`,
            provider: { '@id': `${siteConfig.url}/#person` },
            areaServed: 'Worldwide',
            serviceType: service.title,
          },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: servicesUrl },
      ],
    },
  ];

  return (
    <main id="main-content" className="page-shell">
      <JsonLd data={structuredData} />
      <div className="site-container">
        <header className="max-w-5xl">
          <p className="section-kicker">Services / End-to-end delivery</p>
          <h1 className="mt-5 max-w-5xl text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
            End-to-end product engineering services.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
            Start with the product outcome and current stage. The engagement can connect discovery, architecture, experience, software, AI, device integration, verification, launch, and handover without forcing every project into the same shape.
          </p>
          <Link href="/hire#consultation" className="button-primary mt-8">
            Book a free consultation ↗
          </Link>
        </header>

        <section className="mt-20" aria-labelledby="product-lanes-heading">
          <p className="section-kicker">Three product lanes</p>
          <h2 id="product-lanes-heading" className="mt-4 max-w-3xl text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            Choose the product context before choosing a technology.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            A product can sit in one lane or cross several. The lane clarifies the operating problem, evidence, and specialist boundaries that shape delivery.
          </p>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {productLanes.map((lane) => (
              <article key={lane.id} className="surface-card p-6 sm:p-8">
                <p className="section-kicker">{lane.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-black text-white">{lane.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{lane.summary}</p>
                <ul className="mt-6 space-y-3 border-t border-white/[0.07] pt-5">
                  {lane.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span aria-hidden="true" className="text-cyan-300">→</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20" aria-labelledby="delivery-lifecycle-heading">
          <p className="section-kicker">One delivery lifecycle</p>
          <h2 id="delivery-lifecycle-heading" className="mt-4 max-w-3xl text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            Enter at the stage you need. Keep the product connected end to end.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            A focused engagement may cover only part of the lifecycle, but decisions are made with the next operating stage and handover in view.
          </p>
          <ol className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {deliveryLifecycle.map((stage) => (
              <li key={stage.id} className="bg-[#0B1018] p-6 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300/65">{stage.number}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{stage.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{stage.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20" aria-labelledby="service-entry-points-heading">
          <p className="section-kicker">Specialized entry points</p>
          <h2 id="service-entry-points-heading" className="mt-4 max-w-3xl text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            Select the closest service, then scope around the real outcome.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            Each service makes the likely fit, delivery coverage, outputs, and supporting evidence visible. It is a starting boundary—not a fixed package.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {services.map((service) => {
              const serviceLanes = productLanes.filter((lane) => service.productLanes.includes(lane.id));
              const coveredStages = deliveryLifecycle.filter((stage) => service.lifecycle.includes(stage.id));
              const leadEvidence = service.evidence?.[0];

              return (
                <article key={service.slug} className="surface-card flex flex-col p-6 sm:p-8">
                  <p className="section-kicker">{service.eyebrow}</p>
                  <h3 className="mt-4 text-2xl font-black text-white">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{service.summary}</p>

                  <div className="mt-7 grid gap-5 border-t border-white/[0.07] pt-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Product lanes</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{serviceLanes.map((lane) => lane.title).join(' · ')}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Lifecycle coverage</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {coveredStages[0]?.title} → {coveredStages.at(-1)?.title}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Likely outcomes</p>
                    <ul className="mt-3 space-y-2">
                      {service.deliverables.slice(0, 3).map((deliverable) => (
                        <li key={deliverable} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <span aria-hidden="true" className="text-cyan-300">✓</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {leadEvidence ? (
                    <p className="mt-6 border-l-2 border-cyan-300/30 pl-4 text-sm leading-6 text-slate-400">
                      <span className="font-semibold text-slate-200">Evidence:</span> {leadEvidence.title}
                    </p>
                  ) : null}

                  <Link href={`/services/${service.slug}`} className="mt-7 inline-flex font-semibold text-cyan-200 hover:text-white">
                    Review fit, outputs, and evidence →
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-20 rounded-2xl border border-cyan-300/10 bg-gradient-to-r from-cyan-300/[0.05] to-blue-400/[0.05] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
          <div>
            <p className="section-kicker">Project brief</p>
            <h2 className="mt-3 text-2xl font-black text-white">Describe the outcome, stage, constraint, and decision ahead.</h2>
            <p className="mt-2 max-w-2xl text-slate-400">The right service boundary can be confirmed after the current product context is clear.</p>
          </div>
          <Link href="/hire#project-brief" className="button-primary mt-6 shrink-0 sm:mt-0">
            Send your project brief ↗
          </Link>
        </section>
      </div>
    </main>
  );
}
