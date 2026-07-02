import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/work/muistory-design-system',
        destination: '/work/ai-dropshipping-commerce-platform',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
