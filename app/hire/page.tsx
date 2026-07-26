import type { Metadata } from 'next';
import Link from 'next/link';
import CalendlyBooking from '@/components/CalendlyBooking';
import JsonLd from '@/components/JsonLd';
import ProjectBriefForm from '@/components/ProjectBriefForm';
import {
  engagementOptions,
  productLanes,
  projects,
  siteConfig,
} from '@/content/site';

export const metadata: Metadata = {
  title: { absolute: 'Hire Ariful Islam — End-to-End Product Engineer' },
  description:
    'Start a software, AI-enabled, or connected/IoT product with Ariful Islam—from discovery and architecture through build, launch, and handover.',
  keywords: [
    'hire product engineer',
    'end-to-end product development',
    'software product engineer',
    'AI product engineer',
    'IoT product prototyping',
    'remote product engineer',
  ],
  alternates: { canonical: '/hire' },
  openGraph: {
    title: 'Hire Ariful Islam — End-to-End Product Engineer',
    description:
      'Product engineering for software, AI-enabled, and connected/IoT products—from idea to a working release.',
    url: '/hire',
  },
};

const coreProjects = projects
  .filter((project) => project.tier === 'core')
  .sort((first, second) => first.displayOrder - second.displayOrder);

const fitSignals = [
  'You have a real user, workflow, operating problem, or research question—not only a feature list.',
  'A founder, product lead, engineering owner, or research lead can make timely scope decisions.',
  'You value explicit tradeoffs, reviewable milestones, verification, and documented handover.',
  'You need product, interface, backend, data, AI, or device boundaries connected into one accountable delivery path.',
];

const poorFitSignals = [
  'Unverified claims, deceptive automation, spam systems, or hidden data use are part of the plan.',
  'The expectation is an undefined product, fixed deadline, and fixed budget without discovery.',
  'AI output must silently control consequential prices, customer communication, or advertising spend.',
  'Ariful alone must provide certified PCB design, compliance, or manufacturing without appropriate specialist partners.',
];

