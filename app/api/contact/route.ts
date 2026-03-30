import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { SITE_CONFIG } from '@/lib/constants'

const INQUIRY_LABELS: Record<string, string> = {
  intervention: 'Intervention',
  'family-support': 'Family Support',
  speaking: 'Speaking Inquiry',
  coaching: 'One-on-One Coaching',
  other: 'Other',
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: Request) {
  try {
    const key = process.env.RESEND_API_KEY
    if (!key) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Contact form is not configured yet.' },
        { status: 503 }
      )
    }

    const body = await req.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
    const inquiryType =
      typeof body.inquiryType === 'string' ? body.inquiryType : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''

    if (!name || name.length > 200) {
      return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
    }
    if (!email || !isValidEmail(email) || email.length > 320) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }
    if (!inquiryType || !INQUIRY_LABELS[inquiryType]) {
      return NextResponse.json(
        { error: 'Please select how Daniel can help.' },
        { status: 400 }
      )
    }
    if (!message || message.length > 8000) {
      return NextResponse.json(
        { error: 'Please include a message (under 8,000 characters).' },
        { status: 400 }
      )
    }
    if (phone.length > 50) {
      return NextResponse.json({ error: 'Phone number is too long.' }, { status: 400 })
    }

    const to = process.env.CONTACT_TO_EMAIL ?? SITE_CONFIG.email
    const from =
      process.env.CONTACT_FROM_EMAIL ??
      `New Perspective Website <onboarding@resend.dev>`

    const resend = new Resend(key)
    const inquiryLabel = INQUIRY_LABELS[inquiryType]
    const subject = `[Website] ${inquiryLabel} — ${name}`

    const text = [
      'New message from the website contact form',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '(not provided)'}`,
      `Inquiry: ${inquiryLabel}`,
      '',
      message,
    ].join('\n')

    const html = `
      <h2 style="font-family:system-ui,sans-serif;">Website contact form</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : '(not provided)'}</p>
      <p><strong>Inquiry:</strong> ${escapeHtml(inquiryLabel)}</p>
      <hr />
      <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif;font-size:14px">${escapeHtml(message)}</pre>
    `

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        {
          error:
            'Could not send your message. Please call or email Daniel directly.',
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Contact API error:', e)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again in a moment.' },
      { status: 500 }
    )
  }
}
