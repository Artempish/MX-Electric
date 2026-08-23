import Link from 'next/link';
import { business, credentials } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas, serviceAreaTowns } from '@/data/serviceAreas';
import { nav } from '@/lib/site';
import { PhoneIcon } from '@/components/Icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-md bg-volt-400 font-display text-lg font-extrabold text-ink-950"
              >
                MX
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                MX ELECTRIC
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Veteran-owned, licensed and insured electrical contractor serving
              Champaign, Urbana, Ogden and surrounding Central Illinois since{' '}
              {business.foundedYear}.
            </p>

            <address className="mt-5 not-italic text-sm leading-relaxed">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state}{' '}
                {business.address.zip}
              </a>
              <br />
              <a
                href={business.phone.href}
                className="mt-3 inline-flex items-center gap-2 font-bold text-volt-400 hover:text-volt-300"
              >
                <PhoneIcon />
                {business.phone.display}
              </a>
            </address>

            <div className="mt-5 flex gap-3">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label={`${business.name} on Facebook`}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 transition-colors hover:border-volt-400 hover:text-volt-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M14 8.5V7c0-.8.2-1.2 1.4-1.2H17V3h-2.4C11.9 3 11 4.4 11 6.7v1.8H9V11h2v10h3V11h2.2l.3-2.5H14Z" />
                </svg>
              </a>
            </div>
            {/* [PLACEHOLDER: add Google Business Profile, Instagram, or other
                social links here once the client confirms the accounts.] */}
          </div>

          {/* Sitemap */}
          <nav aria-label="Footer sitemap">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Site
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="hover:text-white"
                  >
                    Electrician in {area.city}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service area */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Service Area
            </h2>
            <p className="mt-4 text-sm leading-relaxed">
              {serviceAreaTowns.join(' · ')} and surrounding Central Illinois.
            </p>
            <p className="mt-4 text-sm">
              Not sure if you are in our area?{' '}
              <a
                href={business.phone.href}
                className="font-semibold text-volt-400 hover:text-volt-300"
              >
                Give us a call
              </a>
              .
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
              <p className="font-semibold text-white">Licensed &amp; Insured</p>
              <p className="mt-1">
                License #{credentials.licenseNumber} · {credentials.insured}
              </p>
              <p className="mt-2 text-xs text-ink-400">
                [PLACEHOLDER — confirm license number and insurance wording with
                the client before launch.]
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
