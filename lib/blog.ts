import 'server-only';

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
  readingTime: string;
  body: string;
  image?: string;
  imageAlt?: string;
  faqs: BlogFaq[];
};

function calculateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function readPost(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, '');
  const source = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
  const { data, content } = matter(source);

  if (!data.title || !data.description || !data.date || !data.category) {
    throw new Error(`Blog post "${filename}" is missing required frontmatter.`);
  }

  const faqs = Array.isArray(data.faqs)
    ? data.faqs
        .filter(
          (faq: unknown): faq is { question: string; answer: string } =>
            typeof faq === 'object' &&
            faq !== null &&
            typeof (faq as Record<string, unknown>).question === 'string' &&
            (faq as Record<string, unknown>).question !== '' &&
            typeof (faq as Record<string, unknown>).answer === 'string' &&
            (faq as Record<string, unknown>).answer !== '',
        )
        .map((faq) => ({ question: faq.question, answer: faq.answer }))
    : [];

  const image = typeof data.image === 'string' && data.image ? data.image : undefined;
  const imageAlt = typeof data.imageAlt === 'string' && data.imageAlt ? data.imageAlt : undefined;

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: normalizeDate(data.date),
    updated: data.updated ? normalizeDate(data.updated) : undefined,
    category: String(data.category),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: calculateReadingTime(content),
    body: content,
    image,
    imageAlt,
    faqs,
  };
}

function normalizeDate(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith('.md') && filename !== 'README.md')
    .map(readPost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const safeSlug = slug.replace(/[^a-z0-9-]/g, '');
  const filename = `${safeSlug}.md`;

  if (!safeSlug || !fs.existsSync(path.join(postsDirectory, filename))) {
    return undefined;
  }

  return readPost(filename);
}
