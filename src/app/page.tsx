import Link from 'next/link';
import type { Metadata } from 'next';
import { business } from '@/data/business';
import { featuredServices } from '@/data/services';
import { reviews } from '@/data/reviews';
import { projects } from '@/data/projects';
import { serviceAreas } from '@/data/serviceAreas';
import { CTAButton } from '@/components/CTAButton';
import { ServiceCard } from '@/components/ServiceCard';
import { ReviewsCarousel } from '@/components/ReviewsCarousel';
import { LeadForm } from '@/components/LeadForm';
import { ContactInfoCard } from '@/components/ContactInfoCard';
import { StatsBand } from '@/components/StatsBand';
import { ValueProps } from '@/components/ValueProps';
import { SectionHeading } from '@/components/SectionHeading';
import { TrustChips } from '@/components/TrustChips';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { FaqAccordion } from '@/components/FaqAccordion';
import { JsonLd } from '@/components/JsonLd';
import { faqSchema, reviewSchema } from '@/lib/schema';
import { PhoneIcon, ArrowIcon, CheckIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: `Electricians in Champaign & Urbana IL | ${business.name}`,
  description:
    'MX Electric — veteran-owned, licensed and insured electricians in Ogden IL serving Champaign, Urbana and Central Illinois since 2002. Panel upgrades, generators, rewires, EV chargers. Call 217-359-7293.',
  alternates: { canonical: '/' },
};

