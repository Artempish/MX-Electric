import { cn } from '@/lib/cn';

/**
 * [PLACEHOLDER LOGO] Typographic stand-in built from MX Electric's brand
 * marks — white "MX" split by a yellow bolt. Replace with the real logo
 * file (SVG preferred) in /public and swap this component's contents.
 */
export function Logo({
  className,
  tone = 'dark',
}: {
  className?: string;
  /** `dark` = for dark backgrounds, `light` = for white backgrounds */
  tone?: 'dark' | 'light';
}) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span className="relative flex items-center">
        <span
          className={cn(
            'font-display text-3xl font-black leading-none tracking-tighter sm:text-4xl',
            tone === 'dark' ? 'text-white' : 'text-ink-900',
          )}
        >
          M
        </span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="-mx-1 h-9 w-6 text-volt-400 sm:h-11 sm:w-7"
          fill="currentColor"
        >
          <path d="M14.8 1 5 13.2h6.2L9.2 23 19 10.2h-6.2L14.8 1Z" />
        </svg>
        <span
          className={cn(
            'font-display text-3xl font-black leading-none tracking-tighter sm:text-4xl',
            tone === 'dark' ? 'text-white' : 'text-ink-900',
          )}
        >
          X
        </span>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            'block font-display text-[11px] font-extrabold uppercase tracking-[0.3em]',
            tone === 'dark' ? 'text-ink-300' : 'text-ink-600',
          )}
        >
          Electric
        </span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-volt-500">
          Ogden · Champaign · Urbana
        </span>
      </span>
    </span>
  );
}
