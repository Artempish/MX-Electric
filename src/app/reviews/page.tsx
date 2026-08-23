import type { Metadata } from 'next';
import { reviews } from '@/data/reviews';
import { business, credentials } from '@/data/business';
import { PageHero } from '@/components/PageHero';
import { ReviewCard } from '@/components/ReviewCard';
import { SectionHeading } from '@/components/SectionHeading';
import { CTABand } from '@/components/CTABand';
import { CTAButton } from '@/components/CTAButton';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, reviewSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Customer Reviews | MX Electric, Ogden IL',
  description:
    'What MX Electric customers in Champaign, Urbana and Central Illinois say about our electricians — communication, fair pricing, clean job sites and work done right.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={[
          ...reviewSchema(),
          breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Reviews', href: '/reviews' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="See what they have to say about us"
        title="MX Electric customer reviews"
        subtitle="Real reviews from real customers around Champaign County. The themes repeat: calls returned, fair prices, and a crew that cleans up."
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Reviews', href: '/reviews' },
        ]}
      />

      <section className="section bg-ink-50">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.author + review.title} review={review} />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-md border border-dashed border-ink-300 bg-white p-5 text-center text-sm leading-relaxed text-ink-500">
            <strong className="font-bold uppercase tracking-wide text-ink-900">
              [PLACEHOLDER]
            </strong>{' '}
            Google rating {credentials.googleRating.rating} from{' '}
            {credentials.googleRating.count} reviews — confirm the verified
            figures with the client, then add a &ldquo;Read all reviews on
            Google&rdquo; link here. Do not publish an aggregate rating in
            structured data until it is verified; only the individual reviews
            above are marked up today.
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            title="Leave us a review"
            eyebrow="Worked with us?"
            subtitle={`If MX Electric did right by you, a review helps other Central Illinois homeowners find us. If we did not, call ${business.phone.display} first — we would rather fix it.`}
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href={business.social.facebook} variant="primary" size="lg" external>
              Review us on Facebook
            </CTAButton>
            <CTAButton href={business.phone.href} variant="ghost" size="lg">
              Call {business.phone.display}
            </CTAButton>
          </div>
          <p className="mt-6 text-center text-xs text-ink-400">
            [PLACEHOLDER — swap in the direct Google review link once the client
            supplies their Google Business Profile.]
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
