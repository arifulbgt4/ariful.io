'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Insights', href: '/blog' },
  { label: 'About', href: '/#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-white/10 bg-[#070A0F]/90 shadow-2xl shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="site-container flex h-[4.75rem] items-center justify-between" aria-label="Primary navigation">
        <Link href="/" aria-label="Ariful Islam — home" className="group flex min-h-11 items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 font-mono text-sm font-black text-cyan-200 transition group-hover:border-cyan-300/50">
            AI
          </span>
          <span>
            <span className="block text-sm font-bold tracking-wide text-white">Ariful Islam</span>
            <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Product Engineer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="/hire#project-brief" className="button-primary ml-3 px-5 py-2.5 text-sm">
            Start a project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] lg:hidden"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-px bg-cyan-200 transition ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-px bg-cyan-200 transition ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`h-px bg-cyan-200 transition ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? 'visible max-h-[calc(100svh-4.75rem)] border-t border-white/10 opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <div className="site-container flex flex-col gap-1 bg-[#070A0F]/95 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/hire#project-brief" onClick={() => setMobileOpen(false)} className="button-primary mt-3 text-center">
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
}
