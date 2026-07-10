import Link from 'next/link';
import { profileSummary } from '@/content/site';

function isExternalUrl(href: string) {
  return href.startsWith('http');
}

export default function ProfileSummary() {
  return (
    <section id="quick-facts" className="section-shell bg-[#090D14]">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="section-kicker">Profile / Source-linked summary</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
              {profileSummary.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">{profileSummary.summary}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {profileSummary.sourceLinks.map((source) => (
                isExternalUrl(source.href) ? (
                  <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="link-card">
                    <span>
                      <span className="block font-semibold leading-6 text-white">{source.label}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-500">{source.description}</span>
                    </span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link key={source.href} href={source.href} className="link-card">
                    <span>
                      <span className="block font-semibold leading-6 text-white">{source.label}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-500">{source.description}</span>
                    </span>
                    <span aria-hidden="true">→</span>
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0B1018]">
            <table className="w-full border-separate border-spacing-0 text-left text-sm">
              <caption className="sr-only">Evidence-backed profile facts for Ariful Islam</caption>
              <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-slate-400">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Fact</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Current public statement</th>
                </tr>
              </thead>
              <tbody>
                {profileSummary.facts.map((fact) => (
                  <tr key={fact.label} className="border-t border-white/[0.07]">
                    <th scope="row" className="border-t border-white/[0.07] px-5 py-4 align-top font-semibold text-white">
                      {fact.label}
                    </th>
                    <td className="border-t border-white/[0.07] px-5 py-4 leading-7 text-slate-400">{fact.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <section className="mt-14">
          <p className="section-kicker">FAQ / Identity and evidence</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {profileSummary.faqs.map((faq) => (
              <details key={faq.question} className="surface-card group p-5 sm:p-6">
                <summary className="cursor-pointer list-none pr-8 font-bold text-white marker:hidden">
                  {faq.question}
                  <span className="float-right text-cyan-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
