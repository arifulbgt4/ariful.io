import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { siteConfig } from '@/content/site';

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          eyebrow="About / Product ownership"
          title="A Product Engineer who connects decisions to the working system."
          description="My strongest work sits where user needs, product scope, system design, experimentation, delivery, and operations meet. I make the tradeoffs visible and leave a product another team can understand."
        />

        <div className="space-y-6 text-base leading-8 text-slate-400">
          <p>
            I work as an end-to-end Product Engineer, with a broader background as a Software Engineer, multidisciplinary product builder, and inventor. I can own the path from discovery and architecture through a software release, an AI-enabled workflow, or a connected-product prototype.
          </p>
          <p>
            Connected products require honest boundaries. I can connect software, data, AI, telemetry, sensors, operator interfaces, and staged prototype evidence. Production PCB work, certification, compliance, pressure-rated mechanical engineering, and manufacturing involve appropriately qualified specialist partners.
          </p>
          <p>
            I build publicly where possible, write down important decisions, and present research as research. A polished case study does not turn an unfinished prototype into a production claim; it shows exactly what exists, what was learned, and what the next evidence gate is.
          </p>

          <div className="grid gap-4 pt-3 sm:grid-cols-2">
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="link-card">
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">Professional profile</span>
                <span className="mt-1 block font-semibold text-white">Connect on LinkedIn</span>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="link-card">
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">Public engineering</span>
                <span className="mt-1 block font-semibold text-white">Review my GitHub</span>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-cyan-200 hover:text-white">
              Read engineering insights <span aria-hidden="true">→</span>
            </Link>
            <Link href="/hire#consultation" className="inline-flex items-center gap-2 font-semibold text-cyan-200 hover:text-white">
              Book a free consultation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
