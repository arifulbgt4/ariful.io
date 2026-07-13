import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { journalEntries, projects, services } from '@/content/site';

export const metadata: Metadata = {
  title: 'Site Map',
  description:
    'Browse Ariful Islam’s product engineering services, case studies, engineering journal, and technical insights.',
  alternates: { canonical: '/site-map' },
};

export default function SiteMapPage() {
  const groups = [
    {
      title: 'Main pages',
      links: [
        ['Home', '/'],
        ['Start a product', '/hire'],
        ['Services', '/services'],
        ['Work', '/work'],
        ['Engineering journal', '/journal'],
        ['Technical insights', '/blog'],
        ['About', '/#about'],
        ['Privacy', '/privacy'],
      ],
    },
    {
      title: 'Services',
      links: services.map((service) => [service.title, `/services/${service.slug}`]),
    },
    {
      title: 'Case studies',
      links: projects.map((project) => [project.title, `/work/${project.slug}`]),
    },
    {
      title: 'Journal',
      links: journalEntries.map((entry) => [entry.title, `/journal/${entry.slug}`]),
    },
    {
      title: 'Articles',
      links: getAllPosts().map((post) => [post.title, `/blog/${post.slug}`]),
    },
  ];

  return (
    <main id="main-content" className="page-shell">
      <div className="site-container">
        <p className="section-kicker">Site map</p>
        <h1 className="mt-5 text-4xl font-black text-white sm:text-6xl">Explore all public content.</h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <section key={group.title} className="surface-card p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-slate-400 hover:text-cyan-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
