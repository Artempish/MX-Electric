/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL in Vercel (e.g.
 * https://www.mxelectric.net) so canonicals, sitemap, and structured
 * data point at production instead of the preview domain.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.mxelectric.net'
).replace(/\/$/, '');

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
] as const;
