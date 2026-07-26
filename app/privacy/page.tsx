import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How contact enquiries, consultation bookings, and anonymous site measurements are handled on ariful.io.',
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
          <h2>Free consultation booking</h2>
          <p>The optional 30-minute consultation uses Calendly. The inline scheduler is not loaded until you choose to view available times. Calendly collects your name, email, selected date and time, timezone, and the technical information needed to provide and protect its scheduling service. The event does not request custom project details or allow additional guests; use the separate project brief or direct email when context is useful.</p>
          <p>Calendly processes the booking and shares the necessary meeting details with the connected calendar and Google Meet. Its cookie banner remains available in the scheduler. You can review the <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noreferrer">Calendly Privacy Notice</a> or use the external booking link instead of the inline frame.</p>
          <h2>How the information is used</h2>
          <p>The information is used only to evaluate and reply to your enquiry, arrange and conduct a consultation, discuss a possible engagement, and maintain necessary business correspondence. It is not sold.</p>
          <h2>Processing and retention</h2>
          <p>When configured, the form sends the enquiry through the site&apos;s email provider. The server also uses limited request metadata for in-memory abuse rate limiting and a hidden honeypot field to reject automated spam. Email and hosting providers may process the technical data needed to deliver the request. Calendly and the connected calendar and video-meeting providers process consultation data needed to schedule, notify, reschedule, cancel, and host the meeting. Enquiries and booking records may be retained for follow-up, legal, security, and business administration under the relevant provider settings.</p>
          <h2>Your choice</h2>
          <p>The consultation and project brief are optional. You can avoid the inline scheduler, open Calendly directly, use the project brief, or email directly. To request correction or deletion of enquiry or consultation information controlled by Ariful, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          <h2>Site measurement</h2>
          <p>Ariful.io uses Vercel Web Analytics for aggregated page-view and visitor trends and Vercel Speed Insights for anonymous real-user performance and Core Web Vitals measurements. These tools are used to understand which public routes are useful and where the site experience needs improvement; they are not advertising trackers.</p>
          <p>Vercel Web Analytics does not use third-party cookies. Its documented data points may include a timestamp, public URL and dynamic route, referrer, filtered query parameters, approximate geolocation, browser, operating system, and device type. It identifies a short-lived visitor session from a request-derived hash that is discarded after 24 hours, and does not associate the recorded page view with an identifiable visitor or IP address. Speed Insights may record the public route and URL, network speed, browser, device type, operating system, country, and Web Vital measurement without reconstructing a visitor&apos;s browsing session.</p>
          <p>Names, email addresses, project-brief content, meeting details, and other personal or confidential information must not be placed in page URLs, query parameters, or analytics events. The site currently sends automatic page views and performance measurements only; it does not send consultation bookings, contact-form content, or custom conversion events to Vercel Analytics. Review the <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noreferrer">Vercel Web Analytics privacy documentation</a> and <a href="https://vercel.com/docs/speed-insights/privacy-policy" target="_blank" rel="noreferrer">Vercel Speed Insights privacy documentation</a> for provider details.</p>
          <p>The Calendly link may use fixed, non-personal campaign tags to identify ariful.io as the booking source. Calendly&apos;s own cookie choices remain available in its scheduler and are separate from Vercel site measurement.</p>
          <p><strong>Last updated:</strong> July 27, 2026.</p>
        </div>
      </div>
    </main>
  );
}
