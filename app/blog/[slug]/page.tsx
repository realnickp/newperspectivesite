import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Phone } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { SITE_CONFIG } from '@/lib/constants'

const posts: Record<
  string,
  {
    title: string
    date: string
    category: string
    content: string
    metaDescription: string
  }
> = {
  'how-to-stage-a-successful-intervention': {
    title: 'How to Stage a Successful Intervention for a Loved One',
    date: 'March 15, 2025',
    category: 'Intervention',
    metaDescription:
      'Learn how to plan and conduct a successful addiction intervention. Step-by-step guide from Certified Interventionist Daniel McGowan, serving New Jersey families.',
    content: `
When a loved one is struggling with addiction, the idea of staging an intervention can feel overwhelming — even frightening. You want to help, but you're afraid of saying the wrong thing, pushing them away, or making things worse.

As a Certified Interventionist who has guided hundreds of families through this process, I want you to know: a well-planned intervention can be the turning point that saves a life.

## What Is an Intervention?

An intervention is a structured, compassionate conversation where family members and close friends come together to express how a person's addiction has affected them — and to offer a clear path toward treatment. It's not about confrontation or ultimatums. It's about love, honesty, and hope.

## When Is It Time for an Intervention?

You may need to consider an intervention when:

- Your loved one's substance use is escalating despite consequences
- They've refused to seek help on their own
- Their behavior is putting themselves or others at risk
- The family is in crisis and doesn't know what to do next

## The Four Stages of a Professional Intervention

### 1. Assessment and Preparation
Before anything happens, I meet with the family to understand the situation, assess the individual's needs, and prepare everyone involved. This includes selecting the right treatment options in advance.

### 2. The Intervention Meeting
Using a compassionate, evidence-based approach, each participant shares their concerns in a structured, non-judgmental way. The goal is to help the individual see the impact of their addiction and accept help.

### 3. Treatment Transition
If the individual agrees to treatment — and in my experience, the vast majority do — we facilitate an immediate transition to the appropriate level of care, whether that's residential, outpatient, or a combination.

### 4. Aftercare and Family Support
Recovery doesn't end when treatment begins. I provide ongoing support for both the individual and the family, including aftercare planning and family counseling resources.

## The Most Important Thing to Remember

You are not alone in this. Families often wait too long because they don't know where to turn. If you're reading this article, you've already taken the first step.

I'm here to help you take the next one.
    `,
  },
  'what-families-need-to-know-about-addiction-recovery': {
    title: 'What Families Need to Know About Addiction Recovery',
    date: 'February 28, 2025',
    category: 'Family Support',
    metaDescription:
      'Understanding addiction recovery from a family perspective. Expert guidance from Certified Alcohol & Drug Counselor Daniel McGowan on supporting a loved one in NJ.',
    content: `
When someone you love enters recovery, your life changes too. Suddenly, you're navigating a world of treatment programs, therapy sessions, and emotional ups and downs — and nobody gave you a roadmap.

As a Certified Alcohol and Drug Counselor, I work with families every day who are going through exactly what you're experiencing. Here's what I want every family member to know.

## Addiction Is a Disease, Not a Choice

The first and most important thing to understand is that addiction is a medical condition. Your loved one didn't choose to become addicted any more than someone chooses to develop diabetes. Understanding this removes blame and opens the door to compassion.

## Recovery Is Not Linear

There will be good days and bad days. There may be setbacks. This doesn't mean recovery has failed — it means recovery is happening. Progress isn't always visible, but it's always possible.

## You Need Support Too

Family members often neglect their own well-being while focusing entirely on their loved one. This is unsustainable and ultimately unhelpful. You cannot pour from an empty cup.

Consider:
- Joining a family support group
- Working with a counselor who specializes in family dynamics
- Learning communication techniques that reduce conflict
- Setting healthy boundaries — with love

## What You Can Do Right Now

1. **Educate yourself** about addiction and recovery
2. **Communicate openly** without judgment or accusation
3. **Set boundaries** that protect your own health and safety
4. **Seek professional guidance** — you don't have to figure this out alone
5. **Be patient** with the process and with yourself

## You Are Not Alone

At New Perspective Support Services, we offer comprehensive family support programs designed to help you heal alongside your loved one. Together, we can navigate this journey with compassion and strength.
    `,
  },
  'finding-a-motivational-speaker-for-your-next-event': {
    title:
      'Finding a Motivational Speaker for Your Next Event: What to Look For',
    date: 'February 10, 2025',
    category: 'Speaking',
    metaDescription:
      'How to choose the right motivational speaker for your event. Tips from Certified Motivational Speaker Daniel McGowan on finding speakers who deliver real impact.',
    content: `
Whether you're organizing a corporate wellness event, a school assembly, a community gathering, or a healthcare conference, the right motivational speaker can transform your event from good to unforgettable.

But how do you find someone who will truly connect with your audience — not just fill a time slot? Here's what to look for.

## 1. Authenticity Over Performance

The best speakers aren't performers — they're people who have lived their message. Look for someone who speaks from genuine experience, not just rehearsed lines. Your audience can tell the difference.

## 2. Relevant Credentials

If you're booking a speaker for a topic like addiction recovery, mental health, or substance abuse prevention, their credentials matter. Look for:
- Professional certifications (CADC, Certified Interventionist, etc.)
- Relevant work experience
- A track record of speaking on the topic

## 3. Customization

A great speaker doesn't deliver the same talk to every audience. They take the time to understand your event's goals, your audience's demographics, and the specific outcomes you're hoping for.

## 4. Engagement, Not Just Inspiration

Inspiration fades. Engagement creates change. Look for a speaker who doesn't just motivate people in the moment but gives them practical tools and resources to take action afterward.

## 5. Post-Event Support

The best speakers don't disappear after the applause. They provide follow-up resources, connect attendees with support services, and make themselves available for questions.

## What Sets Daniel McGowan Apart

As a Certified Motivational Speaker, Certified Interventionist, and Certified Alcohol and Drug Counselor, I bring a unique combination of professional expertise and personal conviction to every event.

I don't just talk about recovery and resilience — I've dedicated my career to it. And I customize every presentation to ensure maximum impact for your specific audience.

## Ready to Book?

If you're looking for a speaker who will move your audience to action, I'd love to talk. Let's discuss your event and how I can help make it exceptional.
    `,
  },
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 230))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.metaDescription,
  }
}

