import type { JSX } from 'react';
import type { IconKey } from '@/data/services';
import { cn } from '@/lib/cn';

type IconProps = { className?: string };

const stroke = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function Svg({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
      {...stroke}
    >
      {children}
    </svg>
  );
}

/** Service icons, keyed to Service.icon */
export const serviceIcons: Record<IconKey, (p: IconProps) => JSX.Element> = {
  panel: (p) => (
    <Svg {...p}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h2M9 11h2M9 15h2M14 7h1M14 11h1M14 15h1" />
    </Svg>
  ),
  generator: (p) => (
    <Svg {...p}>
      <rect x="3" y="8" width="18" height="10" rx="2" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M6 18v2M18 18v2" />
      <path d="m12 10-1.5 3h3L12 16" />
    </Svg>
  ),
  house: (p) => (
    <Svg {...p}>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="m12 12-1.5 3h3L12 18" />
    </Svg>
  ),
  fan: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10c0-3 1-6 4-6 2 0 3 2 1 3l-5 3M14 12c3 0 6 1 6 4 0 2-2 3-3 1l-3-5M10 12c-3 0-6-1-6-4 0-2 2-3 3-1l3 5M12 14c0 3-1 6-4 6-2 0-3-2-1-3l5-3" />
    </Svg>
  ),
  ev: (p) => (
    <Svg {...p}>
      <path d="M3 17V9.5L5 5h9l2 4.5V17" />
      <path d="M3 13h13" />
      <circle cx="6" cy="18" r="1.4" />
      <circle cx="13" cy="18" r="1.4" />
      <path d="M19 8h2v8a2 2 0 0 1-2 2h-1" />
      <path d="m20.5 12.5-1 2h1.6l-1 2" />
    </Svg>
  ),
  bulb: (p) => (
    <Svg {...p}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5.9 1.1 1 1.7l.1.5h5l.1-.5c.1-.6.4-1.2 1-1.7A6 6 0 0 0 12 3Z" />
    </Svg>
  ),
  blueprint: (p) => (
    <Svg {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11M13 13h4M13 16h4" />
    </Svg>
  ),
  wire: (p) => (
    <Svg {...p}>
      <path d="M4 6c4 0 4 6 8 6s4-6 8-6" />
      <path d="M4 18c4 0 4-6 8-6" />
      <circle cx="4" cy="6" r="1.3" />
      <circle cx="20" cy="6" r="1.3" />
      <circle cx="4" cy="18" r="1.3" />
    </Svg>
  ),
  gauge: (p) => (
    <Svg {...p}>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="m12 18 4-5" />
      <path d="M4 18h16" />
    </Svg>
  ),
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon: IconKey;
  className?: string;
}) {
  const Cmp = serviceIcons[icon];
  return <Cmp className={className} />;
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-4 w-4', className)}
      fill="currentColor"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-5 w-5', className)}
      {...stroke}
      strokeWidth={2.2}
    >
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-5 w-5', className)}
      fill="currentColor"
    >
      <path d="M13.5 2 4 13.5h6L9.5 22 20 10h-6.5L13.5 2Z" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3 5 6v6c0 4 3 7.4 7 9 4-1.6 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-5 w-5', className)}
      fill="currentColor"
    >
      <path d="M12 2.5 14.9 9l7 .6-5.3 4.6 1.6 6.8L12 17.4 5.8 21l1.6-6.8L2.1 9.6 9.1 9 12 2.5Z" />
    </svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M15.5 3.5a5 5 0 0 0-4.6 6.9L3.6 17.7a2 2 0 1 0 2.8 2.8l7.3-7.3a5 5 0 0 0 6.2-6.3l-3 3-2.4-2.4 3-3a5 5 0 0 0-2-1Z" />
    </Svg>
  );
}

export function BadgeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9 13.5-1 7 4-2 4 2-1-7" />
      <path d="m10.5 9 1 1.2 2-2.4" />
    </Svg>
  );
}

export const valueIcons: Record<string, (p: IconProps) => JSX.Element> = {
  wrench: WrenchIcon,
  shield: ShieldIcon,
  star: StarIcon,
  badge: BadgeIcon,
};

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-4 w-4', className)}
      {...stroke}
      strokeWidth={2}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
