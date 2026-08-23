import fs from 'node:fs';
import path from 'node:path';

/**
 * Resolves image assets that live in /public/images.
 *
 * Every image slot on the site asks for a file by a stable name. If the
 * file exists, the real photo renders; if it does not, a labeled
 * placeholder renders in its place at the same aspect ratio. That means
 * dropping a correctly-named photo into /public/images is all it takes
 * to publish it — no component edits, no broken <img> tags in between.
 *
 * Server-only: this touches the filesystem at render time, and every
 * page that uses it is statically generated at build time.
 */

const EXTENSIONS = ['avif', 'webp', 'jpg', 'jpeg', 'png'] as const;

const publicDir = path.join(process.cwd(), 'public', 'images');

/**
 * @param name asset name relative to /public/images, without extension
 *             e.g. "hero", "services/panel-upgrades", "team/max-painter"
 * @returns the public URL of the first matching file, or null
 */
export function resolveAsset(name: string): string | null {
  for (const ext of EXTENSIONS) {
    const relative = `${name}.${ext}`;
    if (fs.existsSync(path.join(publicDir, relative))) {
      return `/images/${relative}`;
    }
  }
  return null;
}

/** Every asset the site looks for, for the README and audit script. */
export const expectedAssets = {
  hero: 'Homepage hero background — MX van and crew outside a Champaign home (wide, 1920px+)',
  crew: 'Why-choose-us band — vertical portrait of a crew member on site (4:5)',
  team: 'About page — team photo in front of the company van (4:3)',
  'team/max-painter': 'Headshot — Max Painter, Founder & CEO (4:5)',
  'team/scott-lamb': 'Headshot — Scott Lamb, Vice President (4:5)',
  'team/dan-goyne': 'Headshot — Dan Goyne, Foreman (4:5)',
  'services/panel-upgrades': 'Service page hero — panel upgrade in progress (16:9)',
  'services/generators': 'Service page hero — standby generator install (16:9)',
  'services/remodels-rewires': 'Service page hero — remodel rough-in wiring (16:9)',
  'services/ceiling-fans': 'Service page hero — ceiling fan installation (16:9)',
  'services/ev-chargers': 'Service page hero — Level 2 EV charger install (16:9)',
  'services/lighting': 'Service page hero — lighting installation (16:9)',
  'services/new-construction': 'Service page hero — new construction rough-in (16:9)',
  'services/knob-and-tube-removal': 'Service page hero — knob & tube removal (16:9)',
  'services/efficiency-consultations': 'Service page hero — efficiency walkthrough (16:9)',
  'areas/champaign': 'Service area page — a Champaign job (16:9)',
  'areas/urbana': 'Service area page — an Urbana job (16:9)',
  'areas/ogden': 'Service area page — an Ogden job (16:9)',
} as const;

/** Projects use `projects/<slug>-before` and `projects/<slug>-after`. */
export function projectAssets(slug: string) {
  return {
    before: resolveAsset(`projects/${slug}-before`),
    after: resolveAsset(`projects/${slug}-after`),
  };
}
