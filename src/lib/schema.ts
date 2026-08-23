import { business, credentials } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreaTowns } from '@/data/serviceAreas';
import { reviews } from '@/data/reviews';
import { siteUrl } from '@/lib/site';

/**
 * schema.org structured data. The NAP values come straight from
 * src/data/business.ts so the markup can never drift from the site copy.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${siteUrl}/#business`,
    name: business.name,
    legalName: business.legalName,
    url: siteUrl,
    telephone: business.phone.display,
    email: business.email,
    foundingDate: String(business.foundedYear),
    description: `${business.name} is a veteran-owned, licensed and insured electrical contractor founded in ${business.foundedYear}, serving Champaign, Urbana, Ogden and surrounding Central Illinois with residential and commercial electrical service.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: serviceAreaTowns.map((town) => ({
      '@type': 'City',
      name: `${town}, ${business.address.state}`,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: business.openingHours.days,
        opens: business.openingHours.opens,
        closes: business.openingHours.closes,
      },
    ],
    sameAs: [business.social.facebook],
    priceRange: '$$',
    // NOTE: aggregateRating is intentionally omitted until the client
    // confirms a verified rating and review count. Publishing an
    // unverified rating in structured data is a Google policy violation.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.summary,
          url: `${siteUrl}/services/${service.slug}`,
        },
      })),
    },
    ...(credentials.veteranOwned
      ? {
          knowsAbout: services.map((s) => s.name),
        }
      : {}),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: business.name,
    publisher: { '@id': `${siteUrl}/#business` },
  };
}

export function serviceSchema(slug: string) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    url: `${siteUrl}/services/${service.slug}`,
    provider: { '@id': `${siteUrl}/#business` },
    areaServed: serviceAreaTowns.map((town) => ({
      '@type': 'City',
      name: `${town}, ${business.address.state}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

/**
 * Individual customer reviews. These are real, verbatim reviews — see
 * src/data/reviews.ts. No aggregate rating is emitted (see note above).
 */
export function reviewSchema() {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': `${siteUrl}/#business` },
    reviewBody: review.quote,
    name: review.title,
    author: { '@type': 'Person', name: review.author },
  }));
}

export function breadcrumbSchema(trail: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  };
}