function renderContent(content: string) {
  return content.split('\n\n').map((block, i) => {
    const trimmed = block.trim()
    if (!trimmed) return null

    if (trimmed.startsWith('## ')) {
      return (
        <h2
          key={i}
          className="font-serif text-2xl sm:text-3xl text-[#1B2838] mt-16 mb-5"
        >
          {trimmed.replace('## ', '')}
        </h2>
      )
    }

    if (trimmed.startsWith('### ')) {
      return (
        <h3
          key={i}
          className="font-serif text-xl sm:text-2xl text-[#C4572A] mt-10 mb-4"
        >
          {trimmed.replace('### ', '')}
        </h3>
      )
    }

    if (trimmed.startsWith('- ')) {
      return (
        <ul key={i} className="space-y-3 my-6 pl-1">
          {trimmed.split('\n').map((line, j) => (
            <li
              key={j}
              className="text-[#5A6B7A] text-lg leading-relaxed flex items-start gap-3"
            >
              <span className="text-[#C4572A] mt-2 text-[8px] flex-shrink-0">&#9679;</span>
              <span>{line.replace(/^- /, '')}</span>
            </li>
          ))}
        </ul>
      )
    }

    if (/^\d+\./.test(trimmed)) {
      return (
        <ol key={i} className="space-y-3 my-6 pl-1 counter-reset-custom">
          {trimmed.split('\n').map((line, j) => {
            const text = line.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')
            return (
              <li
                key={j}
                className="text-[#5A6B7A] text-lg leading-relaxed flex items-start gap-3"
              >
                <span className="text-[#C4572A] font-serif font-bold text-lg flex-shrink-0 w-6">
                  {j + 1}.
                </span>
                <span>{text}</span>
              </li>
            )
          })}
        </ol>
      )
    }

    return (
      <p
        key={i}
        className="text-[#5A6B7A] text-lg leading-[1.85] my-5"
      >
        {trimmed}
      </p>
    )
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return (
      <section className="pt-32 pb-20 bg-[#FAFAF7]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1B2838] mb-6">
            Post Not Found
          </h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#C4572A] hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  const readingTime = estimateReadingTime(post.content)

  const otherPosts = Object.entries(posts)
    .filter(([s]) => s !== slug)
    .slice(0, 2)

  return (
    <>
      {/* ── Hero Header ── */}
      <section className="bg-[#1B2838] pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#A8B4C0] hover:text-white transition-colors text-sm mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-[#E8D5B7] uppercase tracking-wider text-sm font-medium mb-5">
              {post.category}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-8">
              {post.title}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#A8B4C0] text-sm">
              <span>Daniel McGowan</span>
              <span className="text-[#A8B4C0]/40">&middot;</span>
              <span>{post.date}</span>
              <span className="text-[#A8B4C0]/40">&middot;</span>
              <span>{readingTime} min read</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="bg-[#FAFAF7] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.1}>
            <div>{renderContent(post.content)}</div>
          </AnimatedSection>

          {/* ── Author Bio ── */}
          <AnimatedSection delay={0.15}>
            <hr className="border-[#1B2838]/10 mt-16 mb-10" />
            <div>
              <p className="text-[#1B2838] font-serif text-xl font-bold mb-1">
                Daniel McGowan
              </p>
              <p className="text-[#C4572A] text-sm font-medium tracking-wide mb-3">
                CADC &middot; Certified Interventionist &middot; Motivational Speaker
              </p>
              <p className="text-[#5A6B7A] text-base leading-relaxed">
                Daniel McGowan is the founder of New Perspective Support Services,
                helping individuals and families overcome addiction through
                professional intervention, coaching, and speaking.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </article>

      {/* ── Related Posts ── */}
      {otherPosts.length > 0 && (
        <section className="bg-[#F2F0EB] py-24 sm:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2838] mb-12">
                Continue Reading
              </h2>
            </AnimatedSection>

            <div>
              {otherPosts.map(([otherSlug, otherPost], idx) => (
                <AnimatedSection key={otherSlug} delay={0.1 * (idx + 1)}>
                  <Link
                    href={`/blog/${otherSlug}`}
                    className="group block"
                  >
                    {idx > 0 && (
                      <hr className="border-[#1B2838]/10 mb-8" />
                    )}
                    <p className="text-[#C4572A] uppercase tracking-wider text-xs font-medium mb-2">
                      {otherPost.category}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1B2838] group-hover:text-[#C4572A] transition-colors leading-snug mb-2">
                      {otherPost.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[#C4572A] text-sm font-medium group-hover:gap-3 transition-all">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                  {idx < otherPosts.length - 1 && (
                    <div className="mt-8" />
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Section ── */}
      <section className="bg-[#1B2838] py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[#E8D5B7] uppercase tracking-wider text-sm font-medium mb-5">
              Take the Next Step
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6">
              Ready to talk?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-[#A8B4C0] text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Schedule a free 20-minute consultation — no pressure, no commitment.
              Daniel is here to listen and help you find the right path forward.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C4572A] hover:bg-[#a8451f] text-white px-8 py-4 rounded-lg font-medium transition-colors text-base"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Call
              </Link>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-medium transition-colors text-base"
              >
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
