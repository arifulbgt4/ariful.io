export const siteConfig = {
  name: 'Ariful Islam',
  brandName: 'Engineer Arif',
  url: 'https://ariful.io',
  email: 'arifulbgt4@gmail.com',
  location: 'Dhaka, Bangladesh',
  availability: 'Available for selected remote projects',
  headline: 'Software engineer building SaaS, AI systems, and connected products',
  description:
    'Ariful Islam is a software engineer in Dhaka helping startups and product teams build production-ready SaaS platforms, AI features, backend systems, and connected-product prototypes.',
  social: {
    github: 'https://github.com/arifulbgt4',
    linkedin: 'https://www.linkedin.com/in/ariful25278',
  },
  proof: [
    { value: '40+', label: 'public repositories' },
    { value: '500+', label: 'GitHub followers' },
    { value: 'Since 2016', label: 'building in public' },
    { value: 'Worldwide', label: 'remote collaboration' },
  ],
} as const;

export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  idealFor: string;
  deliverables: string[];
  technologies: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: 'saas-product-engineering',
    eyebrow: '01 / Product engineering',
    title: 'SaaS & Web Product Engineering',
    shortTitle: 'SaaS products',
    summary:
      'From a focused MVP to a production platform: product architecture, polished interfaces, secure authentication, billing, dashboards, and deployment.',
    idealFor:
      'Founders and product teams that need an experienced engineering partner to turn a validated idea or an underperforming product into dependable software.',
    deliverables: [
      'Technical discovery and delivery roadmap',
      'Responsive Next.js or React product interface',
      'Authentication, roles, billing, and product workflows',
      'Database and API architecture',
      'Testing, observability, deployment, and handover',
    ],
    technologies: ['TypeScript', 'Next.js', 'React', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Stripe'],
    process: [
      'Clarify the user, business goal, constraints, and success signal.',
      'Define the smallest production-worthy scope and system boundaries.',
      'Build in reviewable milestones with working software at each stage.',
      'Launch, measure, document, and plan the next highest-value iteration.',
    ],
    faqs: [
      {
        question: 'Can you improve an existing SaaS product?',
        answer:
          'Yes. The engagement can start with an architecture and UX audit, then focus on the highest-risk or highest-value area without forcing a complete rewrite.',
      },
      {
        question: 'Do you work with early-stage founders?',
        answer:
          'Yes. A useful starting point is a clear problem, target user, and decision-maker. I can help reduce the first release to a testable, maintainable scope.',
      },
      {
        question: 'Will the product be documented for another team?',
        answer:
          'Yes. Architecture decisions, environment setup, deployment steps, and operational notes are part of the handover.',
      },
    ],
  },
  {
    slug: 'ai-integration-automation',
    eyebrow: '02 / Applied AI',
    title: 'AI Integration & Workflow Automation',
    shortTitle: 'AI & automation',
    summary:
      'Practical AI features built around real workflows: LLM integration, RAG, semantic search, tool-using agents, and human-reviewed automation.',
    idealFor:
      'Teams that have a specific knowledge, support, operations, or content workflow and need AI to improve it without creating an unreliable black box.',
    deliverables: [
      'AI use-case and data-readiness assessment',
      'Provider-agnostic LLM integration',
      'RAG, embeddings, vector search, and evaluation flows',
      'Tool-using agents with permission boundaries',
      'Review queues, feedback loops, cost controls, and monitoring',
    ],
    technologies: ['LLM APIs', 'RAG', 'Embeddings', 'Vector search', 'MCP', 'Ollama', 'TypeScript', 'Python'],
    process: [
      'Define the decision or task AI should assist, including failure costs.',
      'Prototype against representative data and establish a baseline.',
      'Add evaluation, observability, fallbacks, and human approval points.',
      'Integrate into the existing product and monitor quality and cost.',
    ],
    faqs: [
      {
        question: 'Do you build AI agents?',
        answer:
          'Yes, when an agent is justified by the workflow. For deterministic tasks, a simpler automation is usually cheaper, faster, and easier to operate.',
      },
      {
        question: 'Can the system use a local model?',
        answer:
          'Yes. Local or OpenAI-compatible runtimes such as Ollama can be evaluated when privacy, latency, hardware, and model quality make that tradeoff sensible.',
      },
      {
        question: 'How do you reduce hallucinations?',
        answer:
          'The design combines scoped context, retrieval, structured outputs, validation, explicit uncertainty, evaluation datasets, and human review for consequential actions.',
      },
    ],
  },
  {
    slug: 'backend-api-engineering',
    eyebrow: '03 / Systems engineering',
    title: 'Backend, API & Realtime Systems',
    shortTitle: 'Backend systems',
    summary:
      'Maintainable APIs and data systems for products that need secure access, realtime updates, third-party integrations, and room to grow.',
    idealFor:
      'Product teams facing fragile integrations, slow feature delivery, unclear data boundaries, or a backend that no longer matches how the business works.',
    deliverables: [
      'Domain and data-model design',
      'REST, GraphQL, webhook, and WebSocket APIs',
      'Authentication, authorization, and audit trails',
      'Payment and third-party integrations',
      'Migration, test, monitoring, and deployment strategy',
    ],
    technologies: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'MySQL', 'MongoDB', 'GraphQL', 'WebSocket'],
    process: [
      'Map current workflows, consumers, data ownership, and failure modes.',
      'Choose explicit boundaries and contracts before implementation.',
      'Ship incrementally with compatibility and migration paths.',
      'Instrument the critical paths and document operating procedures.',
    ],
    faqs: [
      {
        question: 'Can you integrate with an existing frontend?',
        answer:
          'Yes. API contracts and migration sequencing can be designed around current consumers to minimize disruption.',
      },
      {
        question: 'Do you support realtime product features?',
        answer:
          'Yes. I work with WebSocket-based updates, notifications, collaborative flows, and event-driven integration patterns where they are operationally justified.',
      },
      {
        question: 'Can you modernize a legacy backend?',
        answer:
          'Yes. I prefer measured extraction and replacement with observability and rollback paths over a high-risk all-at-once rewrite.',
      },
    ],
  },
  {
    slug: 'connected-product-prototyping',
    eyebrow: '04 / Physical + digital',
    title: 'Connected Product Prototyping',
    shortTitle: 'Connected products',
    summary:
      'Software-led prototypes connecting sensors, embedded controllers, realtime dashboards, and remote-control experiences.',
    idealFor:
      'Research teams and founders validating an IoT, monitoring, robotics, or hardware-enabled product before committing to manufacturing.',
    deliverables: [
      'Prototype architecture and component plan',
      'ESP32 or Raspberry Pi integration',
      'Sensor, camera, motor, and communication workflows',
      'Realtime web or mobile monitoring interface',
      'Test findings, technical risks, and next-stage roadmap',
    ],
    technologies: ['ESP32', 'Raspberry Pi', 'Arduino', 'Sensors', 'WebSocket', 'React Native', 'IoT', 'Docker'],
    process: [
      'Identify the riskiest physical and software assumptions.',
      'Design a bench prototype that answers those questions quickly.',
      'Connect device telemetry and controls to a usable interface.',
      'Document results, limitations, safety concerns, and the next prototype.',
    ],
    faqs: [
      {
        question: 'Do you manufacture production hardware?',
        answer:
          'No. My focus is software-led research and prototyping. Production electronics, certification, and manufacturing require specialist partners.',
      },
      {
        question: 'Can you build a dashboard for an existing device?',
        answer:
          'Yes, provided the device exposes a workable protocol or API. The first step is reviewing telemetry, control, security, and connectivity constraints.',
      },
      {
        question: 'Is underwater robotics production-ready?',
        answer:
          'The underwater monitoring work shown here is active R&D, not a production product. That distinction is intentional and important for responsible engineering.',
      },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  status: string;
  year: string;
  tags: string[];
  highlights: string[];
  repository?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'muistory-design-system',
    title: 'MuiStory Design System',
    category: 'Open-source frontend engineering',
    summary:
      'A Next.js design-system starter that connects MUI theming with Storybook and Chromatic for isolated component review.',
    challenge:
      'Product teams need a reliable way to develop and review branded UI components without coupling every change to the full application.',
    approach:
      'Created a reusable project structure around MUI Core theming, Storybook component stories, and hosted visual review through Chromatic.',
    outcome:
      'A public, reusable implementation with source code and a hosted component preview that demonstrates design-system workflow decisions.',
    status: 'Public project',
    year: '2024',
    tags: ['Next.js', 'TypeScript', 'MUI', 'Storybook', 'Chromatic'],
    highlights: ['Reusable theming foundation', 'Isolated component development', 'Hosted visual review'],
    repository: 'https://github.com/arifulbgt4/MuiStory',
    liveUrl: 'https://dev--647c84907213dc4172ffdcde.chromatic.com',
    featured: true,
  },
  {
    slug: 'otask-developer-platform',
    title: 'Otask',
    category: 'SaaS product engineering',
    summary:
      'A developer collaboration platform concept for publishing repository issues, coordinating solutions, and supporting paid or open-source workflows.',
    challenge:
      'Repository issues, contributors, communication, and optional payments often live across disconnected tools, making collaboration difficult to coordinate.',
    approach:
      'Designed a GitHub-connected product flow covering repository import, issue lifecycle, contributor collaboration, notifications, and payment concepts.',
    outcome:
      'The product remains in development. The current work demonstrates product decomposition, integration planning, and full-stack SaaS architecture rather than claiming a completed launch.',
    status: 'In development',
    year: '2024–Present',
    tags: ['Next.js', 'GitHub API', 'SaaS', 'Stripe', 'Realtime'],
    highlights: ['GitHub-connected workflow', 'Issue lifecycle design', 'Paid and open-source collaboration paths'],
    featured: true,
  },
  {
    slug: 'underwater-monitoring-research',
    title: 'Underwater Monitoring R&D',
    category: 'Connected-product research',
    summary:
      'Long-term research into an underwater monitoring system for shrimp farming using video, water-quality sensing, remote control, and software-assisted analysis.',
    challenge:
      'Aquaculture monitoring combines difficult physical constraints—waterproofing, visibility, power, communication, placement, and maintenance—with the need for understandable live data.',
    approach:
      'Explored system architecture across ESP32 and Raspberry Pi control, cameras, sensors, tethering, motor layouts, web/mobile interfaces, and future AI-assisted analysis.',
    outcome:
      'An active research direction with documented system concepts and prototype questions. It is presented as R&D, not as a field-validated commercial system.',
    status: 'Active R&D',
    year: '2023–Present',
    tags: ['ESP32', 'Raspberry Pi', 'Sensors', 'IoT', 'Robotics'],
    highlights: ['Physical-digital architecture', 'Remote monitoring concepts', 'Explicit prototype-risk mapping'],
    featured: true,
  },
  {
    slug: 'project-showcase-platform',
    title: 'Project Showcase',
    category: 'Web product',
    summary:
      'A public TypeScript project for presenting work through a focused, deployable web experience.',
    challenge:
      'A showcase needs clear information hierarchy, responsive behavior, and a deployment path that makes updates easy to publish.',
    approach:
      'Built the experience as a TypeScript web application and deployed a public version for direct review.',
    outcome:
      'The source repository and live deployment provide a verifiable example of frontend delivery and deployment workflow.',
    status: 'Live',
    year: '2025',
    tags: ['TypeScript', 'React', 'Responsive UI', 'Vercel'],
    highlights: ['Public source', 'Live deployment', 'Responsive presentation'],
    repository: 'https://github.com/arifulbgt4/project-showcase',
    liveUrl: 'https://project-showcase-azure.vercel.app',
    featured: true,
  },
  {
    slug: 'graphql-todo-application',
    title: 'GraphQL Todo Application',
    category: 'API engineering',
    summary:
      'A TypeScript application exploring GraphQL-based client and server data flows through a compact product domain.',
    challenge:
      'GraphQL systems need a clear schema, predictable client state, and boundaries that keep a simple query layer from becoming accidental complexity.',
    approach:
      'Used a small task-management domain to exercise schema-driven development and typed product integration.',
    outcome:
      'A public reference implementation focused on GraphQL and TypeScript application structure.',
    status: 'Public project',
    year: '2025',
    tags: ['GraphQL', 'TypeScript', 'API', 'Application architecture'],
    highlights: ['Schema-driven workflow', 'Typed integration', 'Public source'],
    repository: 'https://github.com/arifulbgt4/graphql-todo-app',
  },
  {
    slug: 'local-llm-workflows',
    title: 'Local LLM Workflows',
    category: 'AI engineering experiments',
    summary:
      'Experiments in running and integrating local models for private, developer-controlled AI workflows.',
    challenge:
      'Local inference changes the constraints around privacy, model quality, latency, hardware capacity, and provider compatibility.',
    approach:
      'Explored TypeScript-based model-running workflows and OpenAI-compatible local runtime concepts with Ollama.',
    outcome:
      'A public experimentation repository used to develop practical understanding of local-model integration tradeoffs.',
    status: 'Experiment',
    year: '2025',
    tags: ['Ollama', 'LLM', 'TypeScript', 'Local AI'],
    highlights: ['Local-first exploration', 'Provider-compatible concepts', 'Developer tooling focus'],
    repository: 'https://github.com/arifulbgt4/ollama-model-run',
  },
];

