import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import ContactForm from '@/components/ContactForm'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Daniel McGowan',
  description:
    "Get in touch with Daniel McGowan for intervention services, family support, motivational speaking, or coaching. Schedule a free 20-minute consultation today. Serving NJ and beyond.",
}

export default function ContactPage() {
  return (
    <>
      {/* ===== HERO — Dark navy editorial ===== */}
      <section className="relative pt-32 pb-24 sm:pb-32 bg-[#1B2838] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D5B7] mb-6">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-[#A8B4C0] text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a family in crisis, an event organizer, or someone
              who needs support — Daniel is here. Reach out today.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT INFO — Editorial two-column ===== */}
      <section className="py-24 sm:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <AnimatedSection>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C4572A] mb-4">
                  Reach Daniel Directly
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#1B2838] mb-12">
                  Contact Details
                </h2>
              </AnimatedSection>

              <div className="space-y-0">
                {[
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: SITE_CONFIG.phone,
                    href: SITE_CONFIG.phoneTel,
                    note: 'Call or text anytime',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: SITE_CONFIG.email,
                    href: `mailto:${SITE_CONFIG.email}`,
                    note: 'Response within 24 hours',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'New Jersey',
                    href: undefined,
                    note: 'Serving NJ and beyond',
                  },
                  {
                    icon: Clock,
                    label: 'Availability',
                    value: 'Mon–Sat',
                    href: undefined,
                    note: 'Flexible scheduling',
                  },
                ].map((item, i) => (
                  <AnimatedSection key={item.label} delay={i * 0.08}>
                    <div className="flex items-start gap-5 py-6 border-t border-[#D1CCC3]">
                      <item.icon className="w-5 h-5 text-[#C4572A] mt-1 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#5A6B7A] mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-serif text-2xl text-[#1B2838] hover:text-[#C4572A] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-serif text-2xl text-[#1B2838]">
                            {item.value}
                          </p>
                        )}
                        <p className="text-sm text-[#5A6B7A] mt-1">{item.note}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
                <div className="border-t border-[#D1CCC3]" />
              </div>
            </div>

            <div className="lg:pt-16">
              <AnimatedSection delay={0.2}>
                <div className="border-l-2 border-[#C4572A] pl-8 py-2">
                  <p className="font-serif text-2xl sm:text-3xl text-[#1B2838] leading-snug mb-6">
                    &ldquo;The hardest part is making the first call.
                    Once you do, everything changes.&rdquo;
                  </p>
                  <p className="text-[#5A6B7A] font-semibold">
                    — Daniel McGowan
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="mt-16">
                <div className="bg-[#F2F0EB] rounded-sm p-8">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C4572A] mb-3">
                    What to Expect
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Free 20-minute initial consultation',
                      'Confidential, judgment-free conversation',
                      'Clear next steps tailored to your situation',
                      'Flexible meeting options — phone, video, or in person',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#5A6B7A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4572A] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALENDLY — Clean editorial ===== */}
      <section id="book" className="py-24 sm:py-32 bg-[#1B2838] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D5B7] mb-6">
              Book a Time
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-[1.1]">
              Schedule a Free 20-Minute Call
            </h2>
            <p className="text-[#A8B4C0] text-lg max-w-xl mx-auto">
              Pick a time that works for you. No pressure — just a conversation
              about what you&apos;re facing and how Daniel can help.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <CalendlyEmbed />
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT FORM — Surface editorial ===== */}
      <section className="py-24 sm:py-32 bg-[#F2F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <AnimatedSection>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C4572A] mb-4">
                  Send a Message
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#1B2838] mb-6">
                  Or Send a Message
                </h2>
                <p className="text-[#5A6B7A] text-lg leading-relaxed">
                  Prefer to write? Fill out the form below and Daniel will get back
                  to you within 24 hours.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="mt-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#C4572A] font-serif text-sm">01</span>
                  <div className="h-px w-12 bg-[#C4572A]/30" />
                </div>
                <p className="text-[#5A6B7A] leading-relaxed mb-8">
                  Tell Daniel a bit about your situation and the best way to reach you.
                </p>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#C4572A] font-serif text-sm">02</span>
                  <div className="h-px w-12 bg-[#C4572A]/30" />
                </div>
                <p className="text-[#5A6B7A] leading-relaxed mb-8">
                  Daniel personally reads every message and responds within one business day.
                </p>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#C4572A] font-serif text-sm">03</span>
                  <div className="h-px w-12 bg-[#C4572A]/30" />
                </div>
                <p className="text-[#5A6B7A] leading-relaxed">
                  From there, you&apos;ll schedule a call to discuss next steps together.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.15}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA — Dark navy ===== */}
      <section className="py-32 sm:py-40 bg-[#1B2838] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.1]">
              The First Step Is the Hardest.
              <br />
              <span className="text-[#C4572A]">Take It Today.</span>
            </h2>
            <p className="text-[#A8B4C0] text-lg max-w-2xl mx-auto mb-12">
              Prefer to reach out directly? Call or text any time.
              Daniel is ready to listen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-[#C4572A] text-white font-semibold px-10 py-5 rounded-md text-lg transition-all duration-200 hover:bg-[#A8471F] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C4572A]/20"
              >
                <Phone className="w-5 h-5" />
                Call {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact#book"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-10 py-5 rounded-md text-lg border border-white/15 transition-all duration-200 hover:bg-white/[0.08]"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
