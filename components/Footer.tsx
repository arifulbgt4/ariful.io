import Link from 'next/link';
import InterfaceIcon, { type InterfaceIconName } from '@/components/InterfaceIcon';
import { services, siteConfig } from '@/content/site';

const utilityLinkClass =
  'inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-slate-500 hover:bg-white/[0.035] hover:text-cyan-200';

function UtilityIcon({ name }: { name: InterfaceIconName }) {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-current">
      <InterfaceIcon name={name} className="h-4 w-4" />
    </span>
  );
}

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
            <Link href="/hire#consultation">Book a free consultation</Link>
            <Link href="/hire#project-brief">Send a project brief</Link>
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
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:justify-end">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className={utilityLinkClass}>
            <UtilityIcon name="github" />
            <span>GitHub</span>
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className={utilityLinkClass}>
            <UtilityIcon name="linkedin" />
            <span>LinkedIn</span>
          </a>
          <Link href="/privacy" className={utilityLinkClass}>
            <UtilityIcon name="privacy" />
            <span>Privacy</span>
          </Link>
          <Link href="/site-map" className={utilityLinkClass}>
            <UtilityIcon name="site-map" />
            <span>Site map</span>
          </Link>
          <Link href="/rss.xml" className={utilityLinkClass}>
            <UtilityIcon name="rss" />
            <span>RSS</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
