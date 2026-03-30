import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { getSiteUrl } from '@/lib/site'

/** Facebook / LinkedIn recommended: 1200×630 (1.91∶1) */
export const alt =
  'New Perspective Support Services — Daniel McGowan, Certified Interventionist & Motivational Speaker'

export const size = { width: 1200, height: 630 }

export const contentType = 'image/png'

const W = 1200
const H = 630

const sans =
  'ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif'

/** Logo intrinsic aspect from Navigation: 280×72 */
const LOGO_H = 64
const LOGO_W = Math.round((280 / 72) * LOGO_H)

export default async function OpenGraphImage() {
  const logoPath = join(process.cwd(), 'public/images/logo-white.png')
  let logoSrc: string | null = null
  try {
    const buf = await readFile(logoPath)
    logoSrc = `data:image/png;base64,${buf.toString('base64')}`
  } catch {
    logoSrc = null
  }

  const site = getSiteUrl()
  const host = site.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return new ImageResponse(
    (
      <div
        style={{
          width: W,
          height: H,
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#0f1923',
          backgroundImage:
            'linear-gradient(135deg, #0a1219 0%, #152030 38%, #1B2838 72%, #1e2d3f 100%)',
          position: 'relative',
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            width: 6,
            height: '100%',
            background: 'linear-gradient(180deg, #C4572A 0%, #a84522 50%, #C4572A 100%)',
            flexShrink: 0,
          }}
        />

        {/* Soft glow */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -60,
            width: 520,
            height: 520,
            background:
              'radial-gradient(circle, rgba(196,87,42,0.42) 0%, rgba(196,87,42,0.08) 45%, transparent 70%)',
          }}
        />

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 52,
            paddingRight: 56,
            paddingTop: 48,
            paddingBottom: 48,
            position: 'relative',
          }}
        >
          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element -- Satori OG render
            <img
              src={logoSrc}
              alt=""
              height={LOGO_H}
              width={LOGO_W}
              style={{
                height: LOGO_H,
                width: LOGO_W,
                objectFit: 'contain',
                objectPosition: 'left center',
                marginBottom: 28,
              }}
            />
          ) : null}

          <div
            style={{
              width: 72,
              height: 4,
              backgroundColor: '#C4572A',
              borderRadius: 2,
              marginBottom: 24,
            }}
          />

          <p
            style={{
              fontSize: 22,
              color: '#E8D5B7',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              margin: 0,
              marginBottom: 14,
              fontFamily: sans,
              fontWeight: 600,
            }}
          >
            Daniel McGowan
          </p>

          <h1
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.06,
              margin: 0,
              maxWidth: 880,
              fontFamily: sans,
              letterSpacing: '-0.025em',
            }}
          >
            New Perspective Support Services
          </h1>

          <p
            style={{
              fontSize: 26,
              color: '#C4572A',
              margin: 0,
              marginTop: 20,
              fontWeight: 600,
              fontFamily: sans,
              letterSpacing: '0.02em',
            }}
          >
            Intervention · Speaking · Family Support
          </p>

          <p
            style={{
              fontSize: 18,
              color: '#8B96A3',
              margin: 0,
              marginTop: 36,
              fontFamily: sans,
              fontWeight: 500,
            }}
          >
            Coaching, counseling & consulting for life&apos;s challenges · New Jersey
          </p>

          <div
            style={{
              position: 'absolute',
              bottom: 44,
              left: 52,
              right: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255,255,255,0.12)',
              paddingTop: 20,
            }}
          >
            <p
              style={{
                fontSize: 17,
                color: '#A8B4C0',
                margin: 0,
                fontFamily: sans,
              }}
            >
              {host}
            </p>
            <p
              style={{
                fontSize: 15,
                color: '#5A6B7A',
                margin: 0,
                fontFamily: sans,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              CADC · CI · CMS
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: W,
      height: H,
    }
  )
}
