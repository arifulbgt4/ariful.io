export const siteConfig = {
  name: 'Ariful Islam',
  brandName: 'Engineer Arif',
  url: 'https://ariful.io',
  email: 'arifulbgt4@gmail.com',
  location: 'Dhaka, Bangladesh',
  availability: 'Available for selected product engagements',
  headline: 'End-to-End Product Engineer for Software, AI & Connected/IoT Products',
  description:
    'Ariful Islam helps founders and teams take software, AI-enabled, and connected/IoT products from discovery and architecture through prototyping, build, launch, and handover.',
  social: {
    github: 'https://github.com/arifulbgt4',
    linkedin: 'https://www.linkedin.com/in/ariful25278',
  },
  timezone: 'Asia/Dhaka (UTC+6)',
  proof: [
    { value: 'Idea → release', label: 'end-to-end ownership' },
    { value: 'Software · AI · IoT', label: 'product lanes' },
    { value: 'Reviewable', label: 'milestones and evidence' },
    { value: 'Worldwide', label: 'remote collaboration' },
  ],
} as const;

export type ProductLaneId = 'software' | 'ai-enabled' | 'connected-iot';

export const productLanes: {
  id: ProductLaneId;
  eyebrow: string;
  title: string;
  summary: string;
  outcomes: string[];
}[] = [
  {
    id: 'software',
    eyebrow: '01 / Software products',
    title: 'Software products that support real operations',
    summary: 'Customer-facing and internal products spanning interfaces, backend systems, data, integrations, billing, and deployment.',
    outcomes: ['SaaS and web platforms', 'Marketplaces and commerce systems', 'APIs, dashboards, and realtime workflows'],
  },
  {
    id: 'ai-enabled',
    eyebrow: '02 / AI-enabled products',
    title: 'AI that fits a measurable product workflow',
    summary: 'AI features, retrieval, agents, and automation designed around evaluation, permissions, human review, cost, and operational fallback.',
    outcomes: ['AI-assisted product workflows', 'RAG, search, and knowledge tools', 'Review-gated automation and local-model options'],
  },
  {
    id: 'connected-iot',
    eyebrow: '03 / Connected products',
    title: 'Connected and IoT products that join device and software evidence',
    summary: 'Software-led prototypes linking sensors, embedded controllers, telemetry, dashboards, remote control, and staged physical validation.',
    outcomes: ['Sensor and device prototypes', 'Realtime monitoring and control', 'Evidence-led productization roadmaps'],
  },
];

export type DeliveryStageId =
  | 'discover'
  | 'scope-architecture'
  | 'design-prototype'
  | 'build-integrate'
  | 'verify-launch'
  | 'handover-iterate';

export const deliveryLifecycle: {
  id: DeliveryStageId;
  number: string;
  title: string;
  description: string;
}[] = [
  { id: 'discover', number: '01', title: 'Discover', description: 'Clarify the user, painful workflow, desired change, evidence, constraints, and decision owner.' },
  { id: 'scope-architecture', number: '02', title: 'Scope & architecture', description: 'Define the smallest valuable release, system boundaries, risks, milestones, and acceptance evidence.' },
  { id: 'design-prototype', number: '03', title: 'Design & prototype', description: 'Make the critical experience and uncertain assumptions testable before committing to the full build.' },
  { id: 'build-integrate', number: '04', title: 'Build & integrate', description: 'Deliver the interface, backend, data, AI or device connections in reviewable product slices.' },
  { id: 'verify-launch', number: '05', title: 'Verify & launch', description: 'Test the important paths, deployment, failure states, security boundaries, and operating readiness.' },
  { id: 'handover-iterate', number: '06', title: 'Handover & iterate', description: 'Document decisions and operations, transfer ownership, measure the result, and plan the next release.' },
];

export const profileSummary = {
  title: 'Product engineering at a glance',
  summary:
    'Ariful Islam is an end-to-end product engineer who helps founders and teams shape, prototype, build, verify, launch, and hand over software, AI-enabled, and connected/IoT products.',
  facts: [
    {
      label: 'Primary role',
      value: 'End-to-End Product Engineer',
    },
    {
      label: 'Product lanes',
      value: 'Software products, AI-enabled products, and connected/IoT products',
    },
    {
      label: 'Delivery coverage',
      value: 'Discovery, architecture, prototyping, implementation, integration, verification, launch, and handover',
    },
    {
      label: 'Working model',
      value: 'Direct ownership, reviewable milestones, explicit tradeoffs, evidence, and documented handover',
    },
    {
      label: 'Location and reach',
      value: `${siteConfig.location}; remote collaboration worldwide`,
    },
    {
      label: 'Broader background',
      value: 'Software Engineer, multidisciplinary product builder, and inventor',
    },
    {
      label: 'Public evidence',
      value: 'GitHub profile, selected case studies, public repositories, engineering articles, and service pages',
    },
    {
      label: 'Evidence policy',
      value: 'Concepts, experiments, active R&D, and in-development work are labelled instead of presented as finished production results',
    },
    {
      label: 'Physical-product boundary',
      value: 'Software, integration, and validated prototypes can be owned directly; PCB, certification, and manufacturing use appropriate specialist partners',
    },
  ],
  sourceLinks: [
    {
      label: 'GitHub profile',
      description: 'Public repositories, profile README, contribution history, and engineering evidence.',
      href: siteConfig.social.github,
    },
    {
      label: 'LinkedIn profile',
      description: 'Professional profile and direct business-network contact.',
      href: siteConfig.social.linkedin,
    },
    {
      label: 'Selected work',
      description: 'Case studies with status labels, technology tags, source links, and honest project evidence.',
      href: '/work',
    },
    {
      label: 'Engineering insights',
      description: 'Long-form technical articles with headings, tables where useful, and practical implementation guidance.',
      href: '/blog',
    },
    {
      label: 'Client-fit guide',
      description: 'A concise guide to engagement options, fit signals, and the context needed before starting.',
      href: '/hire',
    },
  ],
  faqs: [
    {
      question: 'Who is Ariful Islam?',
      answer:
        'Ariful Islam is an end-to-end product engineer, Software Engineer, multidisciplinary product builder, and inventor based in Dhaka, Bangladesh and working remotely with clients worldwide.',
    },
    {
      question: 'What does end-to-end product engineering mean here?',
      answer:
        'It means connecting discovery, scope, architecture, product experience, backend and data, AI or device integration, verification, launch, and handover instead of treating each layer as an unrelated task.',
    },
    {
      question: 'What kinds of products can Ariful help build?',
      answer:
        'He works on software products such as SaaS, marketplaces, APIs, dashboards and operations tools; AI-enabled product workflows; and software-led connected or IoT prototypes.',
    },
    {
      question: 'Can Ariful take on both software and connected-product work?',
      answer:
        'Yes, when the engagement is structured around explicit subsystem boundaries and staged evidence. Software, data, AI, telemetry and operator interfaces can be delivered directly while specialist hardware work is coordinated where required.',
    },
    {
      question: 'Does Ariful provide production hardware manufacturing?',
      answer:
        'Not as a solo manufacturing service. Production PCB design, certification, compliance, tooling and manufacturing require appropriately qualified specialist partners and verified acceptance criteria.',
    },
    {
      question: 'At what stage can a client hire Ariful?',
      answer:
        'A client can start at discovery, architecture, prototype validation, active implementation, launch readiness, or improvement of an existing product. The project brief should explain the current stage, desired outcome, main constraint, timeline, and budget range.',
    },
  ],
} as const;

