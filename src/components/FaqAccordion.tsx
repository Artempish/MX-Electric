/**
 * Native <details> accordion — no JavaScript, so the answers are in the
 * HTML for both crawlers and users with JS disabled.
 */
export function FaqAccordion({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink-100 overflow-hidden rounded-lg border border-ink-100 bg-white shadow-card">
      {faqs.map((faq) => (
        <details key={faq.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[13px] font-extrabold uppercase tracking-wider text-ink-900 transition-colors hover:bg-ink-50 sm:px-6 sm:text-sm">
            {faq.q}
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="px-5 pb-5 text-[15px] leading-relaxed text-ink-600 sm:px-6">
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  );
}
