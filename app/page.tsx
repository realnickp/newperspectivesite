import Link from 'next/link'
import Image from 'next/image'
import {
  Mic,
  Heart,
  Users,
  ArrowRight,
  ArrowDown,
  BookOpen,
  Phone,
  Calendar,
  CheckCircle,
  MessageCircleHeart,
  HandHelping,
  Handshake,
} from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import MarqueeStrip from '@/components/MarqueeStrip'
import ListenConnectSection from '@/components/ListenConnectSection'
import AnimatedSection, {
  SCROLL_MOTION_DURATION_SLOW,
} from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import { SITE_CONFIG } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />

      {/* ===== IMPACT STATEMENT — sticky; credentials scrolls over ===== */}
      <div className="relative isolate">
        <section className="sticky top-0 z-0 flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#FAFAF7] py-20 sm:py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/recovery-hope.png"
              alt=""
              fill
              className="object-cover object-center opacity-55"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF7] via-[#FAFAF7]/75 to-[#FAFAF7]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#FAFAF7_85%)] opacity-70" />
          </div>

          <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="font-serif text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] leading-[1.05] text-[#1B2838] max-w-5xl mx-auto">
                When someone you love is struggling,{' '}
                <span className="text-[#C4572A]">every day counts.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="mt-10 sm:mt-12 max-w-3xl mx-auto">
              <p className="text-[#5A6B7A] text-lg sm:text-xl leading-relaxed">
                <span className="block sm:whitespace-nowrap">
                  You&apos;ve watched them change. You&apos;ve had the conversations that go nowhere.
                </span>
                <span className="block sm:whitespace-nowrap mt-1">
                  You don&apos;t know what to do next.{' '}
                  <strong className="text-[#1B2838]">You don&apos;t have to figure this out alone.</strong>
                </span>
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn-primary inline-flex">
                  Talk to Daniel Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

      {/* ===== CREDENTIALS STRIP ===== */}
      <section className="relative z-10 py-20 sm:py-24 overflow-hidden bg-[#1B2838] shadow-[0_-12px_40px_rgba(0,0,0,0.12)]">
        <div className="absolute inset-0 opacity-[0.14]">
          <Image
            src="/images/credentials-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D5B7] mb-12">
              Professional Credentials
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: 'CADC',
                desc: 'Certified Alcohol & Drug Counselor',
                context: 'Licensed to assess, diagnose, and treat substance use disorders with evidence-based clinical methods.',
                icon: Heart,
              },
              {
                title: 'CI',
                desc: 'Certified Interventionist',
                context: 'Trained to facilitate structured family interventions that guide loved ones toward accepting treatment.',
                icon: Users,
              },
              {
                title: 'CMS',
                desc: 'Certified Motivational Speaker',
                context: 'Professionally certified to deliver high-impact talks on recovery, resilience, and personal transformation.',
                icon: Mic,
              },
            ].map((cred, i) => (
              <AnimatedSection key={cred.title} delay={i * 0.1}>
                <div className="text-center p-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
                  <cred.icon className="w-8 h-8 text-[#C4572A] mx-auto mb-4" />
                  <div className="font-serif text-3xl sm:text-4xl text-white mb-2">{cred.title}</div>
                  <div className="text-base sm:text-lg font-semibold text-[#E8D5B7] mb-3">{cred.desc}</div>
                  <div className="text-base sm:text-lg text-[#A8B4C0] leading-relaxed">{cred.context}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* ===== SERVICES — Alternating editorial layout ===== */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#F2F0EB] overflow-x-clip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-20">
            <p className="eyebrow mb-4">What Daniel Offers</p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838]">
              Services
            </h2>
          </AnimatedSection>

          {/* Service 1 — columns slide in from alternating sides */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start py-10 sm:py-16 border-t border-[#D1CCC3]">
            <AnimatedSection
              slideFrom="left"
              duration={SCROLL_MOTION_DURATION_SLOW}
              distance={44}
              className="min-w-0"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span className="text-[#C4572A] font-serif text-sm">01</span>
                  <div className="h-px w-12 bg-[#C4572A]/30" />
                </div>
                <Link href="/speaking" className="group">
                  <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1B2838] leading-[1.05] group-hover:text-[#C4572A] transition-colors duration-300">
                    Motivational Speaking
                  </h3>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection
              slideFrom="right"
              delay={0.18}
              duration={SCROLL_MOTION_DURATION_SLOW}
              distance={44}
              className="lg:pt-10 min-w-0"
            >
              <div>
                <p className="text-[#5A6B7A] text-lg leading-relaxed mb-6">
                  Inspiring audiences at corporate events, schools, and community
                  organizations to overcome adversity and unlock their potential.
                  Daniel brings professional credentials and personal conviction to every stage.
                </p>
                <Link href="/speaking" className="text-[#C4572A] font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Book Daniel to Speak <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Service 2 — inverted slide directions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start py-10 sm:py-16 border-t border-[#D1CCC3]">
            <AnimatedSection
              slideFrom="right"
              delay={0.18}
              duration={SCROLL_MOTION_DURATION_SLOW}
              distance={44}
              className="order-2 lg:order-1 lg:pt-10 min-w-0"
            >
              <div>
                <p className="text-[#5A6B7A] text-lg leading-relaxed mb-6">
                  Compassionate, structured interventions that help families guide
                  their loved ones toward treatment — with professional support
                  every step of the way.
                </p>
                <Link href="/services#intervention" className="text-[#C4572A] font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn About Interventions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection
              slideFrom="left"
              duration={SCROLL_MOTION_DURATION_SLOW}
              distance={44}
              className="order-1 lg:order-2 lg:text-right min-w-0"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 lg:justify-end">
                  <span className="text-[#C4572A] font-serif text-sm">02</span>
                  <div className="h-px w-12 bg-[#C4572A]/30" />
                </div>
                <Link href="/services#intervention" className="group">
                  <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1B2838] leading-[1.05] group-hover:text-[#C4572A] transition-colors duration-300">
                    Substance Abuse Intervention
                  </h3>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Service 3 — same pattern as row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start py-10 sm:py-16 border-t border-[#D1CCC3] border-b">
            <AnimatedSection
              slideFrom="left"
              duration={SCROLL_MOTION_DURATION_SLOW}
              distance={44}
              className="min-w-0"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#C4572A] font-serif text-sm">03</span>
                  <div className="h-px w-12 bg-[#C4572A]/30" />
                </div>
                <Link href="/services#family" className="group">
                  <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1B2838] leading-[1.05] group-hover:text-[#C4572A] transition-colors duration-300">
                    Family Support &amp; Coaching
                  </h3>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection
              slideFrom="right"
              delay={0.18}
              duration={SCROLL_MOTION_DURATION_SLOW}
              distance={44}
              className="lg:pt-10 min-w-0"
            >
              <div>
                <p className="text-[#5A6B7A] text-lg leading-relaxed mb-6">
                  Equipping families with communication tools, coping strategies,
                  and resources to heal alongside their loved one. Plus one-on-one
                  coaching tailored to your unique recovery journey.
                </p>
                <Link href="/services#family" className="text-[#C4572A] font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Explore Programs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* ===== BOOK TEASER ===== */}
      <section className="py-16 sm:py-24 md:py-32 overflow-x-clip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <AnimatedSection slideFrom="left" className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/mcgowanbook.jpg"
                  alt="New Perspectives: A Guide to Achieving Inner Peace in Recovery by Daniel McGowan"
                  width={400}
                  height={600}
                  className="w-64 sm:w-72 h-auto rounded-lg shadow-2xl"
                  sizes="288px"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection slideFrom="right" delay={0.12}>
              <p className="eyebrow mb-4">Published Author</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1B2838] mb-3 leading-[1.1]">
                New Perspectives
              </h2>
              <p className="font-serif text-lg text-[#C4572A] italic mb-6">
                A Guide to Achieving Inner Peace in Recovery
              </p>
              <p className="text-[#5A6B7A] text-lg leading-relaxed mb-8 max-w-lg">
                Drawing from years of frontline experience as a counselor,
                interventionist, and speaker, Daniel shares powerful insights
                and practical strategies for overcoming adversity and building
                a life of meaning and purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://a.co/d/0bA5DvaY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <BookOpen className="w-4 h-4" />
                  Get the Book on Amazon
                </a>
                <Link href="/book" className="btn-secondary">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE — Full-width dramatic ===== */}
      <section className="py-20 sm:py-32 lg:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1B2838]" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/ocean-aerial.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-8">
              &ldquo;Fear kills more dreams than failure ever could.&rdquo;
            </blockquote>
            <p className="text-[#C4572A] font-medium text-lg tracking-wide">
              — Daniel McGowan
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ABOUT — Split with dramatic portrait ===== */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-52 overflow-x-clip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image side — bleeds to edge */}
            <AnimatedSection slideFrom="left" className="relative">
              <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full min-h-[350px] sm:min-h-[500px] rounded-sm overflow-hidden">
                <Image
                  src="/images/bw-elegant.png"
                  alt="Daniel McGowan — elegant black and white portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Warm duotone overlay */}
                <div className="absolute inset-0 bg-[#E8D5B7]/10 mix-blend-multiply" />
              </div>
            </AnimatedSection>

            {/* Text side */}
            <AnimatedSection slideFrom="right" delay={0.12} className="flex items-center">
              <div className="lg:pl-16 xl:pl-24 py-12 lg:py-0">
                <p className="eyebrow mb-6">About Daniel</p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1B2838] mb-8 leading-[1.1]">
                  A Rare Combination of Credentials and Commitment
                </h2>
                <div className="text-[#5A6B7A] leading-relaxed space-y-4 mb-10">
                  <p>
                    Daniel McGowan holds triple certification as a Counselor,
                    Interventionist, and Motivational Speaker — a combination that
                    brings unmatched depth to every interaction.
                  </p>
                  <p>
                    His approach is rooted in the unwavering belief that every
                    person has the potential to achieve their goals. He doesn&apos;t just
                    offer services — he walks alongside you.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mb-10">
                  {SITE_CONFIG.credentials.map((cred) => (
                    <span key={cred} className="credential-badge text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C4572A]" />
                      {cred}
                    </span>
                  ))}
                </div>
                <Link href="/about" className="btn-primary">
                  Read Daniel&apos;s Full Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SPEAKING CTA — Dramatic HOPE shirt ===== */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/speaking-outdoor.png"
          alt="Daniel McGowan speaking at an outdoor event"
          fill
          className="object-cover object-[center_58%]"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
          <AnimatedSection slideFrom="left" className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D5B7] mb-4 sm:mb-6">
              Motivational Speaker
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 leading-[1.1]">
              Book Daniel for Your Next Event
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg">
              Powerful, evidence-informed talks on recovery, resilience, and
              purpose — for corporate events, schools, nonprofits, and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/speaking"
                className="inline-flex items-center justify-center gap-2 bg-[#C4572A] text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-md text-base sm:text-lg transition-all duration-200 hover:bg-[#A8471F] hover:-translate-y-0.5"
              >
                See Speaking Topics
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-md text-base sm:text-lg border border-white/20 transition-all duration-200 hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== THE APPROACH — What makes Daniel different ===== */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#F2F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 sm:mb-16">
            <p className="eyebrow mb-4">The Approach</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1B2838] max-w-2xl">
              What Makes Working With Daniel Different
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 sm:gap-y-16">
            {[
              {
                number: '01',
                title: 'Empathy First, Always',
                desc: 'Daniel leads with compassion, not clinical detachment. Every interaction is grounded in genuine care for you and your family — because he believes every person deserves to be heard.',
              },
              {
                number: '02',
                title: 'Triple-Certified Expertise',
                desc: 'As a Certified Alcohol & Drug Counselor, Certified Interventionist, and Certified Motivational Speaker, Daniel brings a rare breadth of professional knowledge to every situation.',
              },
              {
                number: '03',
                title: 'A Partner, Not a Provider',
                desc: 'You\'re not just hiring a service — you\'re gaining a dedicated partner who walks alongside you through every challenge, every milestone, and every breakthrough.',
              },
            ].map((item, i) => (
              <AnimatedSection
                key={item.number}
                delay={i * 0.1}
                slideFrom={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#C4572A] font-serif text-sm">{item.number}</span>
                  <div className="h-px flex-1 bg-[#C4572A]/30" />
                </div>
                <h3 className="font-serif text-xl text-[#1B2838] mb-3">{item.title}</h3>
                <p className="text-[#5A6B7A] leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ListenConnectSection />

      {/* ===== FINAL CTA — Clean, powerful ===== */}
      <section className="py-20 sm:py-32 md:py-40 bg-[#1B2838] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.1]">
              Ready to Take the First Step?
            </h2>
            <p className="text-[#A8B4C0] text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12">
              Schedule a free 30-minute consultation with Daniel. No pressure.
              Just a conversation about what you&apos;re facing and how he can help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C4572A] text-white font-semibold px-7 py-4 sm:px-10 sm:py-5 rounded-md text-base sm:text-lg transition-all duration-200 hover:bg-[#A8471F] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C4572A]/20"
              >
                <Calendar className="w-5 h-5" />
                <span className="hidden sm:inline">Schedule a Free Consultation</span>
                <span className="sm:hidden">Free Consultation</span>
              </Link>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 sm:px-10 sm:py-5 rounded-md text-base sm:text-lg border border-white/15 transition-all duration-200 hover:bg-white/8"
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
