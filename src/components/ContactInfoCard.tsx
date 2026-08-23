import { business, credentials } from '@/data/business';
import { PhoneIcon } from '@/components/Icons';

const mapQuery = encodeURIComponent(
  `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
);

/** Contact details + embedded map slot, as on the reference layout. */
export function ContactInfoCard() {
  return (
    <div className="overflow-hidden rounded-lg border border-ink-100 bg-white shadow-card">
      <div className="p-6 sm:p-7">
        <h3 className="font-display text-lg font-extrabold uppercase tracking-wider text-ink-900">
          Contact Info
        </h3>

        <ul className="mt-5 space-y-4 text-[15px]">
          <li className="flex gap-3">
            <Badge>
              <PhoneIcon className="h-4 w-4" />
            </Badge>
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-400">
                Phone
              </span>
              <a
                href={business.phone.href}
                className="font-display text-lg font-extrabold text-ink-900 hover:text-brand-600"
              >
                {business.phone.display}
              </a>
            </span>
          </li>

          <li className="flex gap-3">
            <Badge>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 7.2L5.3 7.5 4.8 8.9 12 14l7.2-5.1-.5-1.4L12 12.2Z" />
              </svg>
            </Badge>
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-400">
                Email
              </span>
              <a
                href={`mailto:${business.email}`}
                className="font-semibold text-ink-900 hover:text-brand-600"
              >
                {business.email}
              </a>
              <span className="block text-[11px] text-ink-400">
                [PLACEHOLDER — confirm address]
              </span>
            </span>
          </li>

          <li className="flex gap-3">
            <Badge>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </Badge>
            <address className="not-italic">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-400">
                Address
              </span>
              <a
                href={`https://maps.google.com/?q=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink-900 hover:text-brand-600"
              >
                {business.address.street}, {business.address.city},{' '}
                {business.address.state} {business.address.zip}
              </a>
            </address>
          </li>

          <li className="flex gap-3">
            <Badge>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm1 9V7h-2v7h6v-2h-4Z" />
              </svg>
            </Badge>
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-400">
                Hours
              </span>
              {business.hours.map((h) => (
                <span key={h.days} className="block font-semibold text-ink-900">
                  {h.days}: {h.close ? `${h.open} – ${h.close}` : h.open}
                </span>
              ))}
              <span className="block text-[11px] text-ink-400">
                [PLACEHOLDER — confirm hours and after-hours policy]
              </span>
            </span>
          </li>
        </ul>

        <p className="mt-6 rounded-md bg-ink-50 p-4 text-xs leading-relaxed text-ink-500">
          <strong className="font-bold text-ink-900">Licensed &amp; insured.</strong>{' '}
          License #{credentials.licenseNumber}. {credentials.insured}. Veteran-owned
          and operated — ask about our military discount.
        </p>
      </div>

      {/* Google Map slot. Drop the real embed iframe in here. */}
      <div className="border-t border-ink-100">
        <a
          href={`https://maps.google.com/?q=${mapQuery}`}
          target="_blank"
          rel="noreferrer"
          className="group relative block aspect-[16/10] w-full overflow-hidden bg-ink-100"
          aria-label="Open MX Electric's location in Google Maps"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(#cfcfcf 1px, transparent 1px), linear-gradient(90deg, #cfcfcf 1px, transparent 1px)',
              backgroundSize: '38px 38px',
            }}
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-600 text-white shadow-lg">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-600">
              [PLACEHOLDER: Google Maps embed]
            </span>
            <span className="text-xs text-ink-500">
              {business.address.street}, {business.address.city},{' '}
              {business.address.state} {business.address.zip}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-600">
      {children}
    </span>
  );
}
