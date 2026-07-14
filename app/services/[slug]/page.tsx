import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { deliveryLifecycle, productLanes, services, siteConfig } from '@/content/site';

type ServicePageProps = { params: Promise<{ slug: string }> };

function absoluteUrl(href: string) {
  return href.startsWith('http') ? href : `${siteConfig.url}${href}`;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  const laneTitles = productLanes
    .filter((lane) => service.productLanes.includes(lane.id))
    .map((lane) => lane.title);

  return {
    title: service.title,
    description: service.summary,
    keywords: [service.title, ...laneTitles, 'end-to-end product engineering'],
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: 'website',
      title: service.title,
      description: service.summary,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const serviceUrl = `${siteConfig.url}/services/${service.slug}`;
  const serviceLanes = productLanes.filter((lane) => service.productLanes.includes(lane.id));
  const coveredStages = deliveryLifecycle.filter((stage) => service.lifecycle.includes(stage.id));
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${serviceUrl}#service`,
      name: service.title,
      description: service.summary,
      url: serviceUrl,
      mainEntityOfPage: serviceUrl,
      provider: {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
      },
      areaServed: 'Worldwide',
      serviceType: service.title,
      category: serviceLanes.map((lane) => lane.title),
      audience: {
        '@type': 'Audience',
        audienceType: service.idealFor,
      },
      serviceOutput: service.deliverables.map((deliverable) => ({
        '@type': 'Thing',
        name: deliverable,
      })),
      ...(service.evidence
        ? {
            subjectOf: service.evidence.map((item) => ({
              '@type': 'WebPage',
              name: item.title,
              description: item.description,
              url: absoluteUrl(item.href),
            })),
          }
        : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${serviceUrl}#faq`,
      name: `${service.title} questions`,
      url: `${serviceUrl}#common-questions`,
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
          <Link href="/services" className="section-kicker hover:text-cyan-200">
            ← All services
          </Link>
          <p className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300/60">{service.eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-400">{service.summary}</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
            Product lanes: {serviceLanes.map((lane) => lane.title).join(' · ')}
          </p>
          <Link href="/hire#consultation" className="button-primary mt-8">
            Book a free consultation ↗
          </Link>
        </header>

        <section className="mt-16" aria-labelledby="service-context-heading">
          <p className="section-kicker">Product context</p>
          <h2 id="service-context-heading" className="mt-4 max-w-3xl text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            Where this service fits in the product system.
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {serviceLanes.map((lane) => (
              <article key={lane.id} className="surface-card p-6 sm:p-8">
                <p className="section-kicker">{lane.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-black text-white">{lane.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{lane.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="lifecycle-coverage-heading">
          <p className="section-kicker">Lifecycle coverage</p>
          <h2 id="lifecycle-coverage-heading" className="mt-4 max-w-3xl text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            The engagement stays connected to the stages around it.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            Scope can begin at any listed stage. Earlier decisions and later operating requirements remain visible so the work does not become an isolated technical deliverable.
          </p>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {coveredStages.map((stage) => (
              <li key={stage.id} className="bg-[#0B1018] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300/65">{stage.number}</p>
                <h3 className="mt-3 text-lg font-bold text-white">{stage.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{stage.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="h-fit rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-6 sm:p-8">
            <p className="section-kicker">Best fit</p>
            <h2 className="mt-4 text-2xl font-black text-white">A useful starting context</h2>
            <p className="mt-4 leading-7 text-slate-300">{service.idealFor}</p>
            <Link href="/hire#consultation" className="mt-6 inline-flex font-semibold text-cyan-200 hover:text-white">
              Confirm fit in a free call →
            </Link>
          </aside>

          <div className="space-y-14">
            <section aria-labelledby="service-outcomes-heading">
              <h2 id="service-outcomes-heading" className="text-3xl font-black text-white">What the engagement can produce</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                Final outputs are narrowed during discovery, but the engagement can cover these product outcomes when the scope requires them.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="surface-card flex gap-3 p-5 text-sm leading-6 text-slate-300">
                    <span aria-hidden="true" className="text-cyan-300">✓</span>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="service-process-heading">
              <h2 id="service-process-heading" className="text-3xl font-black text-white">How this engagement is shaped</h2>
              <ol className="mt-6 space-y-3">
                {service.process.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                    <span className="font-mono text-sm text-cyan-300/60">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-sm leading-6 text-slate-300">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {service.evidence ? (
              <section aria-labelledby="service-evidence-heading">
                <h2 id="service-evidence-heading" className="text-3xl font-black text-white">Evidence and relevant decisions</h2>
                <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                  Review related case studies, public experiments, and practical engineering guidance before deciding whether the fit is right.
                </p>
                <div className="mt-6 grid gap-4">
                  {service.evidence.map((item) => (
                    <article key={item.href} className="surface-card p-5 sm:p-6">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                      <Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white">
                        {item.label} <span aria-hidden="true">→</span>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            <section aria-labelledby="service-technology-heading">
              <h2 id="service-technology-heading" className="text-2xl font-black text-white">Implementation toolkit</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                Technology follows the product boundary, existing system, operating constraints, and handover needs. These are relevant tools, not a prescribed stack.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <span key={technology} className="skill-pill">{technology}</span>
                ))}
              </div>
            </section>

            <section id="common-questions" aria-labelledby="service-faq-heading">
              <h2 id="service-faq-heading" className="text-3xl font-black text-white">Common questions</h2>
              <div className="mt-6 divide-y divide-white/[0.07] rounded-2xl border border-white/[0.07] bg-[#0B1018] px-6">
                {service.faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="cursor-pointer list-none pr-6 font-bold text-white marker:hidden">
                      {faq.question}
                      <span aria-hidden="true" className="float-right text-cyan-300 group-open:rotate-45">+</span>
                    </summary>
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
            <h2 className="mt-3 text-2xl font-black text-white">Start with the outcome, current stage, and most expensive uncertainty.</h2>
            <p className="mt-2 max-w-2xl text-slate-400">Send the current context, desired change, timeline, and budget range through the product brief.</p>
          </div>
          <Link href="/hire#project-brief" className="button-primary mt-6 shrink-0 sm:mt-0">
            Send your project brief ↗
          </Link>
        </section>
      </div>
    </main>
  );
}
