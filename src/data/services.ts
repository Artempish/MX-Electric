export type IconKey =
  | 'panel'
  | 'generator'
  | 'house'
  | 'fan'
  | 'ev'
  | 'bulb'
  | 'blueprint'
  | 'wire'
  | 'gauge';

export type Service = {
  slug: string;
  name: string;
  /** Short label used in dropdowns and compact cards */
  shortName: string;
  icon: IconKey;
  /** One-line summary used on cards and the services overview */
  summary: string;
  /** Featured on the homepage quick-service grid */
  featured: boolean;
  /** Category key used by the projects gallery filter */
  category: string;
  hero: {
    /** Alt text doubles as the placeholder label until real photos arrive */
    imageAlt: string;
    headline: string;
    intro: string;
  };
  /** Body copy paragraphs for the service detail page */
  body: string[];
  /** "What's included" bullet list */
  includes: string[];
  /** Signs a customer needs this service */
  signs?: { title: string; items: string[] };
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'panel-upgrades',
    name: 'Panel Upgrades',
    shortName: 'Panel Upgrade',
    icon: 'panel',
    summary:
      'Replace an undersized or unsafe service panel with a modern 200-amp system that keeps up with your home.',
    featured: true,
    category: 'Panel Upgrades',
    hero: {
      imageAlt:
        '[PLACEHOLDER: MX Electric electrician installing a 200-amp service panel, Ogden IL]',
      headline: 'Electrical Panel Upgrades in Champaign & Urbana',
      intro:
        'Older panels were never designed for the load a modern household puts on them. We size, permit, and install service upgrades that give you headroom for the next twenty years.',
    },
    body: [
      'If your home still runs on a 60- or 100-amp service, a fuse box, or a panel brand that insurers no longer like to see, every new appliance is competing for capacity that is not there. Breakers trip, lights dim when the AC kicks on, and adding a circuit becomes impossible.',
      'MX Electric handles the entire upgrade: load calculation, permit, coordination with the utility for the service disconnect and reconnect, new meter base and grounding where required, panel installation, and a fully labeled circuit directory before we leave.',
      'We have been doing this work in Central Illinois since 2002, and we treat your home like we live there — drop cloths down, debris hauled away, and a walkthrough at the end so you know exactly what changed.',
    ],
    includes: [
      'Whole-home load calculation before we quote',
      'Permit pulled and inspection coordinated on your behalf',
      'Utility coordination for disconnect and reconnect',
      'New panel, breakers, grounding, and bonding to current code',
      'Surge protection options at the panel',
      'Clearly labeled circuit directory and end-of-job walkthrough',
    ],
    signs: {
      title: 'Signs it is time for a panel upgrade',
      items: [
        'Fuses or a panel under 100 amps',
        'Breakers that trip when large appliances run',
        'Lights that dim or flicker under load',
        'No open slots left for new circuits',
        'Scorch marks, buzzing, or a warm panel cover',
        'You are adding an EV charger, hot tub, shop, or addition',
      ],
    },
    faqs: [
      {
        q: 'How long does a panel upgrade take?',
        a: 'Most residential service upgrades are a one-day job, with power off for part of that day. Utility scheduling and inspection timing can add a day on either side.',
      },
      {
        q: 'Do I need a permit?',
        a: 'Yes — service work is permitted and inspected. We pull the permit and meet the inspector so you do not have to manage it.',
      },
      {
        q: 'What does a panel upgrade cost?',
        a: '[PLACEHOLDER — confirm pricing range with client.] Cost depends on amperage, meter base condition, grounding, and whether the service entrance needs to be relocated. We quote in writing after an on-site look.',
      },
    ],
  },
  {
    slug: 'generators',
    name: 'Generator Installations',
    shortName: 'Generator Installation',
    icon: 'generator',
    summary:
      'Standby and portable generator hookups wired safely with a transfer switch, so an outage never means guesswork.',
    featured: true,
    category: 'Generators',
    hero: {
      imageAlt:
        '[PLACEHOLDER: standby generator and transfer switch installed beside a Central Illinois home]',
      headline: 'Generator Installation & Transfer Switches',
      intro:
        'Central Illinois storms do not warn you. We install standby and portable generator systems with a proper transfer switch so your home switches over safely and legally.',
    },
    body: [
      'A generator is only as good as the way it is connected. Backfeeding a house through a dryer outlet is dangerous to your family and to the lineworkers restoring your neighborhood — a transfer switch removes that risk entirely.',
      'We install automatic standby systems that start themselves within seconds of an outage, and manual transfer switches sized for portable units when that is the better fit for the budget. Either way we handle the load calculation, the circuit selection, the pad or mount, the permit, and the commissioning test.',
      'We will walk you through exactly which circuits stay live, how to exercise the unit, and what maintenance keeps the warranty intact.',
    ],
    includes: [
      'Load assessment and whole-house vs. essential-circuits planning',
      'Automatic or manual transfer switch installation',
      'Standby generator set, pad, and conduit runs',
      'Portable generator inlet boxes and interlocks',
      'Permit, inspection, and commissioning test under load',
      'Homeowner walkthrough on operation and maintenance',
    ],
    faqs: [
      {
        q: 'Whole-house or essential circuits only?',
        a: 'It depends on your load and your budget. We run the numbers and show you both options — many homeowners land on a mid-size unit covering heat, well or sump, refrigeration, and key outlets.',
      },
      {
        q: 'Can you connect a generator I already bought?',
        a: 'Usually, yes. We will confirm the unit is compatible with a code-compliant transfer switch and sized for the circuits you want to back up.',
      },
      {
        q: 'Do you handle the gas line too?',
        a: '[PLACEHOLDER — confirm with client whether fuel line work is in-house or subcontracted.] We coordinate with your fuel supplier so the electrical and fuel sides land on the same schedule.',
      },
    ],
  },
  {
    slug: 'remodels-rewires',
    name: 'Home Remodels & Rewires',
    shortName: 'Remodel / Rewire',
    icon: 'house',
    summary:
      'Kitchen, bath, basement, and whole-home rewires — new circuits, safe wiring, and finish work you would be happy to show off.',
    featured: true,
    category: 'Remodels & Rewires',
    hero: {
      imageAlt:
        '[PLACEHOLDER: rough-in wiring during a kitchen remodel in Champaign IL]',
      headline: 'Remodel Wiring & Whole-Home Rewires',
      intro:
        'From a single kitchen to a full rewire of a century-old farmhouse, we bring the electrical up to code and leave the finishes clean.',
    },
    body: [
      'Remodels are where old wiring surprises show up: shared neutrals, missing grounds, junctions buried in walls, circuits doing three jobs at once. We find those before drywall goes back up, not after.',
      'MX Electric works alongside your builder, cabinet installer, and HVAC crew to keep the rough-in on schedule. We plan device locations with you at rough-in so the outlets, switches, and under-cabinet lighting land where you actually use them.',
      'For whole-home rewires we phase the work to keep parts of the house livable, and we are careful about plaster, trim, and hardwood — we patch access holes rather than leaving them for you.',
    ],
    includes: [
      'Dedicated kitchen, bath, and appliance circuits',
      'GFCI / AFCI protection to current code',
      'Recessed, under-cabinet, and accent lighting layouts',
      'Basement, garage, and addition circuits',
      'Whole-home rewires phased around your living space',
      'Coordination with your general contractor and inspector',
    ],
    faqs: [
      {
        q: 'Can we stay in the house during a rewire?',
        a: 'In most cases yes. We phase the work by area and keep essential circuits energized overnight.',
      },
      {
        q: 'Do you work directly with our contractor?',
        a: 'Every day. We are used to being one trade on a busy job site and hitting rough-in and trim dates.',
      },
      {
        q: 'Will you patch the walls?',
        a: 'We keep access holes as small as the job allows and patch them. Final texture and paint are typically handled by your finisher — we will confirm scope in the quote.',
      },
    ],
  },
  {
    slug: 'ceiling-fans',
    name: 'Ceiling Fan Installation',
    shortName: 'Ceiling Fan Installation',
    icon: 'fan',
    summary:
      'New fans, replacements, and fan-rated box retrofits — including vaulted ceilings and rooms with no existing fixture.',
    featured: true,
    category: 'Ceiling Fans',
    hero: {
      imageAlt:
        '[PLACEHOLDER: electrician mounting a ceiling fan on a fan-rated box, Urbana IL]',
      headline: 'Ceiling Fan Installation & Replacement',
      intro:
        'A fan hung on a standard light box is an accident waiting to happen. We install fan-rated support, balanced blades, and controls that actually work.',
    },
    body: [
      'Most fan calls we get are replacements where the original box was never rated for a moving load. We install proper fan-rated boxes and bracing, which is the difference between a fan that runs quietly for a decade and one that wobbles itself loose.',
      'Adding a fan to a room with no existing fixture is a bigger job — we fish the circuit, add the switch leg, and mount the box from above or through a small access point where possible.',
      'Vaulted, sloped, and two-story ceilings are routine for us, including downrod sizing and remote or wall-control setups.',
    ],
    includes: [
      'Fan-rated box and bracing installed correctly',
      'Replacement of existing fans and light fixtures',
      'New fan locations wired from scratch',
      'Sloped, vaulted, and high-ceiling installs',
      'Remote, wall control, and dimmer setup',
      'Old fixture hauled away',
    ],
    faqs: [
      {
        q: 'Do you supply the fan?',
        a: 'You can buy the fan you like and we will install it, or we can source one for you. Either way we will tell you honestly whether a unit is worth installing.',
      },
      {
        q: 'Can you add a fan where there is only a light?',
        a: 'Yes — as long as the box can be replaced with a fan-rated one and the support is there. We check that first.',
      },
      {
        q: 'How long does it take?',
        a: 'A straightforward replacement is usually under an hour. New locations and high ceilings take longer.',
      },
    ],
  },
  {
    slug: 'ev-chargers',
    name: 'EV / Car Charger Installation',
    shortName: 'EV Charger Installation',
    icon: 'ev',
    summary:
      'Level 2 home charging installed on a dedicated circuit, sized right the first time — garage, carport, or driveway.',
    featured: true,
    category: 'EV Chargers',
    hero: {
      imageAlt:
        '[PLACEHOLDER: Level 2 EV charger mounted in a residential garage, Champaign IL]',
      headline: 'EV Charger Installation for Home & Business',
      intro:
        'Charge overnight instead of over three days. We install Level 2 chargers on dedicated circuits, with the panel capacity checked before we quote.',
    },
    body: [
      'A Level 2 charger is a serious continuous load, and it is the one that most often reveals a panel that is already full. We start with a load calculation so you find that out before the equipment shows up, not during install.',
      'We install hardwired units and NEMA 14-50 receptacles, run conduit cleanly along the garage, and can trench or route to a detached garage or carport when that is where you park.',
      'Commercial and fleet charging is welcome too — multi-unit setups, load management, and dedicated feeders.',
    ],
    includes: [
      'Panel capacity and load calculation up front',
      'Dedicated 240V circuit sized for your charger',
      'Hardwired chargers or NEMA 14-50 outlets',
      'Detached garage, carport, and driveway runs',
      'Permit and inspection handled',
      'Commercial and multi-station installations',
    ],
    faqs: [
      {
        q: 'Which charger should I buy?',
        a: 'Most homeowners are well served by a 40- or 48-amp unit from a major brand. We will tell you what your panel can actually support before you buy.',
      },
      {
        q: 'What if my panel is full?',
        a: 'Options include a subpanel, a load-management device that shares capacity, or a service upgrade. We price the realistic ones and let you choose.',
      },
      {
        q: 'Are there rebates?',
        a: '[PLACEHOLDER — confirm current Ameren Illinois / utility and federal incentive details with client before publishing.]',
      },
    ],
  },
  {
    slug: 'lighting',
    name: 'Lighting Fixture Installation',
    shortName: 'Lighting Installation',
    icon: 'bulb',
    summary:
      'Interior and exterior lighting — recessed, under-cabinet, landscape, security, and fixture replacements done clean.',
    featured: true,
    category: 'Lighting',
    hero: {
      imageAlt:
        '[PLACEHOLDER: recessed LED lighting installed in a Central Illinois living room]',
      headline: 'Lighting Fixture Installation & Design',
      intro:
        'Good lighting changes a room more than paint does. We plan layouts, install fixtures, and get the switching right.',
    },
    body: [
      'We install everything from a single dining room chandelier to a full LED retrofit of a shop or office. Recessed layouts get planned on paper first — spacing, beam angle, and color temperature — so the room lights evenly instead of in hot spots.',
      'Outside, we handle security lighting, motion sensors, soffit and landscape lighting, and pole lights for driveways and lots.',
      'If you are switching to LED, we can walk you through where dimming compatibility matters and where it does not, so you avoid the flicker that gives retrofits a bad name.',
    ],
    includes: [
      'Recessed can and canless LED layouts',
      'Chandeliers, pendants, and high-ceiling fixtures',
      'Under-cabinet and accent lighting',
      'Exterior, security, and motion lighting',
      'Landscape and pole lighting',
      'Dimmer and smart switch installation',
    ],
    faqs: [
      {
        q: 'Can you replace fluorescent shop lights with LED?',
        a: 'Yes, and it is one of the fastest paybacks in a shop or garage. We handle both retrofit kits and full fixture replacement.',
      },
      {
        q: 'My dimmer buzzes or flickers. Can that be fixed?',
        a: 'Almost always. It is usually a dimmer that is not matched to the LED driver. We swap in a compatible control.',
      },
      {
        q: 'Do you do lighting design?',
        a: 'We lay out practical residential and light-commercial lighting plans. For architectural design work we will coordinate with your designer.',
      },
    ],
  },
  {
    slug: 'new-construction',
    name: 'New Construction',
    shortName: 'New Construction',
    icon: 'blueprint',
    summary:
      'Full electrical for new homes and light commercial builds — service, rough-in, trim, and inspection on schedule.',
    featured: false,
    category: 'New Construction',
    hero: {
      imageAlt:
        '[PLACEHOLDER: new construction rough-in wiring, framed house in Central Illinois]',
      headline: 'New Construction Electrical',
      intro:
        'Builders keep calling us back for one reason: we show up when we said we would and the inspection passes the first time.',
    },
    body: [
      'MX Electric handles complete electrical packages for new residential and light commercial construction — temporary service, underground or overhead service, panel and subpanels, full rough-in, and trim-out.',
      'We meet with the homeowner or builder at rough-in to walk the plan room by room. That is the cheapest hour in the whole project: moving an outlet on a framed wall costs nothing, moving it after drywall costs real money.',
      'Our crew is used to coordinating with framers, HVAC, plumbing, and the inspector so the job keeps moving.',
    ],
    includes: [
      'Temporary construction power',
      'Underground and overhead service installation',
      'Complete rough-in wiring and low-voltage runs',
      'Panel, subpanel, and generator provisions',
      'Device, fixture, and appliance trim-out',
      'Inspection coordination and punch list',
    ],
    faqs: [
      {
        q: 'Do you bid from plans?',
        a: 'Yes. Send prints and a fixture allowance and we will put a written bid together.',
      },
      {
        q: 'Will you work as a subcontractor for our GC?',
        a: 'Regularly. Most of our new construction work comes through builders we have worked with for years.',
      },
      {
        q: 'Can you rough in for future additions?',
        a: 'Absolutely — generator provisions, EV circuits, shop feeds, and spare conduit are cheap now and expensive later.',
      },
    ],
  },
  {
    slug: 'knob-and-tube-removal',
    name: 'Knob & Tube Removal',
    shortName: 'Knob & Tube Removal',
    icon: 'wire',
    summary:
      'Get century-old ungrounded wiring out of your walls — safely, in phases, and in a way insurers will accept.',
    featured: false,
    category: 'Knob & Tube Removal',
    hero: {
      imageAlt:
        '[PLACEHOLDER: legacy knob and tube wiring in an attic before removal, Urbana IL]',
      headline: 'Knob & Tube Wiring Removal',
      intro:
        'Knob and tube has no ground, brittle insulation, and a habit of being buried under attic insulation. Older homes around Champaign and Urbana are full of it.',
    },
    body: [
      'Insurance carriers increasingly refuse to write policies on homes with active knob and tube, and for good reason: the rubber insulation is often a hundred years old, the system has no equipment ground, and modifications made over the decades are rarely safe.',
      'We map what is still live, replace it circuit by circuit with modern grounded wiring, and remove the abandoned runs. Where fishing new cable is tricky — plaster walls, balloon framing, finished attics — we take the careful route rather than the destructive one.',
      'You get documentation of the work for your insurer at the end of the job.',
    ],
    includes: [
      'Assessment of which knob and tube runs are still live',
      'Circuit-by-circuit replacement with grounded wiring',
      'Removal of abandoned legacy conductors',
      'Panel and grounding upgrades where needed',
      'Careful fishing through plaster and balloon framing',
      'Documentation for insurance purposes',
    ],
    faqs: [
      {
        q: 'Does all of it have to come out at once?',
        a: 'No. We can phase the work by floor or by circuit and prioritize whatever your insurer or your safety concerns require first.',
      },
      {
        q: 'Will my insurance company accept the work?',
        a: 'We document what was replaced and provide the permit and inspection record, which is what carriers typically ask for.',
      },
      {
        q: 'How much damage will this do to my plaster?',
        a: 'Less than you expect. We plan routes through closets, attics, and basements first and keep access holes small and patchable.',
      },
    ],
  },
  {
    slug: 'efficiency-consultations',
    name: 'Efficiency Consultations',
    shortName: 'Efficiency Consultation',
    icon: 'gauge',
    summary:
      'A walkthrough of where your home is wasting power — lighting, loads, controls — with a prioritized plan and honest numbers.',
    featured: false,
    category: 'Efficiency Consultations',
    hero: {
      imageAlt:
        '[PLACEHOLDER: electrician reviewing an energy plan with a homeowner at the kitchen table]',
      headline: 'Home & Business Efficiency Consultations',
      intro:
        'Before you spend money on equipment, find out where it actually goes. We walk the building and give you a ranked list.',
    },
    body: [
      'An efficiency consultation is a straightforward walkthrough: lighting inventory, major loads, control strategy, panel condition, and the places where old equipment quietly runs up the bill.',
      'You get a prioritized list — what pays for itself fastest, what is a comfort upgrade, and what is not worth doing. We will tell you when the answer is "leave it alone," because a customer for life is worth more to us than one oversold job.',
      'For shops, offices, and light commercial spaces, lighting retrofits and controls are usually the fastest payback, and we can quote the work in the same visit.',
    ],
    includes: [
      'Room-by-room lighting and load inventory',
      'LED retrofit and control recommendations',
      'Panel and circuit condition review',
      'Prioritized list with rough payback estimates',
      'Rebate and incentive pointers where available',
      'Written quote for anything you want done',
    ],
    faqs: [
      {
        q: 'What does a consultation cost?',
        a: '[PLACEHOLDER — confirm consultation fee or free-visit policy with client.]',
      },
      {
        q: 'Is this an energy audit with a blower door?',
        a: 'No — this is an electrical efficiency walkthrough. For envelope and HVAC testing we will point you to a certified auditor.',
      },
      {
        q: 'Do you handle commercial buildings?',
        a: 'Yes. Shops, offices, and small commercial spaces are a good fit, especially for lighting retrofits.',
      },
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Options for the "Service Needed" dropdown on the lead form */
export const serviceOptions: string[] = [
  ...services.map((s) => s.name),
  'Electrical repair / troubleshooting',
  'Something else',
];
