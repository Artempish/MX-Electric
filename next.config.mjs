/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  /**
   * 301s from the legacy mxelectric.net URLs to their new homes, so the
   * old pages' search equity and any existing inbound links follow the
   * rebuild instead of landing on a 404.
   *
   * Four destinations differ from the list as first drafted, because the
   * routes they pointed at do not exist in this build:
   *   /ceiling-fan-installation  -> /services/ceiling-fans
   *   /energy-efficiency         -> /services/efficiency-consultations
   *   /electrical-remodeling     -> /services/remodels-rewires
   *   /electrical-rewiring       -> /services/remodels-rewires
   *   /generator-installations   -> /services/generators
   * Remodeling and rewiring share one page here; if they should be split
   * into two services, add them to src/data/services.ts and repoint
   * these two redirects.
   */
  async redirects() {
    return [
      { source: '/about-mx-electric', destination: '/about', permanent: true },
      {
        source: '/electrical-installation-and-repair',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/ceiling-fan-installation',
        destination: '/services/ceiling-fans',
        permanent: true,
      },
      {
        source: '/energy-efficiency',
        destination: '/services/efficiency-consultations',
        permanent: true,
      },
      {
        source: '/knob-and-tube-removal',
        destination: '/services/knob-and-tube-removal',
        permanent: true,
      },
      {
        source: '/lighting-fixture-installation',
        destination: '/services/lighting',
        permanent: true,
      },
      {
        source: '/new-construction-electrical-contractors',
        destination: '/services/new-construction',
        permanent: true,
      },
      {
        source: '/panel-upgrades',
        destination: '/services/panel-upgrades',
        permanent: true,
      },
      {
        source: '/electrical-remodeling',
        destination: '/services/remodels-rewires',
        permanent: true,
      },
      {
        source: '/electrical-rewiring',
        destination: '/services/remodels-rewires',
        permanent: true,
      },
      {
        source: '/electric-car-charging-stations',
        destination: '/services/ev-chargers',
        permanent: true,
      },
      {
        source: '/generator-installations',
        destination: '/services/generators',
        permanent: true,
      },
      { source: '/recent-projects', destination: '/projects', permanent: true },
      { source: '/electrician-reviews', destination: '/reviews', permanent: true },
      {
        source: '/request-electrical-service-champaign-urbana',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
