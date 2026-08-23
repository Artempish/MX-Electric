import Link from 'next/link';
import type { ServiceArea } from '@/data/serviceAreas';
import { services } from '@/data/services';
import { business } from '@/data/business';
import { PageHero } from '@/components/PageHero';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { LeadForm } from '@/components/LeadForm';
import { StatsBand } from '@/components/StatsBand';
import { CTABand } from '@/components/CTABand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { CheckIcon } from '@/components/Icons';

/**
 * Shared template behind every /service-areas/* page. One component, one
 * data file — so adding Rantoul or Mahomet later is a two-minute job.
 */
export function ServiceAreaTemplate({ area }: { area: ServiceArea }) {
  const topServices = area.topServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Service Areas', href: '/contact' },
    { name: area.city, href: `/service-areas/${area.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <PageHero
        eyebrow={`${area.city}, ${area.state}`}
        title={`Electrician in ${area.city}, ${area.state}`}
        subtitle={area.intro}
        trail={trail}
      />

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <PlaceholderImage
              label={`[PLACEHOLDER: MX Electric working at a ${area.city}, ${area.state} property]`}
              aspect="aspect-[16/9]"
            />

            <div className="prose-copy mt-9">
              {area.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 rounded-lg border border-ink-100 bg-ink-50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
                What we see most in {area.city}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {area.localNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-2.5 text-[15px] text-ink-700"
                  >
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9">
              <h2 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
                Also serving near {area.city}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {area.nearby.map((town) => (
                  <li
                    key={town}
                    className="rounded-md bg-ink-100 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-ink-700"
                  >
                    {town}, {business.address.state}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-36 lg:self-start">
            <LeadForm variant="compact" id={`lead-${area.slug}`} />
          </aside>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-page">
          <SectionHeading
            title={`Most requested in ${area.city}`}
            eyebrow="Our services"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topServices.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="tile" />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600 hover:text-ink-900"
            >
              View all electrical services →
            </Link>
          </div>
        </div>
      </section>

      <StatsBand />
      <CTABand title={`Need an electrician in ${area.city}?`} />
    </>
  );
}
