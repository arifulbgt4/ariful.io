const baseUrl = (process.env.PRODUCTION_URL || 'https://ariful.io').replace(/\/$/, '');
const timeoutMs = 15_000;
const checks = [
  { path: '/', expected: ['<title>', 'application/ld+json'] },
  { path: '/resume', expected: ['<title>', 'application/ld+json'] },
  { path: '/robots.txt', expected: ['Sitemap:'] },
  { path: '/sitemap.xml', expected: ['<urlset'] },
  { path: '/rss.xml', expected: ['<rss'] },
];

const errors = [];

for (const check of checks) {
  const url = `${baseUrl}${check.path}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'ariful.io-production-watch/1.0' },
    });
    const body = await response.text();

    if (!response.ok) {
      errors.push(`${check.path}: HTTP ${response.status}`);
      continue;
    }

    for (const marker of check.expected) {
      if (!body.includes(marker)) errors.push(`${check.path}: missing marker ${marker}`);
    }

    console.log(`${check.path}: ${response.status} ${response.url}`);
  } catch (error) {
    errors.push(`${check.path}: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    clearTimeout(timer);
  }
}

if (errors.length > 0) {
  console.error(`Production watch failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`Production watch passed for ${checks.length} public endpoints at ${baseUrl}.`);
