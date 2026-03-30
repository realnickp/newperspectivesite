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

/** Default inboxes when CONTACT_TO_EMAIL is unset (comma-separated overrides) */
const DEFAULT_NOTIFICATION_EMAILS = [
  'Dan@newperspectivesupportservices.com',
  'realnickpatrick@gmail.com',
] as const

const DEFAULT_FROM =
  'New Perspective Website <contact@newperspectivesupportservices.com>'

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

function getNotificationRecipients(): string[] {
  const raw = process.env.CONTACT_TO_EMAIL?.trim()
  if (!raw) {
    return [...DEFAULT_NOTIFICATION_EMAILS]
  }
  return raw
    .split(/[,;]+/)
    .map((e) => e.trim())
    .filter((e) => e.length > 0 && isValidEmail(e))
}

/** E.164-style tel: href for US numbers when possible */
function telHref(phone: string): string | null {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) {
    return `tel:+1${digits}`
  }
  if (digits.length === 11 && digits.startsWith('1')) {
    return `tel:+${digits}`
  }
  if (digits.length >= 10) {
    return `tel:+${digits}`
  }
  return null
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

    const recipients = getNotificationRecipients()
    if (recipients.length === 0) {
      console.error('No valid CONTACT_TO_EMAIL recipients')
      return NextResponse.json(
        { error: 'Contact form is not configured correctly.' },
        { status: 503 }
      )
    }

    const from = process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM

    const resend = new Resend(key)
    const inquiryLabel = INQUIRY_LABELS[inquiryType]
    const subject = `[Website lead] ${inquiryLabel} — ${name}`

    const mailtoLead = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: Your message to New Perspective Support Services`)}`
    const phoneLink = phone ? telHref(phone) : null

    const text = [
      'New lead — website contact form',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '(not provided)'}`,
      `Inquiry type: ${inquiryLabel}`,
      '',
      '--- Message ---',
      message,
      '',
      '--- Quick actions ---',
      `Email them: mailto:${email}`,
      phoneLink ? `Call them: ${phoneLink}` : 'Phone: not provided',
    ].join('\n')

    const btnStyle =
      'display:inline-block;padding:14px 22px;margin:6px 12px 6px 0;font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;font-weight:600;text-decoration:none;border-radius:6px;'
    const emailBtn = `${btnStyle}background-color:#C4572A;color:#ffffff;`
    const callBtn = `${btnStyle}background-color:#1B2838;color:#ffffff;`

    const actionRow =
      `<p style="margin:24px 0 8px;font-family:system-ui,sans-serif;font-size:14px;color:#5A6B7A;">` +
      `<strong>Reply to this email</strong> or use the buttons below (same as their address / number):` +
      `</p>` +
      `<p style="margin:0 0 28px;">` +
      `<a href="${escapeHtml(mailtoLead)}" style="${emailBtn}">Email ${escapeHtml(name.split(' ')[0] || 'lead')}</a>` +
      (phoneLink
        ? `<a href="${escapeHtml(phoneLink)}" style="${callBtn}">Call ${escapeHtml(phone || 'lead')}</a>`
        : '') +
      `</p>`

    const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:24px;background:#f5f5f2;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;padding:28px 32px;border:1px solid #e5e2db;font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#1B2838;">
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#C4572A;font-weight:600;">New website lead</p>
    <h1 style="margin:0 0 20px;font-size:22px;font-weight:700;line-height:1.25;">${escapeHtml(inquiryLabel)}</h1>

    <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.5;margin-bottom:8px;">
      <tr><td style="padding:8px 0;color:#5A6B7A;width:120px;vertical-align:top;"><strong>Name</strong></td><td style="padding:8px 0;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:8px 0;color:#5A6B7A;vertical-align:top;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${encodeURIComponent(email)}" style="color:#C4572A;font-weight:600;">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:8px 0;color:#5A6B7A;vertical-align:top;"><strong>Phone</strong></td><td style="padding:8px 0;">${
        phone
          ? phoneLink
            ? `<a href="${escapeHtml(phoneLink)}" style="color:#C4572A;font-weight:600;">${escapeHtml(phone)}</a>`
            : escapeHtml(phone)
          : '<span style="color:#8B96A3;">Not provided</span>'
      }</td></tr>
      <tr><td style="padding:8px 0;color:#5A6B7A;vertical-align:top;"><strong>Inquiry</strong></td><td style="padding:8px 0;">${escapeHtml(inquiryLabel)}</td></tr>
    </table>

    ${actionRow}

    <p style="margin:0 0 10px;font-size:13px;font-weight:600;color:#5A6B7A;text-transform:uppercase;letter-spacing:0.06em;">Their message</p>
    <div style="background:#FAFAF7;border:1px solid #E5E2DB;border-radius:6px;padding:16px 18px;font-size:15px;line-height:1.55;color:#1B2838;white-space:pre-wrap;">${escapeHtml(message)}</div>

    <p style="margin:24px 0 0;font-size:12px;color:#8B96A3;line-height:1.45;">
      Sent from the contact form on ${escapeHtml(SITE_CONFIG.name)}.<br />
      <strong>Reply</strong> in your mail app to reach the lead directly (Reply-To is set to their address).
    </p>
  </div>
</body>
</html>`

    const { error } = await resend.emails.send({
      from,
      to: recipients,
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
