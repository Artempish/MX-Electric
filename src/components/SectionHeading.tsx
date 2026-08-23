import { cn } from '@/lib/cn';

type Props = {
  /** Small amber line above the heading, bracketed by bolts */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: 'light' | 'dark';
  align?: 'center' | 'left';
  className?: string;
  as?: 'h1' | 'h2';
};

/**
 * The site's section header treatment: centered, uppercase, tightly
 * tracked, with an amber eyebrow rule underneath.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'center',
  className,
  as: Tag = 'h2',
}: Props) {
  const dark = tone === 'dark';
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      <Tag
        className={cn(
          'font-display text-3xl font-extrabold uppercase tracking-[0.02em] sm:text-4xl lg:text-[2.75rem]',
          dark ? 'text-white' : 'text-ink-900',
        )}
      >
        {title}
      </Tag>
      {eyebrow ? (
        <p
          className={cn(
            'mt-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600',
            align === 'center' ? 'justify-center' : 'justify-start',
          )}
        >
          <span aria-hidden className="h-px w-8 bg-brand-600/50" />
          {eyebrow}
          <span aria-hidden className="h-px w-8 bg-brand-600/50" />
        </p>
      ) : null}
      {subtitle ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            dark ? 'text-ink-200' : 'text-ink-500',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
