import type { Metadata } from 'next'
import { DM_Serif_Display, Source_Sans_3 } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import { getSiteUrl } from '@/lib/site'
import './globals.css'

const siteUrl = getSiteUrl()

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'New Perspective Support Services | Daniel McGowan — Certified Interventionist & Speaker',
    template: '%s | New Perspective Support Services',
  },
  description:
    'Daniel McGowan is a Certified Alcohol & Drug Counselor, Certified Interventionist, and Motivational Speaker based in New Jersey. Helping individuals and families overcome addiction and rebuild their lives.',
  keywords: [
    'motivational speaker NJ',
    'addiction interventionist New Jersey',
    'substance abuse counselor NJ',
    'certified interventionist New Jersey',
    'family support addiction recovery NJ',
    'recovery coach New Jersey',
    'CADC New Jersey',
    'Daniel McGowan speaker',
  ],
  authors: [{ name: 'Daniel McGowan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'New Perspective Support Services',
    title:
      'New Perspective Support Services | Daniel McGowan — Certified Interventionist & Speaker',
    description:
      'Daniel McGowan is a Certified Alcohol & Drug Counselor, Certified Interventionist, and Motivational Speaker based in New Jersey.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'New Perspective Support Services | Daniel McGowan — Certified Interventionist & Speaker',
    description:
      'Certified Interventionist and Motivational Speaker guiding individuals and families through addiction recovery in New Jersey.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'New Perspective Support Services',
              description:
                'Professional addiction intervention, motivational speaking, and family support services in New Jersey.',
              url: siteUrl,
              telephone: '908-692-8754',
              email: 'Dan@newperspectivesupportservices.com',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'NJ',
                addressCountry: 'US',
              },
              founder: {
                '@type': 'Person',
                name: 'Daniel McGowan',
                jobTitle: 'Certified Interventionist & Motivational Speaker',
                knowsAbout: [
                  'Addiction Intervention',
                  'Motivational Speaking',
                  'Substance Abuse Counseling',
                  'Family Support',
                  'Recovery Coaching',
                ],
              },
              areaServed: {
                '@type': 'State',
                name: 'New Jersey',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
