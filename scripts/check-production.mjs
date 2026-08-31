const baseUrl = (process.env.PRODUCTION_URL || 'https://ariful.io').replace(/\/$/, '');
const timeoutMs = 15_000;

const checks = [
  {
    path: '/',
    expected: ['<title>', 'End-to-End Product Engineer', 'rel="canonical"', 'application/ld+json'],
  },
  {
    path: '/hire',
    expected: ['<title>', 'End-to-End Product Engineer', 'Free 30-minute product consultation', 'Open Calendly in a new tab', 'rel="canonical"', 'application/ld+json'],
    forbidden: ['<iframe'],
  },
  {
    path: '/work/eee-simulator',
    expected: ['<title>', 'EEE Simulator', 'Highlighted Lab', 'Documentation foundation complete', 'rel="canonical"', 'application/ld+json'],
  },
  {
    path: '/work/otask-developer-platform',
    expected: ['<title>', 'OTask', 'Foundation in development', 'authenticated Rust service', 'rel="canonical"', 'application/ld+json'],
  },
  {
    path: '/services/email-delivery-infrastructure',
    expected: ['<title>', 'Self-hosted SMTP', 'transactional email', 'Common questions', 'rel="canonical"', 'application/ld+json'],
  },
  {
    path: '/work/smtp-server-platform',
    expected: ['<title>', 'SMTP Server', 'Local implementation complete', 'Real-world solutions', 'SaaS and account platforms', 'REMOTE_ACCEPTED', 'rel="canonical"', 'application/ld+json'],
  },
  { path: '/robots.txt', expected: ['Sitemap:'] },
  {
    path: '/sitemap.xml',
    expected: ['<urlset', '<loc>https://ariful.io/hire</loc>', '<loc>https://ariful.io/services/email-delivery-infrastructure</loc>', '<loc>https://ariful.io/work/eee-simulator</loc>', '<loc>https://ariful.io/work/otask-developer-platform</loc>', '<loc>https://ariful.io/work/smtp-server-platform</loc>'],
    forbidden: [
      '<loc>https://ariful.io/resume</loc>',
      '<loc>https://ariful.io/projects</loc>',
      '<loc>https://ariful.io/lab</loc>',
      '<loc>https://ariful.io/work/graphql-todo-application</loc>',
      '<loc>https://ariful.io/work/otask-mail-server</loc>',
    ],
  },
  { path: '/rss.xml', expected: ['<rss'] },
  {
    path: '/manifest.webmanifest',
    expected: ['End-to-End Product Engineer'],
    contentType: 'application/manifest+json',
  },
  {
    path: '/opengraph-image',
    contentType: 'image/png',
    minimumBytes: 1_000,
  },
];

const errors = [];

async function fetchWithTimeout(url, init = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: {
        'user-agent': 'ariful.io-production-watch/2.0',
        ...init.headers,
      },
    });
  } finally {
    clearTimeout(timer);
  }
}

for (const check of checks) {
  const url = `${baseUrl}${check.path}`;

  try {
    const response = await fetchWithTimeout(url);
    const body = Buffer.from(await response.arrayBuffer());
    const bodyText = body.toString('utf8');

    if (!response.ok) {
      errors.push(`${check.path}: HTTP ${response.status}`);
      continue;
    }

    for (const marker of check.expected || []) {
      if (!bodyText.includes(marker)) errors.push(`${check.path}: missing marker ${marker}`);
    }

    for (const marker of check.forbidden || []) {
      if (bodyText.includes(marker)) errors.push(`${check.path}: contains forbidden marker ${marker}`);
    }

    if (check.contentType && !response.headers.get('content-type')?.includes(check.contentType)) {
      errors.push(`${check.path}: expected content-type ${check.contentType}`);
    }

    if (check.minimumBytes && body.byteLength < check.minimumBytes) {
      errors.push(`${check.path}: response was only ${body.byteLength} bytes`);
    }

    console.log(`${check.path}: ${response.status} ${response.url}`);
  } catch (error) {
    errors.push(`${check.path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

const removedPathChecks = [
  '/resume',
  '/projects',
  '/lab',
  '/work/graphql-todo-application',
  '/work/otask-mail-server',
];

for (const removedPath of removedPathChecks) {
  try {
    const removedUrl = `${baseUrl}${removedPath}`;
    const response = await fetchWithTimeout(removedUrl, { redirect: 'manual' });
    const location = response.headers.get('location');

    if (response.status !== 404) {
      errors.push(`${removedPath}: expected HTTP 404 for a removed route, received ${response.status}`);
    }

    if (location) {
      errors.push(`${removedPath}: removed route must not return a Location header, received ${location}`);
    }

    console.log(`${removedPath}: ${response.status} removed`);
  } catch (error) {
    errors.push(`${removedPath}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (errors.length > 0) {
  console.error(`Production watch failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`Production watch passed for ${checks.length} public endpoints and ${removedPathChecks.length} removed routes at ${baseUrl}.`);
