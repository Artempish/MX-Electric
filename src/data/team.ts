export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Placeholder label until a real headshot is supplied */
  photoAlt: string;
};

export const team: TeamMember[] = [
  {
    name: 'Max Painter',
    role: 'Founder & CEO',
    bio: 'Max founded MX Electric in 2002 and still runs the estimates and the standards. The "customer for life" philosophy the company runs on is his — do the job right, explain it plainly, and be the electrician a family calls for the next twenty years.',
    photoAlt: '[PLACEHOLDER: headshot of Max Painter, Founder & CEO]',
  },
  {
    name: 'Scott Lamb',
    role: 'Vice President',
    bio: 'Scott keeps the schedule, the crews, and the customer communication moving. If your project has a start date, Scott is the reason it holds.',
    photoAlt: '[PLACEHOLDER: headshot of Scott Lamb, Vice President]',
  },
  {
    name: 'Dan Goyne',
    role: 'Foreman',
    bio: 'Dan leads the crew in the field. He is the one walking the rough-in with you and making sure every device lands where it should before the drywall goes up.',
    photoAlt: '[PLACEHOLDER: headshot of Dan Goyne, Foreman]',
  },
];
