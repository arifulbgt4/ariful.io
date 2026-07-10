import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const stateDirectory = path.join(root, '.search-submission-state');
const stateFile = path.join(stateDirectory, 'state.json');
const siteUrl = process.env.SEARCH_SITE_URL || 'https://ariful.io';
const sitemapUrl = process.env.SEARCH_SITEMAP_URL || `${siteUrl}/sitemap.xml`;
const submissionIntervalMs = 7 * 24 * 60 * 60 * 1000;

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

function readState() {
  try {
    return JSON.parse(fs.readFileSync(stateFile, 'utf8'));
  } catch {
    return null;
  }
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
  const response = await fetch(sitemapUrl, { headers: { accept: 'application/xml,text/xml' } });
  const body = await response.text();

  if (!response.ok || !body.includes('<urlset')) {
    throw new Error(`Published sitemap is not ready at ${sitemapUrl} (HTTP ${response.status}).`);
  }
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
  const fingerprint = getContentFingerprint();
  const previousState = readState();
  const changed = previousState?.fingerprint !== fingerprint;
  setGithubOutput('changed', String(changed));
  setGithubOutput('submitted', 'false');

  if (!changed) {
    console.log('No indexable content change detected; search console submission skipped.');
    return;
  }

  console.log('Indexable content changed since the last successful submission.');

  const lastSubmission = Date.parse(previousState?.submittedAt || '');
  if (Number.isFinite(lastSubmission) && Date.now() - lastSubmission < submissionIntervalMs) {
    console.log('A successful submission occurred within the last seven days; the content change remains pending.');
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
    `${JSON.stringify({ fingerprint, submittedAt: new Date().toISOString(), sitemapUrl }, null, 2)}\n`,
  );
  setGithubOutput('submitted', 'true');
  console.log('Submission state updated after both providers succeeded.');
}

await main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
