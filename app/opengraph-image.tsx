import { ImageResponse } from 'next/og';
import { profile } from '@/content/profile';

export const alt = `${profile.name} · ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Generated at build time so the share card never drifts from the content. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#090d0b',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: '#6fe3a8' }} />
          <div style={{ color: '#8d9992', fontSize: 22, letterSpacing: 4, textTransform: 'uppercase' }}>
            {profile.title}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#e9eeea', fontSize: 116, lineHeight: 1, letterSpacing: -3 }}>
            Josiah
          </div>
          <div style={{ color: '#6fe3a8', fontSize: 116, lineHeight: 1.05, letterSpacing: -3 }}>
            Turnquist
          </div>
          <div style={{ color: '#8d9992', fontSize: 30, marginTop: 28, maxWidth: 900 }}>
            {profile.pitch}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 36,
            color: '#626d67',
            fontSize: 22,
            borderTop: '1px solid #212a25',
            paddingTop: 26,
          }}
        >
          <div>{profile.location}</div>
          <div>josiahturnquist.com</div>
        </div>
      </div>
    ),
    size,
  );
}
