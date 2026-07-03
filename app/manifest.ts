import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ariful Islam — Software Engineer',
    short_name: 'Ariful Islam',
    description: 'Software and product engineering for SaaS, AI commerce, backend systems, automation, and connected products.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070A0F',
    theme_color: '#070A0F',
    icons: [{ src: '/icon', sizes: '32x32', type: 'image/png' }],
  };
}
