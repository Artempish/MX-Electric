'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { nav } from '@/lib/site';
import { cn } from '@/lib/cn';
import { PhoneIcon } from '@/components/Icons';
import { Logo } from '@/components/Logo';

/**
 * Two-tier header in MX Electric's brand structure: black bar with the
 * logo and phone number, yellow nav strip beneath it. Interactive for
 * the mobile drawer and services dropdown, but every link ships in the
 * server-rendered HTML — nothing is gated behind hydration.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close both menus when the route changes. Adjusting state during
  // render (rather than in an effect) is React's recommended pattern
  // here — it avoids a second render pass with the menu still open.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* Utility strip — scrolls away, desktop only */}
      <div className="hidden bg-ink-950 lg:block">
        <div className="container-page flex h-9 items-center justify-between text-[13px] text-ink-300">
          <p className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-volt-400"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
            </svg>
            {business.address.street}, {business.address.city},{' '}
            {business.address.state} {business.address.zip}
          </p>
          <p className="flex items-center gap-4">
            <span>
              Veteran-owned since {business.foundedYear} · Licensed &amp; insured
              · Military discount
            </span>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label={`${business.name} on Facebook`}
              className="grid h-6 w-6 place-items-center rounded-full bg-white/10 transition-colors hover:bg-volt-400 hover:text-ink-950"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                <path d="M14 8.5V7c0-.8.2-1.2 1.4-1.2H17V3h-2.4C11.9 3 11 4.4 11 6.7v1.8H9V11h2v10h3V11h2.2l.3-2.5H14Z" />
              </svg>
            </a>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50">
        {/* Black bar — logo, phone, primary CTA */}
        <div className="bg-ink-900 shadow-lg">
          <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
            <Link href="/" aria-label={`${business.name} — home`}>
              <Logo />
            </Link>

            <p className="hidden max-w-sm text-center font-display text-sm font-bold leading-snug text-white xl:block">
              Electrical experts with 25+ years of combined field experience
            </p>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href={business.phone.href}
                className="group flex items-center gap-2 rounded-md px-2 py-1.5 lg:px-3"
                aria-label={`Call ${business.name} at ${business.phone.display}`}
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-volt-400 text-ink-950 transition-transform group-hover:scale-105">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <span className="hidden leading-tight sm:block">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Call us today
                  </span>
                  <span className="block font-display text-lg font-extrabold tracking-tight text-volt-400">
                    {business.phone.display}
                  </span>
                </span>
              </a>

              <Link
                href="/contact"
                className="hidden rounded-md bg-brand-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-900/30 transition-colors hover:bg-brand-700 md:inline-block"
              >
                Request Service
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/20 text-white lg:hidden"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  aria-hidden
                >
                  {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Yellow nav strip — MX's signature */}
        <nav aria-label="Primary" className="hidden bg-volt-400 lg:block">
          <div className="container-page">
            <ul className="flex items-stretch">
              {nav.map((item) => {
                const active = isActive(item.href);
                if (item.href === '/services') {
                  return (
                    <li
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        href={item.href}
                        aria-expanded={servicesOpen}
                        className={cn(
                          'flex h-11 items-center gap-1.5 px-5 text-[13px] font-extrabold uppercase tracking-wider transition-colors',
                          active
                            ? 'bg-ink-900 text-volt-400'
                            : 'text-ink-900 hover:bg-ink-900 hover:text-volt-400',
                        )}
                      >
                        Electrical Services
                        <svg
                          aria-hidden
                          viewBox="0 0 24 24"
                          className={cn(
                            'h-3.5 w-3.5 transition-transform',
                            servicesOpen && 'rotate-180',
                          )}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </Link>
                      <div
                        className={cn(
                          'absolute left-0 top-full w-[36rem] transition',
                          servicesOpen ? 'visible opacity-100' : 'invisible opacity-0',
                        )}
                      >
                        <div className="grid grid-cols-2 gap-0.5 border-t-4 border-brand-600 bg-ink-900 p-2 shadow-lift">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="rounded px-3 py-2.5 text-sm font-semibold text-ink-200 transition-colors hover:bg-white/10 hover:text-volt-400"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex h-11 items-center px-5 text-[13px] font-extrabold uppercase tracking-wider transition-colors',
                        active
                          ? 'bg-ink-900 text-volt-400'
                          : 'text-ink-900 hover:bg-ink-900 hover:text-volt-400',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t-4 border-volt-400 bg-ink-950 lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page py-4">
            <ul className="space-y-1">
              {nav
                .filter((i) => i.href !== '/services')
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block rounded px-3 py-3 text-sm font-extrabold uppercase tracking-wider',
                        isActive(item.href)
                          ? 'bg-volt-400 text-ink-950'
                          : 'text-white',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>

            <p className="mt-5 px-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-volt-400">
              Electrical Services
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="/services"
                  className="block rounded px-3 py-2.5 text-[15px] font-bold text-white"
                >
                  All services
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="block rounded px-3 py-2.5 text-[15px] text-ink-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-6 block rounded-md bg-brand-600 px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white"
            >
              Request Service
            </Link>
            <a
              href={business.phone.href}
              className="mt-2 block rounded-md bg-volt-400 px-4 py-3.5 text-center text-sm font-extrabold uppercase tracking-wider text-ink-950"
            >
              Call {business.phone.display}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
