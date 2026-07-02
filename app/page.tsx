import About from '@/components/About';
import Contact from '@/components/Contact';
import Domains from '@/components/Domains';
import Hero from '@/components/Hero';
import Insights from '@/components/Insights';
import JsonLd from '@/components/JsonLd';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import ProofBar from '@/components/ProofBar';
import Services from '@/components/Services';
import { engineeringDomains, services, siteConfig } from '@/content/site';

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
      jobTitle: 'Software Engineer',
      description: siteConfig.description,
      email: `mailto:${siteConfig.email}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dhaka',
        addressCountry: 'BD',
      },
      sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
      knowsAbout: engineeringDomains.flatMap((domain) => domain.skills),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${siteConfig.url}/#service`,
      name: 'Ariful Islam Software Engineering',
      url: siteConfig.url,
      description: siteConfig.description,
      founder: { '@id': `${siteConfig.url}/#person` },
      areaServed: 'Worldwide',
      serviceType: services.map((service) => service.title),
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
      <Domains />
      <Insights />
      <Contact />
    </main>
  );
}
