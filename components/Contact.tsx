'use client';

import { useState } from 'react';
import { siteConfig } from '@/content/site';

const projectTypes = ['SaaS / web product', 'AI integration', 'Backend / API system', 'Connected product prototype', 'Architecture review', 'Other'];
const budgets = ['Under $2,000', '$2,000–$5,000', '$5,000–$10,000', '$10,000+', 'Not decided'];
const timelines = ['As soon as possible', 'Within 1 month', '1–3 months', '3+ months', 'Exploring options'];

type FormState = { status: 'idle' | 'submitting' | 'success' | 'error'; message?: string };

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

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
      setFormState({ status: 'success', message: 'Thanks — your project brief has been sent. I will reply by email.' });
    } catch {
      setFormState({
        status: 'error',
        message: `The form is temporarily unavailable. Please email ${siteConfig.email} directly.`,
      });
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="site-container">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.06] via-[#0B1018] to-blue-500/[0.06]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-white/[0.08] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="section-kicker">Start a conversation</p>
              <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.035em] text-white sm:text-5xl">What are you trying to ship?</h2>
              <p className="mt-5 leading-7 text-slate-400">
                Share the problem, current stage, and main constraint. A useful first reply will confirm fit, identify missing information, and suggest a concrete next step.
              </p>

              <div className="mt-9 space-y-5 text-sm">
                <div>
                  <p className="text-slate-500">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="mt-1 block font-semibold text-white hover:text-cyan-200">{siteConfig.email}</a>
                </div>
                <div>
                  <p className="text-slate-500">Location</p>
                  <p className="mt-1 font-semibold text-white">{siteConfig.location} · Remote worldwide</p>
                </div>
                <div>
                  <p className="text-slate-500">Good first-message material</p>
                  <p className="mt-1 leading-6 text-slate-300">Target user, desired outcome, existing stack, deadline, and budget range.</p>
                </div>
              </div>

              <div className="mt-9 flex gap-3">
                <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="button-secondary px-4 py-2.5 text-sm">LinkedIn ↗</a>
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="button-secondary px-4 py-2.5 text-sm">GitHub ↗</a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-7 sm:p-10 lg:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" type="text" autoComplete="name" required placeholder="Name" />
                <Field label="Work email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
                <Field label="Company / product" name="company" type="text" autoComplete="organization" placeholder="Company or product name" />
                <SelectField label="Project type" name="projectType" options={projectTypes} />
                <SelectField label="Budget range (USD)" name="budget" options={budgets} />
                <SelectField label="Target timeline" name="timeline" options={timelines} />
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="form-label">Project brief</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={30}
                  maxLength={3000}
                  rows={6}
                  className="form-control resize-y"
                  placeholder="What problem are you solving, what exists today, and what would a successful outcome look like?"
                />
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="companyWebsite">Company website</label>
                <input id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" disabled={formState.status === 'submitting'} className="button-primary disabled:cursor-wait disabled:opacity-60">
                  {formState.status === 'submitting' ? 'Sending…' : 'Send project brief'}
                  <span aria-hidden="true">↗</span>
                </button>
                <p className="text-xs leading-5 text-slate-500">Your details are used only to reply to this enquiry.</p>
              </div>

              {formState.message ? (
                <div
                  role="status"
                  className={`mt-5 rounded-xl border p-4 text-sm ${
                    formState.status === 'success'
                      ? 'border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-200'
                      : 'border-amber-300/20 bg-amber-300/[0.06] text-amber-100'
                  }`}
                >
                  {formState.message}{' '}
                  {formState.status === 'error' ? <a href={`mailto:${siteConfig.email}`} className="font-bold underline">Open email</a> : null}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={`contact-${name}`} className="form-label">{label}</label>
      <input id={`contact-${name}`} name={name} className="form-control" {...props} />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={`contact-${name}`} className="form-label">{label}</label>
      <select id={`contact-${name}`} name={name} className="form-control" defaultValue={options[0]}>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}
