'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  label: string
}

export default function AnimatedCounter({ target, suffix = '', label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, target])

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#1B2838]">
        {count}{suffix}
      </div>
      <div className="text-sm text-[#8B96A3] mt-2 uppercase tracking-[0.15em] font-medium">
        {label}
      </div>
    </div>
  )
}
