import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = process.cwd();
const stateDirectory = path.join(root, '.search-submission-state');
const stateFile = path.join(stateDirectory, 'state.json');
const siteUrl = process.env.SEARCH_SITE_URL || 'https://ariful.io';
const sitemapUrl = process.env.SEARCH_SITEMAP_URL || `${siteUrl}/sitemap.xml`;
const localSitemapFile = path.resolve(
  root,
  process.env.SEARCH_LOCAL_SITEMAP_FILE || '.next/server/app/sitemap.xml.body',
);
export const submissionIntervalMs = 24 * 60 * 60 * 1000;
const clockSkewToleranceMs = 5 * 60 * 1000;
const stateVersion = 1;

function getContentFiles() {
  const files = [path.join(root, 'content', 'site.ts')];
  const blogDirectory = path.join(root, 'content', 'blog');

  for (const filename of fs.readdirSync(blogDirectory).sort()) {
    if (filename.endsWith('.md') && filename !== 'README.md') {
      files.push(path.join(blogDirectory, filename));
    }
  }

  return files;
}

function getContentFingerprint() {
  const hash = crypto.createHash('sha256');

  for (const file of getContentFiles()) {
    hash.update(path.relative(root, file));
    hash.update('\0');
    hash.update(fs.readFileSync(file));
    hash.update('\0');
  }

  return hash.digest('hex');
}

export function parseSubmissionState(rawState, options = {}) {
  const expectedSitemapUrl = options.sitemapUrl || sitemapUrl;
  const now = options.now ?? Date.now();
  let state;

  try {
    state = JSON.parse(rawState);
  } catch {
    throw new Error('Search submission state is not valid JSON.');
  }

  if (!state || typeof state !== 'object' || Array.isArray(state)) {
    throw new Error('Search submission state must be a JSON object.');
  }

  if (state.version !== undefined && state.version !== stateVersion) {
    throw new Error(`Unsupported search submission state version: ${state.version}.`);
  }

  if (typeof state.fingerprint !== 'string' || !/^[a-f0-9]{64}$/.test(state.fingerprint)) {
    throw new Error('Search submission state has an invalid content fingerprint.');
  }

  if (typeof state.submittedAt !== 'string') {
    throw new Error('Search submission state is missing submittedAt.');
  }

  const submittedAt = Date.parse(state.submittedAt);
  if (!Number.isFinite(submittedAt)) {
    throw new Error('Search submission state has an invalid submittedAt timestamp.');
  }

  if (submittedAt > now + clockSkewToleranceMs) {
    throw new Error('Search submission state has a future submittedAt timestamp.');
  }

  if (state.sitemapUrl !== expectedSitemapUrl) {
    throw new Error(`Search submission state belongs to a different sitemap: ${state.sitemapUrl || 'missing'}.`);
  }

  return {
    version: state.version ?? 0,
    fingerprint: state.fingerprint,
    submittedAt: new Date(submittedAt).toISOString(),
    sitemapUrl: state.sitemapUrl,
  };
}

function readState(now) {
  let rawState;

  try {
    rawState = fs.readFileSync(stateFile, 'utf8');
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') {
      return null;
    }

    throw error;
  }

  try {
    return parseSubmissionState(rawState, { sitemapUrl, now });
  } catch (error) {
    throw new Error(
      `Refusing to continue with invalid search submission state at ${path.relative(root, stateFile)}: ${
        error instanceof Error ? error.message : error
      }`,
    );
  }
}

export function getSubmissionDecision({ fingerprint, previousState, now = Date.now() }) {
  const changed = previousState?.fingerprint !== fingerprint;

  if (!changed) {
    return { changed: false, eligible: false, reason: 'unchanged' };
  }

  const lastSubmission = Date.parse(previousState?.submittedAt || '');
  if (Number.isFinite(lastSubmission) && now - lastSubmission < submissionIntervalMs) {
    return { changed: true, eligible: false, reason: 'within-24-hours' };
  }

  return { changed: true, eligible: true, reason: 'ready' };
}

function decodeXmlText(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, codePoint) => String.fromCodePoint(Number.parseInt(codePoint, 16)))
    .replace(/&#(\d+);/g, (_, codePoint) => String.fromCodePoint(Number.parseInt(codePoint, 10)))
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');
}

export function parseSitemapUrls(xml, label = 'sitemap') {
  if (typeof xml !== 'string' || !/<(?:[a-z_][\w.-]*:)?urlset\b/i.test(xml)) {
    throw new Error(`${label} is not a valid URL-set sitemap.`);
  }

  const urls = [];
  const seen = new Set();
  const locationPattern = /<(?:[a-z_][\w.-]*:)?loc\b[^>]*>([\s\S]*?)<\/(?:[a-z_][\w.-]*:)?loc\s*>/gi;

  for (const match of xml.matchAll(locationPattern)) {
    const rawLocation = match[1].trim();
    if (!rawLocation || rawLocation.includes('<')) {
      throw new Error(`${label} contains an invalid <loc> value.`);
    }

    let location;
    try {
      location = new URL(decodeXmlText(rawLocation));
    } catch {
      throw new Error(`${label} contains an invalid URL: ${rawLocation}.`);
    }

    if (!['http:', 'https:'].includes(location.protocol) || location.hash) {
      throw new Error(`${label} contains a non-indexable URL: ${location.href}.`);
    }

    const normalizedLocation = location.href;
    if (seen.has(normalizedLocation)) {
      throw new Error(`${label} contains a duplicate URL: ${normalizedLocation}.`);
    }

    seen.add(normalizedLocation);
    urls.push(normalizedLocation);
  }

  if (urls.length === 0) {
    throw new Error(`${label} does not contain any <loc> entries.`);
  }

  return urls;
}