export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  idealFor: string;
  productLanes: ProductLaneId[];
  lifecycle: DeliveryStageId[];
  deliverables: string[];
  technologies: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  evidence?: { title: string; description: string; href: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: 'saas-product-engineering',
    eyebrow: '01 / Product engineering',
    title: 'Software Product Engineering',
    shortTitle: 'Software products',
    summary:
      'Turn a validated problem into a dependable software product spanning experience, backend, data, integrations, deployment, and handover.',
    idealFor:
      'Founders and product teams that need an experienced engineering partner to turn a validated idea or an underperforming product into dependable software.',
    productLanes: ['software'],
    lifecycle: ['discover', 'scope-architecture', 'design-prototype', 'build-integrate', 'verify-launch', 'handover-iterate'],
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
    evidence: [
      {
        title: 'Reusable B2C Marketplace Platform',
        description: 'A product architecture case study covering buyer, catalog, checkout, order, fulfillment, and customization boundaries.',
        href: '/work/reusable-b2c-marketplace-platform',
        label: 'Read the marketplace case study',
      },
      {
        title: 'Otask developer collaboration product',
        description: 'An in-development SaaS case study focused on GitHub-connected issue, contributor, notification, and delivery workflows.',
        href: '/work/otask-developer-platform',
        label: 'Read the Otask case study',
      },
      {
        title: 'Production-ready Next.js SaaS architecture',
        description: 'A practical guide to turning a web interface into an operable software product.',
        href: '/blog/production-ready-nextjs-saas-architecture',
        label: 'Read the architecture guide',
      },
    ],
  },
  {
    slug: 'ai-commerce-platform-engineering',
    eyebrow: '02 / AI commerce systems',
    title: 'AI Commerce Platform Engineering',
    shortTitle: 'AI commerce',
    summary:
      'Design and build controlled commerce platforms spanning supplier ingestion, international offers, AI-assisted operations, checkout, campaigns, and trustworthy analytics.',
    idealFor:
      'Commerce founders and product teams replacing disconnected dropshipping tools, introducing AI into an existing operation, or building a multi-market platform that needs explicit review, data, and deployment boundaries.',
    productLanes: ['software', 'ai-enabled'],
    lifecycle: ['discover', 'scope-architecture', 'design-prototype', 'build-integrate', 'verify-launch', 'handover-iterate'],
    deliverables: [
      'Commerce workflow discovery and platform architecture',
      'Supplier ingestion, normalization, review, and synchronization',
      'Market-specific language, currency, pricing, and checkout flows',
      'Provider-agnostic AI routing with editable, approval-gated output',
      'Creative, campaign, analytics, and operational workflows',
      'Testing, sandbox acceptance plan, deployment, and handover',
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'LLM APIs', 'Supplier APIs', 'Meta Ads', 'Analytics'],
    process: [
      'Map the supplier-to-order workflow, markets, operators, integrations, and costly failure modes.',
      'Define deterministic commerce records and the narrow tasks where AI can safely assist.',
      'Build one reviewable vertical slice before expanding providers, markets, creatives, or campaigns.',
      'Verify customer and admin boundaries, currency integrity, external sandboxes, monitoring, and handover.',
    ],
    faqs: [
      {
        question: 'Can you work on an existing dropshipping or commerce product?',
        answer:
          'Yes. The first step can be an architecture and operations review focused on one expensive bottleneck—supplier data, localization, pricing, AI content, campaign workflow, checkout, or analytics—without requiring a full rebuild.',
      },
      {
        question: 'Will AI publish products, prices, or campaigns automatically?',
        answer:
          'Not by default. Consequential outputs begin as editable drafts with validation, review, approval, audit history, and deliberately bounded publishing. Automation can expand only after a narrow workflow is measured and proven safe.',
      },
      {
        question: 'Can the platform support multiple countries and currencies?',
        answer:
          'Yes. The architecture can preserve market-specific content and approved pricing, carry market context through checkout, and store order currency snapshots so reporting does not combine unlike currencies into misleading totals.',
      },
      {
        question: 'Can different AI providers or local models be used?',
        answer:
          'Yes. A central task router can make provider and model selection configurable while enforcing capability, fallback, validation, cost, and human-approval rules for each workflow.',
      },
    ],
    evidence: [
      {
        title: 'AI Dropshipping Commerce Platform',
        description: 'Core case study covering the implemented supplier, market, AI-control, campaign, checkout, and analytics foundation.',
        href: '/work/ai-dropshipping-commerce-platform',
        label: 'Read the case study',
      },
      {
        title: 'Architecture for an operable AI dropshipping platform',
        description: 'A founder-oriented breakdown of system boundaries, review states, international commerce, and launch acceptance.',
        href: '/blog/how-to-architect-ai-dropshipping-platform',
        label: 'Read the architecture guide',
      },
      {
        title: 'Why consequential AI output needs approval',
        description: 'A practical model for draft, review, approval, audit, and safe publishing across commerce operations.',
        href: '/blog/why-ai-dropshipping-automation-needs-human-approval',
        label: 'Read the control guide',
      },
    ],
  },
  {
    slug: 'ai-integration-automation',
    eyebrow: '03 / Applied AI',
    title: 'AI-Enabled Product Engineering & Automation',
    shortTitle: 'AI & automation',
    summary:
      'Practical AI features built around real workflows: LLM integration, RAG, semantic search, tool-using agents, and human-reviewed automation.',
    idealFor:
      'Teams that have a specific knowledge, support, operations, or content workflow and need AI to improve it without creating an unreliable black box.',
    productLanes: ['ai-enabled', 'software'],
    lifecycle: ['discover', 'scope-architecture', 'design-prototype', 'build-integrate', 'verify-launch', 'handover-iterate'],
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
    evidence: [
      {
        title: 'Local LLM Workflows',
        description: 'A public experiment exploring local inference, privacy, latency, hardware, and OpenAI-compatible integration tradeoffs.',
        href: '/work/local-llm-workflows',
        label: 'Review the local-model experiment',
      },
      {
        title: 'Reliable AI features need evaluation and review',
        description: 'A practical guide to retrieval, agents, evaluation, fallbacks, and human approval in product workflows.',
        href: '/blog/reliable-ai-features-rag-agents-human-review',
        label: 'Read the AI reliability guide',
      },
      {
        title: 'Review-gated AI commerce operations',
        description: 'Product evidence for configurable model routing, persisted drafts, approval boundaries, and auditable outputs.',
        href: '/work/ai-dropshipping-commerce-platform',
        label: 'Read the applied AI case study',
      },
    ],
  },
  {
    slug: 'backend-api-engineering',
    eyebrow: '04 / Systems engineering',
    title: 'Backend, API & Realtime Product Systems',
    shortTitle: 'Backend systems',
    summary:
      'Maintainable APIs and data systems for products that need secure access, realtime updates, third-party integrations, and room to grow.',
    idealFor:
      'Product teams facing fragile integrations, slow feature delivery, unclear data boundaries, or a backend that no longer matches how the business works.',
    productLanes: ['software', 'ai-enabled', 'connected-iot'],
    lifecycle: ['scope-architecture', 'design-prototype', 'build-integrate', 'verify-launch', 'handover-iterate'],
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
    evidence: [
      {
        title: 'GraphQL Todo Application',
        description: 'A compact public reference for schema-driven TypeScript client and server integration.',
        href: '/work/graphql-todo-application',
        label: 'Review the GraphQL reference',
      },
      {
        title: 'AI commerce operating foundation',
        description: 'A larger systems case study spanning supplier records, APIs, data, jobs, checkout, analytics, and external-provider boundaries.',
        href: '/work/ai-dropshipping-commerce-platform',
        label: 'Read the systems case study',
      },
    ],
  },
  {
    slug: 'connected-product-prototyping',
    eyebrow: '05 / Physical + digital',
    title: 'Connected/IoT Product Prototyping',
    shortTitle: 'Connected products',
    summary:
      'Software-led prototypes connecting sensors, embedded controllers, realtime dashboards, and remote-control experiences.',
    idealFor:
      'Research teams and founders validating an IoT, monitoring, robotics, or hardware-enabled product before committing to manufacturing.',
    productLanes: ['connected-iot'],
    lifecycle: ['discover', 'scope-architecture', 'design-prototype', 'build-integrate', 'verify-launch', 'handover-iterate'],
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
    evidence: [
      {
        title: 'Underwater Monitoring R&D',
        description: 'An active R&D case study covering sensing, imaging, embedded control, communication, physical risk, and staged validation.',
        href: '/work/underwater-monitoring-research',
        label: 'Read the connected-product case study',
      },
      {
        title: 'From ESP32 sensor to realtime dashboard',
        description: 'A prototype architecture for device telemetry, command acknowledgement, dashboards, and failure handling.',
        href: '/blog/connected-product-prototype-esp32-dashboard',
        label: 'Read the prototype guide',
      },
    ],
  },
];

