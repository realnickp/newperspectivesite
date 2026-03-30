'use client'

import { SITE_CONFIG } from '@/lib/constants'

type CalendlyEmbedProps = {
  /** Replaces default max-w-3xl when you want a wider booking column */
  className?: string
}

export default function CalendlyEmbed({ className }: CalendlyEmbedProps) {
  const embedSrc = `${SITE_CONFIG.calendlyUrl}?hide_gdpr_banner=1&background_color=fafaf7&text_color=1b2838&primary_color=c4572a`

  return (
    <div
      className={`w-full mx-auto ${className ?? 'max-w-3xl'}`}
    >
      <div className="rounded-sm overflow-hidden border border-white/10 bg-[#1B2838]/40 backdrop-blur-sm">
        <iframe
          src={embedSrc}
          width="100%"
          height="720"
          title="Schedule a call with Daniel McGowan — Calendly"
          className="w-full min-h-[580px] sm:min-h-[660px] md:min-h-[720px] bg-[#FAFAF7]"
          loading="lazy"
        />
      </div>

      <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#A8B4C0]">
        <span>Prefer to reach out directly?</span>
        <a
          href={SITE_CONFIG.phoneTel}
          className="text-[#E8D5B7] hover:text-white font-medium transition-colors"
        >
          Call {SITE_CONFIG.phone}
        </a>
        <span className="hidden sm:inline text-white/30">|</span>
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="text-[#E8D5B7] hover:text-white font-medium transition-colors"
        >
          Email Daniel
        </a>
      </div>
    </div>
  )
}
