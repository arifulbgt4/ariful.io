export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-[#1A1F2E]">
      <div className="site-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#00CED1] to-[#0066FF] flex items-center justify-center font-bold text-white text-xs font-mono">
              EA
            </div>
            <div>
              <span className="text-white font-semibold text-sm">
                Engineer Arif
              </span>
              <span className="block text-[10px] text-[#00CED1]/40 font-mono tracking-widest">
                DEEP-TECH BUILDER
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {[
              { label: 'GitHub', href: 'https://github.com/arifulbgt4' },
              { label: 'Email', href: 'mailto:arifulbgt4@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm text-[#8892A8] hover:text-[#00CED1] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#8892A8]/50 font-mono">
            © {currentYear} Ariful Islam
          </p>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#8892A8]/30 font-mono">
            Building intelligent software, AI-powered systems, and robotics
            prototypes that connect the digital and physical world.
          </p>
        </div>
      </div>
    </footer>
  );
}