export type ProjectTier = 'core' | 'lab';
export type MaturityStage =
  | 'foundation-built'
  | 'in-development'
  | 'active-rnd'
  | 'architecture-planned'
  | 'public-reference'
  | 'experiment';
export type LifecycleState = 'complete' | 'in-progress' | 'planned';

export type ProjectEvidence = {
  label: string;
  detail: string;
  href?: string;
  verifiedOn?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tier: ProjectTier;
  displayOrder: number;
  schemaType: 'SoftwareApplication' | 'CreativeWork';
  summary: string;
  targetUsers: string;
  buyerOutcome: string;
  challenge: string;
  approach: string;
  outcome: string;
  status: string;
  maturity: {
    stage: MaturityStage;
    label: string;
    summary: string;
    verifiedOn?: string;
  };
  lifecycle: {
    stage: string;
    status: LifecycleState;
    summary: string;
  }[];
  constraints: string[];
  evidence: ProjectEvidence[];
  year: string;
  tags: string[];
  highlights: string[];
  role?: string;
  systemMap?: { title: string; description: string }[];
  caseStudySections?: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  }[];
  clientApplications?: string[];
  relatedService?: { title: string; href: string };
  relatedArticles?: { title: string; href: string }[];
  repository?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'ai-dropshipping-commerce-platform',
    title: 'AI Dropshipping Commerce Platform',
    category: 'AI commerce · Dropshipping operations',
    tier: 'core',
    displayOrder: 1,
    schemaType: 'SoftwareApplication',
    summary:
      'An end-to-end commerce operating system that connects supplier ingestion, international storefronts, AI-assisted pricing and content, creative and campaign workflows, analytics, and controlled automation.',
    targetUsers: 'Commerce founders, operators, and product teams replacing disconnected supplier, storefront, AI, campaign, checkout, and analytics workflows.',
    buyerOutcome: 'A controlled supplier-to-order product foundation with explicit market, AI-review, campaign, checkout, analytics, and operating boundaries.',
    challenge:
      'Dropshipping operations fragment product data, supplier risk, market localization, pricing, creative production, advertising, checkout, and analytics across disconnected tools. Adding AI without controls can make that fragmentation more dangerous by publishing invented claims, unsafe prices, or unreviewed campaigns.',
    approach:
      'Built a modular Next.js and Prisma platform with separate admin and customer deployment modes, a generic supplier layer, market-specific product profiles, a central multi-provider AI router, review-gated creative and marketing workflows, and currency-aware analytics.',
    outcome:
      'The operational foundation is implemented and verified across Prisma, focused workflow tests, TypeScript, ESLint, and production builds for both admin and customer modes. Live supplier, AI media, storage, and advertising connections remain in credentialed sandbox acceptance before production launch.',
    status: 'Operational foundation built',
    maturity: {
      stage: 'foundation-built',
      label: 'Operational foundation built',
      summary: 'Core product, market, AI-control, campaign, checkout, analytics, and two-mode deployment foundations are implemented; credentialed external-provider acceptance is still pending.',
      verifiedOn: '2026-07-02',
    },
    lifecycle: [
      { stage: 'Discovery', status: 'complete', summary: 'Supplier-to-order workflows, markets, operator roles, integrations, and costly failure modes were mapped.' },
      { stage: 'Scope & architecture', status: 'complete', summary: 'Modular commerce, provider, market, AI-control, review, checkout, and analytics boundaries were defined.' },
      { stage: 'Design & prototype', status: 'complete', summary: 'Admin/customer modes and review-gated vertical workflows were implemented as testable product slices.' },
      { stage: 'Build & integrate', status: 'complete', summary: 'The operational foundation, database model, routes, workflows, tests, and both production builds are in place.' },
      { stage: 'Verify & launch', status: 'in-progress', summary: 'Credentialed supplier, AI media, storage, and advertising sandbox acceptance remains before production launch.' },
      { stage: 'Handover & iterate', status: 'planned', summary: 'Operational monitoring, live acceptance evidence, and launch iteration follow successful provider validation.' },
    ],
    constraints: [
      'The implementation repository is private and no credentials, customer data, supplier tokens, or internal infrastructure may be exposed.',
      'External supplier, AI media, storage, and advertising providers still require credentialed sandbox acceptance.',
      'No live-store revenue, production scale, autonomous operation, or client-result claim is made.',
    ],
    evidence: [
      { label: 'Engineering verification', detail: 'Prisma checks, focused workflow tests, TypeScript, ESLint, diff validation, and admin/customer production builds passed at the recorded foundation checkpoint.', verifiedOn: '2026-07-02' },
      { label: 'Architecture guide', detail: 'Public explanation of platform boundaries, review states, international commerce, and launch acceptance.', href: '/blog/how-to-architect-ai-dropshipping-platform' },
      { label: 'AI control guide', detail: 'Public explanation of draft, review, approval, audit, and safe publishing boundaries.', href: '/blog/why-ai-dropshipping-automation-needs-human-approval' },
    ],
    year: '2026–Present',
    role: 'Product architecture · Full-stack engineering · AI systems design',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AI routing', 'International commerce', 'Analytics', 'Meta Ads'],
    highlights: [
      'Separate admin and customer deployment modes with route and SEO isolation',
      'Generic supplier model with AliExpress ingestion, review, approval, sync, and risk records',
      'Country, language, currency, localized content, and editable AI price suggestions per market',
      'Admin-controlled OpenAI, Anthropic, Gemini, Ollama, LM Studio, and compatible model routing',
      'Review-gated product enrichment, creative generation, campaign drafting, and supplier operations',
      'Currency-safe checkout snapshots and analytics that do not merge unlike currencies',
      'Privacy-minimal event tracking with reviewed AI insights and suggestion-only actions',
      'Credentialed sandbox acceptance plan for suppliers, media storage, AI providers, and Meta campaigns',
    ],
    systemMap: [
      {
        title: 'Supplier & product intelligence',
        description: 'Normalize supplier data, preserve source snapshots, flag risk, and keep imports inactive until review.',
      },
      {
        title: 'AI control plane',
        description: 'Route each task through dashboard-selected providers, models, capabilities, fallbacks, and approval rules.',
      },
      {
        title: 'International storefront',
        description: 'Resolve market, language, currency, localized copy, and approved price without device-permission prompts.',
      },
      {
        title: 'Operations & analytics',
        description: 'Run creatives, campaigns, orders, attribution, insights, and actions through auditable review states.',
      },
    ],
    caseStudySections: [
      {
        eyebrow: '01 / Commerce foundation',
        title: 'One operating model from supplier import to customer order.',
        description:
          'The platform replaces disconnected dropshipping steps with explicit product, supplier, market, order, and operational records.',
        items: [
          'A generic supplier schema supports current AliExpress ingestion and future provider adapters.',
          'Imported products stay inactive until an admin reviews, edits, and explicitly approves them.',
          'Supplier sync jobs preserve inventory and price snapshots, logs, and risk flags instead of silently overwriting state.',
          'Customer and admin deployments use different route boundaries, navigation, robots rules, and sitemap exposure.',
        ],
      },
      {
        eyebrow: '02 / International selling',
        title: 'The same product can become a controlled offer for each market.',
        description:
          'Market profiles keep localization and pricing editable while the storefront and checkout preserve the context the customer actually used.',
        items: [
          'Each market can define country, language, currency, local copy, local price, shipping assumptions, tax assumptions, and margin fields.',
          'AI can suggest a standard price plus alternatives, reasoning, confidence, margin, and risk notes—but an admin must review and save it.',
          'Market detection follows campaign parameters, saved or manual preference, public request metadata, language, and default market without asking for device location.',
          'Orders persist market, currency, and price snapshots so historical reporting remains explainable.',
        ],
      },
      {
        eyebrow: '03 / AI platform architecture',
        title: 'AI is a configurable service layer, not a hard-coded vendor call.',
        description:
          'The admin dashboard controls which provider and model handles each commerce task while the feature code talks to a central router.',
        items: [
          'Providers cover OpenAI, Anthropic, Gemini, Ollama, LM Studio, and other OpenAI-compatible runtimes.',
          'Task routes define primary and fallback models, allowed capabilities, local-model permission, output type, safety level, and approval requirements.',
          'Jobs, outputs, usage, and provider health checks create an auditable operating trail.',
          'Local models remain draft engines until the route and validation policy explicitly allow their output.',
        ],
      },
      {
        eyebrow: '04 / Creative & growth operations',
        title: 'Generated assets and campaigns move through review, not directly to customers.',
        description:
          'Product copy, pricing, image creatives, supplier decisions, campaigns, and analytics recommendations share a review-first operating principle.',
        items: [
          'Product enrichment rejects invented certifications, warranties, safety ratings, shipping guarantees, and unverified technical claims.',
          'Creative assets persist as drafts with approve and reject states before use.',
          'Approved campaign drafts can be published to Meta as paused campaigns through idempotent, audited jobs.',
          'AI analytics creates reviewable insights and suggestion-only actions; execution remains deliberately disabled.',
        ],
      },
      {
        eyebrow: '05 / Analytics integrity',
        title: 'Business reporting preserves market and currency truth.',
        description:
          'The analytics model connects products, markets, suppliers, campaigns, creatives, customers, attribution, and data quality without producing misleading totals.',
        items: [
          'Privacy-minimal events are captured through a public ingestion API and persisted as structured records.',
          'Revenue headlines stay scoped to a reporting currency, with other currencies shown separately instead of added together.',
          'AI insight runs save model, output, references, review state, and follow-up actions for auditability.',
          'Admin views cover revenue, product, market, supplier, campaign, creative, customer, attribution, and data-quality signals.',
        ],
      },
      {
        eyebrow: '06 / Delivery evidence',
        title: 'The foundation was verified as a two-mode production build.',
        description:
          'The implemented backlog reached a clean engineering checkpoint before external accounts and credentials are connected.',
        items: [
          'Prisma schema formatting, validation, generation, and database synchronization completed without destructive changes.',
          'Focused workflow tests passed 5 of 5 with zero failures.',
          'TypeScript and ESLint completed with zero errors, and repository diff validation passed.',
          'Production builds passed for both admin and customer modes; remaining work is live credential and sandbox acceptance.',
        ],
      },
    ],
    clientApplications: [
      'Design or modernize a supplier-to-order commerce platform with explicit operational boundaries.',
      'Add multi-market language, currency, pricing, checkout, and reporting without losing historical truth.',
      'Introduce AI for product, pricing, creative, campaign, or analytics work through editable and approval-gated workflows.',
      'Create a provider-independent AI control plane with task routes, fallbacks, usage history, and local-model safeguards.',
      'Audit an existing AI commerce stack and turn fragmented tools into a staged, testable delivery roadmap.',
    ],
    relatedService: {
      title: 'AI Commerce Platform Engineering',
      href: '/services/ai-commerce-platform-engineering',
    },
    relatedArticles: [
      {
        title: 'How to Architect an AI Dropshipping Platform That Can Actually Operate',
        href: '/blog/how-to-architect-ai-dropshipping-platform',
      },
      {
        title: 'Why AI Dropshipping Automation Needs Human Approval Before It Goes Live',
        href: '/blog/why-ai-dropshipping-automation-needs-human-approval',
      },
    ],
  },
  {
    slug: 'otask-developer-platform',
    title: 'Otask',
    category: 'SaaS product engineering',
    tier: 'core',
    displayOrder: 2,
    schemaType: 'CreativeWork',
    summary:
      'A developer collaboration platform concept for publishing repository issues, coordinating solutions, and supporting paid or open-source workflows.',
    targetUsers: 'Repository maintainers, developers, contributors, and teams coordinating issue-based paid or open-source collaboration.',
    buyerOutcome: 'A structured product direction for connecting repository work, contributors, communication, notifications, and optional payment boundaries.',
    challenge:
      'Repository issues, contributors, communication, and optional payments often live across disconnected tools, making collaboration difficult to coordinate.',
    approach:
      'Designed a GitHub-connected product flow covering repository import, issue lifecycle, contributor collaboration, notifications, and payment concepts.',
    outcome:
      'The product remains in development. The current work demonstrates product decomposition, integration planning, and full-stack SaaS architecture rather than claiming a completed launch.',
    status: 'In development',
    maturity: {
      stage: 'in-development',
      label: 'In development',
      summary: 'Product flows and system boundaries are defined and implementation work is active; no completed public launch or operating-scale result is claimed.',
    },
    lifecycle: [
      { stage: 'Discovery', status: 'complete', summary: 'The repository issue, contributor coordination, communication, and optional payment problem was decomposed.' },
      { stage: 'Scope & architecture', status: 'complete', summary: 'GitHub connection, issue lifecycle, participant, notification, collaboration, and payment seams were designed.' },
      { stage: 'Design & prototype', status: 'in-progress', summary: 'Key journeys and reviewable product slices are still being refined through implementation.' },
      { stage: 'Build & integrate', status: 'in-progress', summary: 'Full-stack product development is active and has not reached a launch-ready evidence gate.' },
      { stage: 'Verify & launch', status: 'planned', summary: 'Public deployment, acceptance coverage, abuse controls, and payment validation remain future gates.' },
      { stage: 'Handover & iterate', status: 'planned', summary: 'Operating evidence and iteration decisions follow a verified release.' },
    ],
    constraints: [
      'GitHub permissions, repository data, notifications, contributor trust, and payment flows require explicit security and abuse boundaries.',
      'No completed public launch, active marketplace, payment volume, user count, or client outcome is claimed.',
      'Current evidence supports product architecture and in-development implementation, not production maturity.',
    ],
    evidence: [
      { label: 'Product decomposition', detail: 'The current work defines repository import, issue lifecycle, contributor collaboration, notification, and optional payment boundaries.' },
      { label: 'Public positioning boundary', detail: 'The case study explicitly identifies the product as in development and separates architecture evidence from future launch validation.' },
      { label: 'Related delivery guide', detail: 'The SaaS architecture article documents the operating boundaries expected before a software product is treated as production-ready.', href: '/blog/production-ready-nextjs-saas-architecture' },
    ],
    year: '2024–Present',
    role: 'Product architecture · Full-stack product engineering · Integration planning',
    tags: ['Next.js', 'GitHub API', 'SaaS', 'Stripe', 'Realtime'],
    highlights: [
      'GitHub-connected repository and issue workflow direction',
      'Explicit issue lifecycle and contributor collaboration boundaries',
      'Notification and realtime coordination concepts',
      'Paid and open-source paths kept behind deliberate trust and payment rules',
      'Architecture and implementation status separated from future launch claims',
    ],
    systemMap: [
      { title: 'Connect repositories', description: 'Import approved repository context and preserve clear authorization boundaries around issues and participants.' },
      { title: 'Structure work', description: 'Represent issue lifecycle, scope, ownership, solution progress, review, and completion as explicit product states.' },
      { title: 'Coordinate people', description: 'Connect maintainers and contributors through focused collaboration, notifications, and realtime updates.' },
      { title: 'Support outcomes', description: 'Keep open-source contribution and optional paid work behind deliberate approval, trust, dispute, and payment seams.' },
    ],
    caseStudySections: [
      {
        eyebrow: '01 / Product problem',
        title: 'Repository issues need more than another list view.',
        description: 'The product direction treats an issue as a collaboration lifecycle with actors, decisions, evidence, review, and an outcome.',
        items: [
          'Repository context and permission boundaries must be explicit before external collaboration begins.',
          'Issue states need to communicate scope, ownership, progress, review, acceptance, and closure.',
          'Contributors and maintainers need focused updates without duplicating every GitHub surface.',
          'Paid paths introduce trust, payment, dispute, and completion conditions that open-source contribution does not require.',
        ],
      },
      {
        eyebrow: '02 / System boundaries',
        title: 'GitHub remains the source; the product coordinates the workflow around it.',
        description: 'The architecture avoids treating imported repository data as unrestricted application-owned content.',
        items: [
          'A GitHub integration layer owns authentication, repository selection, permission checks, synchronization, and provider failures.',
          'Product records add collaboration state without silently rewriting upstream repository truth.',
          'Notifications and realtime events derive from auditable state transitions rather than arbitrary messages.',
          'Optional payments remain a separate boundary with explicit acceptance and failure handling.',
        ],
      },
      {
        eyebrow: '03 / Delivery status',
        title: 'The product remains in development.',
        description: 'Current evidence supports architecture, decomposition, and active implementation—not a completed public marketplace.',
        items: [
          'Core journeys are being refined as reviewable vertical slices.',
          'Launch readiness still requires public deployment evidence, acceptance coverage, security review, and operating tests.',
          'Payment and dispute flows must not be described as live before provider and policy acceptance exists.',
          'Future status upgrades require reproducible repository, test, deployment, and user-acceptance evidence.',
        ],
      },
      {
        eyebrow: '04 / Client value',
        title: 'The same product reasoning applies to integration-heavy SaaS.',
        description: 'The work demonstrates how to turn a third-party platform dependency into a maintainable product workflow.',
        items: [
          'Define ownership between the product database and the upstream provider.',
          'Model reviewable states before adding notifications, payments, or automation.',
          'Design failure and permission boundaries before promising a seamless integration.',
          'Ship narrow workflows that another team can inspect, operate, and extend.',
        ],
      },
    ],
    clientApplications: [
      'Design a SaaS product around a complex third-party API without losing authorization and ownership clarity.',
      'Turn an informal collaboration process into explicit states, roles, notifications, and acceptance evidence.',
      'Introduce optional payments only after the underlying delivery and trust workflow is understandable.',
      'Create an implementation roadmap that separates product direction, active build work, launch gates, and future scale.',
    ],
    relatedService: { title: 'Software Product Engineering', href: '/services/saas-product-engineering' },
    relatedArticles: [{ title: 'Production-Ready Next.js SaaS Architecture', href: '/blog/production-ready-nextjs-saas-architecture' }],
  },
  {
    slug: 'underwater-monitoring-research',
    title: 'Underwater Monitoring R&D',
    category: 'Connected-product research',
    tier: 'core',
    displayOrder: 3,
    schemaType: 'CreativeWork',
    summary:
      'Long-term research into an underwater monitoring system for shrimp farming using video, water-quality sensing, remote control, and software-assisted analysis.',
    targetUsers: 'Aquaculture operators, research teams, and connected-product teams investigating underwater observation, sensing, telemetry, and controlled field validation.',
    buyerOutcome: 'A staged prototype and validation programme that connects physical risk, embedded control, data quality, operator software, and future AI without unsupported field claims.',
    challenge:
      'Aquaculture monitoring combines difficult physical constraints—waterproofing, visibility, power, communication, placement, and maintenance—with the need for understandable live data.',
    approach:
      'Explored system architecture across ESP32 and Raspberry Pi control, cameras, sensors, tethering, motor layouts, web/mobile interfaces, and future AI-assisted analysis.',
    outcome:
      'An active research direction with documented system concepts and prototype questions. It is presented as R&D, not as a field-validated commercial system.',
    status: 'Active R&D',
    maturity: {
      stage: 'active-rnd',
      label: 'Active R&D',
      summary: 'Problem research, system architecture, and risk mapping are documented; an integrated, field-validated underwater product does not yet exist.',
      verifiedOn: '2026-07-10',
    },
    lifecycle: [
      { stage: 'Discovery', status: 'complete', summary: 'Aquaculture monitoring needs, imaging, sensing, communication, enclosure, power, and maintenance risks were researched.' },
      { stage: 'Scope & architecture', status: 'complete', summary: 'Software-led subsystem, control, telemetry, communication, safety, and validation boundaries were designed.' },
      { stage: 'Design & prototype', status: 'in-progress', summary: 'Imaging, sensors, telemetry, control, enclosure, and component questions require staged bench and tank evidence.' },
      { stage: 'Build & integrate', status: 'planned', summary: 'A sealed integrated vehicle and representative operator system follow successful subsystem evidence gates.' },
      { stage: 'Verify & launch', status: 'planned', summary: 'Repeatable tank and supervised pond trials are required before any field-performance or product-readiness claim.' },
      { stage: 'Handover & iterate', status: 'planned', summary: 'Productization requires reliability targets, safety review, specialist partners, service procedures, and field acceptance criteria.' },
    ],
    constraints: [
      'Turbidity, backscatter, lighting, working distance, calibration, biofouling, and enclosure integrity can invalidate software assumptions.',
      'Underwater wireless range, computer-vision accuracy, field reliability, and commercial readiness are not claimed without representative evidence.',
      'Production electronics, certification, pressure-rated mechanical design, and manufacturing require appropriately qualified specialist partners.',
    ],
    evidence: [
      { label: 'Research case study', detail: 'Visible maturity boundaries separate researched, designed, component-level prototype questions, and planned integrated validation.' },
      { label: 'Imaging decision journal', detail: 'A documented decision treats image acquisition and human readability as validation gates before computer vision.', href: '/journal/underwater-imaging-before-computer-vision', verifiedOn: '2026-07-10' },
      { label: 'Connected prototype guide', detail: 'A public architecture guide connects ESP32 telemetry, command acknowledgement, realtime dashboards, and failure handling.', href: '/blog/connected-product-prototype-esp32-dashboard' },
    ],
    year: '2023–Present',
    role: 'Research direction · System architecture · Software-led prototyping',
    tags: ['ESP32', 'Raspberry Pi', 'Sensors', 'IoT', 'Computer vision', 'Robotics', 'Aquaculture'],
    highlights: [
      'Aquaculture monitoring problem and stakeholder needs researched',
      'Camera, illumination, sensor, compute, tether, and control boundaries designed',
      'Turbid-water visibility and enclosure integrity treated as test gates',
      'Remote monitoring and AI-assisted analysis remain planned until reliable data exists',
    ],
    systemMap: [
      { title: 'Observe', description: 'Camera, controlled illumination, and water-quality sensors capture evidence under difficult pond conditions.' },
      { title: 'Control', description: 'Embedded controllers coordinate telemetry, movement concepts, safety states, and local device interfaces.' },
      { title: 'Connect', description: 'A tethered or surface-relay path carries power, commands, video, and telemetry without assuming underwater radio reliability.' },
      { title: 'Interpret', description: 'Web or mobile software presents operator evidence; computer vision follows only after representative data validation.' },
    ],
    caseStudySections: [
      {
        eyebrow: '01 / Research status',
        title: 'Every subsystem is labelled by maturity.',
        description: 'This initiative is active R&D. Architecture and risk mapping are more mature than the physical system, and no field-performance claim is made.',
        items: [
          'Researched: aquaculture monitoring needs, underwater communication constraints, turbid-water imaging, sensing, and maintenance risks.',
          'Designed: software-led system boundaries for embedded control, cameras, sensors, tether or relay communication, and operator interfaces.',
          'Prototyped: component-level experiments and software concepts may be evaluated independently; they do not establish an integrated field system.',
          'Planned: sealed vehicle integration, repeatable pond trials, labelled vision data, AI-assisted monitoring, and productization evidence.',
        ],
      },
      {
        eyebrow: '02 / Imaging and sensing',
        title: 'Reliable evidence comes before computer vision.',
        description: 'Turbidity, backscatter, working distance, lighting angle, biofouling, and sensor calibration can invalidate a model before model selection matters.',
        items: [
          'Compare visible and infrared illumination experimentally instead of assuming infrared improves underwater visibility.',
          'Record camera, lighting, distance, turbidity, and enclosure conditions alongside every useful sample.',
          'Treat dissolved oxygen, temperature, pH, and other sensor choices as calibration and maintenance questions, not a feature checklist.',
          'Introduce detection or behavioural analysis only after a representative, reviewable dataset exists.',
        ],
      },
      {
        eyebrow: '03 / Embedded and communication architecture',
        title: 'Safety and recoverability shape the control system.',
        description: 'The system must remain understandable when connectivity, power, a sensor, or a motor fails.',
        items: [
          'Separate deterministic low-level control from higher-level video, storage, dashboards, and future AI workloads.',
          'Design explicit loss-of-command, low-power, leak-detection, and recovery states before autonomous behaviour.',
          'Prefer testable tether or surface-relay communication paths over unsupported claims about underwater wireless range.',
          'Log commands, acknowledgements, sensor quality, and faults so a trial can be diagnosed after recovery.',
        ],
      },
      {
        eyebrow: '04 / Mechanical and power risks',
        title: 'The enclosure is a test programme, not a box around electronics.',
        description: 'Pressure, sealing, heat, corrosion, buoyancy, cable penetrations, serviceability, and battery safety affect every software decision.',
        items: [
          'Validate dry mass, displacement, trim, centre of gravity, and recoverability before powered water trials.',
          'Pressure-test seals and penetrations incrementally with non-critical payloads and documented inspection criteria.',
          'Budget power across compute, lighting, sensors, communications, and propulsion with measurable margins.',
          'Keep custom electronics and PCB work behind verified electrical, thermal, and enclosure requirements.',
        ],
      },
      {
        eyebrow: '05 / Validation roadmap',
        title: 'Progress through evidence gates.',
        description: 'Each stage should retire one expensive uncertainty before the next integrated build.',
        items: [
          'Bench: validate sensors, camera and lighting, telemetry, command acknowledgement, logging, and fault handling.',
          'Tank: validate sealing, thermal behaviour, buoyancy, trim, visibility, controlled motion, and recovery.',
          'Pond: validate maintainability and data quality in representative water under supervised operating limits.',
          'Productization: define reliability targets, safety review, manufacturing partners, service procedures, and field acceptance criteria.',
        ],
      },
    ],
    clientApplications: [
      'De-risk a connected-product idea through testable subsystem boundaries and evidence gates.',
      'Connect embedded telemetry, cameras, sensors, and operator software without hiding physical constraints.',
      'Design a monitoring dashboard and device protocol around explicit fault and recovery states.',
      'Plan an AI or computer-vision workflow around representative data rather than speculative accuracy claims.',
    ],
    relatedService: { title: 'Connected/IoT Product Prototyping', href: '/services/connected-product-prototyping' },
    relatedArticles: [{ title: 'From ESP32 Sensor to Realtime Dashboard: A Prototype Architecture', href: '/blog/connected-product-prototype-esp32-dashboard' }],
  },
  {
    slug: 'reusable-b2c-marketplace-platform',
    title: 'Reusable B2C Marketplace Platform',
    category: 'Marketplace engineering · Commerce systems',
    tier: 'core',
    displayOrder: 4,
    schemaType: 'CreativeWork',
    summary:
      'A reusable B2C marketplace foundation for businesses that need buyer-facing product discovery, controlled catalog operations, checkout, cash-on-delivery workflows, and admin-managed order fulfillment.',
    targetUsers: 'Local and international product businesses that need buyer discovery, controlled catalog operations, checkout, order handling, fulfillment, and adaptable branding or business rules.',
    buyerOutcome: 'A reusable marketplace architecture that separates stable commerce workflows from client-specific design, catalog, payment, and fulfillment decisions.',
    challenge:
      'Many marketplace projects begin as visual storefronts, then become difficult to adapt when business rules, product categories, seller operations, payment methods, fulfillment steps, or admin controls change. The engineering problem is to keep the core marketplace model stable while allowing each client business to customize the experience.',
    approach:
      'Planned the marketplace as a modular commerce system with separate buyer, admin, catalog, order, checkout, fulfillment, and customization boundaries. The design keeps the customer-facing interface replaceable while preserving reusable domain rules for products, approvals, inventory, cash-on-delivery orders, and operational reporting.',
    outcome:
      'The current portfolio entry documents the architecture, use cases, and delivery plan for a reusable marketplace foundation. It is presented as a product-engineering case study and implementation direction, not as a launched client marketplace with verified revenue or user metrics.',
    status: 'Architecture and product foundation planned',
    maturity: {
      stage: 'architecture-planned',
      label: 'Architecture and product foundation planned',
      summary: 'The product model, major workflows, customization boundary, and delivery direction are documented; a verified launch-ready marketplace is not claimed.',
    },
    lifecycle: [
      { stage: 'Discovery', status: 'complete', summary: 'Buyer, catalog, admin, checkout, cash-on-delivery, order, fulfillment, and customization needs were decomposed.' },
      { stage: 'Scope & architecture', status: 'complete', summary: 'Reusable commerce boundaries and client-specific extension points were planned.' },
      { stage: 'Design & prototype', status: 'planned', summary: 'A reviewable catalog-to-order vertical slice is the first required implementation evidence.' },
      { stage: 'Build & integrate', status: 'planned', summary: 'Catalog, buyer flow, checkout, admin orders, and fulfillment states must be built and verified incrementally.' },
      { stage: 'Verify & launch', status: 'planned', summary: 'Repository evidence, test coverage, deployment, business acceptance, and operational checks remain required.' },
      { stage: 'Handover & iterate', status: 'planned', summary: 'Payments, seller modules, shipping, analytics, and niche extensions follow a verified core release.' },
    ],
    constraints: [
      'The current evidence is an architecture and delivery direction, not a verified public deployment.',
      'No client, user, transaction, revenue, inventory, fulfillment, or production-scale result is claimed.',
      'Payment, seller, shipping, and niche business rules remain optional extensions behind a stable core boundary.',
    ],
    evidence: [
      { label: 'Architecture case study', detail: 'The current record documents buyer, catalog, checkout, order, fulfillment, admin, and customization boundaries.' },
      { label: 'Delivery sequence', detail: 'The plan advances through catalog, buyer flow, checkout, admin orders, and fulfillment states before optional extensions.' },
      { label: 'Related service', detail: 'The software product engineering offer describes the discovery, architecture, implementation, verification, and handover contract for this kind of build.', href: '/services/saas-product-engineering' },
    ],
    year: '2026–Present',
    role: 'Product architecture · Full-stack engineering · Commerce workflow design',
    tags: ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Marketplace', 'Commerce', 'Payments', 'Admin Dashboard'],
    highlights: [
      'Reusable B2C marketplace model that can be adapted for different product businesses',
      'Buyer-facing product discovery, category navigation, cart, checkout, and order tracking boundaries',
      'Admin-managed catalog approval, inventory state, order status, and fulfillment workflow',
      'Cash-on-delivery support for local-market commerce with future payment integration boundaries',
      'Customization model that separates design and business rules from stable marketplace logic',
      'Honest delivery framing that separates planned architecture, implementation work, and future production validation',
    ],
    systemMap: [
      {
        title: 'Buyer marketplace',
        description: 'Product discovery, category browsing, product detail pages, cart, checkout, order confirmation, and account-level order visibility.',
      },
      {
        title: 'Catalog operations',
        description: 'Admin-managed product records, categories, pricing, images, visibility, inventory state, and approval workflow.',
      },
      {
        title: 'Order & fulfillment',
        description: 'Checkout creates auditable order records with cash-on-delivery support, status transitions, and operational handoff points.',
      },
      {
        title: 'Business customization',
        description: 'Client-specific design, catalog rules, fulfillment assumptions, payment methods, and admin workflows can change without rebuilding the core.',
      },
    ],
    caseStudySections: [
      {
        eyebrow: '01 / Marketplace foundation',
        title: 'A reusable commerce core instead of a one-off storefront.',
        description:
          'The project is framed around a marketplace domain model that can serve different B2C businesses while keeping core product, catalog, and order concepts consistent.',
        items: [
          'Product and category records provide the base for buyer-facing discovery and admin-controlled catalog management.',
          'The buyer experience can support browsing, product detail review, cart creation, checkout, and order tracking.',
          'The architecture separates reusable marketplace logic from client-specific branding, layout, and niche business rules.',
          'The platform is positioned as a product foundation for commerce delivery, not only a UI showcase.',
        ],
      },
      {
        eyebrow: '02 / Seller and admin operations',
        title: 'Operations stay controlled from the admin side.',
        description:
          'A marketplace becomes useful to real businesses only when product, inventory, order, and fulfillment states are manageable after launch.',
        items: [
          'Admins can review and approve products before they become visible to buyers.',
          'Catalog operations can include product status, stock state, pricing, category assignment, and media management.',
          'Order management can expose clear lifecycle states such as pending, confirmed, processing, delivered, cancelled, or failed.',
          'The admin side should make operational risks visible instead of hiding them behind a generic storefront.',
        ],
      },
      {
        eyebrow: '03 / Checkout and order flow',
        title: 'Cash on delivery is treated as a first-class workflow.',
        description:
          'For local-market B2C commerce, checkout must support order capture and fulfillment even when online payment is not the first launch requirement.',
        items: [
          'The checkout boundary can start with cash on delivery while preserving a future payment-provider integration seam.',
          'Orders should store customer contact, delivery details, item snapshots, totals, and selected payment method.',
          'Status changes should be explicit so customer support and fulfillment teams can understand what happened.',
          'Future payment integration can be added without rewriting the entire marketplace flow.',
        ],
      },
      {
        eyebrow: '04 / Business customization model',
        title: 'Different client businesses can change the surface without losing the system.',
        description:
          'The marketplace is designed for reuse: the brand, layout, catalog rules, and operational assumptions can change while the core commerce engine remains stable.',
        items: [
          'A grocery, electronics, fashion, parts, or niche local-commerce marketplace can share the same foundational workflows.',
          'Design changes should not require rewriting the catalog, checkout, order, and admin-management boundaries.',
          'Business-specific rules can be introduced through configuration, scoped code changes, or documented extension points.',
          'This structure helps clients launch faster while preserving maintainability for future iterations.',
        ],
      },
      {
        eyebrow: '05 / Delivery evidence and next steps',
        title: 'The project is intentionally framed as architecture and implementation direction.',
        description:
          'The case study avoids unsupported production claims and focuses on the plan, system boundaries, and client-value direction.',
        items: [
          'The current entry documents the marketplace scope, architecture, and reusable delivery model.',
          'Implementation should proceed through small vertical slices: catalog, buyer flow, checkout, admin orders, and fulfillment states.',
          'Production readiness should be claimed only after repository evidence, deployment checks, test coverage, and real acceptance criteria exist.',
          'Future work can add online payments, seller modules, analytics, shipping integrations, and marketplace-specific automation.',
        ],
      },
    ],
    clientApplications: [
      'Build a B2C marketplace MVP with a reusable commerce foundation.',
      'Convert an offline product business into an online ordering platform.',
      'Add admin-controlled product, order, inventory, and fulfillment workflows.',
      'Support cash-on-delivery commerce for local markets before online payment integration.',
      'Adapt the marketplace for niche industries without rebuilding the whole system.',
    ],
    relatedService: {
      title: 'Software Product Engineering',
      href: '/services/saas-product-engineering',
    },
  },
  {
    slug: 'graphql-todo-application',
    title: 'GraphQL Todo Application',
    category: 'API engineering',
    tier: 'lab',
    displayOrder: 1,
    schemaType: 'CreativeWork',
    summary:
      'A TypeScript application exploring GraphQL-based client and server data flows through a compact product domain.',
    targetUsers: 'Developers and product teams evaluating schema-driven client/server integration patterns.',
    buyerOutcome: 'A compact reference for discussing GraphQL schema, typed integration, and client-state boundaries before using the pattern in a larger product.',
    challenge:
      'GraphQL systems need a clear schema, predictable client state, and boundaries that keep a simple query layer from becoming accidental complexity.',
    approach:
      'Used a small task-management domain to exercise schema-driven development and typed product integration.',
    outcome:
      'A compact reference project focused on GraphQL and TypeScript application structure. It is presented as a Lab item, not as a production product.',
    status: 'Reference project',
    maturity: {
      stage: 'public-reference',
      label: 'Reference project',
      summary: 'The compact application exercise is complete as a technical reference; it does not represent a production product or client outcome.',
    },
    lifecycle: [
      { stage: 'Technical question', status: 'complete', summary: 'The exercise focused on schema-driven client and server data flow.' },
      { stage: 'Reference implementation', status: 'complete', summary: 'A compact task domain was used to explore typed GraphQL integration.' },
      { stage: 'Production validation', status: 'planned', summary: 'Scale, security, observability, and product operations were outside this Lab scope.' },
    ],
    constraints: [
      'The previously configured repository URL was unavailable during the latest portfolio audit and is not published until corrected.',
      'The project demonstrates an application pattern, not production scale, client delivery, or business impact.',
    ],
    evidence: [
      { label: 'Technical reference', detail: 'The portfolio record documents the schema-driven workflow and typed integration focus.' },
      { label: 'Link boundary', detail: 'No source link is shown while the previously recorded public URL remains unavailable.', verifiedOn: '2026-07-13' },
    ],
    year: '2025',
    tags: ['GraphQL', 'TypeScript', 'API', 'Application architecture'],
    highlights: ['Schema-driven workflow', 'Typed integration', 'Reference scope'],
  },
  {
    slug: 'local-llm-workflows',
    title: 'Local LLM Workflows',
    category: 'AI engineering experiments',
    tier: 'lab',
    displayOrder: 2,
    schemaType: 'CreativeWork',
    summary:
      'Experiments in running and integrating local models for private, developer-controlled AI workflows.',
    targetUsers: 'Product and engineering teams evaluating private, local, or OpenAI-compatible model workflows.',
    buyerOutcome: 'A public experiment that makes privacy, latency, hardware, quality, and compatibility tradeoffs easier to discuss before product integration.',
    challenge:
      'Local inference changes the constraints around privacy, model quality, latency, hardware capacity, and provider compatibility.',
    approach:
      'Explored TypeScript-based model-running workflows and OpenAI-compatible local runtime concepts with Ollama.',
    outcome:
      'A public experimentation repository used to develop practical understanding of local-model integration tradeoffs.',
    status: 'Experiment',
    maturity: {
      stage: 'experiment',
      label: 'Experiment',
      summary: 'The public repository supports local-model integration learning; it is not presented as a production AI platform.',
    },
    lifecycle: [
      { stage: 'Question', status: 'complete', summary: 'Local inference constraints around privacy, quality, latency, hardware, and compatibility were identified.' },
      { stage: 'Experiment', status: 'complete', summary: 'TypeScript and Ollama/OpenAI-compatible workflow concepts were explored publicly.' },
      { stage: 'Product acceptance', status: 'planned', summary: 'Any client use still requires task-specific evaluation, safety, cost, and operating evidence.' },
    ],
    constraints: [
      'Model quality and latency depend on the selected model, hardware, context, and task.',
      'The repository is an experiment and does not establish production reliability, privacy compliance, or product acceptance.',
    ],
    evidence: [
      { label: 'Public experiment', detail: 'The linked repository records developer-controlled local-model workflow exploration.', href: 'https://github.com/arifulbgt4/ollama-model-run' },
      { label: 'Client boundary', detail: 'Production use remains contingent on representative evaluation, monitoring, fallback, and approval design.' },
    ],
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
    skills: ['ESP32', 'Raspberry Pi', 'Sensors', 'Camera modules', 'Automation', 'Realtime control', 'Aquaculture R&D'],
  },
  {
    title: 'Product invention',
    skills: ['Product architecture', 'Rapid prototyping', 'System integration', 'Experiment design', 'CAD concepts', 'Risk mapping'],
  },
];

