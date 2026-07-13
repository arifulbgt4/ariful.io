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
              The project brief collects the product lane, lifecycle stage, budget, timeline, and context needed to confirm fit and suggest a concrete next step.
            </p>
          </div>

          <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
            <Link href="/hire#project-brief" className="button-primary">
              Start your product <span aria-hidden="true">↗</span>
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="button-secondary">
              Email directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
