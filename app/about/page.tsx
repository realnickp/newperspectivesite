import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Phone } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Daniel McGowan',
  description:
    'Learn about Daniel McGowan — a Certified Alcohol & Drug Counselor, Certified Interventionist, and Motivational Speaker dedicated to helping individuals and families overcome addiction in New Jersey.',
}

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO — Dark split with portrait ===== */}
      <section className="relative bg-[#1B2838] overflow-hidden">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
            {/* Text side */}
            <div className="flex items-end lg:items-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 pb-12 lg:py-32 relative z-10">
              <div>
                <AnimatedSection>
                  <p className="text-[#E8D5B7] uppercase tracking-[0.25em] text-xs font-semibold mb-8">
                    Counselor &middot; Interventionist &middot; Speaker &middot; Author
                  </p>
                  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white leading-[1.02] mb-8">
                    Daniel<br />
                    <span className="text-[#C4572A] italic">McGowan</span>
                  </h1>
                </AnimatedSection>
                <AnimatedSection delay={0.15}>
                  <p className="text-[#A8B4C0] text-lg sm:text-xl leading-relaxed max-w-md mb-10">
                    Helping families navigate addiction with compassion,
                    professional expertise, and an unwavering belief that
                    recovery is always possible.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4572A] text-white font-medium rounded-sm hover:bg-[#A84522] transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule a Call
                    </Link>
                    <a
                      href={SITE_CONFIG.phoneTel}
                      className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white font-medium rounded-sm hover:bg-white/5 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Image side */}
            <div className="relative h-[60vh] lg:h-auto">
              <Image
                src="/images/bw-elegant.png"
                alt="Daniel McGowan"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2838] via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B2838] via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== OPENING HOOK — Big editorial statement ===== */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#1B2838] leading-[1.15] max-w-4xl">
              Addiction took everything from me — my relationships, my career,
              my sense of self. Today, I live a radically transformed life.{' '}
              <span className="text-[#C4572A] italic">
                I don&apos;t just understand recovery. I&apos;ve lived it.
              </span>
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== THE STORY — Magazine-style feature ===== */}
      <section className="py-24 sm:py-32 bg-[#F2F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sticky image column */}
            <AnimatedSection className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                  <Image
                    src="/images/speaking-outdoor.png"
                    alt="Daniel McGowan speaking at an event"
                    fill
                    className="object-cover object-[center_65%]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#D1CCC3]" />
                  <p className="text-[#5A6B7A] text-sm italic">
                    Daniel speaking in New Jersey
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Text column */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <p className="text-[#C4572A] uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                  The Person Behind the Practice
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#1B2838] mb-12">
                  My Story
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="text-[#5A6B7A] text-lg leading-[1.85] space-y-6">
                  <p>
                    My name is Daniel McGowan, and I am the founder of New Perspective
                    Support Services. Before I earned a single credential, I lived
                    the reality of addiction. It stripped away everything — my
                    relationships, my career, my dignity. I know what it feels like
                    to hit bottom because I&apos;ve been there.
                  </p>
                  <p>
                    But I also know what it feels like to come back. I&apos;m in
                    long-term recovery, and that journey is the foundation of
                    everything I do today. It&apos;s why I became a Certified Alcohol
                    and Drug Counselor (CADC), Certified Interventionist, and
                    Certified Motivational Speaker — because I wanted to turn the
                    worst chapter of my life into a bridge for other people.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <blockquote className="my-12 py-10 border-y border-[#D1CCC3]">
                  <p className="font-serif text-2xl sm:text-3xl text-[#1B2838] leading-[1.3] italic">
                    &ldquo;When I sit with a family in crisis, they&apos;re not talking
                    to someone who read about it. They&apos;re talking to someone who
                    lived it — and made it to the other side.&rdquo;
                  </p>
                </blockquote>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="text-[#5A6B7A] text-lg leading-[1.85] space-y-6">
                  <p>
                    My approach is rooted in compassion, respect, and the unwavering
                    belief that every individual has the potential to achieve their
                    goals. I don&apos;t offer one-size-fits-all solutions — instead, I
                    work alongside each person and family to understand their unique
                    challenges and create a tailored path forward.
                  </p>
                  <p>
                    Whether I&apos;m conducting an intervention, speaking to an auditorium
                    of students, or sitting across from a client in a one-on-one
                    coaching session, my mission remains the same: to help people see
                    a new perspective and take the first step toward the life they
                    deserve.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CREDENTIALS — Bold dark section ===== */}
      <section className="relative py-24 sm:py-32 bg-[#1B2838] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 sm:mb-20">
            <p className="text-[#E8D5B7] uppercase tracking-[0.25em] text-xs font-semibold mb-4">
              Credentials
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white">
              Triple Certified.<br />
              <span className="text-[#C4572A] italic">Deeply Committed.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                abbr: 'CADC',
                title: 'Certified Alcohol & Drug Counselor',
                desc: 'Licensed to provide professional substance abuse counseling, assessment, and treatment planning for individuals battling addiction.',
              },
              {
                abbr: 'CI',
                title: 'Certified Interventionist',
                desc: 'Trained in evidence-based intervention methods that help families lovingly guide their loved ones toward accepting treatment.',
              },
              {
                abbr: 'CMS',
                title: 'Certified Motivational Speaker',
                desc: 'A compelling communicator who inspires audiences across corporate, educational, and community settings to take action and embrace change.',
              },
            ].map((cred, i) => (
              <AnimatedSection key={cred.abbr} delay={i * 0.1}>
                <div
                  className={`py-10 md:py-0 md:px-10 ${
                    i < 2
                      ? 'border-b md:border-b-0 md:border-r border-white/10'
                      : ''
                  }`}
                >
                  <span className="font-serif text-6xl sm:text-7xl text-[#C4572A]/30 block mb-4 leading-none">
                    {cred.abbr}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white mb-3">
                    {cred.title}
                  </h3>
                  <p className="text-[#A8B4C0] leading-relaxed">
                    {cred.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY DANIEL — Compelling differentiators ===== */}
      <section className="py-24 sm:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 sm:mb-20 max-w-3xl">
            <p className="text-[#C4572A] uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Why Daniel
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838] leading-[1.1]">
              This isn&apos;t a call center.{' '}
              <span className="text-[#C4572A] italic">It&apos;s one person</span>{' '}
              who genuinely cares.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                num: '01',
                title: 'He Picks Up the Phone',
                desc: 'When you call New Perspective Support Services, you\'re not navigating a phone tree. You\'re talking to Daniel. He answers personally because he knows that when you finally make the call, it matters.',
              },
              {
                num: '02',
                title: 'He\'s Been in the Room',
                desc: 'Daniel doesn\'t read about interventions in textbooks — he\'s conducted them. He doesn\'t theorize about recovery — he\'s walked alongside hundreds of people through it. The experience shows.',
              },
              {
                num: '03',
                title: 'He Doesn\'t Disappear After',
                desc: 'Most providers hand you a plan and wish you luck. Daniel stays. He follows up. He checks in. He becomes part of your support system — not just another service on a bill.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#C4572A] font-serif text-sm">{item.num}</span>
                  <div className="h-px flex-1 bg-[#C4572A]/20" />
                </div>
                <h3 className="font-serif text-2xl text-[#1B2838] mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#5A6B7A] leading-relaxed">
                  {item.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE — Inline on warm background ===== */}
      <section className="py-16 sm:py-20 bg-[#F2F0EB] border-y border-[#D1CCC3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <h3 className="font-serif text-2xl text-[#1B2838] flex-shrink-0">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Substance Abuse Counseling',
                  'Family Intervention',
                  'Recovery Coaching',
                  'Crisis Intervention',
                  'Relapse Prevention',
                  'Motivational Speaking',
                  'Family Support',
                  'Community Outreach',
                ].map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 text-sm text-[#1B2838] border border-[#D1CCC3] rounded-sm bg-[#FAFAF7]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA — Full-width dark ===== */}
      <section className="relative py-32 sm:py-40 bg-[#1B2838] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/recovery-hope.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[#E8D5B7] uppercase tracking-[0.25em] text-xs font-semibold mb-6">
              Let&apos;s Talk
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.1]">
              You don&apos;t have to{' '}
              <span className="text-[#C4572A] italic">figure this out alone</span>
            </h2>
            <p className="text-[#A8B4C0] text-lg max-w-2xl mx-auto mb-12">
              By choosing to work with Daniel, you&apos;re not just choosing a service
              provider — you&apos;re choosing a partner dedicated to making a
              meaningful impact in your life, your family&apos;s life, and your
              community.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C4572A] text-white font-semibold px-10 py-5 rounded-sm text-lg transition-all duration-200 hover:bg-[#A84522]"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Conversation
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
