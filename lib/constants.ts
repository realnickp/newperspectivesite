export const SITE_CONFIG = {
  name: 'New Perspective Support Services',
  owner: 'Daniel McGowan',
  email: 'Dan@newperspectivesupportservices.com',
  phone: '908-692-8754',
  phoneTel: 'tel:9086928754',
  location: 'New Jersey',
  url: 'https://newperspectivesupportservices.com',
  tagline: 'Coaching, Counseling & Consulting for Life\'s Challenges',
  calendlyUrl: 'https://calendly.com/danielbrendan0512/30min',
  credentials: [
    'Certified Alcohol and Drug Counselor (CADC)',
    'Certified Interventionist',
    'Certified Motivational Speaker',
    'Published Author',
  ],
} as const

/** Podcasts, video, and social appearances (homepage + speaking)
 *  Titles/sources verified via Spotify embed + YouTube oEmbed (Mar 2025).
 */
export const MEDIA_APPEARANCES = [
  {
    kind: 'spotify' as const,
    source: 'MBR Talk Rewinds',
    title: 'Full Speed Ahead After Battle with Daniel McGowan',
    context:
      'Daniel talks about finding momentum again after serious struggles — moving forward in recovery and in life with honesty and grit.',
    href: 'https://open.spotify.com/episode/7nh7XhdBfx0oXOUAvxhkOA',
    when: 'Jan 2025',
    coverImage: '/images/media-mbr-full-speed-ahead.png',
    coverAlt: 'Full Speed Ahead — MBR Talk Rewinds podcast artwork',
  },
  {
    kind: 'spotify' as const,
    source: 'Uncle Jimmy’s Podcast',
    title: 'Hope and Redemption: A Conversation with Daniel McGowan',
    context:
      'A wide-ranging interview on hope, redemption, and what lasting change actually looks like when you’re rebuilding trust and purpose.',
    href: 'https://open.spotify.com/episode/2mBbEgD3HHpNyKFJG0hMgX',
    when: 'Feb 2025',
    coverImage: '/images/media-uncle-jimmys-podcast.png',
    coverAlt: 'Uncle Jimmy’s Podcast logo',
  },
  {
    kind: 'youtube' as const,
    source: 'Global Educators · GlobEdu',
    title: 'Alcohol Addiction — GlobEdu Ep. 38',
    context:
      'Daniel joins GlobEdu for an educational deep dive on alcohol addiction — warning signs, impact on families, and realistic steps toward recovery.',
    href: 'https://youtu.be/iQg8gER8Yj0',
    when: 'Episode 38',
    coverImage: 'https://i.ytimg.com/vi/iQg8gER8Yj0/hqdefault.jpg',
    coverAlt: 'GlobEdu episode — Alcohol Addiction with Daniel McGowan',
  },
] as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Book', href: '/book' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const
