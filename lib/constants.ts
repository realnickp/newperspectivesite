export const SITE_CONFIG = {
  name: 'New Perspective Support Services',
  owner: 'Daniel McGowan',
  email: 'Dan@newperspectivesupportservices.com',
  phone: '908-692-8754',
  phoneTel: 'tel:9086928754',
  location: 'New Jersey',
  url: 'https://newperspectivesupportservices.com',
  tagline: 'Coaching, Counseling & Consulting for Life\'s Challenges',
  // Replace with Daniel's actual Calendly URL
  calendlyUrl: 'https://calendly.com/dan-newperspective',
  credentials: [
    'Certified Alcohol and Drug Counselor (CADC)',
    'Certified Interventionist',
    'Certified Motivational Speaker',
    'Published Author',
  ],
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Book', href: '/book' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const
