import { siteConfig } from '@/content/site';

export default function ProofBar() {
  return (
    <section aria-label="Public profile facts" className="border-y border-white/[0.07] bg-white/[0.015]">
      <div className="site-container grid grid-cols-2 divide-x divide-y divide-white/[0.07] sm:grid-cols-4 sm:divide-y-0">
        {siteConfig.proof.map((item) => (
          <div key={item.label} className="px-3 py-7 text-center sm:px-5">
            <p className="text-xl font-black text-white sm:text-2xl">{item.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
