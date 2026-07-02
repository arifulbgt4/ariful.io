'use client';

import { useInViewOnce } from '@/hooks/useInViewOnce';

const projects = [
  {
    title: 'Otask',
    subtitle: 'Developer Collaboration Platform',
    description:
      'A GitHub-powered collaboration platform where developers can publish repository issues, collaborate on solutions, and manage paid or open-source issue workflows. Features GitHub App integration, repository import, issue lifecycle management, Stripe payment flow, real-time notifications, and developer collaboration features.',
    tags: ['Next.js', 'GitHub API', 'Stripe', 'Real-time', 'SaaS'],
    category: 'Software / AI',
    color: '#00CED1',
    year: '2024',
    status: 'In Development',
  },
  {
    title: 'Underwater Robotics',
    subtitle: 'Shrimp Monitoring System',
    description:
      'A long-term deep-tech research project focused on underwater monitoring for shrimp farming. The system explores underwater video, sensor-based water quality monitoring, ESP32/Raspberry Pi control, Android/web remote control, sonar concepts, camera placement, waterproof design, and AI-based future analysis.',
    tags: ['Robotics', 'ESP32', 'IoT', 'Research', 'Underwater'],
    category: 'Robotics / Hardware',
    color: '#FF6B35',
    year: '2023–Present',
    status: 'Active Research',
  },
  {
    title: 'AI Codebase Intelligence',
    subtitle: 'Local AI Agent',
    description:
      'A local AI assistant concept designed to understand a complete software project, store project knowledge, track version history, and help engineers plan technical changes before writing code.',
    tags: ['AI Agent', 'Local LLM', 'Code Analysis', 'Productivity'],
    category: 'AI / Tooling',
    color: '#0066FF',
    year: '2024',
    status: 'Concept',
  },
  {
    title: 'Smart Hardware & IoT',
    subtitle: 'Embedded Experiments',
    description:
      'Embedded experiments involving ESP32, WebSocket communication, sensors, motor control, camera streaming, Android app control, and real-time device interaction.',
    tags: ['ESP32', 'IoT', 'WebSocket', 'Embedded', 'Android'],
    category: 'Electronics / IoT',
    color: '#2ECC71',
    year: '2023–Present',
    status: 'Ongoing',
  },
  {
    title: 'Mechanical 3D Parts',
    subtitle: 'Design Platform Concept',
    description:
      'A concept for a parametric 3D parts design website for mechanical engineers, focused on custom part generation, technical design workflows, and engineering-focused user experience.',
    tags: ['3D Design', 'Parametric', 'Mechanical', 'Web Platform'],
    category: 'Mechanical / Design',
    color: '#A855F7',
    year: '2024',
    status: 'Concept',
  },
];

export default function Projects() {
  const { ref, isVisible: visible } = useInViewOnce<HTMLDivElement>(0.05);

  return (
    <section id="projects" className="section-shell">
      <div className="site-container" ref={ref}>
        {/* Section header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-mono text-[#00CED1]/60 tracking-[0.3em] uppercase mb-4 block">
            {'// featured_work'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8892A8] max-w-2xl mx-auto">
            From SaaS platforms to underwater robotics — engineering at every scale.
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative p-5 sm:p-8 rounded-2xl bg-[#0B0F19] border border-[#1A1F2E] hover:border-[#00CED1]/30 transition-all duration-500 overflow-hidden ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Blueprint corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div
                  className="absolute top-0 left-0 w-full h-px"
                  style={{ backgroundColor: `${project.color}30` }}
                />
                <div
                  className="absolute top-0 left-0 h-full w-px"
                  style={{ backgroundColor: `${project.color}30` }}
                />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div
                  className="absolute bottom-0 right-0 w-full h-px"
                  style={{ backgroundColor: `${project.color}30` }}
                />
                <div
                  className="absolute bottom-0 right-0 h-full w-px"
                  style={{ backgroundColor: `${project.color}30` }}
                />
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start gap-5 sm:gap-6">
                {/* Left: Meta */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <span
                      className="text-xs font-mono font-medium"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-[#8892A8] mb-3">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#8892A8]/60 font-mono">
                    <span>{project.year}</span>
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: project.color }}
                      />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Right: Description & tags */}
                <div className="min-w-0 flex-1">
                  <p className="text-[#8892A8] leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-mono rounded-md bg-[#06080D] border border-[#1A1F2E] text-[#8892A8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
