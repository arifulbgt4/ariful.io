'use client';

import { useState } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const domains = [
  {
    id: 'software',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Intelligent Software Systems',
    shortTitle: 'Software',
    color: '#00CED1',
    skills: [
      'Next.js', 'React', 'TypeScript', 'Node.js', 'NestJS',
      'API Architecture', 'GraphQL', 'REST APIs', 'PostgreSQL',
      'Prisma', 'Authentication', 'Payment Systems', 'Real-time Communication',
      'SaaS Platforms', 'Dashboard Architecture',
    ],
  },
  {
    id: 'ai',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI & Automation Systems',
    shortTitle: 'AI & Automation',
    color: '#0066FF',
    skills: [
      'AI Agents', 'Local LLM Workflows', 'Ollama', 'Prompt Engineering',
      'Codebase Intelligence', 'AI-assisted Development', 'Inference API Concepts',
      'Automation Systems', 'AI Infrastructure',
    ],
  },
  {
    id: 'electronics',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Electronics & Embedded Systems',
    shortTitle: 'Embedded',
    color: '#2ECC71',
    skills: [
      'ESP32', 'Arduino', 'Raspberry Pi', 'Sensor Integration',
      'WebSocket Control', 'Motor Control', 'Camera Modules',
      'Wireless Communication', 'Power Systems', 'Embedded Prototyping',
    ],
  },
  {
    id: 'robotics',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Robotics & Underwater Systems',
    shortTitle: 'Robotics',
    color: '#FF6B35',
    skills: [
      'Underwater Drone Research', 'Submarine Prototypes', 'Live Monitoring',
      'Shrimp Farming Automation', 'Water Quality Sensing', 'Sonar Concepts',
      'Camera Streaming', 'Remote Control Systems',
    ],
  },
  {
    id: 'mechanical',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Mechanical & Product Design',
    shortTitle: 'Mechanical',
    color: '#A855F7',
    skills: [
      'Structure Planning', 'Waterproof Housing', 'Sensor Placement',
      'Propeller/Motor Layout', 'Buoy & Tether Design', '3D Parts Design',
      'FreeCAD', 'Prototype Design Thinking',
    ],
  },
  {
    id: 'cloud',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud & Deployment',
    shortTitle: 'Cloud',
    color: '#F59E0B',
    skills: [
      'AWS Concepts', 'Docker', 'GitHub Actions', 'Vercel',
      'CI/CD Pipelines', 'Cloudflare', 'Scalable Deployment',
      'Monitoring Concepts', 'Infrastructure Design',
    ],
  },
];

export default function Domains() {
  const [activeDomain, setActiveDomain] = useState('software');
  const { ref, isVisible: visible } = useInViewOnce<HTMLDivElement>();

  const active = domains.find((d) => d.id === activeDomain)!;

  return (
    <section id="domains" className="section-shell bg-[#080B14]">
      <div className="site-container" ref={ref}>
        {/* Section header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-mono text-[#00CED1]/60 tracking-[0.3em] uppercase mb-4 block">
            {'// engineering_domains'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Core <span className="text-gradient">Domains</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8892A8] max-w-2xl mx-auto">
            Six interconnected engineering disciplines powering every project.
          </p>
        </div>

        {/* Domain tabs */}
        <div
          className={`grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 mb-8 sm:mb-12 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          role="tablist"
          aria-label="Engineering domains"
        >
          {domains.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDomain(d.id)}
              role="tab"
              id={`domain-tab-${d.id}`}
              aria-selected={activeDomain === d.id}
              aria-controls="domain-panel"
              className={`min-w-0 px-3 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                activeDomain === d.id
                  ? 'text-[#06080D] shadow-lg'
                  : 'text-[#8892A8] bg-[#0B0F19] border border-[#1A1F2E] hover:border-[#00CED1]/30'
              }`}
              style={
                activeDomain === d.id
                  ? {
                      backgroundColor: d.color,
                      boxShadow: `0 0 20px ${d.color}30`,
                    }
                  : undefined
              }
            >
              {d.icon}
              <span className="sm:hidden truncate">{d.shortTitle}</span>
              <span className="hidden sm:inline">{d.title}</span>
            </button>
          ))}
        </div>

        {/* Active domain content */}
        <div
          id="domain-panel"
          role="tabpanel"
          aria-labelledby={`domain-tab-${active.id}`}
          className={`p-5 sm:p-10 rounded-2xl bg-[#0B0F19] border border-[#1A1F2E] transition-all duration-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="flex items-start sm:items-center gap-3 mb-6">
            <div
              className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${active.color}15`, color: active.color }}
            >
              {active.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">{active.title}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {active.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-[#06080D] border border-[#1A1F2E] text-[#C8D0E0] hover:border-current transition-all duration-300"
                style={{ ['--tw-border-opacity' as string]: 1 }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
