import { ImageResponse } from 'next/og';

export const alt = 'Ariful Islam — SaaS, AI Commerce, Backend, and Connected-Product Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        color: '#E8EDF5',
        background: 'linear-gradient(135deg, #070A0F 0%, #0B1421 55%, #071B1E 100%)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ display: 'flex', width: 56, height: 56, alignItems: 'center', justifyContent: 'center', borderRadius: 16, background: '#A5F3FC', color: '#071016', fontSize: 23, fontWeight: 900 }}>AI</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 26, fontWeight: 800 }}>Ariful Islam</span>
          <span style={{ marginTop: 4, fontSize: 16, color: '#8B9AAF' }}>Software Engineer · Product Builder · Dhaka</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 980 }}>
        <span style={{ fontSize: 62, lineHeight: 1.05, letterSpacing: '-0.045em', fontWeight: 900 }}>Building SaaS, AI commerce & connected systems.</span>
        <span style={{ marginTop: 28, fontSize: 24, color: '#A5B1C3' }}>Product engineering from architecture and prototypes to production delivery.</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 18 }}>
        <span style={{ color: '#A5F3FC' }}>ariful.io</span>
        <span style={{ color: '#718096' }}>Available for selected remote projects</span>
      </div>
    </div>,
    size,
  );
}
