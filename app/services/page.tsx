import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Calendar,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Daniel McGowan\'s professional services: motivational speaking, substance abuse intervention, family support programs, and one-on-one coaching in New Jersey.',
}

export default function ServicesPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#1B2838] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#E8D5B7] uppercase tracking-[0.25em] text-xs font-semibold mb-6">
              Our Services
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
              Comprehensive Support for{' '}
              <span className="text-[#C4572A] italic">Every Stage</span>{' '}
              of Recovery
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <p className="text-[#A8B4C0] text-lg max-w-2xl leading-relaxed">
              From the first difficult conversation to long-term coaching,
              Daniel walks alongside you with professional expertise and
              genuine compassion — every step of the way.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SERVICE 01 — Motivational Speaking ===== */}
      <section id="speaking" className="scroll-mt-24 bg-[#FAFAF7]">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            {/* Image side */}
            <AnimatedSection className="relative h-[50vh] lg:h-auto">
              <Image
                src="/images/speaking-outdoor.png"
                alt="Daniel McGowan delivering a motivational speech"
                fill
                className="object-cover object-[center_65%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </AnimatedSection>

            {/* Text side */}
            <div className="flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
              <div>
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#C4572A] font-serif text-sm">01</span>
                    <div className="h-px w-12 bg-[#C4572A]/30" />
                  </div>
                  <h2 className="font-serif text-4xl sm:text-5xl text-[#1B2838] mb-8 leading-[1.05]">
                    Motivational{' '}
                    <span className="text-[#C4572A] italic">Speaking</span>
                  </h2>
                  <p className="text-[#5A6B7A] text-lg leading-relaxed mb-8 max-w-lg">
                    Daniel&apos;s dynamic presentations inspire audiences to overcome
                    adversity, embrace recovery, and take meaningful action.
                    His talks blend professional expertise with authentic
                    conviction — creating an experience that resonates long after
                    the event ends.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
                    {[
                      'Recovery Transformation',
                      'Overcoming Addiction',
                      'Community Resilience',
                      'Youth Prevention',
                      'Personal Growth',
                      'Corporate Events',
                    ].map((topic) => (
                      <div key={topic} className="flex items-center gap-2 text-sm text-[#5A6B7A]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C4572A] flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/speaking"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B2838] text-white font-medium rounded-sm hover:bg-[#2a3d52] transition-colors"
                  >
                    Book Daniel to Speak
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE BREAK ===== */}
      <section className="relative py-24 sm:py-32 bg-[#1B2838] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/ocean-aerial.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-[1.25] italic">
              &ldquo;You don&apos;t have to wait until things get worse. The
              best time to reach out is right now.&rdquo;
            </blockquote>
            <p className="text-[#C4572A] font-medium mt-6 text-sm tracking-wide uppercase">
              — Daniel McGowan
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SERVICE 02 — Substance Abuse Intervention ===== */}
      <section id="intervention" className="scroll-mt-24 py-24 sm:py-32 bg-[#F2F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#C4572A] font-serif text-sm">02</span>
                  <div className="h-px w-12 bg-[#C4572A]/30" />
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838] mb-8 leading-[1.05]">
                  Substance Abuse{' '}
                  <span className="text-[#C4572A] italic">Intervention</span>
                </h2>
                <p className="text-[#5A6B7A] text-lg leading-relaxed max-w-xl">
                  When a loved one is struggling with addiction, knowing what
                  to do can feel impossible. Daniel provides compassionate,
                  professionally guided interventions that create a structured,
                  loving environment for families to express their concerns
                  and guide their loved one toward treatment.
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.15} className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/images/interventions.png"
                  alt="Professional intervention support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              {
                step: '01',
                title: 'Raising Awareness',
                desc: 'An initial assessment and family education session to understand the situation and prepare everyone involved.',
              },
              {
                step: '02',
                title: 'Compassionate Group Process',
                desc: 'A structured, loving conversation where family and friends share how the addiction has affected them.',
              },
              {
                step: '03',
                title: 'Treatment Selection',
                desc: 'Identifying the right level of care — residential, outpatient, or combined — based on individual needs.',
              },
              {
                step: '04',
                title: 'Aftercare Planning',
                desc: 'Ongoing support and resource coordination to ensure sustained recovery after treatment.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div
                  className={`py-8 lg:px-8 ${
                    i < 3 ? 'border-b lg:border-b-0 lg:border-r border-[#D1CCC3]' : ''
                  } ${i === 0 ? 'lg:pl-0' : ''} ${i === 3 ? 'lg:pr-0' : ''}`}
                >
                  <span className="font-serif text-5xl text-[#C4572A]/20 block mb-3 leading-none">
                    {item.step}
                  </span>
                  <h4 className="font-serif text-xl text-[#1B2838] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#5A6B7A] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4572A] text-white font-medium rounded-sm hover:bg-[#A84522] transition-colors"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SERVICE 03 — Family Support (image right, text left) ===== */}
      <section id="family" className="scroll-mt-24 bg-[#FAFAF7]">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            {/* Text side */}
            <div className="flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24 order-2 lg:order-1">
              <div>
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#C4572A] font-serif text-sm">03</span>
                    <div className="h-px w-12 bg-[#C4572A]/30" />
                  </div>
                  <h2 className="font-serif text-4xl sm:text-5xl text-[#1B2838] mb-8 leading-[1.05]">
                    Family Support{' '}
                    <span className="text-[#C4572A] italic">Programs</span>
                  </h2>
                  <p className="text-[#5A6B7A] text-lg leading-relaxed mb-8 max-w-lg">
                    Addiction doesn&apos;t just affect the individual — it impacts the
                    entire family. Daniel equips loved ones with the understanding,
                    skills, and resources they need to heal alongside their family
                    member in recovery.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                  <div className="space-y-3 mb-10">
                    {[
                      'Understanding addiction and its effects on the family',
                      'Communication techniques for difficult conversations',
                      'Setting healthy boundaries without losing connection',
                      'Building a strong support network',
                      'Coping strategies for stress and emotional overwhelm',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#C4572A] flex-shrink-0 mt-1" />
                        <span className="text-[#5A6B7A] text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B2838] text-white font-medium rounded-sm hover:bg-[#2a3d52] transition-colors"
                  >
                    Get Family Support
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </AnimatedSection>
              </div>
            </div>

            {/* Image side */}
            <AnimatedSection className="relative h-[50vh] lg:h-auto order-1 lg:order-2">
              <Image
                src="/images/counseling.png"
                alt="Family support and counseling"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== IMAGE BREAK — Atmospheric ===== */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <Image
          src="/images/recovery-hope.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1B2838]/60" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <AnimatedSection>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-white text-center italic max-w-3xl leading-[1.3]">
              &ldquo;Together, we can tackle addiction and mental health challenges
              with compassion and strength.{' '}
              <span className="text-[#E8D5B7]">You are not alone.</span>&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SERVICE 04 — One-on-One Coaching ===== */}
      <section id="coaching" className="scroll-mt-24 py-24 sm:py-32 bg-[#F2F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#C4572A] font-serif text-sm">04</span>
                <div className="h-px w-12 bg-[#C4572A]/30" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838] mb-8 leading-[1.05]">
                One-on-One{' '}
                <span className="text-[#C4572A] italic">Coaching</span>
              </h2>
              <p className="text-[#5A6B7A] text-lg leading-relaxed">
                Personalized coaching sessions tailored to your unique recovery
                journey and personal development goals. Daniel works directly
                with you to build accountability, develop healthy habits, and
                create a sustainable path forward.
              </p>
            </AnimatedSection>
          </div>

          {/* Steps as a horizontal timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                desc: 'A free conversation to understand your challenges, goals, and what you need most right now.',
              },
              {
                step: '02',
                title: 'Personalized Plan',
                desc: 'Daniel creates a custom coaching roadmap based on your unique situation and objectives.',
              },
              {
                step: '03',
                title: 'Ongoing Sessions',
                desc: 'Regular one-on-one sessions focused on accountability, skill-building, and sustained progress.',
              },
              {
                step: '04',
                title: 'Progress Milestones',
                desc: 'Celebrate wins, adjust the plan, and stay motivated with clear markers of growth.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="relative lg:px-8 lg:first:pl-0 lg:last:pr-0">
                  {i < 3 && (
                    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-[#D1CCC3]" />
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-[#1B2838] text-white font-serif text-sm flex items-center justify-center">
                      {item.step}
                    </span>
                    {i < 3 && (
                      <div className="h-px flex-1 bg-[#D1CCC3] lg:hidden" />
                    )}
                  </div>
                  <h4 className="font-serif text-xl text-[#1B2838] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#5A6B7A] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4572A] text-white font-medium rounded-sm hover:bg-[#A84522] transition-colors"
            >
              Book Your First Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="relative py-32 sm:py-40 bg-[#1B2838] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[#E8D5B7] uppercase tracking-[0.25em] text-xs font-semibold mb-6">
              Take the First Step
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.1]">
              Not Sure Where to{' '}
              <span className="text-[#C4572A] italic">Start?</span>
            </h2>
            <p className="text-[#A8B4C0] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              That&apos;s completely okay. Schedule a free consultation with Daniel
              and he&apos;ll help you figure out the right path forward — no
              commitment, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C4572A] text-white font-semibold px-10 py-5 rounded-sm text-lg transition-all duration-200 hover:bg-[#A84522]"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Free Consultation
              </Link>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-10 py-5 rounded-sm text-lg border border-white/15 transition-all duration-200 hover:bg-white/5"
              >
                <Phone className="w-5 h-5" />
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
