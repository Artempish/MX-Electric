export type Project = {
  slug: string;
  title: string;
  /** Must match a Service.category value so the filter lines up */
  category: string;
  city: string;
  trade: 'Residential' | 'Commercial';
  scope: string;
  blurb: string;
  /** Placeholder labels for the before/after slots */
  beforeAlt: string;
  afterAlt: string;
  /** [PLACEHOLDER — confirm with client] month/year the job wrapped */
  completed: string;
};

/**
 * [PLACEHOLDER — every project below is scaffolding written from the
 * services MX Electric offers. Replace the titles, blurbs, cities and
 * photos with real jobs before launch. Do not publish these as if they
 * were completed work.]
 */
export const projects: Project[] = [
  {
    slug: 'ogden-farmhouse-service-upgrade',
    title: '[PLACEHOLDER] 100A to 200A farmhouse service upgrade',
    category: 'Panel Upgrades',
    city: 'Ogden, IL',
    trade: 'Residential',
    scope: 'Service upgrade + new meter base',
    blurb:
      '[PLACEHOLDER blurb — replace with the real job story.] Century-old farmhouse running out of capacity. New 200-amp service, meter base, grounding, and a labeled directory in a single day.',
    beforeAlt: '[PLACEHOLDER: BEFORE — original fuse panel, Ogden IL farmhouse]',
    afterAlt: '[PLACEHOLDER: AFTER — new 200-amp panel with labeled directory]',
    completed: '[PLACEHOLDER — date]',
  },
  {
    slug: 'champaign-kitchen-remodel',
    title: '[PLACEHOLDER] Kitchen remodel rough-in and trim',
    category: 'Remodels & Rewires',
    city: 'Champaign, IL',
    trade: 'Residential',
    scope: 'Dedicated circuits, under-cabinet lighting, island feed',
    blurb:
      '[PLACEHOLDER blurb.] Full kitchen rewire alongside the cabinet crew — dedicated appliance circuits, GFCI protection, under-cabinet LED, and an island receptacle that did not exist before.',
    beforeAlt: '[PLACEHOLDER: BEFORE — original kitchen wiring during demo]',
    afterAlt: '[PLACEHOLDER: AFTER — finished kitchen with under-cabinet lighting]',
    completed: '[PLACEHOLDER — date]',
  },
  {
    slug: 'urbana-knob-and-tube',
    title: '[PLACEHOLDER] Knob & tube removal, two-story bungalow',
    category: 'Knob & Tube Removal',
    city: 'Urbana, IL',
    trade: 'Residential',
    scope: 'Phased rewire of live legacy circuits',
    blurb:
      '[PLACEHOLDER blurb.] Insurance carrier required the knob and tube out. Phased circuit-by-circuit rewire with grounded cable, plaster kept intact, documentation supplied to the carrier.',
    beforeAlt: '[PLACEHOLDER: BEFORE — live knob and tube wiring in attic]',
    afterAlt: '[PLACEHOLDER: AFTER — new grounded circuits and junction boxes]',
    completed: '[PLACEHOLDER — date]',
  },
  {
    slug: 'champaign-ev-charger',
    title: '[PLACEHOLDER] Level 2 EV charger, attached garage',
    category: 'EV Chargers',
    city: 'Champaign, IL',
    trade: 'Residential',
    scope: '48A hardwired charger on a dedicated circuit',
    blurb:
      '[PLACEHOLDER blurb.] Load calculation showed room on the existing 200-amp service. Hardwired 48-amp charger, clean conduit run, permitted and inspected.',
    beforeAlt: '[PLACEHOLDER: BEFORE — bare garage wall before charger install]',
    afterAlt: '[PLACEHOLDER: AFTER — mounted Level 2 charger with conduit run]',
    completed: '[PLACEHOLDER — date]',
  },
  {
    slug: 'rural-standby-generator',
    title: '[PLACEHOLDER] Whole-home standby generator',
    category: 'Generators',
    city: 'Rural Champaign County, IL',
    trade: 'Residential',
    scope: 'Standby generator + automatic transfer switch',
    blurb:
      '[PLACEHOLDER blurb.] Well pump, sump, furnace, and refrigeration backed up automatically. Pad set, transfer switch installed, unit commissioned under load.',
    beforeAlt: '[PLACEHOLDER: BEFORE — meter and panel prior to generator install]',
    afterAlt: '[PLACEHOLDER: AFTER — standby generator on pad with transfer switch]',
    completed: '[PLACEHOLDER — date]',
  },
  {
    slug: 'shop-led-retrofit',
    title: '[PLACEHOLDER] Shop LED lighting retrofit',
    category: 'Lighting',
    city: 'St. Joseph, IL',
    trade: 'Commercial',
    scope: 'Fluorescent to LED conversion, 20+ fixtures',
    blurb:
      '[PLACEHOLDER blurb.] Aging fluorescent fixtures swapped for LED across the shop floor. Brighter working light, lower draw, fewer ladder trips for lamp changes.',
    beforeAlt: '[PLACEHOLDER: BEFORE — dim fluorescent shop lighting]',
    afterAlt: '[PLACEHOLDER: AFTER — even LED shop lighting]',
    completed: '[PLACEHOLDER — date]',
  },
  {
    slug: 'new-build-rough-in',
    title: '[PLACEHOLDER] New construction electrical package',
    category: 'New Construction',
    city: 'Mahomet, IL',
    trade: 'Residential',
    scope: 'Service, full rough-in, trim-out',
    blurb:
      '[PLACEHOLDER blurb.] Complete package for a new build — temporary power through final trim, walked room by room with the homeowner at rough-in.',
    beforeAlt: '[PLACEHOLDER: BEFORE — framed house at rough-in stage]',
    afterAlt: '[PLACEHOLDER: AFTER — finished interior with fixtures installed]',
    completed: '[PLACEHOLDER — date]',
  },
  {
    slug: 'vaulted-ceiling-fans',
    title: '[PLACEHOLDER] Vaulted ceiling fan installation',
    category: 'Ceiling Fans',
    city: 'Urbana, IL',
    trade: 'Residential',
    scope: 'Three fans, fan-rated boxes, sloped mounts',
    blurb:
      '[PLACEHOLDER blurb.] Existing fans hung on standard light boxes. Replaced with fan-rated support, proper downrods for the ceiling slope, and remote controls.',
    beforeAlt: '[PLACEHOLDER: BEFORE — wobbling fan on unrated box]',
    afterAlt: '[PLACEHOLDER: AFTER — correctly mounted fan on vaulted ceiling]',
    completed: '[PLACEHOLDER — date]',
  },
  {
    slug: 'office-efficiency-walkthrough',
    title: '[PLACEHOLDER] Small office efficiency walkthrough',
    category: 'Efficiency Consultations',
    city: 'Champaign, IL',
    trade: 'Commercial',
    scope: 'Lighting inventory, controls, prioritized plan',
    blurb:
      '[PLACEHOLDER blurb.] Walkthrough of a small office suite with a ranked list of upgrades and rough payback estimates before any work was quoted.',
    beforeAlt: '[PLACEHOLDER: BEFORE — office lighting prior to retrofit]',
    afterAlt: '[PLACEHOLDER: AFTER — retrofitted office lighting with controls]',
    completed: '[PLACEHOLDER — date]',
  },
];

export const projectCategories: string[] = Array.from(
  new Set(projects.map((p) => p.category)),
).sort();
