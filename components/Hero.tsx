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
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 30);
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
      className="relative min-h-[100svh] circuit-grid overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* Ambient glow orbs */}
      <div aria-hidden="true" className="absolute top-1/4 left-1/4 w-72 sm:w-96 aspect-square bg-[#00CED1]/5 rounded-full blur-[128px]" />
      <div aria-hidden="true" className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 aspect-square bg-[#0066FF]/5 rounded-full blur-[128px]" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] aspect-square bg-[#00CED1]/[0.02] rounded-full blur-[200px]" />

      {/* Floating tech icons */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
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

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Main heading */}
        <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-black leading-[1.08] mb-6 text-balance">
          <span className="text-white">Deep-Tech Product Engineer</span>
          <br />
          <span className="text-gradient mt-2 block">
            Building AI Systems, Robotics Prototypes
            <br className="hidden sm:block" />{' '}
            &amp; Intelligent Digital Products
          </span>
        </h1>

        {/* Typing role */}
        <div className="min-h-12 sm:min-h-8 mb-6 sm:mb-8 flex items-start justify-center">
          <span className="text-[#00CED1] font-mono text-sm sm:text-lg break-words">
            {'> '}
            {displayText}
            <span className="inline-block w-[2px] h-5 bg-[#00CED1] ml-1 animate-pulse" />
          </span>
        </div>

        {/* Description */}
        <p className="text-base sm:text-xl text-[#8892A8] max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          I&apos;m{' '}
          <span className="text-white font-semibold">Ariful Islam</span>, an
          engineering-focused builder from{' '}
          <span className="text-[#00CED1]">Bangladesh</span> working across
          software, AI, electronics, embedded systems, mechanical concepts, and
          underwater robotics research.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#projects"
            className="group min-h-12 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#00CED1] to-[#0066FF] text-[#06080D] font-bold rounded-xl hover:shadow-xl hover:shadow-[#00CED1]/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
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
            href="#contact"
            className="min-h-12 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#1A1F2E] text-white font-semibold rounded-xl hover:border-[#00CED1]/40 hover:bg-[#00CED1]/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Contact Engineer Arif
          </a>
        </div>

        {/* Scroll indicator */}
        <div aria-hidden="true" className="hidden lg:flex absolute -bottom-24 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#8892A8]/50">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00CED1]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
