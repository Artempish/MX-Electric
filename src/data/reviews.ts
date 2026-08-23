export type Review = {
  /** Short headline the customer gave the review */
  title: string;
  /** The review body — verbatim customer wording. Do not edit. */
  quote: string;
  author: string;
  /** [PLACEHOLDER — confirm with client] star rating per review */
  rating: number;
  /** [PLACEHOLDER — confirm with client] where the review was left */
  source?: string;
};

/**
 * Real MX Electric customer reviews. These are verbatim — styling and
 * layout may change, the wording and attribution may not. Add new
 * reviews here only when they come from a genuine customer.
 */
export const reviews: Review[] = [
  {
    title: 'Awesome!',
    quote:
      "They were great communicators, efficient, and pleasant to work with. I'm so glad we found them and will refer them to family & friends.",
    author: 'Valerie J.',
    rating: 5,
  },
  {
    title: 'A reliable resource to do the job.',
    quote:
      'He returned calls quickly and got the work done within a short amount of time at a fair price.',
    author: 'Pat P.',
    rating: 5,
  },
  {
    title: 'MX Electric was fantastic!',
    quote:
      'The crew was very professional, cleaned up after the installation and they made sure everything worked properly before leaving. I highly recommend MX Electric for all your electrical needs.',
    author: 'Laura C.',
    rating: 5,
  },
  {
    title: 'Did great job for us.',
    quote:
      'Competitive price and the guys cleaned up the area after their work! We recommend Max and his crew.',
    author: 'Jan. B.',
    rating: 5,
  },
  {
    title: 'Honest and local.',
    quote: 'Great company. Showed up on time and saved me money.',
    author: 'Joshua S.',
    rating: 5,
  },
];
