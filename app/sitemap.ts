import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()

  const staticPages = [
    '',
    '/about',
    '/services',
    '/speaking',
    '/book',
    '/testimonials',
    '/blog',
    '/contact',
  ]

  const blogSlugs = [
    'how-to-stage-a-successful-intervention',
    'what-families-need-to-know-about-addiction-recovery',
    'finding-a-motivational-speaker-for-your-next-event',
  ]

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
