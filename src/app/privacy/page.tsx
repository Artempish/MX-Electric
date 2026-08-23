import type { Metadata } from 'next';
import { business } from '@/data/business';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${business.name} collects and uses the information you submit through this website.`,
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="[PLACEHOLDER — this is boilerplate. Have the client's attorney or insurer review and approve the final wording before launch.]"
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy' },
        ]}
        showCtas={false}
      />

      <section className="section bg-white">
        <div className="container-page max-w-3xl">
          <div className="prose-copy">
            <h2 className="font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
              What we collect
            </h2>
            <p>
              When you submit our service request form we collect the name,
              phone number, email address, service address and message you
              provide. We use that information solely to respond to your request
              and to perform the work you ask us to do.
            </p>

            <h2 className="mt-8 font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
              What we do not do
            </h2>
            <p>
              We do not sell, rent or trade your information. We do not share it
              with third parties except as needed to deliver the service you
              requested (for example, a supplier or the permitting authority) or
              where required by law.
            </p>

            <h2 className="mt-8 font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
              Analytics and cookies
            </h2>
            <p>
              [PLACEHOLDER — describe any analytics or advertising tools once the
              client decides what to run, e.g. Google Analytics, Meta Pixel, or
              call-tracking software. If none are used, say so plainly here.]
            </p>

            <h2 className="mt-8 font-display text-xl font-extrabold uppercase tracking-wide text-ink-900">
              Contact
            </h2>
            <p>
              Questions about this policy? Call{' '}
              <a
                href={business.phone.href}
                className="font-bold text-brand-600 hover:underline"
              >
                {business.phone.display}
              </a>{' '}
              or write to {business.name}, {business.address.street},{' '}
              {business.address.city}, {business.address.state}{' '}
              {business.address.zip}.
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
