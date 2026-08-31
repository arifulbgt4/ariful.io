import { siteConfig } from '@/content/site';
import InterfaceIcon, { type InterfaceIconName } from '@/components/InterfaceIcon';

export default function ProofBar() {
  return (
    <section aria-label="Public profile facts" className="border-y border-white/[0.07] bg-white/[0.015]">
      <div className="site-container grid grid-cols-2 divide-x divide-y divide-white/[0.07] sm:grid-cols-4 sm:divide-y-0">
        {siteConfig.proof.map((item) => (
          <div key={item.label} className="group px-3 py-7 text-center sm:px-5 sm:py-8">
            <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.045] text-cyan-200 transition group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.08]">
              <InterfaceIcon name={item.icon as InterfaceIconName} className="h-5 w-5" />
            </span>
            <p className="mt-4 text-xl font-black text-white sm:text-2xl">{item.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
