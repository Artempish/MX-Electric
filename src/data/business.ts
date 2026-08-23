/**
 * Single source of truth for NAP (name / address / phone) and other
 * business facts. Edit here — every page, the footer, and the
 * schema.org structured data read from this file.
 */

export const business = {
  name: 'MX Electric Inc.',
  shortName: 'MX Electric',
  legalName: 'MX Electric Inc.',
  tagline: 'Licensed electricians serving Champaign, Urbana & Central Illinois',
  foundedYear: 2002,
  address: {
    street: '403 S. East Ave',
    city: 'Ogden',
    state: 'IL',
    stateName: 'Illinois',
    zip: '61859',
    country: 'US',
  },
  phone: {
    display: '217-359-7293',
    /** E.164-ish value used for tel: links */
    href: 'tel:+12173597293',
  },
  /** [PLACEHOLDER — confirm with client] public-facing email address */
  email: 'info@mxelectric.net',
  social: {
    facebook: 'https://www.facebook.com/',
  },
  hours: [
    { days: 'Monday – Friday', open: '7:00 AM', close: '4:00 PM' },
    { days: 'Saturday – Sunday', open: 'Closed', close: '' },
  ],
  /** Used by schema.org openingHoursSpecification */
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '16:00',
  },
  /** [PLACEHOLDER — confirm with client] approximate map center for Ogden, IL */
  geo: { latitude: 40.1139, longitude: -87.9578 },
  serviceRadiusMiles: 50,
} as const;

export const credentials = {
  /** [PLACEHOLDER — confirm with client] state / municipal license number */
  licenseNumber: '[PLACEHOLDER — license #]',
  insured: 'Fully insured — certificate available on request',
  veteranOwned: true,
  militaryDiscount: true,
  /** [PLACEHOLDER — confirm with client] verified rating + review count */
  googleRating: { rating: '[PLACEHOLDER]', count: '[PLACEHOLDER]' },
  /** [PLACEHOLDER — confirm with client] BBB accreditation status / rating */
  bbb: { accredited: false, rating: '[PLACEHOLDER]' },
} as const;

/** Homepage trust band. Numbers marked PLACEHOLDER need client confirmation. */
export const stats = [
  {
    value: `${new Date().getFullYear() - business.foundedYear}+`,
    label: 'Years in business',
    note: 'Founded 2002',
  },
  {
    value: '25+',
    label: 'Years combined field experience',
    note: 'Across our crew',
  },
  {
    value: '[PLACEHOLDER]',
    label: 'Jobs completed',
    note: '[PLACEHOLDER — confirm with client]',
  },
  {
    value: 'Veteran',
    label: 'Owned & operated',
    note: 'Military discount offered',
  },
] as const;

export const differentiators = [
  {
    title: '25+ Years of Field Experience',
    body: 'Our crew brings more than 25 years of combined hands-on experience to every panel, circuit, and service call across Central Illinois.',
    icon: 'wrench',
  },
  {
    title: 'We Stand Behind Our Workmanship',
    body: 'If something is not right, we come back and make it right. We stand behind all of our workmanship — no runaround, no finger-pointing.',
    icon: 'shield',
  },
  {
    title: 'Veteran-Owned — Military Discount',
    body: 'MX Electric is veteran-owned and operated, and we offer a military discount as our thank-you to those who served.',
    icon: 'star',
  },
  {
    title: 'Licensed & Insured',
    body: 'Fully licensed and insured, so your home, your family, and your investment are protected before we ever pull a wire.',
    icon: 'badge',
  },
] as const;
