import { cn } from '@/lib/cn';

type Props = {
  /**
   * Doubles as the alt text and the visible label, e.g.
   * "[PLACEHOLDER: electrician installing panel, Ogden IL]".
   */
  label: string;
  /** Tailwind aspect ratio class — reserves space so there is no CLS */
  aspect?: string;
  className?: string;
  /** Dark variant for use on navy sections */
  tone?: 'light' | 'dark';
  rounded?: string;
  /** Pins the label to the bottom edge — for full-bleed background slots */
  labelPosition?: 'center' | 'bottom';
  children?: React.ReactNode;
};

/**
 * Every image slot on the site is one of these. Drop a real <Image /> in
 * its place when licensed photography arrives — the aspect ratio classes
 * are already sized to avoid layout shift.
 */
export function PlaceholderImage({
  label,
  aspect = 'aspect-[4/3]',
  className,
  tone = 'light',
  rounded = 'rounded-2xl',
  labelPosition = 'center',
  children,
}: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'relative flex w-full justify-center overflow-hidden border border-dashed',
        labelPosition === 'bottom' ? 'items-end pb-6' : 'items-center',
        aspect,
        rounded,
        tone === 'dark'
          ? 'border-ink-600 bg-ink-800/80 text-ink-300'
          : 'border-ink-300 bg-ink-100 text-ink-500',
        className,
      )}
    >
      {/* Subtle diagonal hatch so placeholders read as intentional */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 12px)',
        }}
      />
      <div className="relative z-10 max-w-[36ch] px-4 py-6 text-center">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="mx-auto mb-2 h-6 w-6 opacity-60"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="m4 17 4.5-4.5a2 2 0 0 1 2.8 0L16 17" />
        </svg>
        <p className="text-[11px] font-semibold uppercase leading-snug tracking-wider">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}
