import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How contact enquiry data is handled on ariful.io.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="page-shell">
      <div className="site-container max-w-3xl">
        <p className="section-kicker">Privacy</p>
        <h1 className="mt-5 text-4xl font-black text-white sm:text-6xl">A minimal privacy policy.</h1>
        <div className="prose-portfolio mt-10">
          <p>This website collects the information you choose to submit through the product brief form: your name, work email, optional company or product name, optional product URL, selected product lane, current delivery stage, budget range, timeline, and message.</p>
          <h2>How the information is used</h2>
          <p>The information is used only to evaluate and reply to your enquiry, discuss a possible engagement, and maintain necessary business correspondence. It is not sold.</p>
          <h2>Processing and retention</h2>
          <p>When configured, the form sends the enquiry through the site&apos;s email provider. The server also uses limited request metadata for in-memory abuse rate limiting and a hidden honeypot field to reject automated spam. Email and hosting providers may process the technical data needed to deliver the request. Enquiries may be retained in email records for follow-up, legal, security, and business administration.</p>
          <h2>Your choice</h2>
          <p>You can avoid the form and email directly. To request correction or deletion of enquiry information, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          <h2>Site measurement</h2>
          <p>No advertising tracker is included in the repository by default. If privacy-friendly analytics are added later, this notice must be updated before deployment.</p>
          <p><strong>Last updated:</strong> July 13, 2026.</p>
        </div>
      </div>
    </main>
  );
}