export function assertSitemapParity(expectedXml, publishedXml) {
  const expectedUrls = parseSitemapUrls(expectedXml, 'Built sitemap');
  const publishedUrls = parseSitemapUrls(publishedXml, 'Published sitemap');
  const expectedSet = new Set(expectedUrls);
  const publishedSet = new Set(publishedUrls);
  const missing = expectedUrls.filter((url) => !publishedSet.has(url));
  const unexpected = publishedUrls.filter((url) => !expectedSet.has(url));

  if (missing.length > 0 || unexpected.length > 0) {
    const details = [
      missing.length > 0 ? `missing: ${missing.join(', ')}` : '',
      unexpected.length > 0 ? `unexpected: ${unexpected.join(', ')}` : '',
    ]
      .filter(Boolean)
      .join('; ');

    throw new Error(`Published sitemap does not match the current build (${details}).`);
  }

  return { expectedUrls, publishedUrls };
}

function setGithubOutput(name, value) {
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `${name}=${value}\n`);
  }
}

function requiredEnvironment(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function base64Url(value) {
  return Buffer.from(value).toString('base64url');
}

async function getGoogleAccessToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = base64Url(
    JSON.stringify({
      iss: serviceAccount.client_email,
      scope: 'https://www.googleapis.com/auth/webmasters',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    }),
  );
  const unsignedToken = `${header}.${payload}`;
  const signature = crypto.sign('RSA-SHA256', Buffer.from(unsignedToken), serviceAccount.private_key).toString('base64url');
  const assertion = `${unsignedToken}.${signature}`;

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  if (!response.ok) {
    throw new Error(`Google OAuth failed with HTTP ${response.status}.`);
  }

  const body = await response.json();
  if (!body.access_token) throw new Error('Google OAuth response did not include an access token.');
  return body.access_token;
}

async function verifyPublishedSitemap() {
  let expectedBody;

  try {
    expectedBody = fs.readFileSync(localSitemapFile, 'utf8');
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') {
      throw new Error(
        `Built sitemap is missing at ${path.relative(root, localSitemapFile)}. Run the production build before submission.`,
      );
    }

    throw error;
  }

  const response = await fetch(sitemapUrl, {
    headers: { accept: 'application/xml,text/xml' },
    cache: 'no-store',
  });
  const publishedBody = await response.text();

  if (!response.ok) {
    throw new Error(`Published sitemap is not ready at ${sitemapUrl} (HTTP ${response.status}).`);
  }

  const { expectedUrls } = assertSitemapParity(expectedBody, publishedBody);
  console.log(`Published sitemap matches all ${expectedUrls.length} URLs in the current production build.`);
}

async function submitGoogleSitemap() {
  let serviceAccount;
  try {
    serviceAccount = JSON.parse(requiredEnvironment('GOOGLE_SEARCH_CONSOLE_SERVICE_ACCOUNT_JSON'));
  } catch (error) {
    if (error instanceof SyntaxError) throw new Error('GOOGLE_SEARCH_CONSOLE_SERVICE_ACCOUNT_JSON is not valid JSON.');
    throw error;
  }

  if (!serviceAccount.client_email || !serviceAccount.private_key) {
    throw new Error('Google service account JSON must include client_email and private_key.');
  }

  const accessToken = await getGoogleAccessToken(serviceAccount);
  const property = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || 'sc-domain:ariful.io';
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/sitemaps/${encodeURIComponent(sitemapUrl)}`;
  const response = await fetch(endpoint, {
    method: 'PUT',
    headers: { authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) throw new Error(`Google Search Console sitemap submission failed with HTTP ${response.status}.`);
  console.log('Google Search Console sitemap submission succeeded.');
}

async function submitBingSitemap() {
  const apiKey = requiredEnvironment('BING_WEBMASTER_API_KEY');
  const endpoint = new URL('https://ssl.bing.com/webmaster/api.svc/json/SubmitFeed');
  endpoint.searchParams.set('apikey', apiKey);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ siteUrl, feedUrl: sitemapUrl }),
  });

  if (!response.ok) throw new Error(`Bing Webmaster sitemap submission failed with HTTP ${response.status}.`);
  console.log('Bing Webmaster sitemap submission succeeded.');
}

async function main() {
  const now = Date.now();
  const fingerprint = getContentFingerprint();
  const previousState = readState(now);
  const decision = getSubmissionDecision({ fingerprint, previousState, now });
  setGithubOutput('changed', String(decision.changed));
  setGithubOutput('eligible', String(decision.eligible));
  setGithubOutput('submitted', 'false');

  if (!decision.changed) {
    console.log('No indexable content change detected; search console submission skipped.');
    return null;
  }

  console.log('Indexable content changed since the last successful submission.');

  if (!decision.eligible) {
    console.log('A successful submission occurred within the last 24 hours; the content change remains pending.');
    return;
  }

  if (process.argv.includes('--check')) {
    console.log('Check-only mode: submission was not attempted.');
    return;
  }

  await verifyPublishedSitemap();
  await submitGoogleSitemap();
  await submitBingSitemap();

  fs.mkdirSync(stateDirectory, { recursive: true });
  fs.writeFileSync(
    stateFile,
    `${JSON.stringify({ version: stateVersion, fingerprint, submittedAt: new Date().toISOString(), sitemapUrl }, null, 2)}\n`,
  );
  setGithubOutput('submitted', 'true');
  console.log('Submission state updated after both providers succeeded.');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