export const engineeringDomains = [
  {
    title: 'Frontend',
    skills: ['TypeScript', 'React', 'Next.js', 'React Native', 'Storybook', 'Tailwind CSS', 'MUI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express', 'REST', 'GraphQL', 'WebSocket', 'Webhooks'],
  },
  {
    title: 'Data',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Supabase', 'Vector search'],
  },
  {
    title: 'Applied AI',
    skills: ['LLM integration', 'RAG', 'Embeddings', 'AI agents', 'MCP', 'Ollama'],
  },
  {
    title: 'Cloud & delivery',
    skills: ['Docker', 'AWS', 'Azure', 'Vercel', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: 'Connected systems',
    skills: ['ESP32', 'Raspberry Pi', 'Sensors', 'Camera modules', 'Realtime control', 'IoT prototyping'],
  },
];

export const engagementSteps = [
  {
    number: '01',
    title: 'Fit & discovery',
    description: 'We clarify the problem, users, constraints, current system, and what a successful engagement must change.',
  },
  {
    number: '02',
    title: 'Scope & architecture',
    description: 'You receive an explicit scope, milestones, risks, technical direction, and the decisions needed before delivery.',
  },
  {
    number: '03',
    title: 'Build & review',
    description: 'Work ships in small, demonstrable increments with visible tradeoffs, code review, and regular product feedback.',
  },
  {
    number: '04',
    title: 'Launch & handover',
    description: 'The release includes verification, deployment, operating notes, documentation, and a practical next-step roadmap.',
  },
];