const homeFaqs = [
  {
    q: 'What areas does MX Electric serve?',
    a: 'We are based in Ogden and work throughout Champaign, Urbana, St. Joseph, Savoy, Mahomet, Rantoul and the surrounding Central Illinois communities. If you are not sure whether you are in our area, call and ask.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — MX Electric is fully licensed and insured, and we can provide a certificate of insurance on request. [PLACEHOLDER — add license number once confirmed with the client.]',
  },
  {
    q: 'Do you offer a military discount?',
    a: 'We do. MX Electric is veteran-owned and operated, and we offer a military discount as our thank-you to those who have served. [PLACEHOLDER — confirm discount amount and eligibility terms.]',
  },
  {
    q: 'How much will my job cost?',
    a: 'We quote in writing after we understand the scope, and we would rather tell you the honest number up front than surprise you later. [PLACEHOLDER — confirm whether estimates are free and any trip-charge policy.]',
  },
  {
    q: 'Do you stand behind your work?',
    a: 'Every job. We will do everything we can to perform the service right the first time — and if something is not right, we come back and fix it. [PLACEHOLDER — add the specific warranty term the client wants published, e.g. "1-year workmanship warranty".]',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqSchema(homeFaqs), ...reviewSchema()]} />

      {/* ============ 2. HERO ============ */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        {/* Full-width background image/video slot */}
        <div className="absolute inset-0 -z-10">
          <PlaceholderImage
            label="[PLACEHOLDER: full-width hero image or looping video — MX Electric van and crew outside a Champaign home]"
            aspect="aspect-auto"
            tone="dark"
            rounded="rounded-none"
            labelPosition="bottom"
            className="h-full border-0 bg-ink-900 opacity-60"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/85 to-ink-950"
          />
        </div>

        <div className="container-page py-16 text-center sm:py-20 lg:py-28">
          <TrustChips />

          <h1 className="mx-auto mt-7 max-w-4xl font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Central Illinois&apos; trusted
            <span className="mt-1 block text-volt-400">electricians</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
            Veteran-owned and operating since {business.foundedYear}, with 25+
            years of combined field experience. Calls returned quickly, work
            done right the first time, and a crew that cleans up before it
            leaves.
          </p>

          {/* Hero stat boxes */}
          <dl className="mx-auto mt-9 grid max-w-2xl grid-cols-3 gap-2 sm:gap-4">
            {[
              { v: '25+', l: 'Years combined experience' },
              { v: `${new Date().getFullYear() - business.foundedYear}+`, l: 'Years in business' },
              { v: 'Veteran', l: 'Owned & operated' },
            ].map((stat) => (
              <div
                key={stat.l}
                className="rounded-md border border-white/15 bg-white/10 px-2 py-3 backdrop-blur-sm sm:px-4 sm:py-4"
              >
                <dt className="sr-only">{stat.l}</dt>
                <dd>
                  <span className="block font-display text-xl font-black text-volt-400 sm:text-3xl">
                    {stat.v}
                  </span>
                  <span className="mt-1 block text-[9px] font-bold uppercase leading-tight tracking-wider text-white/80 sm:text-[11px]">
                    {stat.l}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="/contact" variant="primary" size="lg">
              Request Service
            </CTAButton>
            <CTAButton href={business.phone.href} variant="secondary" size="lg">
              <PhoneIcon className="h-4 w-4" />
              Call {business.phone.display}
            </CTAButton>
          </div>
        </div>

        <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-volt-400" />
      </section>

      {/* ============ 3. QUICK SERVICE GRID ============ */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <SectionHeading
            title="Our Services"
            eyebrow="“Watt” can we help you with?"
            subtitle="Residential and commercial electrical work across Champaign County — from a single ceiling fan to a full service upgrade."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="tile" />
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton href="/services" variant="primary" size="lg">
              More electrical services
              <ArrowIcon className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============ 4. WHY CHOOSE US ============ */}
      <ValueProps />

      {/* ============ 5. TRUST BAND ============ */}
      <StatsBand />

      {/* ============ Guarantee / service promise ============ */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-4xl rounded-lg border-2 border-dashed border-brand-300 bg-brand-50/50 p-7 sm:p-10">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-600">
              Our service promise
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-wide text-ink-900 sm:text-3xl">
              We stand behind all of our workmanship
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600 sm:text-lg">
              We will do everything we can to perform the service right the first
              time around — and if anything should happen, we will be there to fix
              the problem. That is how a customer becomes a customer for life.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Licensed and insured on every job',
                'Veteran-owned — military discount offered',
                'Clean job sites, debris hauled away',
                'Written quotes before work begins',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink-700">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 rounded-md bg-white p-4 text-sm leading-relaxed text-ink-500 ring-1 ring-brand-200">
              <strong className="font-bold uppercase tracking-wide text-brand-700">
                [PLACEHOLDER — quantified guarantee]
              </strong>{' '}
              If MX Electric wants to publish a specific, measurable promise —
              for example &ldquo;calls returned within one business day,&rdquo;
              &ldquo;1-year workmanship warranty,&rdquo; or &ldquo;on time or the
              trip charge is on us&rdquo; — confirm the exact terms with the
              client and replace this block. A quantified promise converts
              meaningfully better than a general one.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 6. LEAD CAPTURE ============ */}
      <section id="request-service" className="section bg-ink-50">
        <div className="container-page">
          <SectionHeading
            title="Relax, call Max"
            eyebrow="Get your free estimate"
            subtitle={`Fill out the form below, or call us at ${business.phone.display} to schedule a service today.`}
          />

          <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.15fr_1fr]">
            <LeadForm />
            <ContactInfoCard />
          </div>
        </div>
      </section>

      {/* ============ 7. REVIEWS CAROUSEL ============ */}
      <section className="relative overflow-hidden bg-ink-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, #ffd400 0 2px, transparent 2px 24px)',
          }}
        />
        <div className="container-page relative section">
          <SectionHeading
            tone="dark"
            title="MX Electric's customer reviews"
            eyebrow="See what they have to say about us"
          />
          <div className="mt-12">
            <ReviewsCarousel reviews={reviews} tone="dark" />
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/reviews" variant="primary" size="lg">
              More customer reviews
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============ Recent work teaser ============ */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            title="Our recent work"
            eyebrow="Panels, generators, rewires & more"
            subtitle="A look at the kind of work we do around Champaign County."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-lg border border-ink-100 bg-white shadow-card"
              >
                <PlaceholderImage
                  label={project.afterAlt}
                  aspect="aspect-[4/3]"
                  rounded="rounded-none"
                />
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600">
                    {project.category} · {project.city}
                  </p>
                  <h3 className="mt-2 font-display text-base font-extrabold uppercase leading-snug tracking-wide text-ink-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {project.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton href="/projects" variant="ghost" size="lg">
              View all recent projects
              <ArrowIcon className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============ Service areas ============ */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <SectionHeading
            title="Where we work"
            eyebrow="Serving Central Illinois since 2002"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group rounded-lg border border-ink-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <h3 className="font-display text-lg font-extrabold uppercase tracking-wider text-ink-900">
                  Electrician in {area.city}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {area.intro}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-600">
                  {area.city} services
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading title="Frequently asked" eyebrow="Straight answers" />
          <div className="mt-12">
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </div>
      </section>

      {/* ============ 8. CLOSING CTA BAND ============ */}
      <section className="relative overflow-hidden bg-brand-600">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 26px)',
          }}
        />
        <div className="container-page relative py-14 text-center sm:py-16">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl">
            Ready when you are
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Call {business.phone.display} or send us your
            details and we will get right back to you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href={business.phone.href} variant="accent" size="lg">
              <PhoneIcon className="h-4 w-4" />
              {business.phone.display}
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Request Service
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
