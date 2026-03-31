import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BookOpen,
  ArrowRight,
  ShoppingCart,
  Star,
  Quote,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: "New Perspectives — A Guide to Achieving Inner Peace in Recovery",
  description:
    "Read Daniel McGowan's book 'New Perspectives: A Guide to Achieving Inner Peace in Recovery.' Order your copy on Amazon today.",
}

const AMAZON_URL = 'https://a.co/d/0bA5DvaY'

const reasons = [
  {
    num: '01',
    title: 'Real Stories, Real Hope',
    desc: 'Raw, honest accounts of transformation that prove recovery is possible — no matter how far gone you feel.',
  },
  {
    num: '02',
    title: 'Practical Strategies',
    desc: 'Evidence-based tools and exercises you can use immediately to begin building a healthier, more purposeful life.',
  },
  {
    num: '03',
    title: 'For Families Too',
    desc: 'Guidance for loved ones navigating the complex emotional landscape of supporting someone in recovery.',
  },
]

const reviews = [
  {
    quote:
      'I had a feeling this book would serve a purpose even if you\'re not in recovery… but it superseded my expectations. It is raw and inspiring. If you take even one concept from this book, you\'ll be better for it.',
    name: 'Felicia Tilton',
    badge: 'Verified Purchase',
  },
  {
    quote:
      'Regardless of personal circumstances, anyone who reads the book will come away better informed, more thoughtful, and better prepared to understand both recovery and the process of sustainable personal change.',
    name: 'Don',
    badge: 'Verified Purchase',
  },
  {
    quote:
      'For anyone that has been touched by the disease of addiction this book grabs you from the very start. I expected it to be similar to all the addiction/self help books I\'ve read. I was mistaken. Thank you Dan!',
    name: 'Gregory',
    badge: 'Verified Purchase',
  },
  {
    quote:
      'This book really leaves you with a sense of hope and the motivation to keep moving forward, and shows you the path to do so. The little challenges of the week/day are my favorite! 10/10',
    name: 'Brianna',
    badge: '5-Star Review',
  },
]

