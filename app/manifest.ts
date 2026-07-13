import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ariful Islam — End-to-End Product Engineer',
    short_name: 'Ariful Islam',
    description: 'End-to-end product engineering for software, AI-enabled, and connected/IoT products—from discovery through launch and handover.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070A0F',
    theme_color: '#070A0F',
    icons: [{ src: '/icon', sizes: '32x32', type: 'image/png' }],
  };
}
