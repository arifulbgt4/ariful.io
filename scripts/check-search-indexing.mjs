import assert from 'node:assert/strict';
import fs from 'node:fs';

import {
  assertSitemapParity,
  getSubmissionDecision,
  parseSitemapUrls,
  parseSubmissionState,
  submissionIntervalMs,
} from './submit-search-updates.mjs';

const now = Date.parse('2026-07-29T12:00:00.000Z');
const sitemapUrl = 'https://ariful.io/sitemap.xml';
const firstFingerprint = 'a'.repeat(64);
const secondFingerprint = 'b'.repeat(64);

function sitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?><urlset>${urls
    .map((url) => `<url><loc>${url.replace(/&/g, '&amp;')}</loc></url>`)
    .join('')}</urlset>`;
}

const parsedLegacyState = parseSubmissionState(
  JSON.stringify({
    fingerprint: firstFingerprint,
    submittedAt: new Date(now - 60_000).toISOString(),
    sitemapUrl,
  }),
  { sitemapUrl, now },
);

assert.equal(parsedLegacyState.version, 0);
assert.equal(parsedLegacyState.fingerprint, firstFingerprint);

assert.throws(
  () => parseSubmissionState('{', { sitemapUrl, now }),
  /not valid JSON/,
);
assert.throws(
  () =>
    parseSubmissionState(
      JSON.stringify({
        version: 2,
        fingerprint: firstFingerprint,
        submittedAt: new Date(now).toISOString(),
        sitemapUrl,
      }),
      { sitemapUrl, now },
    ),
  /Unsupported search submission state version/,
);
assert.throws(
  () =>
    parseSubmissionState(
      JSON.stringify({
        version: 1,
        fingerprint: firstFingerprint,
        submittedAt: new Date(now + 10 * 60_000).toISOString(),
        sitemapUrl,
      }),
      { sitemapUrl, now },
    ),
  /future submittedAt/,
);
assert.throws(
  () =>
    parseSubmissionState(
      JSON.stringify({
        version: 1,
        fingerprint: firstFingerprint,
        submittedAt: new Date(now).toISOString(),
        sitemapUrl: 'https://example.com/sitemap.xml',
      }),
      { sitemapUrl, now },
    ),
  /different sitemap/,
);

assert.deepEqual(
  getSubmissionDecision({ fingerprint: firstFingerprint, previousState: parsedLegacyState, now }),
  { changed: false, eligible: false, reason: 'unchanged' },
);
assert.deepEqual(
  getSubmissionDecision({ fingerprint: secondFingerprint, previousState: parsedLegacyState, now }),
  { changed: true, eligible: false, reason: 'within-24-hours' },
);
assert.deepEqual(
  getSubmissionDecision({
    fingerprint: secondFingerprint,
    previousState: {
      ...parsedLegacyState,
      submittedAt: new Date(now - submissionIntervalMs).toISOString(),
    },
    now,
  }),
  { changed: true, eligible: true, reason: 'ready' },
);
assert.deepEqual(
  getSubmissionDecision({ fingerprint: secondFingerprint, previousState: null, now }),
  { changed: true, eligible: true, reason: 'ready' },
);

const expectedUrls = [
  'https://ariful.io/',
  'https://ariful.io/blog/article-a',
  'https://ariful.io/blog/article-b?source=search&mode=check',
];
const expectedSitemap = sitemap(expectedUrls);
const reorderedPublishedSitemap = sitemap([expectedUrls[2], expectedUrls[0], expectedUrls[1]]);

assert.deepEqual(parseSitemapUrls(expectedSitemap), expectedUrls);
assert.equal(assertSitemapParity(expectedSitemap, reorderedPublishedSitemap).expectedUrls.length, 3);
assert.throws(
  () => assertSitemapParity(expectedSitemap, sitemap(expectedUrls.slice(0, 2))),
  /missing: https:\/\/ariful.io\/blog\/article-b/,
);
assert.throws(
  () => assertSitemapParity(expectedSitemap, sitemap([...expectedUrls, 'https://ariful.io/resume'])),
  /unexpected: https:\/\/ariful.io\/resume/,
);
assert.throws(
  () => parseSitemapUrls(sitemap([expectedUrls[0], expectedUrls[0]])),
  /duplicate URL/,
);
assert.throws(
  () => parseSitemapUrls('<html></html>'),
  /not a valid URL-set sitemap/,
);

const workflow = fs.readFileSync(new URL('../.github/workflows/search-indexing.yml', import.meta.url), 'utf8');
for (const requiredContract of [
  'actions/setup-node@v7',
  'actions/github-script@v9',
  'actions/download-artifact@v8',
  'actions/upload-artifact@v7',
  'SEARCH_LOCAL_SITEMAP_FILE',
  'node-version-file: .nvmrc',
  "      - 'scripts/submit-search-updates.mjs'",
]) {
  assert.match(workflow, new RegExp(requiredContract.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
}

console.log('Search indexing state, sitemap parity, and workflow contract checks passed.');
