import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Engineer Arif — Deep-Tech Product Engineer | AI Systems & Robotics',
  description:
    'Building intelligent software, AI-powered systems, and robotics prototypes that connect the digital and physical world. Deep-tech product engineering from Bangladesh.',
  keywords: [
    'Deep-Tech Product Engineer',
    'AI Systems Builder',
    'Robotics Prototypes',
    'Embedded Systems',
    'IoT Engineering',
    'Software Architecture',
    'Underwater Robotics',
    'ESP32',
    'SaaS Platforms',
  ],
  authors: [{ name: 'Ariful Islam' }],
  openGraph: {
    title: 'Engineer Arif — Deep-Tech Product Engineer',
    description:
      'Building intelligent software, AI-powered systems, and robotics prototypes.',
    url: 'https://engineerarif.dev',
    siteName: 'Engineer Arif',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineer Arif — Deep-Tech Product Engineer',
    description:
      'Building intelligent software, AI-powered systems, and robotics prototypes.',
  },
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#06080D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
