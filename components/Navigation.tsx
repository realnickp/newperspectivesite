'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="New Perspective Support Services"
                  width={200}
                  height={50}
                  className="h-16 w-auto"
                  priority
                />
              </Link>

              <div className="hidden lg:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors hover:text-accent-primary ${
                      pathname === link.href
                        ? 'text-accent-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-primary rounded-full" />
                    )}
                  </Link>
                ))}
                <Link href="/contact" className="btn-primary text-sm !py-2.5 !px-5">
                  <Phone className="w-4 h-4" />
                  Book a Free Call
                </Link>
              </div>

              <div className="flex items-center gap-3 lg:hidden">
                <Link href="/contact" className="btn-primary text-sm !py-2 !px-4">
                  <Phone className="w-3.5 h-3.5" />
                  Book Call
                </Link>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-text-primary p-2"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile menu overlay — white, not dark */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-sm lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-serif transition-colors ${
                  pathname === link.href
                    ? 'text-accent-primary'
                    : 'text-text-primary hover:text-accent-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col items-center gap-4">
              <Link href="/contact" className="btn-primary text-lg">
                <Phone className="w-5 h-5" />
                Book a Free Call
              </Link>
              <a
                href={SITE_CONFIG.phoneTel}
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
