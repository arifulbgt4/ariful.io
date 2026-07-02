'use client';

import { useInViewOnce } from '@/hooks/useInViewOnce';

const services = [
  {
    icon: 'AI',
    title: 'AI-Powered Product Development',
    desc: 'Custom AI agents, local LLM workflows, and intelligent systems that automate complex workflows and extract insights from your data.',
  },
  {
    icon: 'SaaS',
    title: 'SaaS & Digital Platform Architecture',
    desc: 'Scalable micro-services architecture, API design, database optimization, and complete SaaS platform deployment with CI/CD.',
  },
  {
    icon: 'Robotics',
    title: 'Robotics Prototype Planning',
    desc: 'End-to-end robotics development from concept and mechanical design to electronics and embedded systems integration.',
  },
  {
    icon: 'IoT',
    title: 'IoT & Sensor-Based System Prototyping',
    desc: 'Internet of Things systems with sensor integration, real-time monitoring, and cloud-connected device management.',
  },
  {
    icon: 'Embedded',
    title: 'Embedded Device Control Interfaces',
    desc: 'Custom control interfaces for embedded devices, featuring WebSocket communication, mobile app integration, and real-time control.',
  },
  {
    icon: 'Strategy',
    title: 'Technical Product Strategy',
    desc: 'Comprehensive product strategy consulting, technical roadmapping, and MVP architecture design for deep-tech startups.',
  },
  {
    icon: 'Web',
    title: 'Web & Mobile App Engineering',
    desc: 'Modern Next.js applications, React Native mobile apps, and progressive web applications with focus on performance.',
  },
  {
    icon: 'Integration',
    title: 'Hardware-Software Integration',
    desc: 'Seamless integration of hardware components with software systems, featuring ESP32, Raspberry Pi, and custom electronics prototyping.',
  },
];

export default function Services() {
  const { ref, isVisible: visible } = useInViewOnce<HTMLDivElement>(0.05);

  return (
    <section id="services" className="section-shell bg-[#080B14]">
      <div className="site-container" ref={ref}>
        {/* Section header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-mono text-[#00CED1]/60 tracking-[0.3em] uppercase mb-4 block">
            {'// engineering_services'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Engineering <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8892A8] max-w-2xl mx-auto">
            End-to-end deep-tech engineering solutions from concept to production.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-5 sm:p-6 rounded-xl bg-[#0B0F19] border border-[#1A1F2E] hover:border-[#00CED1]/30 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00CED1]/10 to-[#0066FF]/10 flex items-center justify-center mb-4 group-hover:from-[#00CED1]/20 group-hover:to-[#0066FF]/20 transition-all">
                <div className="font-mono font-bold text-[#00CED1] text-sm">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-[#00CED1] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#8892A8] text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div
          className={`mt-10 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#00CED1]/5 to-[#0066FF]/5 border border-[#00CED1]/10 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to Build Something Complex?
              </h3>
              <p className="text-[#8892A8]">
                I specialize in bridging software, AI, and hardware to create end-to-end technology solutions.
              </p>
            </div>
            <a
              href="#contact"
              className="w-full md:w-auto shrink-0 px-6 py-3 bg-[#00CED1] text-[#06080D] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00CED1]/20 transition-all duration-300 hover:scale-105 text-center"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
