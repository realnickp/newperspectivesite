import { ImageResponse } from 'next/og'

/** Facebook / LinkedIn recommended: 1200×630 (1.91∶1) */
export const alt =
  'New Perspective Support Services — Daniel McGowan, Certified Interventionist & Motivational Speaker'

export const size = { width: 1200, height: 630 }

export const contentType = 'image/png'

const W = 1200
const H = 630

const sans =
  'ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: W,
          height: H,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#1B2838',
          backgroundImage:
            'linear-gradient(145deg, #0f1923 0%, #1B2838 45%, #243347 100%)',
          paddingLeft: 64,
          paddingRight: 64,
          paddingTop: 56,
          paddingBottom: 56,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 400,
            height: 400,
            background:
              'radial-gradient(circle, rgba(196,87,42,0.38) 0%, transparent 68%)',
          }}
        />
        <p
          style={{
            fontSize: 24,
            color: '#E8D5B7',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            margin: 0,
            marginBottom: 16,
            fontFamily: sans,
            fontWeight: 600,
          }}
        >
          Daniel McGowan
        </p>
        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.05,
            margin: 0,
            maxWidth: 920,
            fontFamily: sans,
            letterSpacing: '-0.02em',
          }}
        >
          New Perspective Support Services
        </h1>
        <p
          style={{
            fontSize: 28,
            color: '#C4572A',
            margin: 0,
            marginTop: 22,
            fontWeight: 600,
            fontFamily: sans,
          }}
        >
          Intervention · Speaking · Family Support
        </p>
        <p
          style={{
            position: 'absolute',
            bottom: 48,
            left: 64,
            fontSize: 20,
            color: '#A8B4C0',
            margin: 0,
            fontFamily: sans,
          }}
        >
          New Jersey · newperspectivesupportservices.com
        </p>
      </div>
    ),
    {
      width: W,
      height: H,
    }
  )
}
