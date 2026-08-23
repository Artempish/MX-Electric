import { credentials } from '@/data/business';
import { cn } from '@/lib/cn';

const chips = [
  { label: 'Licensed & Insured', icon: 'shield' },
  { label: 'Veteran-Owned', icon: 'star' },
  { label: 'Military Discount', icon: 'badge' },
  { label: `Google rating ${credentials.googleRating.rating}`, icon: 'star' },
  { label: `BBB ${credentials.bbb.rating}`, icon: 'badge' },
] as const;

/**
 * Credential badges shown directly under the hero headline — license,
 * insurance, veteran status and rating badges near the fold.
 * Rating values are placeholders until the client confirms them.
 */
export function TrustChips({
  className,
  tone = 'dark',
}: {
  className?: string;
  tone?: 'dark' | 'light';
}) {
  return (
    <ul
      className={cn(
        'flex flex-wrap items-center justify-center gap-2 sm:gap-2.5',
        className,
      )}
    >
      {chips.map((chip) => (
        <li
          key={chip.label}
          className={cn(
            'flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider sm:text-xs',
            tone === 'dark'
              ? 'border-white/20 bg-white/10 text-white backdrop-blur-sm'
              : 'border-ink-200 bg-white text-ink-700',
          )}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="h-3.5 w-3.5 text-volt-400"
            fill="currentColor"
          >
            <path d="M12 2.5 14.9 9l7 .6-5.3 4.6 1.6 6.8L12 17.4 5.8 21l1.6-6.8L2.1 9.6 9.1 9 12 2.5Z" />
          </svg>
          {chip.label}
        </li>
      ))}
      <li className="w-full text-center text-[10px] font-medium uppercase tracking-wider text-white/50 sm:text-[11px]">
        [PLACEHOLDER — confirm license #, Google rating and BBB status]
      </li>
    </ul>
  );
}
