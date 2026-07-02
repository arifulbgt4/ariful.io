'use client';

import { useEffect, useState } from 'react';

const roles = [
  'Deep-Tech Product Engineer',
  'AI Systems Builder',
  'Robotics Prototype Architect',
  'Embedded Systems Designer',
  'Software Product Builder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 30 : 60
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center circuit-grid overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00CED1]/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00CED1]/[0.02] rounded-full blur-[200px]" />

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] text-[#00CED1]/10 text-6xl font-mono animate-float">
          {'{ }'}
        </div>
        <div
          className="absolute top-40 right-[15%] text-[#0066FF]/10 text-5xl font-mono"
          style={{ animationDelay: '1s', animation: 'float 6s ease-in-out infinite 1s' }}
        >
          &lt;/&gt;
        </div>
        <div
          className="absolute bottom-32 left-[20%] text-[#2ECC71]/10 text-4xl font-mono"
          style={{ animationDelay: '2s', animation: 'float 6s ease-in-out infinite 2s' }}
        >
          [0x]
        </div>
        <div
          className="absolute top-1/3 right-[8%] text-[#00CED1]/10 text-3xl font-mono"
          style={{ animationDelay: '3s', animation: 'float 6s ease-in-out infinite 3s' }}
        >
          {'>>>'}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#00CED1]/20 bg-[#00CED1]/5 text-[#00CED1] text-xs font-mono tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
          AVAILABLE FOR DEEP-TECH PROJECTS
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
          <span className="text-white">Deep-Tech Product Engineer</span>
          <br />
          <span className="text-gradient mt-2 block">
            Building AI Systems, Robotics Prototypes
            <br className="hidden sm:block" />{' '}
            &amp; Intelligent Digital Products
          </span>
        </h1>

        {/* Typing role */}
        <div className="h-8 mb-8">
          <span className="text-[#00CED1] font-mono text-lg">
            {'> '}
            {displayText}
            <span className="inline-block w-[2px] h-5 bg-[#00CED1] ml-1 animate-pulse" />
          </span>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-[#8892A8] max-w-3xl mx-auto mb-12 leading-relaxed">
          I&apos;m{' '}
          <span className="text-white font-semibold">Ariful Islam</span>, an
          engineering-focused builder from{' '}
          <span className="text-[#00CED1]">Bangladesh</span> working across
          software, AI, electronics, embedded systems, mechanical concepts, and
          underwater robotics research.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-[#00CED1] to-[#0066FF] text-[#06080D] font-bold rounded-xl hover:shadow-xl hover:shadow-[#00CED1]/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            Explore My Work
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-[#1A1F2E] text-white font-semibold rounded-xl hover:border-[#00CED1]/40 hover:bg-[#00CED1]/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-[#1A1F2E] text-white font-semibold rounded-xl hover:border-[#00CED1]/40 hover:bg-[#00CED1]/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Contact Engineer Arif
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8892A8]/50">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00CED1]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
