/* eslint-disable @next/next/inline-script-id */
// Naxt
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
// Context
import ThemeContextProvider from "src/theme";
// Layouts
import DefaultLayout from "src/layouts/DefaultLayout";
// Widgets
import Footer from "src/widgets/Footer";
import { siteConfig } from "src/global/config";
import Script from "next/script";

export const metadata: Metadata = {
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SEZT2YEX07"
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-SEZT2YEX07');
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K9MSB3HN');`,
        }}
      />
      <meta
        name="google-site-verification"
        content={process.env.GOOGLE_SEARCH_VERIFICATION}
      />

      <ThemeContextProvider>
        <body suppressHydrationWarning={true}>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9MSB3HN"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          <DefaultLayout>{children}</DefaultLayout>
          <Footer />
        </body>
      </ThemeContextProvider>
      <Analytics />
    </html>
  );
}
