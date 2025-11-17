const siteAddress = process.env.NEXT_PUBLIC_SITE_ADDRESS || "http://ariful.io/";

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  href?: string;
  repo?: string;
  year?: string;
  featured?: boolean;
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "ariful.io – Personal Website",
    description:
      "My personal portfolio built with Next.js, TypeScript, and Tailwind CSS, showcasing my work and experiments.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://ariful.io",
    repo: "https://github.com/arifulbgt4/ariful.io",
    year: "2024",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking.",
    techStack: ["React", "Next.js", "Node.js", "MongoDB"],
    href: "https://example.com/ecommerce",
    repo: "https://github.com/arifulbgt4/ecommerce-platform",
    year: "2023",
    featured: true,
  },
  {
    title: "Real-time Chat Application",
    description:
      "Built a scalable real-time messaging application with WebSocket support, user presence tracking, and message history.",
    techStack: ["React", "Node.js", "Socket.io", "Redis"],
    repo: "https://github.com/arifulbgt4/chat-app",
    year: "2023",
    featured: true,
  },
  {
    title: "Dashboard Analytics Platform",
    description:
      "Comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts.",
    techStack: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    href: "https://example.com/dashboard",
    year: "2023",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative project management tool with drag-and-drop boards, team collaboration, and deadline tracking.",
    techStack: ["Next.js", "TypeScript", "React DnD", "PostgreSQL"],
    year: "Nov 2025",
    featured: false,
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with 7-day forecasts, location-based search, and animated weather icons.",
    techStack: ["React", "TypeScript", "OpenWeather API"],
    href: "https://example.com/weather",
    year: "2022",
  },
  {
    title: "Blog & CMS Platform",
    description:
      "Full-stack blogging platform with markdown support, SEO optimization, and content management system.",
    techStack: ["Next.js", "TypeScript", "MDX", "Tailwind CSS"],
    href: "https://example.com/blog",
    repo: "https://github.com/arifulbgt4/blog-platform",
    year: "2022",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Centralized dashboard for managing multiple social media accounts with analytics and scheduled posting features.",
    techStack: ["React", "Node.js", "GraphQL", "MongoDB"],
    year: "Oct 2025",
    featured: false,
  },
  {
    title: "Music Player App",
    description:
      "Modern music streaming application with playlist management, audio visualization, and custom equalizer settings.",
    techStack: ["React", "TypeScript", "Web Audio API"],
    href: "https://example.com/music",
    year: "2021",
  },
  {
    title: "Fitness Tracking App",
    description:
      "Health and fitness tracker with workout plans, progress tracking, calorie counter, and achievement system.",
    techStack: ["React Native", "TypeScript", "Firebase"],
    year: "2021",
  },
  {
    title: "Open Source Contributions",
    description:
      "A collection of fixes, features, and improvements I have contributed to various open source projects.",
    techStack: ["React", "Next.js", "Node.js"],
    href: "https://github.com/arifulbgt4?tab=repositories",
    repo: "https://github.com/arifulbgt4",
    year: "2020 – Present",
    featured: true,
  },
  {
    title: "Labs & Experiments",
    description:
      "Small experimental projects from my lab section where I play with new ideas, tools, and animations.",
    techStack: ["Three.js", "Canvas", "UI Experiments"],
    href: "/lab",
    year: "Aug 2025",
    featured: true,
  },
];

export const siteConfig = {
  name: "Experienced Senior Frontend Engineer | JavaScript, React.js, Next.js Expert",
  shortName: "Experienced Senior Frontend Engineer",
  url: siteAddress,
  ogImage: `${siteAddress}opengraph-image`,
  description:
    "Passionate senior frontend engineer specializing in JavaScript, React.js, Next.js, and Node.js. Transforming ideas into seamless, user-centric experiences. Let's build the future together.",
  links: {
    github: "https://github.com/arifulbgt4",
  },
  keywords: [
    "Frontend Engineer",
    "JavaScript Developer",
    "React.js Specialist",
    "Next.js Expert",
    "Senior Web Developer",
    "User-Centric Design",
    "UI/UX Enthusiast",
    "Node.js Developer",
    "Web Application Architect",
    "Code Refactoring Pro",
  ],
  author: "ariful",
  creator: "ariful",
};
