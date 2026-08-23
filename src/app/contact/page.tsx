import type { Metadata } from 'next';
import { business } from '@/data/business';
import { serviceAreaTowns, serviceAreas } from '@/data/serviceAreas';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { LeadForm } from '@/components/LeadForm';
import { ContactInfoCard } from '@/components/ContactInfoCard';
import { SectionHeading } from '@/components/SectionHeading';
import { CTABand } from '@/components/CTABand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact MX Electric | Request Electrical Service',
  description:
    'Request electrical service from MX Electric in Ogden, IL — serving Champaign, Urbana and Central Illinois. Call 217-359-7293 or send us your project details.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ])}
      />

      <PageHero
        eyebrow="Get your free estimate"
        title="Request service"
        subtitle={`Tell us what you need and we will get right back to you. If it is urgent, call ${business.phone.display} and you will get a person, not a queue.`}
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]}
        showCtas={false}
      />

      <section className="section bg-ink-50">
        <div className="container-page grid items-start gap-6 lg:grid-cols-[1.15fr_1fr]">
          <LeadForm id="contact-form" />
          <ContactInfoCard />
        </div>
      </section>

      {/* Service area */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            title="Where we work"
            eyebrow="Serving Central Illinois since 2002"
            subtitle={`Based in ${business.address.city}, we cover Champaign County and the surrounding communities. Not listed? Call and ask — we may still be able to help.`}
          />

          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
            {serviceAreaTowns.map((town) => (
              <li
                key={town}
                className="rounded-md border border-ink-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-ink-700"
              >
                {town}, {business.address.state}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="rounded-lg border border-ink-100 bg-ink-50 p-6 transition-colors hover:border-brand-300 hover:bg-white"
              >
                <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-ink-900">
                  {area.city} electricians
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {area.intro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand tone="red" title="Prefer to talk it through?" />
    </>
  );
}
