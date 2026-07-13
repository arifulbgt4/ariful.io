import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/content/site';
import {
  budgetLabels,
  deliveryStageLabels,
  optionLabel,
  productLaneLabels,
  timelineLabels,
} from '@/lib/project-brief';

export const runtime = 'nodejs';

type RateLimitRecord = { count: number; resetAt: number };
type ProjectBrief = {
  name: string;
  email: string;
  company: string;
  productUrl: string;
  productLane: string;
  deliveryStage: string;
  budget: string;
  timeline: string;
  message: string;
};

const rateLimitStore = new Map<string, RateLimitRecord>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 12_000;

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: 'The request is too large.' },
      { status: 413 },
    );
  }

  const clientId =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(clientId)) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Too many requests. Please email directly or try again later.',
      },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    const rawBody = await request.text();
    if (Buffer.byteLength(rawBody, 'utf8') > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, error: 'The request is too large.' },
        { status: 413 },
      );
    }

    const parsedBody: unknown = JSON.parse(rawBody);
    if (!parsedBody || typeof parsedBody !== 'object' || Array.isArray(parsedBody)) {
      throw new Error('Expected a JSON object.');
    }
    body = parsedBody as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 },
    );
  }

  if (asString(body.honeypot) || asString(body.companyWebsite)) {
    return NextResponse.json({ ok: true });
  }

  const rawLead = {
    name: asSingleLine(body.name),
    email: asSingleLine(body.email),
    company: asSingleLine(body.company),
    productUrl: asSingleLine(body.productUrl),
    productLane: asSingleLine(body.productLane),
    deliveryStage: asSingleLine(body.deliveryStage),
    budget: asSingleLine(body.budget),
    timeline: asSingleLine(body.timeline),
    message: asMultiline(body.message),
  };

  if (
    !rawLead.name ||
    rawLead.name.length > 120 ||
    !isEmail(rawLead.email) ||
    rawLead.email.length > 200 ||
    rawLead.company.length > 200 ||
    rawLead.message.length < 30 ||
    rawLead.message.length > 3000
  ) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Please provide a valid name, email, and product brief.',
      },
      { status: 400 },
    );
  }

  const productUrl = normalizeProductUrl(rawLead.productUrl);
  if (productUrl === null) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Please provide a valid HTTP or HTTPS product URL.',
      },
      { status: 400 },
    );
  }

  const productLane = optionLabel(productLaneLabels, rawLead.productLane);
  const deliveryStage = optionLabel(deliveryStageLabels, rawLead.deliveryStage);
  const budget = optionLabel(budgetLabels, rawLead.budget);
  const timeline = optionLabel(timelineLabels, rawLead.timeline);

  if (!productLane || !deliveryStage || !budget || !timeline) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Please select a valid product lane, stage, budget, and timeline.',
      },
      { status: 400 },
    );
  }

  const lead: ProjectBrief = {
    name: rawLead.name,
    email: rawLead.email,
    company: rawLead.company,
    productUrl,
    productLane,
    deliveryStage,
    budget,
    timeline,
    message: rawLead.message,
  };

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || 'Ariful.io <onboarding@resend.dev>';

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: 'The contact service is not configured yet.' },
      { status: 503 },
    );
  }

  let response: Response;
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: lead.email,
        subject: `[ariful.io] ${lead.productLane} / ${lead.deliveryStage} — ${lead.name}`,
        text: formatTextEmail(lead),
        html: formatHtmlEmail(lead),
      }),
    });
  } catch {
    console.error('Contact email provider request failed.');
    return NextResponse.json(
      {
        ok: false,
        error: 'The message could not be delivered. Please email directly.',
      },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error('Contact email provider returned a non-success response.', {
      status: response.status,
    });
    return NextResponse.json(
      {
        ok: false,
        error: 'The message could not be delivered. Please email directly.',
      },
      { status: 502 },
    );
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
  return asString(value).replace(/[\u0000-\u001f\u007f]+/g, ' ').trim();
}

function asMultiline(value: unknown) {
  return asString(value).replace(
    /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]+/g,
    '',
  );
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeProductUrl(value: string) {
  if (!value) {
    return '';
  }
  if (value.length > 500) {
    return null;
  }

  try {
    const url = new URL(value);
    if (
      !['http:', 'https:'].includes(url.protocol) ||
      !url.hostname ||
      url.username ||
      url.password
    ) {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}

function formatTextEmail(lead: ProjectBrief) {
  return [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company / product: ${lead.company || 'Not provided'}`,
    `Product URL: ${lead.productUrl || 'Not provided'}`,
    `Product lane: ${lead.productLane}`,
    `Current stage: ${lead.deliveryStage}`,
    `Budget: ${lead.budget}`,
    `Timeline: ${lead.timeline}`,
    '',
    lead.message,
  ].join('\n');
}

function formatHtmlEmail(lead: ProjectBrief) {
  const rows = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Company / product', lead.company || 'Not provided'],
    ['Product URL', lead.productUrl || 'Not provided'],
    ['Product lane', lead.productLane],
    ['Current stage', lead.deliveryStage],
    ['Budget', lead.budget],
    ['Timeline', lead.timeline],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px 8px 0;color:#64748b">${escapeHtml(label)}</td><td style="padding:8px 0;font-weight:600">${escapeHtml(value)}</td></tr>`,
    )
    .join('');

  return `<div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6"><h1 style="font-size:22px">New product enquiry</h1><table>${rows}</table><h2 style="margin-top:24px;font-size:16px">Desired outcome and current state</h2><p style="white-space:pre-wrap">${escapeHtml(lead.message)}</p></div>`;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[character] || character,
  );
}
