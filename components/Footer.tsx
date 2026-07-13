import Link from 'next/link';
import { services, siteConfig } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#070A0F] py-12">
      <div className="site-container grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div className="max-w-md">
          <Link href="/" className="text-lg font-black text-white">Ariful Islam</Link>
          <p className="mt-4 text-sm leading-6 text-slate-500">End-to-end product engineering for software, AI-enabled, and connected/IoT products—from discovery to launch and handover.</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-5 inline-block text-sm font-semibold text-cyan-200 hover:text-white">{siteConfig.email}</a>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <Link href="/hire#project-brief">Start a project</Link>
            <Link href="/work">Product work</Link>
            <Link href="/blog">Insights</Link>
            <Link href="/journal">Engineering journal</Link>
            <Link href="/#about">About</Link>
            <Link href="/hire">Client fit</Link>
          </div>
        </div>

        <div>
          <p className="footer-heading">Services</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</Link>)}
          </div>
        </div>
      </div>

      <div className="site-container mt-12 flex flex-col gap-4 border-t border-white/[0.07] pt-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ariful Islam. Built with Next.js.</p>
        <div className="flex flex-wrap gap-5">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/site-map">Site map</Link>
          <Link href="/rss.xml">RSS</Link>
        </div>
      </div>
    </footer>
  );
}
