'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

const lines = [
  ['Helping', 'Families'],
  ['Overcome', 'Addiction'],
]

export default function HeroSection() {
  let wordIndex = 0

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Mobile-only hero video (portrait / small screens) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover lg:hidden"
        poster="/images/hero-crowd.png"
        aria-hidden
      >
        <source src="/mcgowan-mobile-hero.mp4" type="video/mp4" />
      </video>
      {/* Desktop / large screens — original wide hero */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        poster="/images/hero-crowd.png"
        aria-hidden
      >
        <source src="/images/mcgowan.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1923]/95 via-[#1B2838]/70 to-[#1B2838]/25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm tracking-[0.2em] uppercase text-[#E8D5B7] mb-6"
          >
            Daniel McGowan &middot; New Jersey
          </motion.p>

          <h1 className="font-serif text-[2.25rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] mb-8 text-white">
            {lines.map((line, lineIdx) => (
              <span key={lineIdx} className="block">
                {line.map((word) => {
                  const i = wordIndex++
                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + i * 0.1,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="inline-block mr-[0.3em]"
                    >
                      {word}
                    </motion.span>
                  )
                })}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
          >
            Certified Interventionist and Motivational Speaker guiding individuals
            and families through addiction recovery with compassion, experience,
            and real-world results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C4572A] text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-md text-base sm:text-lg transition-all duration-200 hover:bg-[#A8471F] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C4572A]/20"
            >
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">Schedule a Free Consultation</span>
              <span className="sm:hidden">Free Consultation</span>
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
