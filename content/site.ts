export const siteConfig = {
  name: 'Ariful Islam',
  brandName: 'Engineer Arif',
  url: 'https://ariful.io',
  email: 'arifulbgt4@gmail.com',
  location: 'Dhaka, Bangladesh',
  availability: 'Available for selected remote projects',
  headline: 'Software engineer and product builder for SaaS, AI commerce, backend systems, and connected products',
  description:
    'Ariful Islam is a multidisciplinary software engineer and product builder in Dhaka helping founders and teams ship SaaS, AI commerce, backend, automation, and connected-product systems.',
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
  evidence?: { title: string; description: string; href: string; label: string }[];
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
    slug: 'ai-commerce-platform-engineering',
    eyebrow: '02 / AI commerce systems',
    title: 'AI Commerce & Dropshipping Platform Engineering',
    shortTitle: 'AI commerce',
    summary:
      'Design and build controlled commerce platforms spanning supplier ingestion, international offers, AI-assisted operations, checkout, campaigns, and trustworthy analytics.',
    idealFor:
      'Commerce founders and product teams replacing disconnected dropshipping tools, introducing AI into an existing operation, or building a multi-market platform that needs explicit review, data, and deployment boundaries.',
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
        description: 'Flagship case study covering the implemented supplier, market, AI-control, campaign, checkout, and analytics foundation.',
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
    eyebrow: '04 / Systems engineering',
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
    eyebrow: '05 / Physical + digital',
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
  role?: string;
  flagship?: boolean;
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
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'ai-dropshipping-commerce-platform',
    title: 'AI Dropshipping Commerce Platform',
    category: 'AI commerce · Dropshipping operations',
    summary:
      'An end-to-end commerce operating system that connects supplier ingestion, international storefronts, AI-assisted pricing and content, creative and campaign workflows, analytics, and controlled automation.',
    challenge:
      'Dropshipping operations fragment product data, supplier risk, market localization, pricing, creative production, advertising, checkout, and analytics across disconnected tools. Adding AI without controls can make that fragmentation more dangerous by publishing invented claims, unsafe prices, or unreviewed campaigns.',
    approach:
      'Built a modular Next.js and Prisma platform with separate admin and customer deployment modes, a generic supplier layer, market-specific product profiles, a central multi-provider AI router, review-gated creative and marketing workflows, and currency-aware analytics.',
    outcome:
      'The operational foundation is implemented and verified across Prisma, focused workflow tests, TypeScript, ESLint, and production builds for both admin and customer modes. Live supplier, AI media, storage, and advertising connections remain in credentialed sandbox acceptance before production launch.',
    status: 'Operational foundation built',
    year: '2026–Present',
    role: 'Product architecture · Full-stack engineering · AI systems design',
    flagship: true,
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
      title: 'AI Commerce & Dropshipping Platform Engineering',
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
    slug: 'reusable-b2c-marketplace-platform',
    title: 'Reusable B2C Marketplace Platform',
    category: 'Marketplace engineering · Commerce systems',
    summary:
      'A reusable B2C marketplace foundation for businesses that need buyer-facing product discovery, controlled catalog operations, checkout, cash-on-delivery workflows, and admin-managed order fulfillment.',
    challenge:
      'Many marketplace projects begin as visual storefronts, then become difficult to adapt when business rules, product categories, seller operations, payment methods, fulfillment steps, or admin controls change. The engineering problem is to keep the core marketplace model stable while allowing each client business to customize the experience.',
    approach:
      'Planned the marketplace as a modular commerce system with separate buyer, admin, catalog, order, checkout, fulfillment, and customization boundaries. The design keeps the customer-facing interface replaceable while preserving reusable domain rules for products, approvals, inventory, cash-on-delivery orders, and operational reporting.',
    outcome:
      'The current portfolio entry documents the architecture, use cases, and delivery plan for a reusable marketplace foundation. It is presented as a product-engineering case study and implementation direction, not as a launched client marketplace with verified revenue or user metrics.',
    status: 'Architecture and product foundation planned',
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
      title: 'SaaS & Web Product Engineering',
      href: '/services/saas-product-engineering',
    },
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
    skills: ['ESP32', 'Raspberry Pi', 'Sensors', 'Camera modules', 'Automation', 'Realtime control', 'Aquaculture R&D'],
  },
  {
    title: 'Product invention',
    skills: ['Product architecture', 'Rapid prototyping', 'System integration', 'Experiment design', 'CAD concepts', 'Risk mapping'],
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
