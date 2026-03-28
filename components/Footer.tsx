import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-on-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col mb-4">
              <span className="font-serif text-xl text-text-on-dark tracking-wide">
                New Perspective
              </span>
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-text-on-dark-secondary font-semibold -mt-0.5">
                Support Services
              </span>
            </Link>
            <p className="text-text-on-dark-secondary text-sm leading-relaxed">
              Helping individuals and families find new perspective through
              professional support, speaking, and intervention.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-accent-primary mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Motivational Speaking', href: '/services#speaking' },
                { label: 'Substance Abuse Intervention', href: '/services#intervention' },
                { label: 'Family Support Programs', href: '/services#family' },
                { label: 'One-on-One Coaching', href: '/services#coaching' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-on-dark-secondary hover:text-accent-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-accent-primary mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Book Daniel to Speak', href: '/speaking' },
                { label: "Daniel's Book", href: '/book' },
                { label: 'Blog & Articles', href: '/blog' },
                { label: 'Testimonials', href: '/testimonials' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-on-dark-secondary hover:text-accent-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-accent-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="flex items-center gap-2 text-text-on-dark-secondary hover:text-accent-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-text-on-dark-secondary hover:text-accent-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-text-on-dark-secondary text-sm">
                  <MapPin className="w-4 h-4" />
                  New Jersey
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-dark my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-on-dark-secondary text-xs">
            Certified Alcohol &amp; Drug Counselor &nbsp;|&nbsp; Certified Interventionist &nbsp;|&nbsp; Certified Motivational Speaker
          </p>
          <p className="text-text-on-dark-secondary text-xs">
            &copy; {new Date().getFullYear()} New Perspective Support Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
