import type { Metadata } from 'next';
import { business } from '@/data/business';
import { team } from '@/data/team';
import { PageHero } from '@/components/PageHero';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { SectionHeading } from '@/components/SectionHeading';
import { ValueProps } from '@/components/ValueProps';
import { StatsBand } from '@/components/StatsBand';
import { CTABand } from '@/components/CTABand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About MX Electric | Veteran-Owned Electricians in Ogden, IL',
  description:
    'MX Electric has been a veteran-owned, licensed and insured electrical contractor in Ogden, Illinois since 2002, serving Champaign, Urbana and Central Illinois. Meet Max Painter, Scott Lamb and Dan Goyne.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ])}
      />

      <PageHero
        eyebrow="Veteran-owned & operated"
        title="Committed to 100% customer satisfaction"
        subtitle={`MX Electric has served Champaign, Urbana and Central Illinois since ${business.foundedYear}. We are a small, licensed and insured crew that would much rather make a customer than a buck.`}
        trail={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              align="left"
              title="Electricians in Champaign County since 2002"
              eyebrow="Our story"
            />
            <div className="prose-copy mt-6">
              <p>
                Max Painter founded MX Electric in {business.foundedYear} on a
                simple idea: do the job right, explain it plainly, and be the
                electrician a family calls for the next twenty years. Everything
                about how we run — from written quotes to hauling away the debris
                — comes back to that.
              </p>
              <p>
                Our crew brings more than 25 years of combined field experience
                to residential and commercial work throughout Central Illinois.
                No job is too big or too small, and we stand behind the work we
                provide without question.
              </p>
              <p>
                We are veteran-owned and operated, and we offer a military
                discount as our thank-you to those who have served. We are also
                fully licensed and insured, because your home and your family
                deserve that protection before anyone pulls a wire.
              </p>
              <p>
                More than anything else, we are looking to make a customer for
                life through industry-leading service.
              </p>
            </div>
          </div>

          <PlaceholderImage
            label="[PLACEHOLDER: MX Electric team photo in front of the company van, Ogden IL]"
            aspect="aspect-[4/3]"
          />
        </div>
      </section>

      <ValueProps />
      <StatsBand />

      {/* Team */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <SectionHeading
            title="Meet the team"
            eyebrow="The people who show up"
            subtitle="The same crew, job after job — that consistency is the point."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-lg border border-ink-100 bg-white shadow-card"
              >
                <PlaceholderImage
                  label={member.photoAlt}
                  aspect="aspect-[4/5]"
                  rounded="rounded-none"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-extrabold uppercase tracking-wider text-ink-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">
                    {member.role}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl rounded-md border border-dashed border-ink-300 bg-white p-4 text-center text-xs text-ink-500">
            [PLACEHOLDER — bios above are written from the roles supplied. Have
            Max, Scott and Dan review and correct them, and supply real headshots,
            before launch.]
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