export default function HirePage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: `Hire ${siteConfig.name} for product engineering`,
      url: `${siteConfig.url}/hire`,
      mainEntity: {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: 'End-to-End Product Engineer',
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Ariful Islam End-to-End Product Engineering',
      description: siteConfig.description,
      url: `${siteConfig.url}/hire`,
      provider: { '@id': `${siteConfig.url}/#person` },
      areaServed: 'Worldwide',
      serviceType: productLanes.map((lane) => lane.title),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Product engineering engagement options',
        itemListElement: engagementOptions.map((option) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: option.title,
            description: option.summary,
          },
        })),
      },
    },
  ];

  return (
    <main id="main-content" className="page-shell">
      <JsonLd data={structuredData} />
      <div className="site-container">
        <header className="max-w-5xl">
          <p className="section-kicker">Start a product / Remote worldwide</p>
          <h1 className="mt-5 max-w-5xl text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
            Turn an idea, difficult workflow, or uncertain prototype into a working release.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
            I help founders, product teams, and research teams move software, AI-enabled, and connected/IoT products from discovery and architecture through prototyping, build, verification, launch, and handover.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/hire#consultation" className="button-primary">
              Book a free consultation <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/hire#project-brief" className="button-secondary">
              Send a project brief
            </Link>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-500">
            Based in Dhaka · Remote collaboration · Reviewable milestones · Documented handover
          </p>
        </header>

        <section className="mt-20 sm:mt-24" aria-labelledby="product-lanes-heading">
          <p className="section-kicker">Three product lanes</p>
          <h2 id="product-lanes-heading" className="mt-4 max-w-3xl text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            One delivery model, adapted to the product you need.
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {productLanes.map((lane) => (
              <article key={lane.id} className="surface-card flex h-full flex-col p-6 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300/60">
                  {lane.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-black text-white">{lane.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-400">{lane.summary}</p>
                <ul className="mt-6 space-y-3 border-t border-white/[0.07] pt-5">
                  {lane.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="text-cyan-300" aria-hidden="true">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 sm:mt-24" aria-labelledby="product-proof-heading">
          <div className="max-w-3xl">
            <p className="section-kicker">Four core products / Equal evidence</p>
            <h2 id="product-proof-heading" className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
              Review the product boundary, maturity, and evidence before discussing scope.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {coreProjects.map((project) => (
              <article key={project.slug} className="surface-card flex h-full flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
                    {project.category}
                  </p>
                  <span className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-1.5 text-xs font-semibold text-cyan-100">
                    {project.maturity.label}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-black text-white sm:text-3xl">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.summary}</p>
                <p className="mt-5 flex-1 border-t border-white/[0.07] pt-5 text-sm leading-7 text-slate-300">
                  <span className="font-semibold text-white">Client relevance:</span>{' '}
                  {project.buyerOutcome}
                </p>
                <Link href={`/work/${project.slug}`} className="mt-6 font-semibold text-cyan-200 hover:text-white">
                  Review this case study →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 sm:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14" aria-labelledby="engagement-heading">
          <div>
            <p className="section-kicker">Ways to start</p>
            <h2 id="engagement-heading" className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
              Choose the smallest engagement that can reduce real uncertainty.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Scope and pricing follow the current state, desired outcome, risk, timeline, and people who will operate the result—not a one-size-fits-all package.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {engagementOptions.map((option, index) => (
              <li key={option.title} className="surface-card p-6">
                <span className="font-mono text-xs text-cyan-300/60">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-bold text-white">{option.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{option.summary}</p>
                <p className="mt-4 border-t border-white/[0.07] pt-4 text-sm leading-6 text-slate-300">
                  <span className="font-semibold text-white">Outcome:</span> {option.outcome}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 grid gap-5 sm:mt-24 lg:grid-cols-2" aria-label="Engagement fit">
          <FitPanel title="A strong fit usually looks like" items={fitSignals} tone="positive" />
          <FitPanel title="Probably not a fit when" items={poorFitSignals} tone="caution" />
        </section>

        <section
          id="consultation"
          className="-mx-5 mt-20 scroll-mt-28 overflow-hidden border-y border-cyan-300/10 bg-cyan-300/[0.035] sm:mx-0 sm:mt-24 sm:rounded-[2rem] sm:border"
          aria-labelledby="consultation-heading"
        >
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-white/[0.08] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="section-kicker">{siteConfig.consultation.label}</p>
              <h2
                id="consultation-heading"
                className="mt-5 text-balance text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl"
              >
                Confirm fit before you decide whether to hire me.
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                This no-obligation {siteConfig.consultation.location} conversation is a practical way to discuss your product goal, current state, constraints, and the next useful step.
              </p>

              <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <h3 className="text-base font-bold text-white">What this call covers</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-cyan-300" aria-hidden="true">✓</span>
                    Clarify the outcome you need and the current product stage.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-300" aria-hidden="true">✓</span>
                    Surface the main delivery, technical, or operational constraint.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-300" aria-hidden="true">✓</span>
                    Check whether my delivery model fits your team and identify a sensible next step.
                  </li>
                </ul>
              </div>

              <div className="mt-6 border-l-2 border-amber-200/50 pl-4">
                <h3 className="text-sm font-bold text-white">A clear boundary</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  The call is not a free full product audit, detailed architecture engagement, or complete solution design. If deeper analysis or a deliverable is needed, we can scope paid discovery after confirming fit.
                </p>
              </div>

              <p className="mt-7 text-sm leading-6 text-slate-400">
                Prefer not to use {siteConfig.consultation.provider}?{' '}
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-cyan-200 hover:text-white">
                  Email me directly
                </a>{' '}
                or{' '}
                <Link href="/hire#project-brief" className="font-semibold text-cyan-200 hover:text-white">
                  send a project brief
                </Link>
                .
              </p>
            </div>

            <div className="px-5 py-3 sm:p-10 lg:p-12">
              <CalendlyBooking
                eventUrl={siteConfig.consultation.eventUrl}
                buttonLabel={`Load available ${siteConfig.consultation.durationMinutes}-minute times`}
                iframeTitle={`${siteConfig.consultation.label} booking calendar`}
              />
            </div>
          </div>
        </section>

        <section
          id="project-brief"
          className="mt-20 scroll-mt-28 overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-cyan-300/[0.035] sm:mt-24"
          aria-labelledby="project-brief-heading"
        >
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-white/[0.08] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="section-kicker">Project brief</p>
              <h2 id="project-brief-heading" className="mt-5 text-balance text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
                What are you trying to ship, validate, or improve?
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                Share enough context to identify the product stage, the expensive uncertainty, and a useful first step. No service is preselected.
              </p>

              <div className="mt-9 space-y-5 text-sm">
                <div>
                  <p className="text-slate-500">Direct email fallback</p>
                  <a href={`mailto:${siteConfig.email}`} className="mt-1 block font-semibold text-white hover:text-cyan-200">
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-slate-500">Physical-product boundary</p>
                  <p className="mt-1 leading-6 text-slate-300">
                    I can own discovery, architecture, software, integration, and validated prototyping. PCB, certification, production engineering, and manufacturing use qualified specialist partners when required.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <ProjectBriefForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function FitPanel({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: 'positive' | 'caution';
}) {
  return (
    <article className="surface-card p-6 sm:p-8">
      <h2 className="text-2xl font-black text-white">{title}</h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-slate-400">
            <span className={tone === 'positive' ? 'text-cyan-300' : 'text-amber-200'} aria-hidden="true">
              {tone === 'positive' ? '✓' : '—'}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
