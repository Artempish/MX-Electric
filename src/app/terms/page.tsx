import type { Metadata } from 'next';
import { business } from '@/data/business';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms governing use of the ${business.name} website.`,
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="[PLACEHOLDER — this is boilerplate. Have the client's attorney or insurer review and approve the final wording before launch.]"
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Terms of Service', href: '/terms' },
        ]}
        showCtas={false}
      />

      <section className="section bg-white">
        <div className="container-page max-w-3xl">
          <div className="prose-copy">
            <h2 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
              Website content
            </h2>
            <p>
              The information on this site is provided for general guidance about
              the electrical services {business.name} offers. It is not a quote,
              a warranty, or electrical advice for a specific installation. Every
              job is priced after we understand its scope.
            </p>

            <h2 className="mt-8 font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
              Estimates and workmanship
            </h2>
            <p>
              [PLACEHOLDER — state the client&apos;s actual estimate policy,
              deposit terms, workmanship warranty period, and what the warranty
              covers and excludes. This section should not go live until the
              client confirms the specifics.]
            </p>

            <h2 className="mt-8 font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
              Licensing
            </h2>
            <p>
              {business.name} is a licensed and insured electrical contractor.
              [PLACEHOLDER — license number and issuing jurisdiction.]
            </p>

            <h2 className="mt-8 font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
              Contact
            </h2>
            <p>
              Questions? Call{' '}
              <a
                href={business.phone.href}
                className="font-bold text-brand-600 hover:underline"
              >
                {business.phone.display}
              </a>
              .
            </p>

            <p className="mt-8 text-sm text-ink-400">
              Last updated: [PLACEHOLDER — date]
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
