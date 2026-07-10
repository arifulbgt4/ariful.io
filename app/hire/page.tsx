import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { engagementOptions, projects, services, siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: { absolute: 'Hire Ariful Islam — Software Engineer & Product Builder' },
  description:
    'Hire Ariful Islam for SaaS, applied AI, backend, automation, or connected-product engineering—from architecture and prototypes to production delivery.',
  keywords: [
    'hire software engineer Bangladesh',
    'hire Next.js developer',
    'applied AI engineer',
    'AI dropshipping platform developer',
    'SaaS product engineer',
    'backend API engineer',
  ],
  alternates: { canonical: '/hire' },
  openGraph: {
    title: 'Hire Ariful Islam — Product Engineering for SaaS, Applied AI & Backend Systems',
    description: 'A direct guide to service fit, engagement options, engineering evidence, and the next step.',
    url: '/hire',
  },
};

const flagshipProject = projects.find((project) => project.flagship)!;

const fitSignals = [
  'You have a real user, workflow, or operating problem—not only a feature list.',
  'A founder, product lead, or engineering owner can make timely scope decisions.',
  'You value explicit tradeoffs, reviewable milestones, verification, and documentation.',
  'You need one engineer to connect product, interface, backend, data, AI, and integration boundaries.',
];

const poorFitSignals = [
  'Unverified claims, deceptive automation, spam systems, or hidden data use are part of the plan.',
  'The expectation is an undefined product, fixed deadline, and fixed budget without discovery.',
  'AI output must silently control prices, customers, advertising spend, or other consequential actions.',
  'The work needs certified production hardware, manufacturing, or specialist compliance ownership.',
];

export default function HirePage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: `Hire ${siteConfig.name}`,
      url: `${siteConfig.url}/hire`,
      mainEntity: {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: 'Software Engineer and Product Builder',
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Ariful Islam Product Engineering Services',
      url: `${siteConfig.url}/hire`,
      provider: { '@id': `${siteConfig.url}/#person` },
      areaServed: 'Worldwide',
      serviceType: services.map((service) => service.title),
    },
  ];

  return (
    <main id="main-content" className="page-shell">
      <JsonLd data={structuredData} />
      <div className="site-container">
        <header className="max-w-5xl">
          <p className="section-kicker">Hire Ariful / Remote worldwide</p>
          <h1 className="mt-5 max-w-5xl text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
            Bring in an engineer who can connect the product decision to the working system.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
            I help founders and product teams scope and ship SaaS, applied AI, backend, automation, and connected-product work. Engagements can begin with a bounded review, a focused prototype, or one complete production workflow.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="button-primary">Send a project brief ↗</Link>
            <Link href="/work/ai-dropshipping-commerce-platform" className="button-secondary">Review flagship evidence</Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">Based in Dhaka · Remote collaboration · Clear scope · Documented handover</p>
        </header>

        <section className="mt-20">
          <p className="section-kicker">Problems I can own</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.slug} className="surface-card flex flex-col p-6 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300/60">{service.eyebrow}</p>
                <h2 className="mt-4 text-2xl font-black text-white">{service.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-slate-400">{service.summary}</p>
                <Link href={`/services/${service.slug}`} className="mt-6 font-semibold text-cyan-200 hover:text-white">Evaluate service fit →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="section-kicker">Ways to start</p>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">Choose the smallest engagement that can reduce real uncertainty.</h2>
            <p className="mt-5 leading-7 text-slate-400">The final scope depends on the current system, desired outcome, risk, timeline, and who will operate the result. Pricing follows discovery rather than an invented one-size-fits-all package.</p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {engagementOptions.map((option, index) => (
              <li key={option.title} className="surface-card p-6">
                <span className="font-mono text-xs text-cyan-300/60">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-bold text-white">{option.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{option.summary}</p>
                <p className="mt-4 border-t border-white/[0.07] pt-4 text-sm leading-6 text-slate-300"><span className="font-semibold text-white">Outcome:</span> {option.outcome}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.06] via-[#0B1018] to-blue-500/[0.05] p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="section-kicker">Flagship engineering evidence</p>
              <h2 className="mt-4 text-balance text-3xl font-black text-white sm:text-4xl">{flagshipProject.title}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">{flagshipProject.summary}</p>
              <p className="mt-5 text-sm leading-7 text-slate-400">{flagshipProject.outcome}</p>
              <Link href={`/work/${flagshipProject.slug}`} className="button-primary mt-7">Read the full case study ↗</Link>
            </div>
            <ul className="grid gap-3">
              {flagshipProject.highlights.slice(0, 6).map((highlight) => (
                <li key={highlight} className="flex gap-3 rounded-xl border border-white/[0.07] bg-black/10 p-4 text-sm leading-6 text-slate-300">
                  <span className="text-cyan-300">✓</span>{highlight}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20 grid gap-5 lg:grid-cols-2">
          <FitPanel title="A strong fit usually looks like" items={fitSignals} tone="positive" />
          <FitPanel title="Probably not a fit when" items={poorFitSignals} tone="caution" />
        </section>

        <section className="mt-20 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-7 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:p-10">
          <div className="max-w-2xl">
            <p className="section-kicker">Start with useful context</p>
            <h2 className="mt-3 text-3xl font-black text-white">What are you trying to ship or improve?</h2>
            <p className="mt-3 leading-7 text-slate-400">Send the target user, current workflow or stack, desired outcome, main constraint, timeline, and budget range. I will use that to confirm fit and suggest a concrete next step.</p>
          </div>
          <Link href="/#contact" className="button-primary mt-6 shrink-0 sm:mt-0">Send a project brief ↗</Link>
        </section>
      </div>
    </main>
  );
}

function FitPanel({ title, items, tone }: { title: string; items: string[]; tone: 'positive' | 'caution' }) {
  return (
    <section className="surface-card p-6 sm:p-8">
      <h2 className="text-2xl font-black text-white">{title}</h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-slate-400">
            <span className={tone === 'positive' ? 'text-cyan-300' : 'text-amber-200'}>{tone === 'positive' ? '✓' : '—'}</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
