'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { business } from '@/data/business';
import { cn } from '@/lib/cn';
import { CheckIcon, PhoneIcon } from '@/components/Icons';

type FormState = {
  service: string;
  address: string;
  customerType: 'new' | 'existing' | '';
  name: string;
  phone: string;
  email: string;
  message: string;
  /** Honeypot — bots fill it, humans never see it */
  company: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  service: '',
  address: '',
  customerType: '',
  name: '',
  phone: '',
  email: '',
  message: '',
  company: '',
};

const steps = [
  { id: 1, label: 'Your project', hint: 'Tell us what you need' },
  { id: 2, label: 'Your contact info', hint: 'So we can get back to you' },
  { id: 3, label: 'Any details', hint: 'Anything else we should know' },
];

/** Quick-pick tiles for the most requested work, then a full dropdown */
const quickPicks = services.filter((s) => s.featured).slice(0, 4);

const phonePattern = /^[\d\s().+-]{10,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(step: number, form: FormState): Errors {
  const errors: Errors = {};
  if (step === 1) {
    if (!form.service) errors.service = 'Pick the service you need.';
  }
  if (step === 2) {
    if (!form.name.trim()) errors.name = 'Please enter your name.';
    if (!form.phone.trim()) errors.phone = 'A phone number helps us call you back.';
    else if (!phonePattern.test(form.phone.trim()))
      errors.phone = 'That does not look like a valid phone number.';
    if (form.email.trim() && !emailPattern.test(form.email.trim()))
      errors.email = 'That does not look like a valid email address.';
    if (!form.customerType)
      errors.customerType = 'Let us know if you are a new or existing customer.';
  }
  return errors;
}

export function LeadForm({
  /** Compact variant drops the intro copy — used inside narrow columns */
  variant = 'full',
  id = 'lead-form',
}: {
  variant?: 'full' | 'compact';
  id?: string;
}) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );
  const [serverMessage, setServerMessage] = useState('');

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const next = () => {
    const found = validate(step, form);
    setErrors(found);
    if (Object.keys(found).length === 0) setStep((s) => Math.min(3, s + 1));
  };

  const back = () => setStep((s) => Math.max(1, s - 1));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = { ...validate(1, form), ...validate(2, form) };
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStep(found.service ? 1 : 2);
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) throw new Error(data.message ?? 'Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
      setServerMessage(
        `Something went wrong sending your request. Please call us at ${business.phone.display}.`,
      );
    }
  }

  if (status === 'sent') {
    return (
      <div
        id={id}
        className="rounded-lg border border-ink-100 bg-white p-8 text-center shadow-card"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-600">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-extrabold uppercase tracking-wide text-ink-900">
          Request received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">
          Thanks, {form.name.split(' ')[0] || 'and'} — we have your request and
          will be in touch. If it is urgent, call us directly and you will get a
          person, not a queue.
        </p>
        <a
          href={business.phone.href}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-white hover:bg-brand-700"
        >
          <PhoneIcon />
          {business.phone.display}
        </a>
      </div>
    );
  }

  const current = steps[step - 1];

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      noValidate
      className="rounded-lg border border-ink-100 bg-white p-6 shadow-card sm:p-8"
    >
      {/* Step indicator */}
      <ol className="flex items-center justify-center gap-2" aria-label="Progress">
        {steps.map((s, i) => (
          <li key={s.id} className="flex items-center gap-2">
            <span
              aria-current={step === s.id ? 'step' : undefined}
              className={cn(
                'grid h-8 w-8 place-items-center rounded-full text-[13px] font-bold transition-colors',
                step === s.id
                  ? 'bg-brand-600 text-white ring-4 ring-brand-100'
                  : step > s.id
                    ? 'bg-brand-100 text-brand-700'
                    : 'bg-ink-100 text-ink-400',
              )}
            >
              {step > s.id ? <CheckIcon className="h-4 w-4" /> : s.id}
            </span>
            {i < steps.length - 1 ? (
              <span
                aria-hidden
                className={cn(
                  'h-0.5 w-8 rounded sm:w-12',
                  step > s.id ? 'bg-brand-300' : 'bg-ink-100',
                )}
              />
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-6 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600">
          Step #{step}
        </p>
        <h3 className="mt-1 font-display text-2xl font-extrabold uppercase tracking-wide text-ink-900">
          {current.label}
        </h3>
        <p className="mt-1 text-sm text-ink-400">{current.hint}</p>
      </div>

      <div className="mt-7 space-y-5">
        {/* ---------------- Step 1 — the project ---------------- */}
        {step === 1 ? (
          <>
            <fieldset>
              <legend className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500">
                What do you need?
              </legend>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {quickPicks.map((s) => (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => set('service', s.name)}
                    aria-pressed={form.service === s.name}
                    className={cn(
                      'rounded-md border px-4 py-3 text-left text-sm font-semibold transition-colors',
                      form.service === s.name
                        ? 'border-brand-600 bg-brand-50 text-brand-800'
                        : 'border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:bg-ink-50',
                    )}
                  >
                    {s.shortName}
                  </button>
                ))}
              </div>
            </fieldset>

            <Field
              label="Or choose from all services"
              htmlFor="service-select"
              error={errors.service}
            >
              <select
                id="service-select"
                name="service"
                value={form.service}
                onChange={(e) => set('service', e.target.value)}
                className={inputClass(!!errors.service)}
              >
                <option value="">Select a service…</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Electrical repair / troubleshooting">
                  Electrical repair / troubleshooting
                </option>
                <option value="Something else">Something else</option>
              </select>
            </Field>

            <Field
              label="Service address"
              htmlFor="address"
              optional
              error={errors.address}
            >
              <input
                id="address"
                name="address"
                autoComplete="street-address"
                placeholder="e.g. 123 Main St, Champaign"
                value={form.address}
                onChange={(e) => set('address', e.target.value)}
                className={inputClass(!!errors.address)}
              />
            </Field>
          </>
        ) : null}

        {/* ---------------- Step 2 — contact ---------------- */}
        {step === 2 ? (
          <>
            <Field label="Name" htmlFor="name" error={errors.name}>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                className={inputClass(!!errors.name)}
                aria-invalid={!!errors.name}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Phone" htmlFor="phone" error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="217-555-0134"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  className={inputClass(!!errors.phone)}
                  aria-invalid={!!errors.phone}
                />
              </Field>

              <Field label="Email" htmlFor="email" optional error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className={inputClass(!!errors.email)}
                  aria-invalid={!!errors.email}
                />
              </Field>
            </div>

            <fieldset>
              <legend className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500">
                Are you a new or existing customer?
              </legend>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {(
                  [
                    ['new', 'New customer'],
                    ['existing', 'Existing customer'],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => set('customerType', value)}
                    aria-pressed={form.customerType === value}
                    className={cn(
                      'rounded-md border px-4 py-3 text-sm font-semibold transition-colors',
                      form.customerType === value
                        ? 'border-brand-600 bg-brand-50 text-brand-800'
                        : 'border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:bg-ink-50',
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {errors.customerType ? (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errors.customerType}
                </p>
              ) : null}
            </fieldset>
          </>
        ) : null}

        {/* ---------------- Step 3 — details ---------------- */}
        {step === 3 ? (
          <>
            <Field label="Message" htmlFor="message" optional>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Panel is full and we want to add an EV charger in the garage…"
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                className={inputClass(false)}
              />
            </Field>

            <dl className="rounded-md bg-ink-50 p-4 text-sm">
              <div className="flex justify-between gap-4 py-1">
                <dt className="text-ink-500">Service</dt>
                <dd className="text-right font-semibold text-ink-900">
                  {form.service || '—'}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-1">
                <dt className="text-ink-500">Name</dt>
                <dd className="text-right font-semibold text-ink-900">
                  {form.name || '—'}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-1">
                <dt className="text-ink-500">Phone</dt>
                <dd className="text-right font-semibold text-ink-900">
                  {form.phone || '—'}
                </dd>
              </div>
            </dl>
          </>
        ) : null}

        {/* Honeypot */}
        <div className="hidden" aria-hidden>
          <label htmlFor="company">Company (leave blank)</label>
          <input
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
          />
        </div>
      </div>

      {status === 'error' ? (
        <p role="alert" className="mt-5 rounded-md bg-red-50 p-3 text-sm font-medium text-red-700">
          {serverMessage}
        </p>
      ) : null}

      <div className="mt-7 flex gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="rounded-md border-2 border-ink-200 px-5 py-3.5 text-[13px] font-bold uppercase tracking-wider text-ink-700 transition-colors hover:border-ink-900"
          >
            Back
          </button>
        ) : null}

        {step < 3 ? (
          <button
            type="button"
            onClick={next}
            className="flex-1 rounded-md bg-brand-600 px-6 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex-1 rounded-md bg-brand-600 px-6 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Request service'}
          </button>
        )}
      </div>

      {variant === 'full' ? (
        <p className="mt-4 text-center text-xs leading-relaxed text-ink-400">
          Prefer to talk? Call{' '}
          <a
            href={business.phone.href}
            className="font-bold text-brand-700 hover:underline"
          >
            {business.phone.display}
          </a>
          . We never sell or share your information.
        </p>
      ) : null}
    </form>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    'mt-2 w-full rounded-md border bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand-500',
    hasError ? 'border-red-400' : 'border-ink-200',
  );
}

function Field({
  label,
  htmlFor,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500"
      >
        {label}
        {optional ? (
          <span className="ml-1 font-medium normal-case tracking-normal text-ink-300">
            (optional)
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-sm font-medium text-red-600">{error}</p>
      ) : null}
    </div>
  );
}
