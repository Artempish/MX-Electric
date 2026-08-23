# Image credits

## Current status: no images are used

This site ships with **zero image files**. Every image slot on every page is a
`<PlaceholderImage />` component — a labeled, dashed-border box sized to the
aspect ratio the final photo should occupy.

Nothing was taken from mxelectric.net, miamielectricwizards.com, or any other
live business's website. Those images are copyrighted and cannot be reused.

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

3. **Never** use images scraped from a competitor's or any other business's
   website, from Google Images, or from a social media profile.
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
