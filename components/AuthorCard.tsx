import Link from 'next/link';
import { profileSummary, siteConfig } from '@/content/site';

export default function AuthorCard() {
  return (
    <aside aria-label="Author information" className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-8">
      <p className="section-kicker">Author</p>
      <div className="mt-4 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <h2 className="text-2xl font-black text-white">{siteConfig.name}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">{profileSummary.summary}</p>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            Based in {siteConfig.location}. Public evidence is linked through the portfolio, GitHub profile, selected work, and engineering articles.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 sm:flex-col">
          <Link href="/#about" rel="author" className="button-secondary text-sm">About</Link>
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="button-secondary text-sm">GitHub</a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="button-secondary text-sm">LinkedIn</a>
        </div>
      </div>
    </aside>
  );
}
