import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Blog — Insights on Recovery, Intervention & Wellness',
  description:
    'Read articles by Daniel McGowan on addiction recovery, intervention strategies, motivational speaking, and family support. Expert insights from a certified counselor in NJ.',
}

const posts = [
  {
    slug: 'how-to-stage-a-successful-intervention',
    title: 'How to Stage a Successful Intervention for a Loved One',
    excerpt:
      'A step-by-step guide to planning and conducting an intervention that leads to treatment — written by a Certified Interventionist with years of experience helping NJ families.',
    date: 'March 15, 2025',
    category: 'Intervention',
  },
  {
    slug: 'what-families-need-to-know-about-addiction-recovery',
    title: 'What Families Need to Know About Addiction Recovery',
    excerpt:
      'Understanding what your loved one is going through — and what you can do to support their recovery without losing yourself in the process.',
    date: 'February 28, 2025',
    category: 'Family Support',
  },
  {
    slug: 'finding-a-motivational-speaker-for-your-next-event',
    title: 'Finding a Motivational Speaker for Your Next Event: What to Look For',
    excerpt:
      'Not all speakers are created equal. Here\'s what event organizers should look for when booking a motivational speaker — especially for topics like recovery and resilience.',
    date: 'February 10, 2025',
    category: 'Speaking',
  },
]

const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-32 bg-[#1B2838] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2838] via-[#1B2838] to-[#162230]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D5B7] mb-6">
              Blog
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.1]">
              Insights &amp;{' '}
              <span className="text-[#C4572A] italic">Resources</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[#A8B4C0] text-lg max-w-2xl mx-auto leading-relaxed">
              Expert perspectives on addiction recovery, intervention, family
              support, and building a life of purpose — by Daniel McGowan.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#FAFAF7] border-b border-[#D1CCC3] overflow-x-clip">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-5 sm:gap-8 py-5 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-sm tracking-wider uppercase whitespace-nowrap transition-colors ${
                  i === 0
                    ? 'text-[#C4572A] border-b-2 border-[#C4572A] pb-[1px] font-semibold'
                    : 'text-[#5A6B7A] hover:text-[#1B2838]'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Post List */}
      <section className="py-24 sm:py-32 bg-[#FAFAF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.12}>
              <article className="py-10 first:pt-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C4572A]">
                    {post.category}
                  </span>
                  <span className="text-[#D1CCC3]">/</span>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-[#5A6B7A]">
                    {post.date}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1B2838] leading-snug group-hover:text-[#C4572A] transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-[#5A6B7A] leading-relaxed mt-4 max-w-3xl">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-[#A8B4C0] text-sm">
                    By Daniel McGowan
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#C4572A] text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
              {i < posts.length - 1 && (
                <hr className="border-[#D1CCC3]" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-[#1B2838]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E8D5B7] mb-6">
              Get in Touch
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-white mb-4 leading-snug">
              Have a question about addiction, recovery, or intervention?
            </p>
            <p className="text-[#A8B4C0] text-lg mb-10 leading-relaxed">
              Daniel is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C4572A] text-white px-8 py-4 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-[#a84824] transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Talk to Daniel
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
