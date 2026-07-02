import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        background: '#A5F3FC',
        color: '#071016',
        fontSize: 15,
        fontWeight: 900,
      }}
    >
      AI
    </div>,
    size,
  );
}
