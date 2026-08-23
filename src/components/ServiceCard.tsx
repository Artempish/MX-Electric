import Link from 'next/link';
import type { Service } from '@/data/services';
import { ServiceIcon, ArrowIcon } from '@/components/Icons';
import { cn } from '@/lib/cn';

type Props = {
  service: Service;
  /** `tile` = homepage quick-service grid, `detailed` = services overview */
  variant?: 'tile' | 'detailed';
  className?: string;
};

export function ServiceCard({
  service,
  variant = 'detailed',
  className,
}: Props) {
  const detailed = variant === 'detailed';

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-lg border border-ink-100 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lift',
        className,
      )}
    >
      {/* Red top rule — MX's accent on a light card */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-brand-600 transition-all group-hover:h-1.5"
      />

      <span className="text-ink-900 transition-transform duration-200 group-hover:scale-110 group-hover:text-brand-600">
        <ServiceIcon icon={service.icon} className="h-9 w-9" />
      </span>
      {/* Short red underline beneath the icon, as on the MX site */}
      <span aria-hidden className="mt-4 block h-[3px] w-8 bg-brand-600" />

      <h3 className="mt-4 font-display text-[15px] font-extrabold uppercase leading-snug tracking-wider text-ink-900">
        <Link
          href={`/services/${service.slug}`}
          className="before:absolute before:inset-0 focus:outline-none"
        >
          {service.name}
        </Link>
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-500">
        {service.summary}
      </p>

      {detailed ? (
        <ul className="mt-4 space-y-1.5 text-sm text-ink-600">
          {service.includes.slice(0, 3).map((item) => (
            <li key={item} className="flex gap-2">
              <span
                aria-hidden
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"
              />
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600 transition-colors group-hover:text-ink-900">
        Get estimate
        <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );
}
