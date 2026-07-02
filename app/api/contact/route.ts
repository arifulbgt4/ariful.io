import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/content/site';

export const runtime = 'nodejs';

type RateLimitRecord = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateLimitRecord>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 12_000) {
    return NextResponse.json({ ok: false, error: 'The request is too large.' }, { status: 413 });
  }

  const clientId = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(clientId)) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please email directly or try again later.' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 12_000) {
      return NextResponse.json({ ok: false, error: 'The request is too large.' }, { status: 413 });
    }
    body = JSON.parse(rawBody) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  if (asString(body.companyWebsite)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: asSingleLine(body.name).slice(0, 120),
    email: asSingleLine(body.email).slice(0, 200),
    company: asSingleLine(body.company).slice(0, 200),
    projectType: asSingleLine(body.projectType).slice(0, 120),
    budget: asSingleLine(body.budget).slice(0, 120),
    timeline: asSingleLine(body.timeline).slice(0, 120),
    message: asString(body.message).slice(0, 3000),
  };

  if (!lead.name || !isEmail(lead.email) || lead.message.length < 30) {
    return NextResponse.json({ ok: false, error: 'Please provide a valid name, email, and project brief.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Ariful.io <onboarding@resend.dev>';

  if (!apiKey) {
    return NextResponse.json({ ok: false, error: 'The contact service is not configured yet.' }, { status: 503 });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: lead.email,
      subject: `[ariful.io] ${lead.projectType || 'Project enquiry'} — ${lead.name}`,
      text: formatTextEmail(lead),
      html: formatHtmlEmail(lead),
    }),
  });

  if (!response.ok) {
    console.error('Contact email provider returned a non-success response.', { status: response.status });
    return NextResponse.json({ ok: false, error: 'The message could not be delivered. Please email directly.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function isRateLimited(clientId: string) {
  const now = Date.now();
  const current = rateLimitStore.get(clientId);
  if (!current || current.resetAt < now) {
    rateLimitStore.set(clientId, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  current.count += 1;
  rateLimitStore.set(clientId, current);
  return current.count > MAX_REQUESTS;
}

function asString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function asSingleLine(value: unknown) {
  return asString(value).replace(/[\u0000-\u001f\u007f]+/g, ' ');
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function formatTextEmail(lead: Record<string, string>) {
  return [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || 'Not provided'}`,
    `Project type: ${lead.projectType || 'Not provided'}`,
    `Budget: ${lead.budget || 'Not provided'}`,
    `Timeline: ${lead.timeline || 'Not provided'}`,
    '',
    lead.message,
  ].join('\n');
}

function formatHtmlEmail(lead: Record<string, string>) {
  const rows = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Company', lead.company || 'Not provided'],
    ['Project type', lead.projectType || 'Not provided'],
    ['Budget', lead.budget || 'Not provided'],
    ['Timeline', lead.timeline || 'Not provided'],
  ]
    .map(([label, value]) => `<tr><td style="padding:8px 16px 8px 0;color:#64748b">${escapeHtml(label)}</td><td style="padding:8px 0;font-weight:600">${escapeHtml(value)}</td></tr>`)
    .join('');

  return `<div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6"><h1 style="font-size:22px">New portfolio enquiry</h1><table>${rows}</table><h2 style="margin-top:24px;font-size:16px">Project brief</h2><p style="white-space:pre-wrap">${escapeHtml(lead.message)}</p></div>`;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'\"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] || character);
}