export type JournalEntry = {
  slug: string;
  date: string;
  title: string;
  project: string;
  projectSlug: string;
  problem: string;
  context: string;
  experiments: string[];
  decisions: string[];
  result: string;
  limitation: string;
  lessons: string[];
  nextStep: string;
  tags: string[];
};

export const journalEntries: JournalEntry[] = [
  {
    slug: 'underwater-imaging-before-computer-vision',
    date: '2026-07-10',
    title: 'Treat underwater imaging as a data-quality problem before computer vision',
    project: 'Underwater Monitoring R&D',
    projectSlug: 'underwater-monitoring-research',
    problem: 'A vision model cannot recover useful evidence when turbidity, backscatter, lighting geometry, or working distance makes the subject unreadable.',
    context: 'The aquaculture monitoring initiative needs an honest route from pond imagery to future software-assisted observation without claiming an operational vision system.',
    experiments: ['Define a repeatable tank matrix for turbidity, camera distance, visible light angle, and infrared illumination.', 'Record environmental and camera settings with each sample so results remain comparable.', 'Score human-readable visibility before considering model accuracy.'],
    decisions: ['Make image acquisition a standalone validation gate.', 'Do not select a production model or publish accuracy expectations before representative samples exist.', 'Preserve failed samples because they reveal operating limits.'],
    result: 'A staged imaging protocol and evidence boundary are designed; an integrated field result has not yet been established.',
    limitation: 'No verified pond dataset or controlled comparison result is published yet.',
    lessons: ['Optics and illumination are part of the data pipeline.', 'A negative visibility result can prevent expensive premature AI work.'],
    nextStep: 'Build the controlled tank test, capture labelled conditions, and publish only reproducible findings.',
    tags: ['Underwater imaging', 'Computer vision', 'Aquaculture', 'Experiment design'],
  },
  {
    slug: 'review-gates-for-ai-commerce-operations',
    date: '2026-07-02',
    title: 'Use review gates for consequential AI commerce operations',
    project: 'AI Dropshipping Commerce Platform',
    projectSlug: 'ai-dropshipping-commerce-platform',
    problem: 'Generated prices, product claims, creatives, and campaigns can create commercial or compliance harm when publication is treated as a model side effect.',
    context: 'The platform connects several AI-assisted workflows to deterministic commerce records and external providers.',
    experiments: ['Model each output as a persisted draft with provenance.', 'Separate generation, validation, review, approval, and publication states.', 'Keep provider selection behind a task router rather than feature code.'],
    decisions: ['Require approval for consequential output by default.', 'Store model, task, references, validation, and reviewer state.', 'Use idempotent jobs when approved work crosses an external API boundary.'],
    result: 'The operational foundation and review-state architecture are implemented; live provider acceptance remains environment-dependent.',
    limitation: 'Production quality and provider behaviour still require credentialed sandbox testing.',
    lessons: ['Human review is an operating boundary, not a decorative confirmation dialog.', 'Deterministic commerce truth must remain separate from generated suggestions.'],
    nextStep: 'Complete sandbox acceptance with representative inputs, failures, retries, and reviewer feedback.',
    tags: ['AI systems', 'Commerce', 'Human review', 'Architecture'],
  },
];

export const engagementOptions = [
  {
    title: 'Architecture or AI-readiness review',
    summary: 'A bounded review of the current product, workflow, data, risks, and highest-value technical decisions.',
    outcome: 'Findings, priority risks, target architecture, and an implementation roadmap.',
  },
  {
    title: 'Focused prototype sprint',
    summary: 'A time-bounded build that tests one expensive product, AI, integration, or connected-system assumption.',
    outcome: 'Working evidence, documented limitations, and a clear build, change, or stop decision.',
  },
  {
    title: 'Production product slice',
    summary: 'One complete workflow delivered across interface, backend, data, integrations, verification, and deployment.',
    outcome: 'Reviewable production software with operating notes and a maintainable handover.',
  },
  {
    title: 'Ongoing engineering partnership',
    summary: 'Embedded ownership for a product with clear decision-makers, priorities, and a consistent delivery cadence.',
    outcome: 'Incremental releases, visible tradeoffs, maintained documentation, and reduced delivery risk.',
  },
] as const;
