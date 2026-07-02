'use client';

import { useEffect, useRef, useState } from 'react';

const projectTypes = [
  'AI Product',
  'SaaS Platform',
  'Robotics Prototype',
  'IoT / Embedded System',
  'Automation System',
  'Technical Consulting',
  'Other',
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-mono text-[#00CED1]/60 tracking-[0.3em] uppercase mb-4 block">
            // get_in_touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Let&apos;s Build Something{' '}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-[#8892A8] max-w-2xl mx-auto">
            Have an idea that combines software, AI, hardware, or robotics?
            Let&apos;s build it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-6 rounded-xl bg-[#0B0F19] border border-[#1A1F2E]">
              <h3 className="text-white font-bold mb-4">Direct Contact</h3>
              <a
                href="mailto:arifulbgt4@gmail.com"
                className="flex items-center gap-3 text-[#8892A8] hover:text-[#00CED1] transition-colors mb-3"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>arifulbgt4@gmail.com</span>
              </a>
              <a
                href="https://github.com/arifulbgt4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#8892A8] hover:text-[#00CED1] transition-colors mb-3"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>github.com/arifulbgt4</span>
              </a>
              <div className="flex items-center gap-3 text-[#8892A8]">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>@arifulbgt4</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-[#00CED1]/[0.05] to-[#0066FF]/[0.05] border border-[#00CED1]/10">
              <h3 className="text-white font-bold mb-2">Quick Info</h3>
              <p className="text-[#8892A8] text-sm">
                Based in Bangladesh · Available worldwide for deep-tech projects
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 p-8 rounded-2xl bg-[#0B0F19] border border-[#1A1F2E] transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-mono text-[#8892A8] mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#06080D] border border-[#1A1F2E] text-white placeholder:text-[#8892A8]/50 focus:outline-none focus:border-[#00CED1]/50 focus:ring-1 focus:ring-[#00CED1]/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#8892A8] mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#06080D] border border-[#1A1F2E] text-white placeholder:text-[#8892A8]/50 focus:outline-none focus:border-[#00CED1]/50 focus:ring-1 focus:ring-[#00CED1]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-mono text-[#8892A8] mb-2 uppercase tracking-wider">
                Project Type
              </label>
              <select className="w-full px-4 py-3 rounded-lg bg-[#06080D] border border-[#1A1F2E] text-white focus:outline-none focus:border-[#00CED1]/50 focus:ring-1 focus:ring-[#00CED1]/20 transition-all appearance-none">
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-mono text-[#8892A8] mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#06080D] border border-[#1A1F2E] text-white placeholder:text-[#8892A8]/50 focus:outline-none focus:border-[#00CED1]/50 focus:ring-1 focus:ring-[#00CED1]/20 transition-all resize-none"
                placeholder="Tell me about your project, idea, or collaboration..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#00CED1] to-[#0066FF] text-[#06080D] font-bold rounded-xl hover:shadow-xl hover:shadow-[#00CED1]/20 transition-all duration-300 hover:scale-[1.02]"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
