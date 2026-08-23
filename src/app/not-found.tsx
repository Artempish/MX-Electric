import { CTAButton } from '@/components/CTAButton';
import { business } from '@/data/business';
import { PhoneIcon } from '@/components/Icons';

export default function NotFound() {
  return (
    <section className="section bg-ink-950">
      <div className="container-page py-16 text-center">
        <p className="font-display text-6xl font-black text-volt-400">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-300">
          That page has been moved or never existed. Try the services page — or
          just call us, it is faster.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/services" variant="primary" size="lg">
            View services
          </CTAButton>
          <CTAButton href={business.phone.href} variant="secondary" size="lg">
            <PhoneIcon className="h-4 w-4" />
            {business.phone.display}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
