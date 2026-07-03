import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/content/site';

const capabilities = ['SaaS products', 'AI commerce', 'Backend systems', 'Connected inventions'];

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
            I turn ambitious product ideas into{' '}
            <span className="text-gradient">systems that can ship.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I&apos;m Ariful Islam—a multidisciplinary software engineer, product builder, and inventor in Dhaka. I help founders and product teams build dependable SaaS, AI commerce, backend, automation, and connected-product systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="button-primary">
              Tell me about your project
              <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/work/ai-dropshipping-commerce-platform" className="button-secondary">
              See the AI commerce build
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-500">Clear scope · Reviewable milestones · Documented handover</p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1018]/90 p-5 shadow-2xl shadow-cyan-950/20 sm:p-7">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <Image
                src="https://avatars.githubusercontent.com/u/22605783?v=4"
                alt="Ariful Islam"
                width={84}
                height={84}
                priority
                className="h-20 w-20 rounded-2xl border border-white/10 object-cover grayscale transition duration-500 hover:grayscale-0"
              />
              <div>
                <p className="font-bold text-white">Ariful Islam</p>
                <p className="mt-1 text-sm text-slate-400">Software Engineer · Product Builder</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-cyan-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  Dhaka · Working worldwide
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 py-6">
              {capabilities.map((capability, index) => (
                <div key={capability} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <span className="font-mono text-[0.65rem] text-cyan-300/60">0{index + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-slate-200">{capability}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Current focus</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">AI commerce platforms, practical automation, and production product engineering with strong operating boundaries.</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full border border-cyan-300/10" aria-hidden="true" />
          <div className="absolute -right-5 -top-5 -z-10 h-40 w-40 rounded-full border border-blue-400/10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
