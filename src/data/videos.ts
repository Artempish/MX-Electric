export type Video = {
  /** YouTube video ID */
  id: string;
  title: string;
  /** Shown under the heading */
  blurb: string;
};

/**
 * Videos embedded on the site. IDs come from the YouTube share URL —
 * https://youtu.be/<id>.
 *
 * [PLACEHOLDER — confirm the title and blurb below. The video ID is the
 * one supplied by the client; its actual title and content could not be
 * verified from this environment.]
 */
export const videos = {
  brand: {
    id: 'oe5i_D2eg-s',
    title: 'Meet MX Electric',
    blurb:
      '[PLACEHOLDER — confirm caption] A look at who we are and how we work across Champaign County.',
  },
} satisfies Record<string, Video>;
