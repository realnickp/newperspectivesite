import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1B2838',
          backgroundImage:
            'linear-gradient(160deg, #0f1923 0%, #1B2838 55%, #243347 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 112,
            height: 112,
            borderRadius: 24,
            backgroundColor: '#C4572A',
            color: '#ffffff',
            fontSize: 52,
            fontWeight: 700,
            fontFamily: 'Georgia, "Times New Roman", serif',
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          }}
        >
          NP
        </div>
      </div>
    ),
    { ...size }
  )
}
