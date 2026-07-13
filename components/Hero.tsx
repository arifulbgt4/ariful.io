import Link from 'next/link';
import { deliveryLifecycle, productLanes, siteConfig } from '@/content/site';

export default function Hero() {
  return (
    <section id="home" className="hero-grid relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:min-h-[90svh] lg:pt-44">
      <div className="ambient-glow left-[5%] top-20 bg-cyan-400/10" aria-hidden="true" />
      <div className="ambient-glow bottom-0 right-[8%] bg-blue-500/10" aria-hidden="true" />

      <div className="site-container relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <div className="eyebrow mb-7">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </span>
            {siteConfig.availability}
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-black leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            End-to-end product engineering—from idea to a{' '}
            <span className="text-gradient">working release.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I&apos;m Ariful Islam, an end-to-end Product Engineer. I help founders and teams discover, scope, prototype, build, integrate, verify, launch, and hand over software, AI-enabled, and connected/IoT products.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/hire#project-brief" className="button-primary">
              Start your product
              <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/work" className="button-secondary">
              See product work
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-500">Direct ownership · Reviewable milestones · Evidence-led delivery · Documented handover</p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1018]/90 p-6 shadow-2xl shadow-cyan-950/20 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">One product owner across the system</p>
            <div className="mt-5 grid gap-3">
              {productLanes.map((lane) => (
                <div key={lane.id} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-cyan-300/60">{lane.eyebrow}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-100">{lane.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Delivery coverage</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {deliveryLifecycle.map((stage) => stage.title).join(' → ')}
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-500">Specialist PCB, certification, and manufacturing partners join when the physical-product scope requires them.</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full border border-cyan-300/10" aria-hidden="true" />
          <div className="absolute -right-5 -top-5 -z-10 h-40 w-40 rounded-full border border-blue-400/10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
