import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTAButton } from '@/components/CTAButton';
import { PhoneIcon } from '@/components/Icons';
import { business } from '@/data/business';

/** Compact dark hero used on every page except the homepage. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  trail,
  showCtas = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  trail?: { name: string; href: string }[];
  showCtas?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, #ffd400 0 2px, transparent 2px 24px)',
        }}
      />
      <div className="container-page relative py-12 sm:py-16 lg:py-20">
        {trail ? (
          <div className="mb-6 [&_a]:text-ink-400 [&_a:hover]:text-volt-400 [&_span]:text-ink-300">
            <Breadcrumbs trail={trail} />
          </div>
        ) : null}

        {eyebrow ? (
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-volt-400">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="mt-2 max-w-4xl font-display text-3xl font-extrabold uppercase leading-[1.1] tracking-wide text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {subtitle}
          </p>
        ) : null}

        {showCtas ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact" variant="primary" size="lg">
              Request Service
            </CTAButton>
            <CTAButton href={business.phone.href} variant="secondary" size="lg">
              <PhoneIcon className="h-4 w-4" />
              {business.phone.display}
            </CTAButton>
          </div>
        ) : null}
      </div>

      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-volt-400" />
    </section>
  );
}
