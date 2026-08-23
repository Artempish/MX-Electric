import { differentiators } from '@/data/business';
import { valueIcons } from '@/components/Icons';
import { ImageSlot } from '@/components/ImageSlot';
import { CTAButton } from '@/components/CTAButton';
import { Reveal } from '@/components/Reveal';

/**
 * "Why Choose Us" — four value-prop cards beside a supporting photo,
 * on MX's red brand band with yellow headings.
 */
export function ValueProps() {
  return (
    <section className="relative overflow-hidden bg-brand-700">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 28px)',
        }}
      />
      <div className="container-page relative section">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Supporting photo */}
          <Reveal from="left">
          <ImageSlot
            name="crew"
            label="[PLACEHOLDER: MX Electric crew member on site in Champaign IL — vertical photo]"
            aspect="aspect-[4/5]"
            tone="dark"
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="mx-auto max-w-sm border-white/30 bg-white/10 text-white lg:max-w-none"
          />
          </Reveal>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-volt-400">
              The reasons why you should choose us
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl">
              Let MX Electric take charge
            </h2>

            <ul className="mt-8 space-y-6">
              {differentiators.map((item, i) => {
                const Icon = valueIcons[item.icon];
                return (
                  <Reveal
                    as="li"
                    key={item.title}
                    delay={i * 90}
                    from="right"
                    className="flex gap-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-volt-400 text-ink-950">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-volt-400">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-white/85">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>

            <CTAButton href="/about" variant="accent" size="lg" className="mt-9">
              Learn more about us
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
