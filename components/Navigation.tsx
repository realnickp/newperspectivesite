'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'
  const showGlass = scrolled || isOpen || !isHome

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <header
          className={`transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out ${
            showGlass
              ? 'border-b border-white/[0.12] bg-[#1B2838]/80 shadow-sm backdrop-blur-xl backdrop-saturate-150'
              : 'border-b border-transparent bg-transparent shadow-none backdrop-blur-none backdrop-saturate-100'
          }`}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3 min-w-0 h-[4.25rem] sm:h-20">
              <Link
                href="/"
                className="flex items-center min-w-0 shrink py-1"
              >
                <Image
                  src="/images/logo-white.png"
                  alt="New Perspective Support Services"
                  width={280}
                  height={72}
                  className="h-9 w-auto max-w-[9.5rem] min-[400px]:max-w-[11rem] sm:h-11 sm:max-w-[13rem] md:max-w-[15rem] lg:h-[3.25rem] lg:max-w-none"
                  priority
                />
              </Link>

              <div className="hidden lg:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-[#E8D5B7]'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C4572A] rounded-full" />
                    )}
                  </Link>
                ))}
                <Link href="/contact" className="btn-primary text-sm !py-2.5 !px-5">
                  <Phone className="w-4 h-4" />
                  Book a Free Call
                </Link>
              </div>

              <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
                <Link
                  href="/contact"
                  className="btn-primary text-xs sm:text-sm !py-2 !px-3 sm:!px-4 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  Book Call
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white p-2 shrink-0 hover:text-[#E8D5B7] transition-colors touch-manipulation"
                  aria-expanded={isOpen}
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
        <div className="fixed inset-0 z-40 overflow-y-auto overscroll-y-contain bg-white/98 backdrop-blur-sm lg:hidden">
          <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 sm:gap-8 px-4 pt-[calc(4.25rem+1.5rem)] pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:pt-[calc(5rem+1.5rem)]">
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
