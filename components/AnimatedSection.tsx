'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

/** Shared scroll-into-view defaults — use across pages for consistent motion */
export const SCROLL_MOTION_DURATION = 0.52
/** Slower horizontal slides (e.g. homepage services columns) */
export const SCROLL_MOTION_DURATION_SLOW = 0.92
export const SCROLL_MOTION_EASE = [0.22, 1, 0.36, 1] as const
export const SCROLL_VIEWPORT = { once: true, margin: '-48px 0px' } as const

export type SlideFrom = 'up' | 'left' | 'right'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Override enter duration in seconds */
  duration?: number
  /** Vertical fade-up (default), or horizontal slide for split layouts */
  slideFrom?: SlideFrom
  /** Pixel distance for slide (reduced with prefers-reduced-motion) */
  distance?: number
}

function getInitial(slideFrom: SlideFrom, distance: number) {
  switch (slideFrom) {
    case 'left':
      return { opacity: 0, x: -distance, y: 0 }
    case 'right':
      return { opacity: 0, x: distance, y: 0 }
    default:
      return { opacity: 0, x: 0, y: distance }
  }
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  duration: durationProp,
  slideFrom = 'up',
  distance = 32,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion()
  const d = reduceMotion ? 0 : distance
  const duration = durationProp ?? SCROLL_MOTION_DURATION

  const initial = reduceMotion
    ? { opacity: 1, x: 0, y: 0 }
    : getInitial(slideFrom, d)
  const animate = { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={SCROLL_VIEWPORT}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: SCROLL_MOTION_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
