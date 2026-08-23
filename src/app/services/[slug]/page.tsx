import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getService } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { business } from '@/data/business';
import { PageHero } from '@/components/PageHero';
import { ImageSlot } from '@/components/ImageSlot';
import { SectionHeading } from '@/components/SectionHeading';
import { FaqAccordion } from '@/components/FaqAccordion';
import { LeadForm } from '@/components/LeadForm';
import { CTABand } from '@/components/CTABand';
import { ServiceCard } from '@/components/ServiceCard';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { CheckIcon, ServiceIcon } from '@/components/Icons';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';

type Params = { params: Promise<{ slug: string }> };

/** Every service page is statically generated at build time. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} | Champaign & Urbana IL`,
    description: `${service.summary} MX Electric — veteran-owned, licensed and insured, serving Central Illinois since ${business.foundedYear}. Call ${business.phone.display}.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.name, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service.slug) ?? {},
          faqSchema(service.faqs),
          breadcrumbSchema(trail),
        ]}
      />

      <PageHero
        eyebrow={service.name}
        title={service.hero.headline}
        subtitle={service.hero.intro}
        trail={trail}
      />

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <ImageSlot
              name={`services/${service.slug}`}
              label={service.hero.imageAlt}
              aspect="aspect-[16/9]"
              sizes="(max-width: 1024px) 92vw, 60vw"
            />

            <div className="prose-copy mt-9">
              {service.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            {/* What's included */}
            <Reveal className="mt-10 rounded-lg border border-ink-100 bg-ink-50 p-6 sm:p-8">
              <h2 className="flex items-center gap-3 font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
                <span className="text-brand-600">
                  <ServiceIcon icon={service.icon} className="h-7 w-7" />
                </span>
                What&apos;s included
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink-700">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {service.signs ? (
              <Reveal className="mt-8 rounded-lg border-l-4 border-volt-400 bg-white p-6 shadow-card sm:p-8">
                <h2 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
                  {service.signs.title}
                </h2>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {service.signs.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink-600">
                      <span
                        aria-hidden
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-volt-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {/* Local relevance */}
            <div className="mt-8">
              <h2 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
                {service.name} near you
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/service-areas/${area.slug}`}
                      className="inline-block rounded-md bg-ink-100 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-ink-700 transition-colors hover:bg-brand-600 hover:text-white"
                    >
                      {service.shortName} in {area.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar form */}
          <aside className="lg:sticky lg:top-36 lg:self-start">
            <LeadForm variant="compact" id={`lead-${service.slug}`} />
          </aside>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-page">
          <SectionHeading title="Frequently asked" eyebrow={service.name} />
          <Reveal className="mt-12">
            <FaqAccordion faqs={service.faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading title="Other services" eyebrow="We also handle" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 80} className="h-full">
                <ServiceCard service={item} variant="tile" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={`Need ${service.name.toLowerCase()}?`} />
    </>
  );
}
