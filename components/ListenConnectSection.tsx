'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { MEDIA_APPEARANCES } from '@/lib/constants'

const accentRing: Record<(typeof MEDIA_APPEARANCES)[number]['kind'], string> = {
  spotify: 'from-[#1DB954]/30 via-[#1DB954]/10 to-transparent',
  youtube: 'from-red-500/25 via-red-500/8 to-transparent',
}

const pillClass: Record<(typeof MEDIA_APPEARANCES)[number]['kind'], string> = {
  spotify: 'bg-[#1DB954]/15 text-[#0d5928] ring-1 ring-[#1DB954]/20',
  youtube: 'bg-red-500/10 text-red-900 ring-1 ring-red-500/15',
}

const platformVerb: Record<(typeof MEDIA_APPEARANCES)[number]['kind'], string> = {
  spotify: 'Listen on Spotify',
  youtube: 'Watch on YouTube',
}

const platformBrand: Record<(typeof MEDIA_APPEARANCES)[number]['kind'], string> = {
  spotify: 'Spotify',
  youtube: 'YouTube',
}

export default function ListenConnectSection() {
  return (
    <section
      id="listen"
      className="relative scroll-mt-24 py-24 sm:py-32 bg-[#FAFAF7] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(ellipse_at_80%_20%,rgba(196,87,42,0.06),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C4572A] mb-4">
            Listen &amp; connect
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1B2838] leading-[1.1] mb-4">
            Hear Daniel in conversation
          </h2>
          <p className="text-[#5A6B7A] text-lg leading-relaxed">
            Podcast episodes and an educational YouTube talk — each opens in a
            new tab. To reserve time with Daniel, use the{' '}
            <Link
              href="/contact#book"
              className="text-[#C4572A] font-semibold hover:underline underline-offset-2"
            >
              contact page
            </Link>
            .
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {MEDIA_APPEARANCES.map((item, i) => (
            <AnimatedSection
              key={`${item.href}-${i}`}
              className="min-h-0"
              slideFrom={i % 2 === 0 ? 'left' : 'right'}
              delay={0.06 + i * 0.05}
              duration={0.55}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#D1CCC3] bg-white transition-all duration-300 hover:border-[#C4572A]/35 hover:shadow-[0_20px_48px_rgba(27,40,56,0.1)] text-left"
              >
                <div
                  className={`relative aspect-[16/10] w-full shrink-0 bg-[#E8E4DF] ${item.kind === 'youtube' ? 'bg-[#1a1a1a]' : ''}`}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-3/5 bg-gradient-to-t from-[#1B2838]/45 via-[#1B2838]/10 to-transparent"
                  />
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 z-[1] h-1 bg-gradient-to-r ${accentRing[item.kind]}`}
                  />
                  <Image
                    src={item.coverImage}
                    alt={item.coverAlt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute left-3 top-3 z-[2] flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm ${pillClass[item.kind]} bg-opacity-95`}
                    >
                      {platformBrand[item.kind]}
                    </span>
                    <span className="rounded-full bg-black/45 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                      {item.when}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[0.72rem] sm:text-xs font-semibold tracking-wide text-[#C4572A] uppercase mb-2 line-clamp-2">
                    {item.source}
                  </p>
                  <h3 className="font-serif text-xl sm:text-[1.35rem] text-[#1B2838] leading-snug mb-3 group-hover:text-[#C4572A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A6B7A] leading-relaxed mb-6 flex-1">
                    {item.context}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#C4572A]">
                    {platformVerb[item.kind]}
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
