import Link from 'next/link';
import { business } from '@/data/business';
import { PhoneIcon } from '@/components/Icons';

/**
 * Fixed bottom action bar on mobile — the two things a visitor on a
 * phone actually wants. Hidden from large screens where the header
 * already carries both CTAs.
 */
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-ink-800 bg-ink-800 pb-[env(safe-area-inset-bottom)] lg:hidden">
      <a
        href={business.phone.href}
        className="flex items-center justify-center gap-2 bg-volt-400 py-3.5 text-[13px] font-extrabold uppercase tracking-wider text-ink-950"
      >
        <PhoneIcon className="h-4 w-4" />
        Call now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-brand-600 py-3.5 text-[13px] font-extrabold uppercase tracking-wider text-white"
      >
        Request service
      </Link>
    </div>
  );
}
