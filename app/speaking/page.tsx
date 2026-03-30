import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  RefreshCcw,
  Shield,
  Users,
  Brain,
  Target,
  GraduationCap,
  Building,
  HeartHandshake,
  Church,
  CalendarDays,
  Stethoscope,
  Phone,
  Download,
  Calendar,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import ListenConnectSection from '@/components/ListenConnectSection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Book Daniel McGowan — Motivational Speaker',
  description:
    'Book Daniel McGowan as a motivational speaker for your next event. Certified speaker specializing in recovery, addiction awareness, and community resilience. Available across NJ and beyond.',
}

const speakingTopics = [
  {
    icon: RefreshCcw,
    title: 'Recovery Transformation',
    desc: 'Powerful stories and insights about the journey from addiction to a life of purpose, meaning, and freedom. Daniel draws from professional expertise and lived experience to deliver talks that resonate deeply.',
  },
  {
    icon: Shield,
    title: 'Overcoming Addiction',
    desc: 'Breaking down the science and psychology of addiction while offering hope and practical strategies for recovery. Audiences leave with a clear understanding of the path forward.',
  },
  {
    icon: Users,
    title: 'Community Resilience',
    desc: 'How communities can come together to support recovery, reduce stigma, and build stronger safety nets. Ideal for civic organizations, coalitions, and municipal events.',
  },
  {
    icon: GraduationCap,
    title: 'Youth Substance Abuse Prevention',
    desc: 'Age-appropriate, impactful presentations that help young people understand the risks and make better choices. Tailored for middle school, high school, and university audiences.',
  },
  {
    icon: Brain,
    title: 'Breaking the Stigma of Mental Health',
    desc: 'Challenging misconceptions about mental health and addiction to foster understanding and compassion. A talk that changes how organizations and individuals approach these critical issues.',
  },
  {
    icon: Target,
    title: 'Building a Life of Purpose',
    desc: 'Inspiring individuals at any stage to define their goals, overcome obstacles, and live with intentionality. A motivational keynote that moves people from complacency to action.',
  },
]

const audiences = [
  { icon: Building, label: 'Corporate' },
  { icon: GraduationCap, label: 'Schools & Universities' },
  { icon: HeartHandshake, label: 'Nonprofits' },
  { icon: Church, label: 'Faith Communities' },
  { icon: CalendarDays, label: 'Community Events' },
  { icon: Stethoscope, label: 'Healthcare Orgs' },
]

const organizerBenefits = [
  'A compelling, evidence-informed speaker who brings both professional credentials and personal conviction to every stage.',
  'Customized presentations tailored to your audience\u2019s specific needs and demographics.',
  'Pre-event consultation to align the message with your event goals.',
  'Engaging, interactive delivery that keeps audiences riveted from start to finish.',
  'Post-event resources and follow-up support for attendees who need help.',
]

