import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { journalEntries, projects, services, siteConfig } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/hire', '/services', '/work', '/journal', '/blog', '/privacy', '/site-map'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : route === '/hire' ? 0.9 : route === '/privacy' ? 0.2 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const workRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  const journalRoutes = journalEntries.map((entry) => ({
    url: `${siteConfig.url}/journal/${entry.slug}`,
    lastModified: new Date(entry.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...journalRoutes, ...blogRoutes];
}
