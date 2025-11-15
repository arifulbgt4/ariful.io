"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  size: number;
  opacity: number;
}

const techStack = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Express",
  "NestJS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma",
  "Supabase",
  "WebSocket",
  "MCP Server",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Vercel",
  "AI/LLM",
  "RAG",
  "Vector Search",
];

export default function TechStackCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particles: Particle[] = techStack.map((text) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      text,
      size: 12 + Math.random() * 8,
      opacity: 0.4 + Math.random() * 0.6,
    }));

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get theme colors from CSS variables
      const computedStyle = getComputedStyle(document.documentElement);
      const isDark = document.documentElement.classList.contains("dark");
      const textColor = isDark
        ? "rgba(255, 255, 255, 0.8)"
        : "rgba(0, 0, 0, 0.8)";
      const accentColor = isDark
        ? "rgba(76, 142, 218, 0.6)"
        : "rgba(59, 130, 246, 0.6)";

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw text
        ctx.font = `${particle.size}px Inter, system-ui, sans-serif`;
        ctx.fillStyle = textColor;
        ctx.globalAlpha = particle.opacity;
        ctx.fillText(particle.text, particle.x, particle.y);

        // Draw connections to nearby particles
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = accentColor;
            ctx.globalAlpha = (1 - distance / 150) * 0.3;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ minHeight: "300px" }}
      />
      <div className="relative z-10 space-y-6 p-4 backdrop-blur-sm">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">🚀 Hi there!</h2>
          <p className="text-lg text-foreground/90">
            I&apos;m{" "}
            <span className="font-semibold text-primary">Ariful Islam</span>, a{" "}
            <span className="font-semibold text-primary">
              Software Engineer
            </span>{" "}
            passionate about building scalable systems, intelligent
            applications, and modern web experiences.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">🔥 What I&apos;m working on</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                Engineering with modern technologies:{" "}
                <span className="font-mono text-xs text-foreground/80">
                  TypeScript • JavaScript • Python • React • Next.js • React
                  Native • Node.js • Express • NestJS
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                Databases & backend stack:{" "}
                <span className="font-mono text-xs text-foreground/80">
                  PostgreSQL • MySQL • MongoDB • Prisma • Supabase
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                Realtime & systems:{" "}
                <span className="font-mono text-xs text-foreground/80">
                  WebSocket • MCP Server (Model Context Protocol)
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                Exploring <strong>AI Engineering</strong> — LLM integration,
                embeddings, RAG pipelines, vector search & real-time inference
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Contributing to Open Source</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                Active on{" "}
                <a
                  href="https://www.linkedin.com/in/ariful25278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>{" "}
                and{" "}
                <a
                  href="https://ariful.io"
                  className="text-primary hover:underline"
                >
                  ariful.io
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
