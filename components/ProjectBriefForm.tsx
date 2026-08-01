'use client';

import Link from 'next/link';
import { track } from '@vercel/analytics';
import { useState, type InputHTMLAttributes } from 'react';
import { siteConfig } from '@/content/site';
import { projectBriefOptions } from '@/lib/project-brief';

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
};

export default function ProjectBriefForm() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setFormState({ status: 'submitting' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'The message could not be sent.');
      }

      form.reset();
      track('project_brief_success');
      setFormState({
        status: 'success',
        message: 'Thanks — your product brief has been sent. I will reply by email.',
      });
    } catch (error) {
      setFormState({
        status: 'error',
        message:
          error instanceof Error && error.message
            ? error.message
            : 'The form is temporarily unavailable. You can email me directly instead.',
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={formState.status === 'submitting'}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          placeholder="Name"
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          placeholder="you@company.com"
        />
        <Field
          label="Company / product"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={200}
          placeholder="Optional"
        />
        <Field
          label="Product URL"
          name="productUrl"
          type="url"
          inputMode="url"
          autoComplete="url"
          maxLength={500}
          placeholder="https://example.com (optional)"
        />
        <SelectField
          label="Product lane"
          name="productLane"
          placeholder="Select the closest lane"
          options={projectBriefOptions.productLanes}
        />
        <SelectField
          label="Current stage"
          name="deliveryStage"
          placeholder="Select the current stage"
          options={projectBriefOptions.deliveryStages}
        />
        <SelectField
          label="Budget range (USD)"
          name="budget"
          placeholder="Select a budget range"
          options={projectBriefOptions.budgets}
        />
        <SelectField
          label="Target timeline"
          name="timeline"
          placeholder="Select a timeline"
          options={projectBriefOptions.timelines}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="project-brief-message" className="form-label">
          Desired outcome and current state
        </label>
        <textarea
          id="project-brief-message"
          name="message"
          required
          minLength={30}
          maxLength={3000}
          rows={7}
          className="form-control resize-y"
          placeholder="Who is the product for, what exists today, what should change, and what is the main constraint?"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="project-brief-honeypot">Leave this field empty</label>
        <input
          id="project-brief-honeypot"
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={formState.status === 'submitting'}
          className="button-primary disabled:cursor-wait disabled:opacity-60"
        >
          {formState.status === 'submitting' ? 'Sending…' : 'Send product brief'}
          <span aria-hidden="true">↗</span>
        </button>
        <p className="text-xs leading-5 text-slate-500">
          Your details are used only to evaluate and reply to this enquiry.{' '}
          <Link href="/privacy" className="text-slate-300 underline decoration-white/20 underline-offset-4 hover:text-cyan-200">
            Privacy details
          </Link>
        </p>
      </div>

      {formState.message ? (
        <div
          role="status"
          aria-live="polite"
          className={`mt-5 rounded-xl border p-4 text-sm leading-6 ${
            formState.status === 'success'
              ? 'border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-200'
              : 'border-amber-300/20 bg-amber-300/[0.06] text-amber-100'
          }`}
        >
          {formState.message}{' '}
          {formState.status === 'error' ? (
            <a href={`mailto:${siteConfig.email}`} className="font-bold underline">
              Open email
            </a>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={`project-brief-${name}`} className="form-label">
        {label}
      </label>
      <input
        id={`project-brief-${name}`}
        name={name}
        className="form-control"
        {...props}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  placeholder,
  options,
}: {
  label: string;
  name: string;
  placeholder: string;
  options: readonly { value: string; label: string }[];
}) {
  return (
    <div>
      <label htmlFor={`project-brief-${name}`} className="form-label">
        {label}
      </label>
      <select
        id={`project-brief-${name}`}
        name={name}
        className="form-control"
        defaultValue=""
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
