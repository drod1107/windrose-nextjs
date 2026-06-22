'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface LeadFormProps {
  /** Tags the submission so you can tell which page/intent it came from. */
  source?: string;
  /** Optional override of the success message. */
  successMessage?: string;
  /** Compact spacing for embedding in tighter cards. */
  compact?: boolean;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Formspree endpoint is safe to expose client-side (the form ID is not a secret).
// Defaults to the project's Formspree form so the preview works out of the box;
// override per-environment with NEXT_PUBLIC_FORMSPREE_ENDPOINT if needed.
const ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mojoqagp';

const LeadForm: React.FC<LeadFormProps> = ({
  source = 'website',
  successMessage = "Thank you — we’ll be in touch shortly. Prefer to grab a time now? Book a discovery call below.",
  compact = false,
}) => {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: if filled, silently "succeed" without sending.
    if (data._gotcha) {
      setStatus('success');
      return;
    }

    const payload = { ...data, _source: source };

    try {
      if (!ENDPOINT) {
        // Graceful capture path for the preview (no backend wired yet).
        // eslint-disable-next-line no-console
        console.info('[LeadForm] captured (no endpoint configured):', payload);
        await new Promise((r) => setTimeout(r, 600));
        setStatus('success');
        form.reset();
        return;
      }

      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setError(body?.errors?.[0]?.message || 'Something went wrong. Please try again or email us.');
        setStatus('error');
      }
    } catch {
      setError('Network error. Please try again or reach out on LinkedIn.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-xl2 bg-myrtle-green/10 border border-myrtle-green/30 p-6 text-ink"
      >
        <div className="flex items-center gap-3 text-myrtle-green">
          <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
          <span className="font-display text-lg text-gunmetal">Message received</span>
        </div>
        <p className="font-body text-ink/70 mt-2">{successMessage}</p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-lg border border-ink/15 bg-white px-4 py-3 font-body text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-myrtle-green focus:border-transparent';
  const gap = compact ? 'space-y-3' : 'space-y-4';

  return (
    <form onSubmit={handleSubmit} className={gap} noValidate>
      {/* Honeypot (hidden from humans) */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label htmlFor="lf-name" className="block font-body text-sm font-semibold text-ink mb-1.5">
          Name
        </label>
        <input id="lf-name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Jane Doe" />
      </div>

      <div>
        <label htmlFor="lf-email" className="block font-body text-sm font-semibold text-ink mb-1.5">
          Email
        </label>
        <input id="lf-email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@yourdistrict.org" />
      </div>

      <div>
        <label htmlFor="lf-district" className="block font-body text-sm font-semibold text-ink mb-1.5">
          District &amp; your role
        </label>
        <input id="lf-district" name="district_role" type="text" required className={inputClass} placeholder="Springfield USD · Superintendent" />
      </div>

      <div>
        <label htmlFor="lf-message" className="block font-body text-sm font-semibold text-ink mb-1.5">
          How can we help?
        </label>
        <textarea id="lf-message" name="message" rows={compact ? 3 : 4} className={inputClass} placeholder="We need an AI policy before the school year starts…" />
      </div>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-2 text-sm font-body text-red-700">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
          {error}
        </div>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-cta w-full disabled:opacity-70">
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" aria-hidden="true" />
            Send message
          </>
        )}
      </button>

      <p className="font-body text-xs text-ink/50">
        We never share your information. No student data is ever collected.
      </p>
    </form>
  );
};

export default LeadForm;
