import Link from 'next/link';
import { siteConfig } from '@/content/site';

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="site-container">
        <div className="rounded-[2rem] border border-cyan-300/10 bg-cyan-300/[0.035] p-7 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:p-12">
          <div className="max-w-3xl">
            <p className="section-kicker">Start your product</p>
            <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.035em] text-white sm:text-5xl">
              Bring the current state, desired outcome, and hardest constraint.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Start with the {siteConfig.consultation.label.toLowerCase()} to confirm fit, or send the product lane, lifecycle stage, budget, timeline, and context in a project brief.
            </p>
          </div>

          <div className="mt-8 flex shrink-0 flex-col gap-3 lg:mt-0">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/hire#consultation" className="button-primary">
                Book a free consultation <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/hire#project-brief" className="button-secondary">
                Send a project brief
              </Link>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-11 items-center justify-center text-sm font-semibold text-cyan-200 hover:text-white"
            >
              Or email directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
