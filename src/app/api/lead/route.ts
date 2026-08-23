import { NextResponse } from 'next/server';
import { business } from '@/data/business';

/**
 * Lead intake endpoint.
 *
 * Wire a real destination by setting ONE of these env vars in Vercel:
 *   LEAD_FORMSPREE_ENDPOINT  — e.g. https://formspree.io/f/xxxxxxx
 *   RESEND_API_KEY + LEAD_TO_EMAIL + LEAD_FROM_EMAIL
 *
 * With neither set (local dev, preview builds) the submission is logged
 * to the server console and reported back as a success so the form flow
 * can be tested end to end.
 */

type Lead = {
  service?: string;
  address?: string;
  customerType?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  company?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let lead: Lead;
  try {
    lead = (await request.json()) as Lead;
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request body.' },
      { status: 400 },
    );
  }

  // Honeypot — silently accept so bots do not learn anything
  if (lead.company) {
    return NextResponse.json({ ok: true });
  }

  if (!lead.name?.trim() || !lead.phone?.trim() || !lead.service?.trim()) {
    return NextResponse.json(
      { ok: false, message: 'Name, phone and service are required.' },
      { status: 422 },
    );
  }

  if (lead.email?.trim() && !emailPattern.test(lead.email.trim())) {
    return NextResponse.json(
      { ok: false, message: 'That email address does not look valid.' },
      { status: 422 },
    );
  }

  const summary = [
    `New service request — ${business.name}`,
    '',
    `Service needed: ${lead.service}`,
    `Customer type:  ${lead.customerType || 'not specified'}`,
    `Name:           ${lead.name}`,
    `Phone:          ${lead.phone}`,
    `Email:          ${lead.email || 'not provided'}`,
    `Address:        ${lead.address || 'not provided'}`,
    '',
    'Message:',
    lead.message || '(none)',
  ].join('\n');

  const formspree = process.env.LEAD_FORMSPREE_ENDPOINT;
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL;
  const fromEmail = process.env.LEAD_FROM_EMAIL;

  try {
    if (formspree) {
      const res = await fetch(formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...lead, _subject: `Service request — ${lead.service}` }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      return NextResponse.json({ ok: true });
    }

    if (resendKey && toEmail && fromEmail) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: lead.email || undefined,
          subject: `Service request — ${lead.service} (${lead.name})`,
          text: summary,
        }),
      });
      if (!res.ok) throw new Error(`Resend responded ${res.status}`);
      return NextResponse.json({ ok: true });
    }

    // No provider configured — log and accept so the flow is testable.
    console.info(
      '[lead] No LEAD_FORMSPREE_ENDPOINT or RESEND_API_KEY configured. Lead was not delivered:\n',
      summary,
    );
    return NextResponse.json({ ok: true, delivered: false });
  } catch (error) {
    console.error('[lead] delivery failed', error);
    return NextResponse.json(
      {
        ok: false,
        message: `We could not send your request. Please call us at ${business.phone.display}.`,
      },
      { status: 502 },
    );
  }
}
