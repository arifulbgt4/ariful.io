// Naxt
import { Analytics } from "@vercel/analytics/react";
// Context
import ThemeContextProvider from "src/theme";
// Layouts
import DefaultLayout from "src/layouts/DefaultLayout";
// Widgets
import Footer from "src/widgets/Footer";
import { siteConfig } from "src/global/config";

export const metadata = {
  viewport: "initial-scale=1, width=device-width",
  title: { default: siteConfig.name, template: `%s - ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.creator,
  manifest: `${siteConfig.url}manifest.json`,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ArifulI60735491",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body suppressHydrationWarning={true}>
          <DefaultLayout>{children}</DefaultLayout>
          <Footer />
        </body>
      </ThemeContextProvider>
      <Analytics />
    </html>
  );
}
