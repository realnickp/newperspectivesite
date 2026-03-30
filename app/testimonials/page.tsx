import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what clients, families, and event organizers say about working with Daniel McGowan — Certified Interventionist and Motivational Speaker in NJ.',
}

const testimonials = [
  {
    quote:
      'Daniel helped our family navigate the most difficult time of our lives. His compassion and expertise gave us the tools we needed to support our son through recovery. We are forever grateful.',
    name: 'Family Member',
    role: 'Intervention Client',
    /* PLACEHOLDER: Replace with real client name and testimonial */
  },
  {
    quote:
      'One of the most powerful speakers I have ever heard. Daniel has a gift for connecting with audiences and inspiring real change. Our students were moved to tears — and more importantly, moved to action.',
    name: 'Event Organizer',
    role: 'School Assembly',
  },
  {
    quote:
      'Working with Daniel changed my life. He helped me see a path forward when I thought there was none. His coaching gave me the tools and accountability I needed to stay on track.',
    name: 'Coaching Client',
    role: 'Recovery Journey',
  },
  {
    quote:
      'We hired Daniel to speak at our company wellness event. The feedback was unanimous — his message was powerful, authentic, and deeply relevant. Several employees sought help after his talk.',
    name: 'HR Director',
    role: 'Corporate Wellness Event',
  },
  {
    quote:
      'As a parent, I felt helpless watching my daughter struggle. Daniel guided us through the intervention process with incredible care and professionalism. He gave us our family back.',
    name: 'Parent',
    role: 'Intervention Client',
  },
  {
    quote:
      'Daniel does not just talk about recovery — he lives it. His authenticity is what makes him so effective as a speaker and as a counselor. I recommend him without hesitation.',
    name: 'Healthcare Professional',
    role: 'Referral Partner',
  },
]

const galleryImages = [
  {
    src: '/images/speaking-closeup.png',
    alt: 'Daniel McGowan delivering a keynote address',
    className: 'col-span-1 row-span-2',
  },
  {
    src: '/images/speaking-energy.png',
    alt: 'Daniel McGowan speaking at a community event',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/images/hero-crowd.png',
    alt: 'Daniel McGowan engaging with an audience',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/images/speaking-outdoor.png',
    alt: 'Daniel McGowan on stage at a speaking engagement',
    className: 'col-span-1 row-span-2',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* ===== HERO — Dark navy ===== */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-32 bg-[#1B2838] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D5B7] mb-6">
              Testimonials
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.1]">
              Lives{' '}
              <span className="text-[#C4572A] italic">Transformed</span>
            </h1>
            <p className="text-[#A8B4C0] text-lg max-w-2xl mx-auto leading-relaxed">
              Hear from the individuals, families, and organizations whose
              lives have been changed through working with Daniel.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TESTIMONIALS — Editorial pull-quotes ===== */}
      <section className="py-24 sm:py-32 bg-[#FAFAF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-20">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C4572A] mb-4">
              In Their Words
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838]">
              What People Say
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={i} delay={(i % 3) * 0.1}>
                <div className={`py-12 ${i < testimonials.length - 1 ? 'border-b border-[#D1CCC3]' : ''}`}>
                  <div className="border-l-[3px] border-[#C4572A] pl-5 sm:pl-12">
                    <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl text-[#1B2838] italic leading-[1.4] mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="h-px w-8 bg-[#C4572A]/40" />
                      <div>
                        <p className="text-[#1B2838] font-semibold text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-[#5A6B7A] text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHOTO GALLERY ===== */}
      <section className="py-24 sm:py-32 bg-[#F2F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C4572A] mb-4">
              In Action
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838]">
              Events &amp;{' '}
              <span className="text-[#C4572A]">Speaking</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[240px] gap-4">
            {galleryImages.map((image, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className={image.className}>
                <div className="relative w-full h-full rounded-sm overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Dark navy, matches homepage ===== */}
      <section className="py-20 sm:py-32 md:py-40 bg-[#1B2838] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.1]">
              Ready to Experience the{' '}
              <span className="text-[#C4572A]">Difference?</span>
            </h2>
            <p className="text-[#A8B4C0] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Join the individuals, families, and organizations whose lives have
              been changed through working with Daniel.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C4572A] text-white font-semibold px-7 py-4 sm:px-10 sm:py-5 rounded-md text-base sm:text-lg transition-all duration-200 hover:bg-[#A8471F] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C4572A]/20"
            >
              <Calendar className="w-5 h-5" />
              <span className="hidden sm:inline">Schedule a Free Consultation</span>
              <span className="sm:hidden">Free Consultation</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