export default function BookPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#1B2838] pt-28 sm:pt-32 pb-16 sm:pb-32 lg:pb-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <AnimatedSection className="flex justify-center lg:justify-end order-1 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-8 bg-[#C4572A]/10 rounded-sm blur-3xl" />
                <Image
                  src="/images/mcgowanbook.jpg"
                  alt="New Perspectives: A Guide to Achieving Inner Peace in Recovery by Daniel McGowan"
                  width={400}
                  height={600}
                  className="relative w-64 sm:w-72 md:w-80 h-auto rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.5)] rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-2 lg:order-2">
              <p className="text-[#E8D5B7] uppercase tracking-[0.2em] text-sm mb-6">
                Now Available
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-4">
                New{' '}
                <span className="text-[#C4572A] italic">Perspectives</span>
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-[#A8B4C0] italic mb-8">
                A Guide to Achieving Inner Peace in Recovery
              </p>
              <p className="text-[#A8B4C0] text-lg leading-relaxed mb-10 max-w-lg">
                Drawing from years of experience as a Certified Alcohol and Drug
                Counselor, Certified Interventionist, and Motivational Speaker,
                Daniel shares powerful insights, real stories, and practical
                strategies for anyone seeking to overcome adversity and build a
                life of meaning, purpose, and lasting recovery.
              </p>
              <div className="flex justify-center">
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C4572A] text-white font-medium rounded-sm hover:bg-[#A84522] transition-colors text-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Buy on Amazon
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip ── */}
      <section className="bg-[#F2F0EB] py-8 border-y border-[#D1CCC3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#C4572A] text-[#C4572A]"
                  />
                ))}
              </div>
              <p className="text-[#5A6B7A] text-sm sm:text-base">
                <span className="font-semibold text-[#1B2838]">
                  5.0 out of 5 stars
                </span>{' '}
                on Amazon
              </p>
              <p className="text-[#5A6B7A] text-sm sm:text-base">
                By{' '}
                <span className="font-semibold text-[#1B2838]">
                  Daniel McGowan, CADC
                </span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why This Book ── */}
      <section className="py-24 sm:py-32 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 sm:mb-20">
            <p className="text-[#C4572A] uppercase tracking-[0.2em] text-sm mb-4">
              Why This Book
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838] leading-[1.1]">
              Because recovery deserves{' '}
              <span className="text-[#C4572A] italic">more than platitudes</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {reasons.map((reason, i) => (
              <AnimatedSection key={reason.num} delay={i * 0.1}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 ${
                    i < reasons.length - 1
                      ? 'border-b border-[#D1CCC3]'
                      : ''
                  }`}
                >
                  <div className="md:col-span-1">
                    <span className="font-serif text-3xl text-[#C4572A]/40">
                      {reason.num}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1B2838]">
                      {reason.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-[#5A6B7A] text-lg leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-16 text-center">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C4572A] font-medium text-lg hover:gap-4 transition-all"
            >
              Get your copy today
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Excerpt / Look Inside ── */}
      <section className="relative py-20 sm:py-32 md:py-40 bg-[#1B2838] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#C4572A]/30 mx-auto mb-6 sm:mb-8" />
            <blockquote className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-[1.3] italic mb-8">
              &ldquo;The moment I realized that my story wasn&apos;t just mine
              — that it could help someone else find their way out of the
              darkness — everything changed.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#C4572A]" />
              <p className="text-[#A8B4C0] text-sm uppercase tracking-[0.15em]">
                Excerpt from Chapter 1
              </p>
              <div className="h-px w-8 bg-[#C4572A]" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-12">
            <p className="text-[#A8B4C0] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              That&apos;s why Daniel wrote this book. Not to tell you what to
              do, but to show you what&apos;s possible when you find the courage
              to see life from a new perspective.
            </p>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C4572A] text-white font-medium rounded-sm hover:bg-[#A84522] transition-colors text-lg"
            >
              <BookOpen className="w-5 h-5" />
              Read the Full Story
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What Readers Are Saying ── */}
      <section className="py-24 sm:py-32 bg-[#F2F0EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 sm:mb-20">
            <p className="text-[#C4572A] uppercase tracking-[0.2em] text-sm mb-4">
              Reader Reviews
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838]">
              Words that{' '}
              <span className="text-[#C4572A] italic">echo back</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {reviews.map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div
                  className={`py-10 ${
                    i < reviews.length - 1
                      ? 'border-b border-[#D1CCC3]'
                      : ''
                  }`}
                >
                  <div className="flex gap-6">
                    <div className="hidden sm:block flex-shrink-0 mt-1">
                      <div className="w-[3px] h-full min-h-[60px] bg-[#C4572A]/40 rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-4 h-4 fill-[#C4572A] text-[#C4572A]"
                          />
                        ))}
                      </div>
                      <blockquote className="font-serif text-xl sm:text-2xl text-[#1B2838] italic leading-relaxed mb-4">
                        &ldquo;{review.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <p className="text-[#1B2838] font-medium">
                          {review.name}
                        </p>
                        <span className="text-xs text-[#C4572A] bg-[#C4572A]/10 px-2 py-0.5 rounded-full">
                          {review.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the Author ── */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-sm">
                <Image
                  src="/images/portrait-seated.png"
                  alt="Daniel McGowan — Author"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2838]/30 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-[#E8D5B7] uppercase tracking-[0.2em] text-sm mb-4">
                About the Author
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1B2838] mb-6">
                Daniel{' '}
                <span className="text-[#C4572A] italic">McGowan</span>
              </h2>
              <p className="text-[#5A6B7A] text-lg leading-relaxed mb-4">
                Daniel McGowan is a Certified Alcohol and Drug Counselor (CADC),
                Certified Interventionist, and Certified Motivational Speaker
                based in New Jersey. Through New Perspective Support Services, he
                has helped hundreds of individuals and families navigate the
                challenges of addiction and recovery.
              </p>
              <p className="text-[#5A6B7A] text-lg leading-relaxed mb-8">
                His first book distills years of frontline experience into
                accessible, powerful guidance for anyone seeking a new
                perspective on life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#C4572A] font-medium text-lg hover:gap-4 transition-all"
                >
                  Read Daniel&apos;s Full Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Speaking Cross-Promo ── */}
      <section className="py-16 sm:py-20 bg-[#F2F0EB] border-y border-[#D1CCC3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-[#5A6B7A] text-lg text-center md:text-left">
                Daniel is also available to speak about the themes of this book
                at your next event.
              </p>
              <Link
                href="/speaking"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#1B2838]/15 text-[#1B2838] font-medium rounded-sm hover:bg-[#1B2838] hover:text-white transition-colors flex-shrink-0"
              >
                Speaking Engagements
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-20 sm:py-32 md:py-40 bg-[#1B2838] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[#E8D5B7] uppercase tracking-[0.2em] text-sm mb-6">
              Don&apos;t Wait
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
              Your new perspective{' '}
              <span className="text-[#C4572A] italic">starts here</span>
            </h2>
            <p className="text-[#A8B4C0] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you&apos;re seeking recovery for yourself or supporting
              someone you love, this book will change how you see what&apos;s
              possible.
            </p>
            <div className="flex justify-center">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:px-10 sm:py-5 bg-[#C4572A] text-white font-medium rounded-sm hover:bg-[#A84522] transition-colors text-base sm:text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy on Amazon Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
