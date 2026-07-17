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
  consultation: {
    provider: 'Calendly',
    eventUrl: 'https://calendly.com/arifulbgt4/free-product-consultation',
    durationMinutes: 30,
    location: 'Google Meet',
    label: 'Free 30-minute product consultation',
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
        title: 'OTask local-first orchestration platform',
        description: 'An in-development systems case study spanning trusted desktop execution, cross-device control, versioned contracts, and policy boundaries.',
        href: '/work/otask-developer-platform',
        label: 'Read the OTask case study',
      },
      {
        title: 'Production-ready Next.js SaaS architecture',
        description: 'A practical guide to turning a web interface into an operable software product.',
        href: '/blog/production-ready-nextjs-saas-architecture',
        label: 'Read the architecture guide',
      },
      {
        title: 'Retry-safe Stripe webhooks in Next.js',
        description: 'A production reliability guide covering durable receipt, ordering, idempotent effects, queues, reconciliation, and failure testing.',
        href: '/blog/retry-safe-stripe-webhooks-nextjs',
        label: 'Read the Stripe webhook guide',
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
        title: 'OTask orchestration platform',
        description: 'Cross-platform systems evidence spanning authenticated desktop IPC, policy-controlled execution, realtime coordination, and local-first storage.',
        href: '/work/otask-developer-platform',
        label: 'Review the OTask systems case study',
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
  | 'documentation-foundation'
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
  highlighted?: boolean;
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
    slug: 'eee-simulator',
    title: 'EEE Simulator',
    category: 'Electronics · Computer architecture · Simulation R&D',
    tier: 'lab',
    displayOrder: 1,
    highlighted: true,
    schemaType: 'CreativeWork',
    summary:
      'An open, browser-based electronics and computer simulation platform planned around explicit fidelity—from realistic component and circuit behavior to logic, processors, and educational computers.',
    targetUsers:
      'Electronics learners and educators, circuit and embedded engineers, component-model authors, and researchers exploring logic, processors, memory, and computer architecture.',
    buyerOutcome:
      'A decision-complete product and architecture foundation for a local-first virtual electronics laboratory that can grow from component-level evidence to educational computer systems without making infeasible full-transistor claims.',
    challenge:
      'Electronics tools usually specialize in one layer: circuit solving, interactive education, digital logic, RTL, or architecture. Connecting those layers in one browser product requires explicit fidelity, deterministic co-simulation, bounded computation, validated models, and a staged release path that does not pretend a modern processor can run transistor-by-transistor in one tab.',
    approach:
      'Defined a hierarchical multi-fidelity product, a realistic-electronics-first roadmap, a Next.js and TypeScript browser shell, a Rust/WebAssembly simulation core, Worker-isolated execution, a versioned .eesim format, local/cloud workload boundaries, and traceable component, validation, security, accessibility, and licensing contracts.',
    outcome:
      'The public repository has a complete documentation baseline and an implementation-ready task system. It does not yet contain application code, runtime configuration, a deployed simulator, or numerical validation evidence; the first Ready task establishes the repository layout before editor and solver work begins.',
    status: 'Documentation foundation complete',
    maturity: {
      stage: 'documentation-foundation',
      label: 'Documentation foundation complete',
      summary:
        'Product scope, architecture, 38 requirements, 10 accepted ADRs, a 162-family and 502-variant component baseline, release gates, validation strategy, and 3,090 atomic tasks are documented; runtime implementation has not started.',
      verifiedOn: '2026-07-14',
    },
    lifecycle: [
      {
        stage: 'Discovery',
        status: 'complete',
        summary:
          'The audience, cross-layer simulation problem, feasibility limits, fidelity model, and realistic-electronics-first product sequence were researched and documented.',
      },
      {
        stage: 'Scope & architecture',
        status: 'complete',
        summary:
          'Normative requirements, ADRs, system boundaries, file and worker contracts, component taxonomy, release gates, risks, and validation strategy are defined.',
      },
      {
        stage: 'Design & prototype',
        status: 'planned',
        summary:
          'The accessible schematic editor, physical component views, project format, local persistence, and first linear-circuit prototypes follow the repository-foundation task.',
      },
      {
        stage: 'Build & integrate',
        status: 'planned',
        summary:
          'The React editor, Rust/WASM solver, deterministic digital scheduler, multi-fidelity adapters, instruments, and isolated cloud workers remain roadmap work.',
      },
      {
        stage: 'Verify & launch',
        status: 'planned',
        summary:
          'Numerical, deterministic, thermal, failure, performance, accessibility, browser, security, and golden-circuit evidence must pass staged release gates before launch.',
      },
      {
        stage: 'Handover & iterate',
        status: 'planned',
        summary:
          'Open-source contribution, hosted collaboration, educational CPU, RTL, architecture, and GPU research expand only after prerequisite gates pass.',
      },
    ],
    constraints: [
      'The repository currently contains documentation only; there is no application code, runtime configuration, migration, deployment, or working simulator to present as delivered.',
      'No numerical accuracy, circuit result, solver convergence, performance, accessibility, browser compatibility, or security claim has current runtime evidence.',
      'CPU, GPU, full-computer, cloud collaboration, and advanced research capabilities are intentionally gated behind the Realistic Electronics MVP.',
      'The 162-family and 502-variant catalog is a versioned family/preset baseline, not every manufacturer SKU or a claim that models are already released.',
    ],
    evidence: [
      {
        label: 'Public source repository',
        detail:
          'The Apache-2.0 repository exposes the product charter, requirements, accepted decisions, architecture, catalog contracts, roadmap, task system, validation strategy, and explicit current-status boundary.',
        href: 'https://github.com/arifulbgt4/EEE_Simulator',
        verifiedOn: '2026-07-14',
      },
      {
        label: 'Normative product and architecture baseline',
        detail:
          'The repository records 38 stable product requirements and 10 accepted architecture decisions covering fidelity, browser and Worker boundaries, storage, co-simulation, rendering, isolation, collaboration, and licensing.',
        href: 'https://github.com/arifulbgt4/EEE_Simulator/blob/dev/docs/START_HERE.md',
        verifiedOn: '2026-07-14',
      },
      {
        label: 'Catalog and delivery traceability',
        detail:
          'The documented baseline tracks 162 component families, 502 meaningful variants or presets, 38 reusable package templates, 54 golden validation tasks, and 3,090 atomic implementation tasks.',
        href: 'https://github.com/arifulbgt4/EEE_Simulator/blob/dev/docs/tasks/TASK_INDEX.md',
        verifiedOn: '2026-07-14',
      },
      {
        label: 'Honest implementation boundary',
        detail:
          'The repository README states that the documentation foundation is complete while application code, runtime configuration, migrations, and deployment assets are not yet present.',
        href: 'https://github.com/arifulbgt4/EEE_Simulator#project-status',
        verifiedOn: '2026-07-14',
      },
    ],
    year: '2026–Present',
    role: 'Product research · Systems architecture · Simulation platform planning · Open-source delivery design',
    tags: [
      'Electronics simulation',
      'Computer architecture',
      'Next.js',
      'TypeScript',
      'Rust',
      'WebAssembly',
      'Local-first',
      'Open source',
    ],
    highlights: [
      'Hierarchical F0–F5 fidelity model spanning connectivity, equations, digital timing, compact models, electrothermal behavior, and physical research',
      'Realistic Electronics MVP gated before educational CPU, RTL, full-computer, cloud, architecture, and GPU expansion',
      'Local-first Next.js and TypeScript product with a Rust/WASM core and off-main-thread simulation workers',
      'Deterministic timestamped coordination across analog, digital, thermal, RTL, and external simulation engines',
      'Versioned .eesim project format, Git-friendly representation, offline persistence, and explicit migration contracts',
      'Frozen documentation baseline of 162 component families and 502 meaningful variants or presets',
      'Original schematic and physical representation contracts with reusable IC package definitions and pin-map validation',
      'Traceable requirements, risks, release gates, golden circuits, validation tasks, and atomic implementation backlog',
    ],
    systemMap: [
      {
        title: 'Browser laboratory',
        description:
          'Next.js, React, TypeScript, Canvas/WebGL rendering, accessible controls, local project editing, instruments, and explanatory visualization.',
      },
      {
        title: 'Simulation core',
        description:
          'A Rust/WebAssembly analog core and deterministic digital engine run outside the main UI thread with bounded waveform processing.',
      },
      {
        title: 'Fidelity scheduler',
        description:
          'Timestamped adapters coordinate circuit, logic, thermal, RTL, architecture, and external engines without silently lowering fidelity.',
      },
      {
        title: 'Cloud and evidence',
        description:
          'Heavy or untrusted jobs use isolated workers, immutable inputs, streamed progress, reproducible results, and traceable validation evidence.',
      },
    ],
    caseStudySections: [
      {
        eyebrow: '01 / Feasibility boundary',
        title: 'One project can connect simulation layers without treating every scale as the same physics problem.',
        description:
          'The central product decision is to expose the right fidelity for the question and make substitutions, assumptions, provenance, and limits visible.',
        items: [
          'F0 through F5 distinguish schematic connectivity, ideal equations, behavioral timing, compact models, electrothermal behavior, and physical-device research.',
          'Detailed electrical models serve small circuits and selected blocks; event, RTL, architecture, and ISA models serve larger systems.',
          'A global integer-time scheduler coordinates analog steps, digital events, thermal updates, and external-engine boundaries deterministically.',
          'The product explicitly rejects full-transistor simulation of modern CPUs, GPUs, or gigabyte-scale memory in a browser.',
        ],
      },
      {
        eyebrow: '02 / First production gate',
        title: 'Realistic electronics must work before the roadmap advances to computers.',
        description:
          'The first production target connects a visual editor, non-ideal circuit behavior, measurement, waveforms, thermal and failure evidence, logic, and Worker execution.',
        items: [
          'Canonical demonstrations cover LED and RC circuits, transistor switching, CMOS, oscillation, logic gates, latches, memory, and adders.',
          'Models must declare tolerance, leakage, parasitics, ratings, thermal behavior, failures, supported analyses, provenance, and limitations.',
          'Golden circuits, differential references, deterministic seeds, and explicit error envelopes replace visually plausible but unverified results.',
          'CPU and GPU features remain gated until this evidence-backed electronics foundation passes.',
        ],
      },
      {
        eyebrow: '03 / Product architecture',
        title: 'Local interaction, isolated heavy computation, and immutable evidence have separate responsibilities.',
        description:
          'The architecture keeps eligible small simulations responsive in the browser while moving oversized or untrusted work through controlled server boundaries.',
        items: [
          'The browser owns interaction and local drafts; numerical solvers and waveform processing run in Workers rather than on the UI thread.',
          'The engine-neutral project model generates private netlists and execution plans for the selected simulation engines.',
          'Heavy jobs use validated requests, immutable inputs, bounded workers, checkpoints, cancellation, streamed progress, and checksum-verified results.',
          'External engines retain license and process-isolation boundaries instead of becoming unsafe linked dependencies of the open core.',
        ],
      },
      {
        eyebrow: '04 / Delivery evidence',
        title: 'A large vision is decomposed into reviewable gates and atomic work.',
        description:
          'The documentation foundation turns the platform into a staged program with stable identifiers, dependencies, allowed files, tests, and completion evidence.',
        items: [
          'Thirty-eight requirements trace into accepted decisions, release gates, epics, atomic tasks, validation work, and acceptance checklists.',
          'The task index contains 400 platform tasks, 2,636 component/package tasks, and 54 golden validation tasks.',
          'Only one initial task is Ready: establish repository layout and ownership boundaries before editor or solver implementation.',
          'A component cannot be called Released until its symbols, connectivity, models, validation, provenance, documentation, and synchronized records pass.',
        ],
      },
    ],
    clientApplications: [
      'Decompose a technically ambitious engineering product into feasible fidelity levels, release gates, and verifiable vertical slices.',
      'Design a browser product that combines responsive interaction with Rust/WebAssembly and isolated computational workers.',
      'Define simulation, digital-twin, scientific, or hardware-tooling contracts around deterministic data, provenance, limits, and validation evidence.',
      'Plan a component or model catalog with stable identifiers, lifecycle states, import boundaries, package mappings, and quality traceability.',
      'Turn research requirements into an open-source architecture, dependency-aware backlog, release evidence, and contribution workflow.',
    ],
    relatedService: {
      title: 'Connected & IoT Product Prototyping',
      href: '/services/connected-product-prototyping',
    },
    repository: 'https://github.com/arifulbgt4/EEE_Simulator',
  },
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
    title: 'OTask',
    category: 'Local-first automation · Cross-device control',
    tier: 'core',
    displayOrder: 2,
    schemaType: 'CreativeWork',
    summary:
      'A GUI-first, local-first orchestration platform designed to let trusted desktop devices execute deterministic, policy-approved workflows while mobile and web clients schedule, approve, monitor, cancel, and review work.',
    targetUsers:
      'Developers and technical users who need repeatable workspace automation on trusted desktops with controlled cross-device oversight.',
    buyerOutcome:
      'A safety-first foundation for running approved local workflows without giving the cloud or an AI model unrestricted command execution, with explicit approvals, lifecycle state, and evidence boundaries.',
    challenge:
      'Remote task control can become unsafe when cloud services, untrusted AI output, broad shell access, device credentials, and execution evidence are not separated.',
    approach:
      'Defined a GUI-only architecture with a Tauri 2 and React desktop, Rust trusted service, versioned TaskPlan contracts, Supabase control plane, Flutter mobile shell, planned Next.js portal, short-lived grants, local credential and key boundaries, and deterministic execution and evidence gates.',
    outcome:
      'Governance, contracts and design system, the Supabase identity and control-plane backend, and the first five desktop-foundation tasks are CI-validated. The desktop has a functional shell plus secure settings, PKCE authentication, device-key and registration boundaries, and authenticated Rust IPC; SQLite repositories are active local work. Workflow execution, scheduling and sync, evidence, full mobile and web clients, interactive terminal, local Gemma runtime, and production release remain future phases.',
    status: 'Desktop and control-plane foundation in development',
    maturity: {
      stage: 'in-development',
      label: 'Foundation in development',
      summary:
        'P00–P02 and P03-001 through P03-005 are complete with recorded six-job CI evidence. P03-006 SQLite persistence is active local work and is not yet committed or remotely validated.',
      verifiedOn: '2026-07-14',
    },
    lifecycle: [
      {
        stage: 'Discovery',
        status: 'complete',
        summary: 'The authoritative product boundary, safety model, user roles, and first end-to-end orchestration scenario are documented.',
      },
      {
        stage: 'Scope & architecture',
        status: 'complete',
        summary: 'Ten ADRs, 14 versioned schemas, 27 fixtures, TypeScript/Rust/Dart mappings, and 22 GUI route-state contracts define the system.',
      },
      {
        stage: 'Design & prototype',
        status: 'in-progress',
        summary: 'The desktop shell is built; dashboard data remains demonstrative and the remaining desktop views use explicit empty-state placeholders.',
      },
      {
        stage: 'Build & integrate',
        status: 'in-progress',
        summary: 'The Supabase control plane and P03-001 through P03-005 are complete; P03-006 SQLite repositories are active local work.',
      },
      {
        stage: 'Verify & launch',
        status: 'planned',
        summary: 'The executor, sync and evidence path, complete clients, hardening, signing, cross-device beta, and deployment are future gates.',
      },
      {
        stage: 'Handover & iterate',
        status: 'planned',
        summary: 'Stable-channel releases, rollback, support operations, and iteration follow the P11 product-acceptance gate.',
      },
    ],
    constraints: [
      'There is no live app, production deployment, signed installer, user or usage outcome, or operating-scale result to claim.',
      'Desktop dashboard metrics and activity are static demonstration data; non-dashboard screens are currently explicit placeholders.',
      'Web and VS Code packages are logic-free bootstrap surfaces, while mobile is a Flutter shell with authentication tests rather than a complete client.',
      'P04 through P11, including actual workflow execution, scheduling, terminal, evidence, local AI, and end-to-end remote control, remain planned.',
      'The cloud is control-plane-only and must never execute shell commands; planned Gemma output remains an untrusted TaskPlanDraft until validation and approval.',
      'Current SQLite repository work passes local checks but has no commit or remote CI evidence yet; the public default branch remains at the earlier bootstrap state.',
    ],
    evidence: [
      {
        label: 'Public source repository',
        detail: 'The public MIT-licensed repository exposes the desktop, mobile, web, Rust service, contracts, Supabase, documentation, and delivery evidence.',
        href: 'https://github.com/arifulbgt4/Otask_Desktop',
        verifiedOn: '2026-07-14',
      },
      {
        label: 'Authoritative product and safety boundary',
        detail: 'The master specification defines trusted local execution, GUI-only control, cloud limits, approvals, grants, TaskPlan contracts, and the planned local-model boundary.',
        href: 'https://github.com/arifulbgt4/Otask_Desktop/blob/task/P03-005-service-ipc/docs/MASTER_SPEC.md',
        verifiedOn: '2026-07-14',
      },
      {
        label: 'Authenticated desktop service evidence',
        detail: 'P03-005 records authenticated Tauri-to-Rust IPC, lifecycle handling, regression coverage, build artifacts, and six successful CI jobs.',
        href: 'https://github.com/arifulbgt4/Otask_Desktop/blob/task/P03-005-service-ipc/docs/evidence/P03-005.md',
        verifiedOn: '2026-07-14',
      },
      {
        label: 'Contracts and design-system phase evidence',
        detail: 'The P01 exit record covers versioned schemas and fixtures, cross-language mappings, design tokens, and route-state contracts.',
        href: 'https://github.com/arifulbgt4/Otask_Desktop/blob/task/P03-005-service-ipc/docs/evidence/P01-PHASE-EXIT.md',
        verifiedOn: '2026-07-14',
      },
      {
        label: 'Published delivery boundary',
        detail: 'The ordered backlog separates completed foundations from executor, cross-device control, terminal, local AI, hardening, beta, and release work.',
        href: 'https://github.com/arifulbgt4/Otask_Desktop/blob/task/P03-005-service-ipc/docs/agent/backlog.md',
        verifiedOn: '2026-07-14',
      },
    ],
    year: '2026–Present',
    role: 'Product research · Systems architecture · Desktop/backend engineering · Security and delivery design',
    tags: ['Tauri 2', 'React', 'TypeScript', 'Rust', 'SQLite', 'Flutter', 'Supabase', 'Local-first', 'Deterministic workflows'],
    highlights: [
      'Trusted desktops are the only intended command-execution surface; cloud services coordinate but never run the shell',
      'Versioned TaskPlan, schema, fixture, risk, approval, grant, cancellation, and evidence contracts',
      'Tauri 2 and React desktop backed by an authenticated Rust service boundary',
      'Supabase identity and control plane with RLS, device pairing, key rotation, signed grants, terminal signaling, and release metadata',
      'Cross-language TypeScript, Rust, and Dart contract mappings for desktop, service, mobile, and planned web clients',
      'Planned local Gemma runtime produces untrusted drafts rather than executable commands',
    ],
    systemMap: [
      { title: 'Plan safely', description: 'Strict versioned TaskPlan contracts, validation, risk classification, approval requirements, and immutable plan identity bound what can run.' },
      { title: 'Execute locally', description: 'The trusted desktop and authenticated Rust service form the only intended command-execution boundary.' },
      { title: 'Control across devices', description: 'Supabase-backed mobile and web surfaces coordinate identity, devices, schedules, approvals, grants, and state while the cloud never executes commands.' },
      { title: 'Prove outcomes', description: 'The planned run lifecycle captures redacted logs, verification checks, artifacts, and finalized evidence before controlled synchronization.' },
    ],
    caseStudySections: [
      {
        eyebrow: '01 / Trust boundary',
        title: 'Remote control must not turn the cloud or an AI model into an unrestricted shell.',
        description:
          'The core architecture separates planning, approval, credentials, execution, observation, and evidence so that convenient cross-device control does not erase local ownership.',
        items: [
          'Only an enrolled trusted desktop is intended to execute a validated immutable TaskPlan.',
          'The Supabase layer coordinates identity, devices, scheduling, approvals, grants, signaling, and state but never executes shell commands.',
          'Device credentials and signing keys remain behind local secure-storage and authenticated service boundaries.',
          'Planned local-model output is an untrusted draft that cannot bypass schema, policy, risk, approval, or plan-identity checks.',
        ],
      },
      {
        eyebrow: '02 / Cross-platform contract',
        title: 'Desktop, mobile, web, and cloud coordinate through one versioned workflow language.',
        description:
          'Shared schemas and state machines reduce interpretation drift across the React/Tauri desktop, Rust service, Flutter client, planned Next.js portal, and Supabase control plane.',
        items: [
          'Fourteen versioned schemas and 27 fixtures have TypeScript, Rust, and Dart compatibility mappings.',
          'Twenty-two GUI route-state contracts define loading, empty, error, blocked, and ready behavior before feature logic arrives.',
          'Signed short-lived grants and explicit cancellation semantics constrain remote actions and terminal sessions.',
          'Run, step, log, artifact, verification, and evidence states are designed for deterministic replay and review.',
        ],
      },
      {
        eyebrow: '03 / Implemented foundation',
        title: 'The control plane and first desktop layers have evidence; the executor does not yet.',
        description:
          'The current status distinguishes remotely CI-validated milestones, active local persistence work, demonstrative UI, and future end-to-end functionality.',
        items: [
          'P00 governance, P01 contracts and design foundation, and P02 Supabase identity/control-plane work are complete.',
          'P03-001 through P03-005 deliver the shell, secure settings, PKCE authentication, device identity and registration, and authenticated Rust IPC.',
          'P03-006 SQLite migrations and repositories are active uncommitted work and are not presented as remotely validated.',
          'Actual workflow execution, synchronization, complete clients, interactive terminal, Gemma runtime, hardening, beta, and release remain planned.',
        ],
      },
      {
        eyebrow: '04 / Client value',
        title: 'The same boundaries apply to any product that turns intent into consequential automation.',
        description:
          'The project demonstrates how to combine cross-platform UX, local authority, cloud coordination, AI assistance, and auditable execution without treating convenience as permission.',
        items: [
          'Keep execution close to the trusted resource while exposing controlled remote oversight.',
          'Turn model suggestions into typed, reviewable plans rather than direct side effects.',
          'Model approvals, cancellation, idempotency, grants, logs, artifacts, and evidence as product states.',
          'Advance through narrow, CI-backed milestones with explicit blockers and claim boundaries.',
        ],
      },
    ],
    clientApplications: [
      'Design a local-first desktop product with a secure service boundary and controlled cloud coordination.',
      'Build cross-device approval, scheduling, monitoring, cancellation, and evidence workflows around trusted execution.',
      'Introduce AI assistance through typed drafts, deterministic validation, policy checks, and human approval.',
      'Create shared cross-language contracts for desktop, service, mobile, web, and backend clients.',
      'Decompose a security-sensitive product into traceable, CI-backed delivery gates without overstating incomplete capability.',
    ],
    relatedService: { title: 'AI-Enabled Product Engineering', href: '/services/ai-integration-automation' },
    relatedArticles: [
      { title: 'Production-Ready Next.js SaaS Architecture', href: '/blog/production-ready-nextjs-saas-architecture' },
      { title: 'Reliable AI Features Need Evaluation and Human Review', href: '/blog/reliable-ai-features-rag-agents-human-review' },
    ],
    repository: 'https://github.com/arifulbgt4/Otask_Desktop/tree/task/P03-005-service-ipc',
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
