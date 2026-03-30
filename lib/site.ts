/**
 * Canonical site URL for metadata (OG, Twitter, sitemap, JSON-LD).
 * Set NEXT_PUBLIC_SITE_URL in Vercel when you add a custom domain, e.g.
 * https://newperspectivesupportservices.com
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) {
    return explicit.replace(/\/$/, '')
  }
  return 'https://newperspectivesite.vercel.app'
}
