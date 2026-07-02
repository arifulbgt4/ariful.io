'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Domains', href: '#domains' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#06080D]/90 backdrop-blur-xl border-b border-[#00CED1]/10 shadow-lg shadow-[#00CED1]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" aria-label="Engineer Arif — Home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00CED1] to-[#0066FF] flex items-center justify-center font-bold text-white text-sm font-mono tracking-tight group-hover:shadow-lg group-hover:shadow-[#00CED1]/30 transition-shadow duration-300">
            EA
          </div>
          <div className="hidden sm:block">
            <span className="text-white font-semibold text-sm tracking-wide">
              Engineer Arif
            </span>
            <span className="block text-[10px] text-[#00CED1]/60 font-mono tracking-widest uppercase">
              Deep-Tech Builder
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-[#8892A8] hover:text-[#00CED1] transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 text-sm font-semibold text-[#06080D] bg-gradient-to-r from-[#00CED1] to-[#0066FF] rounded-lg hover:shadow-lg hover:shadow-[#00CED1]/25 transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`w-6 h-0.5 bg-[#00CED1] transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#00CED1] transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#00CED1] transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`lg:hidden overflow-y-auto transition-all duration-300 ${
          mobileOpen
            ? 'visible max-h-[calc(100svh-4.25rem)] opacity-100'
            : 'invisible max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#06080D]/95 backdrop-blur-xl border-t border-[#00CED1]/10 px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm text-[#8892A8] hover:text-[#00CED1] transition-colors font-medium border-b border-[#1A1F2E]/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 py-3 text-sm font-semibold text-center text-[#06080D] bg-gradient-to-r from-[#00CED1] to-[#0066FF] rounded-lg"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
