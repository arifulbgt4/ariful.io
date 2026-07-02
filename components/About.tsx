'use client';

import { useEffect, useRef, useState } from 'react';

const identityCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Deep-Tech Product Engineer',
    desc: 'Building intelligent software systems, AI-powered platforms, and robotics prototypes that solve real-world problems.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Systems Builder',
    desc: 'Local LLM workflows, codebase intelligence, autonomous agents, and AI infrastructure that learns and adapts.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Robotics & Embedded Systems',
    desc: 'Underwater drones, smart sensors, ESP32/Raspberry Pi prototyping, and physical-digital system integration.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Software Architect',
    desc: 'Scalable SaaS platforms, API design, database architecture, and full-stack systems built for production.',
  },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-mono text-[#00CED1]/60 tracking-[0.3em] uppercase mb-4 block">
            // who_i_am
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Engineering at the{' '}
            <span className="text-gradient">Intersection</span>
          </h2>
          <p className="text-lg text-[#8892A8] max-w-3xl mx-auto leading-relaxed">
            Ariful Islam is a technology builder who works at the intersection of
            software, artificial intelligence, electronics, mechanical systems, and
            real-world product development. His work focuses on turning complex ideas
            into practical systems — ranging from SaaS platforms and AI tools to
            embedded devices, sensor-based monitoring systems, and underwater robotics
            research.
          </p>
        </div>

        {/* Core statement */}
        <div
          className={`relative mb-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#00CED1]/[0.05] to-[#0066FF]/[0.05] border border-[#00CED1]/10 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute top-4 left-6 text-6xl text-[#00CED1]/10 font-mono font-black">
            &quot;
          </div>
          <p className="text-lg sm:text-xl text-white font-medium text-center leading-relaxed relative z-10 pt-4">
            Building intelligent software, AI-powered systems, and robotics
            prototypes that connect the digital and physical world.
          </p>
        </div>

        {/* Identity cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {identityCards.map((card, i) => (
            <div
              key={card.title}
              className={`group p-6 rounded-xl bg-[#0B0F19] border border-[#1A1F2E] hover:border-[#00CED1]/30 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00CED1]/10 text-[#00CED1] flex items-center justify-center group-hover:bg-[#00CED1]/20 transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{card.title}</h3>
                  <p className="text-[#8892A8] text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Keyword tags */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            'Deep-Tech Product Engineer',
            'AI Systems Builder',
            'Robotics Enthusiast',
            'Software Architect',
            'IoT Prototype Builder',
            'Mechanical Designer',
            'Startup Product Builder',
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-xs font-mono text-[#00CED1]/80 border border-[#00CED1]/15 rounded-full bg-[#00CED1]/[0.03]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
