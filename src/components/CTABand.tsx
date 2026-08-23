import { business } from '@/data/business';
import { CTAButton } from '@/components/CTAButton';
import { PhoneIcon } from '@/components/Icons';

/**
 * Closing call-to-action band. Dark by default; `tone="red"` for pages
 * that already end on a dark section.
 */
export function CTABand({
  title = 'We stand behind our electrical work',
  body = 'With 25+ years of combined field experience, no job is too big or too small. Licensed, insured, veteran-owned — and we make it right if it is not right.',
  tone = 'dark',
}: {
  title?: string;
  body?: string;
  tone?: 'dark' | 'red';
}) {
  const dark = tone === 'dark';
  return (
    <section className={dark ? 'relative overflow-hidden bg-ink-950' : 'bg-brand-600'}>
      {dark ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, #ffd400 0 2px, transparent 2px 24px)',
          }}
        />
      ) : null}
      <div className="container-page relative py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="/contact" variant={dark ? 'primary' : 'accent'} size="lg">
              Request Service
            </CTAButton>
            <CTAButton href={business.phone.href} variant="secondary" size="lg">
              <PhoneIcon className="h-4 w-4" />
              {business.phone.display}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
