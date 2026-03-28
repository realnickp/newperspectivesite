'use client'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href={SITE_CONFIG.phoneTel}
      className="fixed bottom-6 right-6 z-50 lg:hidden flex items-center justify-center w-14 h-14 rounded-full bg-accent-primary text-white shadow-lg shadow-accent-primary/25 hover:scale-110 transition-transform"
      aria-label="Call Daniel McGowan"
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}
