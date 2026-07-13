import SectionHeading from '@/components/SectionHeading';
import { deliveryLifecycle } from '@/content/site';

export default function Process() {
  return (
    <section id="process" className="section-shell">
      <div className="site-container">
        <SectionHeading
          eyebrow="Process / Low-surprise delivery"
          title="One accountable path from discovery to the next release."
          description="The lifecycle connects product decisions, design, software, AI or device integration, verification, launch, and handover around evidence you can review."
        />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {deliveryLifecycle.map((step) => (
            <li key={step.number} className="bg-[#0A0E15] p-6 sm:p-7">
              <span className="font-mono text-sm text-cyan-300/60">{step.number}</span>
              <h3 className="mt-8 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
