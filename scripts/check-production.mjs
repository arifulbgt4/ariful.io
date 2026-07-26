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
  { path: '/robots.txt', expected: ['Sitemap:'] },
  {
    path: '/sitemap.xml',
    expected: ['<urlset', '<loc>https://ariful.io/hire</loc>', '<loc>https://ariful.io/work/eee-simulator</loc>', '<loc>https://ariful.io/work/otask-developer-platform</loc>'],
    forbidden: [
      '<loc>https://ariful.io/resume</loc>',
      '<loc>https://ariful.io/projects</loc>',
      '<loc>https://ariful.io/lab</loc>',
      '<loc>https://ariful.io/work/graphql-todo-application</loc>',
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
    const response = await fetchWithTimeout(url, { redirect: 'follow' });
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

const redirectChecks = [
  { path: '/resume', destination: '/hire' },
  { path: '/projects', destination: '/work' },
  { path: '/lab', destination: '/work' },
  { path: '/work/graphql-todo-application', destination: '/work' },
];

for (const redirectCheck of redirectChecks) {
  try {
    const redirectUrl = `${baseUrl}${redirectCheck.path}`;
    const response = await fetchWithTimeout(redirectUrl, { redirect: 'manual' });
    const location = response.headers.get('location');
    const redirectTarget = location ? new URL(location, redirectUrl) : undefined;

    if (response.status !== 308) {
      errors.push(`${redirectCheck.path}: expected permanent HTTP 308, received ${response.status}`);
    }

    if (redirectTarget?.pathname !== redirectCheck.destination) {
      errors.push(`${redirectCheck.path}: expected redirect to ${redirectCheck.destination}, received ${location || 'no location header'}`);
    }

    console.log(`${redirectCheck.path}: ${response.status} ${location || 'no location header'}`);
  } catch (error) {
    errors.push(`${redirectCheck.path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (errors.length > 0) {
  console.error(`Production watch failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`Production watch passed for ${checks.length} public endpoints and ${redirectChecks.length} permanent redirects at ${baseUrl}.`);
