import type { Metadata } from 'next';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
