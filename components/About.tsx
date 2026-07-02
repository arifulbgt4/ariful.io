import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { siteConfig } from '@/content/site';

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          eyebrow="About / Engineering perspective"
          title="A software engineer who can work across the whole product system."
          description="My strongest work sits where product decisions, system design, and implementation meet. I make the tradeoffs visible and leave the next engineer with a system they can understand."
        />

        <div className="space-y-6 text-base leading-8 text-slate-400">
          <p>
            I work primarily with TypeScript, React, Next.js, Node.js, backend APIs, and data systems. My current AI work covers LLM integration, RAG, embeddings, tool-using workflows, MCP, and local-model experiments.
          </p>
          <p>
            I also prototype physical-digital systems with ESP32, Raspberry Pi, sensors, cameras, and realtime interfaces. That broader systems perspective is useful when software has to communicate with devices, operators, external providers, or imperfect real-world processes.
          </p>
          <p>
            I build publicly on GitHub, write down architecture decisions, and present research as research. I do not turn unfinished prototypes into inflated production claims.
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

          <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-cyan-200 hover:text-white">
            Read engineering insights <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
