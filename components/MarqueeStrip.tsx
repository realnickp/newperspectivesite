'use client'

export default function MarqueeStrip() {
  const items = [
    'Certified Alcohol & Drug Counselor (CADC)',
    'Certified Interventionist',
    'Certified Motivational Speaker',
    'Published Author',
    'Serving New Jersey & Beyond',
    'Coaching · Counseling · Consulting',
    'Empowering Recovery & Resilience',
  ]

  return (
    <div className="relative overflow-hidden bg-[#1B2838] py-4">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-[#A8B4C0] flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4572A] flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