export default function SpeakingPage() {
  return (
    <>
      {/* Hero — Full-bleed image with navy overlay */}
      <section className="relative min-h-[62vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-crowd.png"
          alt="Daniel McGowan speaking to a packed auditorium"
          fill
          className="object-cover object-[center_86%] sm:object-[center_58%] lg:object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#1B2838]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-40 lg:py-48">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D5B7] mb-6">
              <CheckCircle className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              Certified Motivational Speaker
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-white leading-[1.05] mb-6 max-w-4xl">
              Inspiring Audiences to Overcome Adversity and{' '}
              <span className="text-[#C4572A] italic">Take Action</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-[#A8B4C0] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              Daniel McGowan brings professional credentials and personal
              conviction to every stage — empowering communities across New
              Jersey and beyond to embrace recovery and purpose.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C4572A] text-white font-semibold px-8 py-4 rounded-md text-lg transition-all duration-200 hover:bg-[#A8471F] hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book Daniel Now
              </Link>
              <a
                href="#topics"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-md text-lg border border-white/20 transition-all duration-200 hover:bg-white/10"
              >
                View Speaking Topics
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Speaking Topics — Editorial numbered grid */}
      <section id="topics" className="py-24 sm:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-20">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C4572A] mb-4">
              Speaking Topics
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838] max-w-3xl">
              Talks That Move Audiences to Action
            </h2>
            <p className="text-[#5A6B7A] text-lg leading-relaxed max-w-2xl mt-6">
              Each presentation is tailored to your event and audience. Daniel
              draws from years of professional practice, personal experience,
              and a deep commitment to lasting change.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-10 sm:gap-y-16">
            {speakingTopics.map((topic, i) => (
              <AnimatedSection key={topic.title} delay={i * 0.08}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[#C4572A] font-serif text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-[#C4572A]/30" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1B2838] mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-[#5A6B7A] leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Audiences — Clean inline grid */}
      <section className="py-24 sm:py-32 bg-[#1B2838] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D5B7] mb-4">
              Ideal Audiences
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-16">
              Who Daniel Speaks To
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {audiences.map((audience, i) => (
              <AnimatedSection key={audience.label} delay={i * 0.08}>
                <div className="text-center">
                  <audience.icon className="w-6 h-6 text-[#C4572A] mx-auto mb-3" />
                  <p className="text-[#A8B4C0] text-sm font-medium">
                    {audience.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Organizers Get — Two-column editorial */}
      <section className="py-24 sm:py-32 bg-[#F2F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden">
                <Image
                  src="/images/hope-shirt.png"
                  alt="Daniel McGowan promotional photo — Fear kills more dreams than failure ever could"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-[#E8D5B7]/10 mix-blend-multiply" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C4572A] mb-4">
                  For Event Organizers
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1B2838] mb-4 leading-[1.1]">
                  What You Get When You Book Daniel
                </h2>
                <p className="text-[#5A6B7A] leading-relaxed mb-8">
                  More than a speaker — a partner invested in making your event
                  meaningful. Every engagement includes preparation, customization,
                  and follow-through.
                </p>
                <ul className="space-y-5 mb-10">
                  {organizerBenefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C4572A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A6B7A] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#C4572A] text-white font-semibold px-8 py-4 rounded-md text-lg transition-all duration-200 hover:bg-[#A8471F] hover:-translate-y-0.5"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Daniel Now
                  </Link>
                  <span className="inline-flex items-center gap-2 text-[#5A6B7A] text-sm pt-3">
                    <Download className="w-4 h-4 text-[#C4572A]" />
                    Speaker one-sheet available on request
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials — Magazine pull quotes */}
      <section className="py-24 sm:py-32 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-20">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C4572A] mb-4">
              What Event Organizers Say
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838]">
              Proven Impact
            </h2>
          </AnimatedSection>

          <div className="space-y-16">
            {[
              {
                quote:
                  'Daniel captivated our entire student body. His message was powerful, authentic, and exactly what our community needed to hear. We have already rebooked him for next year.',
                name: 'School Administrator',
                role: 'High School Assembly',
              },
              {
                quote:
                  'Hiring Daniel was the best decision we made for our annual conference. The feedback from attendees was overwhelmingly positive — many called it the most impactful session of the event.',
                name: 'Event Director',
                role: 'Community Health Conference',
              },
            ].map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="border-l-4 border-[#C4572A] pl-6 sm:pl-12 py-2">
                  <blockquote className="font-serif text-xl sm:text-3xl md:text-4xl text-[#1B2838] leading-[1.3] italic mb-6 sm:mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-[#1B2838] font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-[#C4572A] text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ListenConnectSection />

      {/* CTA — Dark navy with dot pattern */}
      <section className="py-20 sm:py-32 md:py-40 bg-[#1B2838] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D5B7] mb-6">
              Get Started
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.1]">
              Ready to Inspire Your Audience?
            </h2>
            <p className="text-[#A8B4C0] text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your event, your audience, and how Daniel can
              deliver a talk that makes a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C4572A] text-white font-semibold px-7 py-4 sm:px-10 sm:py-5 rounded-md text-base sm:text-lg transition-all duration-200 hover:bg-[#A8471F] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C4572A]/20"
              >
                <Calendar className="w-5 h-5" />
                <span className="hidden sm:inline">Book Daniel for Your Event</span>
                <span className="sm:hidden">Book Daniel</span>
              </Link>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 sm:px-10 sm:py-5 rounded-md text-base sm:text-lg border border-white/15 transition-all duration-200 hover:bg-white/8"
              >
                <Phone className="w-5 h-5" />
                Call {SITE_CONFIG.phone}
              </a>
            </div>
            <p className="text-[#A8B4C0]/60 text-sm mt-6">
              Or email{' '}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-[#C4572A] hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
