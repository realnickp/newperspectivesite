'use client'

import { SITE_CONFIG } from '@/lib/constants'

export default function CalendlyEmbed() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/*
        INSTRUCTIONS FOR DANIEL:
        1. Go to https://calendly.com and create your account
        2. Set up a "Free 20-Minute Consultation" event type
        3. Replace the URL in lib/constants.ts with your actual Calendly URL
        4. Uncomment the iframe below
      */}
      <div className="bg-bg-elevated border border-border-light rounded-xl p-8 text-center">
        <div className="mb-6">
          <h3 className="font-serif text-2xl text-text-primary mb-2">
            Schedule Your Free Consultation
          </h3>
          <p className="text-text-secondary">
            Pick a time that works for you — 20 minutes, no pressure.
          </p>
        </div>

        {/* Calendly inline widget - uncomment when ready */}
        {/*
        <iframe
          src={`${SITE_CONFIG.calendlyUrl}?hide_gdpr_banner=1&background_color=fafaf7&text_color=1b2838&primary_color=c4572a`}
          width="100%"
          height="630"
          frameBorder="0"
          title="Schedule a consultation with Daniel McGowan"
          className="rounded-lg"
        />
        */}

        <div className="bg-bg-surface rounded-lg p-12 border border-dashed border-border-medium">
          <p className="text-text-tertiary text-sm mb-4">
            [Calendly scheduling widget will appear here]
          </p>
          <p className="text-text-tertiary text-xs">
            To activate: Replace the Calendly URL in lib/constants.ts, then
            uncomment the iframe above.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <span className="text-text-secondary">Prefer to reach out directly?</span>
          <a
            href={SITE_CONFIG.phoneTel}
            className="text-accent-primary hover:underline font-medium"
          >
            Call {SITE_CONFIG.phone}
          </a>
          <span className="text-text-secondary hidden sm:inline">|</span>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-accent-primary hover:underline font-medium"
          >
            Email Daniel
          </a>
        </div>
      </div>
    </div>
  )
}
