import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Insights from '@/components/Insights';
import JsonLd from '@/components/JsonLd';
import Process from '@/components/Process';
import ProfileSummary from '@/components/ProfileSummary';
import Projects from '@/components/Projects';
import ProofBar from '@/components/ProofBar';
import Services from '@/components/Services';
import { productLanes, profileSummary, services, siteConfig } from '@/content/site';

function absoluteUrl(href: string) {
  return href.startsWith('http') ? href : `${siteConfig.url}${href}`;
}

export default function Home() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: siteConfig.brandName,
      url: siteConfig.url,
      image: 'https://avatars.githubusercontent.com/u/22605783?v=4',
      jobTitle: 'Product Engineer',
      description: siteConfig.description,
      email: `mailto:${siteConfig.email}`,
      mainEntityOfPage: { '@id': `${siteConfig.url}/#profile-page` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dhaka',
        addressCountry: 'BD',
      },
      sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
      knowsAbout: [
        ...productLanes.map((lane) => lane.title),
        'End-to-end product development',
        'Software products',
        'AI-enabled products',
        'Connected and IoT product prototypes',
      ],
      subjectOf: profileSummary.sourceLinks.map((source) => ({
        '@type': 'WebPage',
        name: source.label,
        url: absoluteUrl(source.href),
        description: source.description,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${siteConfig.url}/#profile-page`,
      name: `${siteConfig.name} portfolio profile`,
      url: siteConfig.url,
      description: profileSummary.summary,
      inLanguage: 'en-US',
      mainEntity: {
        '@id': `${siteConfig.url}/#person`,
        '@type': 'Person',
        name: siteConfig.name,
      },
      about: { '@id': `${siteConfig.url}/#person` },
      publisher: { '@id': `${siteConfig.url}/#person` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${siteConfig.url}/#service`,
      name: 'Ariful Islam Product Engineering',
      url: siteConfig.url,
      description: siteConfig.description,
      founder: { '@id': `${siteConfig.url}/#person` },
      areaServed: 'Worldwide',
      serviceType: services.map((service) => service.title),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'End-to-end product engineering engagements',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.summary,
            url: `${siteConfig.url}/services/${service.slug}`,
          },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      name: siteConfig.brandName,
      url: siteConfig.url,
      inLanguage: 'en-US',
      publisher: { '@id': `${siteConfig.url}/#person` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${siteConfig.url}/#profile-faq`,
      name: 'Ariful Islam profile FAQ',
      url: `${siteConfig.url}/#quick-facts`,
      mainEntity: profileSummary.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${siteConfig.url}/#source-links`,
      name: 'Public source links for Ariful Islam',
      itemListElement: profileSummary.sourceLinks.map((source, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: source.label,
        description: source.description,
        url: absoluteUrl(source.href),
      })),
    },
  ];

  return (
    <main id="main-content">
      <JsonLd data={structuredData} />
      <Hero />
      <ProofBar />
      <Services />
      <Projects />
      <Process />
      <About />
      <ProfileSummary />
      <Insights />
      <Contact />
    </main>
  );
}
