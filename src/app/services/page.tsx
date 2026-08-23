import type { Metadata } from 'next';
import { services } from '@/data/services';
import { PageHero } from '@/components/PageHero';
import { ServiceCard } from '@/components/ServiceCard';
import { SectionHeading } from '@/components/SectionHeading';
import { CTABand } from '@/components/CTABand';
import { StatsBand } from '@/components/StatsBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Electrical Services in Champaign, Urbana & Central Illinois',
  description:
    'Panel upgrades, generator installations, remodels and rewires, ceiling fans, EV chargers, lighting, new construction, knob & tube removal and efficiency consultations from MX Electric.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ])}
      />

      <PageHero
        eyebrow="Residential & commercial"
        title="Electrical services"
        subtitle="Everything from a single ceiling fan to a whole-home rewire — licensed, insured, permitted and cleaned up after."
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ]}
      />

      <section className="section bg-ink-50">
        <div className="container-page">
          <SectionHeading
            title="What we do"
            eyebrow="“Watt” can we help you with?"
            subtitle="Every service below has its own page with what is included, what it costs to consider, and the questions we get asked most."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <StatsBand />
      <CTABand />
    </>
  );
}
