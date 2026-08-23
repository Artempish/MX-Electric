# Image credits

## Current status: no images are used

This site ships with **zero image files**. Every image slot on every page is a
`<PlaceholderImage />` component — a labeled, dashed-border box sized to the
aspect ratio the final photo should occupy.

Nothing was taken from mxelectric.net, miamielectricwizards.com, or any other
live business's website. Those images are copyrighted and cannot be reused.

## Where files go

Filenames are fixed — see the table in `README.md`. Drop a correctly-named file
into `public/images/` and the slot fills itself; no code changes needed.

```
public/images/
  hero.jpg                    homepage hero background
  crew.jpg                    "take charge" band
  team.jpg                    about page team photo
  team/<slug>.jpg             headshots
  services/<slug>.jpg         one per service page
  areas/<slug>.jpg            champaign / urbana / ogden
  projects/<slug>-before.jpg  gallery, before
  projects/<slug>-after.jpg   gallery, after
```

## When real images are added

Record every image here before it goes live:

| File | Subject | Source | License | Credit required? |
| --- | --- | --- | --- | --- |
| _(none yet)_ | | | | |

### Rules for this file

1. **Client-supplied photos** — note who took them and confirm MX Electric holds
   the rights. If a customer's home is identifiable, note that written
   permission was obtained.
2. **Stock photos** — use only Unsplash or Pexels (or another open license).
   Record the photographer, the direct URL, and the license.
   Example row:

   | `public/images/hero.jpg` | Electrician working in a panel | Unsplash — Jane Doe, https://unsplash.com/photos/xxxxxxx | Unsplash License | Credit appreciated, not required |

3. **Photos from the old mxelectric.net site**: photographs MX Electric took
   themselves are theirs to move over. Licensed stock photography on that site
   usually is not — the license typically sits with the previous web vendor or
   is scoped to that site alone. Check the origin of each image before
   republishing it and record the answer in the table above. When the origin
   cannot be established, commission or license a replacement rather than
   guessing.
4. **Never** use images taken from a competitor's website, from Google Images,
   or from a social media profile.
4. Optimize before committing: export at a sensible size, prefer WebP/AVIF, and
   render through `next/image` so Next.js can serve responsive variants.

## Replacing a placeholder

Each `<PlaceholderImage label="[PLACEHOLDER: ...]" aspect="aspect-[16/9]" />`
tells you what the photo should show and what ratio it should be. Swap it for:

```tsx
import Image from 'next/image';

<Image
  src="/images/panel-upgrade-ogden.jpg"
  alt="MX Electric installing a 200-amp service panel in Ogden, IL"
  width={1600}
  height={900}
  className="w-full rounded-2xl"
  priority   // hero images only
/>
```

Keeping the same aspect ratio preserves the zero-layout-shift behavior the
placeholders were sized for.
