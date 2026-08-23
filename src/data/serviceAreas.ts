/**
 * Per-city landing pages for local SEO. All of these render through one
 * shared template (src/components/ServiceAreaTemplate.tsx) — adding a new
 * town is a matter of adding an entry here.
 */
export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  /** Shown in the hero under the H1 */
  intro: string;
  /** Two or three paragraphs of genuinely local copy */
  body: string[];
  /** Neighborhoods / landmarks / housing-stock notes for local relevance */
  localNotes: string[];
  /** Service slugs most requested in this town */
  topServiceSlugs: string[];
  /** Nearby towns also covered from this location */
  nearby: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'champaign',
    city: 'Champaign',
    state: 'IL',
    intro:
      'Licensed, veteran-owned electricians working across Champaign — panel upgrades, remodels, EV chargers, and generator installs.',
    body: [
      'Champaign mixes just about every era of housing stock we work on: pre-war homes near downtown with wiring that has been modified a dozen times, mid-century ranches on 60- and 100-amp services, and new subdivisions where we are wiring from the slab up.',
      'That mix is why our most common Champaign calls are service upgrades and remodel wiring. Homeowners add an EV charger, a hot tub, a finished basement, or a kitchen island and discover the panel has nothing left to give.',
      'We are based in Ogden, about twenty minutes east, and Champaign is a daily drive for our crews. [PLACEHOLDER — confirm typical response window with client, e.g. "next-business-day estimates".]',
    ],
    localNotes: [
      'Older near-downtown homes with ungrounded or legacy wiring',
      'Mid-century ranches on undersized services',
      'New construction and additions in west and southwest Champaign',
      'Rental and multi-unit properties needing code-compliant repairs',
      'Small commercial and office suites for lighting retrofits',
    ],
    topServiceSlugs: [
      'panel-upgrades',
      'remodels-rewires',
      'ev-chargers',
      'lighting',
    ],
    nearby: ['Savoy', 'Mahomet', 'Bondville', 'Tolono'],
  },
  {
    slug: 'urbana',
    city: 'Urbana',
    state: 'IL',
    intro:
      'Electrical service for Urbana homes and businesses — knob & tube removal, rewires, ceiling fans, and panel work.',
    body: [
      'Urbana has some of the most beautiful older housing in Central Illinois, and a good share of it still has knob and tube or early ungrounded wiring hiding above the plaster. Insurance carriers have gotten strict about it, and we get called in to map what is live and replace it.',
      'We are careful in these houses. Plaster, trim, and hardwood are the reasons people buy them, so we plan our routes through closets, attics, and basements before we open a wall.',
      'We also handle the everyday work — ceiling fans, fixture replacements, added circuits, and troubleshooting on circuits that have been spliced one too many times.',
    ],
    localNotes: [
      'Century homes with knob & tube and ungrounded circuits',
      'Plaster and balloon-framed walls that need careful fishing',
      'Insurance-driven rewires with documentation supplied',
      'Rental properties near campus needing code corrections',
      'Additions, sunrooms, and detached garage feeds',
    ],
    topServiceSlugs: [
      'knob-and-tube-removal',
      'remodels-rewires',
      'ceiling-fans',
      'panel-upgrades',
    ],
    nearby: ['St. Joseph', 'Ogden', 'Thomasboro', 'Philo'],
  },
  {
    slug: 'ogden',
    city: 'Ogden',
    state: 'IL',
    intro:
      'MX Electric is headquartered in Ogden — our home town, and where our trucks start every morning.',
    body: [
      'Our shop sits at 403 S. East Ave in Ogden, and a good share of our work is right here and in the surrounding rural properties: farmhouse service upgrades, shop and outbuilding feeds, standby generators, and well and sump backup circuits.',
      'Rural properties have their own set of problems — long underground runs, outbuildings fed by wiring nobody documented, and outages that last longer than they do in town. Generators and transfer switches are a bigger part of what we do out here for exactly that reason.',
      'Being local means being accountable. We see our customers at the store. That is a large part of why the "customer for life" idea is not just a slogan here.',
    ],
    localNotes: [
      'Farmhouse and rural service upgrades',
      'Shop, barn, and outbuilding feeds',
      'Standby generators and transfer switches for longer outages',
      'Well pump and sump backup circuits',
      'Pole lighting for drives and yards',
    ],
    topServiceSlugs: [
      'generators',
      'panel-upgrades',
      'new-construction',
      'lighting',
    ],
    nearby: ['St. Joseph', 'Royal', 'Homer', 'Fithian'],
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

/** Full service-area list used in the footer and on /contact */
export const serviceAreaTowns: string[] = [
  'Champaign',
  'Urbana',
  'Ogden',
  'St. Joseph',
  'Savoy',
  'Mahomet',
  'Rantoul',
  'Tolono',
  'Philo',
  'Sidney',
  'Homer',
  'Royal',
  'Fithian',
  'Thomasboro',
  'Bondville',
  'Danville',
  'Monticello',
  'Paxton',
];
