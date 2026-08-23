import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'dark';
type Size = 'sm' | 'md' | 'lg';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-bold uppercase tracking-wider transition-all duration-150 active:translate-y-px';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700',
  secondary:
    'border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-ink-900',
  accent: 'bg-volt-400 text-ink-950 shadow-lg shadow-volt-400/25 hover:bg-volt-300',
  ghost:
    'border-2 border-ink-200 bg-white text-ink-900 hover:border-brand-600 hover:text-brand-700',
  dark: 'bg-ink-900 text-white hover:bg-ink-800',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-[13px]',
  lg: 'px-8 py-4 text-sm sm:text-[15px]',
};

export function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external,
  ariaLabel,
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external || href.startsWith('tel:') || href.startsWith('http')) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
