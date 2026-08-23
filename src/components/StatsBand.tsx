import { stats } from '@/data/business';
import { cn } from '@/lib/cn';
import { CountUp } from '@/components/CountUp';
import { Reveal } from '@/components/Reveal';

/**
 * Full-bleed red band of headline numbers — the site's trust band.
 * Placeholder figures are labeled inline so nobody ships them by
 * accident.
 */
export function StatsBand() {
  return (
    <section
      aria-label="MX Electric by the numbers"
      className="relative overflow-hidden bg-brand-600"
    >
      {/* Faint diagonal texture, echoing the brand's lightning motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 26px)',
        }}
      />
      <div className="container-page relative py-12 sm:py-14">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
            Why Champaign County calls MX Electric
          </h2>
        </Reveal>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span
                  className={cn(
                    'block font-display font-black leading-none text-volt-400',
                    // Long placeholder strings step down so they cannot
                    // overflow their column
                    stat.value.length > 8
                      ? 'text-base sm:text-lg lg:text-xl'
                      : 'text-3xl sm:text-4xl lg:text-5xl',
                  )}
                >
                  <CountUp value={stat.value} />
                </span>
                <span className="mt-2.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">
                  {stat.label}
                </span>
                <span className="mt-1 block text-[11px] text-white/70">
                  {stat.note}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
