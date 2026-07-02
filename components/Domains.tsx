import SectionHeading from '@/components/SectionHeading';
import { engineeringDomains } from '@/content/site';

export default function Domains() {
  return (
    <section className="section-shell border-y border-white/[0.06] bg-[#090D14]">
      <div className="site-container">
        <SectionHeading
          eyebrow="Capabilities / Working stack"
          title="The tools follow the product problem."
          description="A broad working range is useful only when the system still has clear boundaries. These are the technologies and domains I actively use or explore."
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {engineeringDomains.map((domain, index) => (
            <article key={domain.title} className="surface-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{domain.title}</h3>
                <span className="font-mono text-xs text-cyan-300/50">0{index + 1}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
