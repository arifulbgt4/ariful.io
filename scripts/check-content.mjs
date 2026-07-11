import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');
const filenames = fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.md') && filename !== 'README.md');
const requiredFields = ['title', 'description', 'date', 'category', 'tags'];
const seenTitles = new Set();
const errors = [];

for (const filename of filenames) {
  const slug = filename.replace(/\.md$/, '');
  const source = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
  let data;
  let content;
  try {
    ({ data, content } = matter(source));
  } catch (error) {
    errors.push(`${filename}: invalid frontmatter (${error instanceof Error ? error.message.split('\n')[0] : 'unknown error'}).`);
    continue;
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    errors.push(`${filename}: filename must be a lowercase hyphenated slug.`);
  }

  for (const field of requiredFields) {
    if (!data[field] || (Array.isArray(data[field]) && data[field].length === 0)) {
      errors.push(`${filename}: missing required frontmatter field "${field}".`);
    }
  }

  if (data.title && seenTitles.has(String(data.title))) {
    errors.push(`${filename}: duplicate title "${data.title}".`);
  }
  seenTitles.add(String(data.title));

  if (data.description && (String(data.description).length < 80 || String(data.description).length > 180)) {
    errors.push(`${filename}: description must be between 80 and 180 characters.`);
  }

  const normalizedDate = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
  if (data.date && !/^\d{4}-\d{2}-\d{2}$/.test(normalizedDate)) {
    errors.push(`${filename}: date must use YYYY-MM-DD.`);
  }

  if (content.trim().split(/\s+/).length < 500) {
    errors.push(`${filename}: article must contain at least 500 words.`);
  }

  if (!/^##\s+\S+/m.test(content)) {
    errors.push(`${filename}: article must include clear level-two headings for scanning and answer extraction.`);
  }

  // Optional field validation: image, imageAlt, faqs
  if (data.image !== undefined) {
    if (typeof data.image !== 'string' || !data.image.startsWith('/')) {
      errors.push(`${filename}: image must start with "/".`);
    }
    if (typeof data.imageAlt !== 'string' || data.imageAlt.trim() === '') {
      errors.push(`${filename}: imageAlt must be a non-empty descriptive string when image is present.`);
    }
  }
  if (data.imageAlt !== undefined && data.image === undefined) {
    errors.push(`${filename}: imageAlt is present but image is missing.`);
  }

  if (data.faqs !== undefined) {
    if (!Array.isArray(data.faqs)) {
      errors.push(`${filename}: faqs must be an array.`);
    } else {
      const faqQuestions = [];
      for (let i = 0; i < data.faqs.length; i++) {
        const faq = data.faqs[i];
        if (typeof faq !== 'object' || faq === null || typeof faq.question !== 'string' || faq.question.trim() === '' || typeof faq.answer !== 'string' || faq.answer.trim() === '') {
          errors.push(`${filename}: FAQ entry ${i + 1} must contain a non-empty "question" and "answer".`);
        } else {
          faqQuestions.push(faq.question);
          // Check that FAQ question appears as a Markdown heading in the article body
          if (!content.includes(`## ${faq.question}`)) {
            errors.push(`${filename}: FAQ question "${faq.question}" does not appear as a level-two heading in the article body.`);
          }
          // Check that FAQ answer appears verbatim in the article body
          if (!content.includes(faq.answer)) {
            errors.push(`${filename}: FAQ answer for "${faq.question}" does not appear verbatim in the article body.`);
          }
        }
      }
      // Check for unique FAQ questions
      const uniqueQuestions = new Set(faqQuestions);
      if (uniqueQuestions.size !== faqQuestions.length) {
        errors.push(`${filename}: FAQ questions must be unique within the post.`);
      }
    }
  }
}

if (filenames.length === 0) errors.push('No published blog posts found.');

if (errors.length > 0) {
  console.error(`Content validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`Content validation passed for ${filenames.length} blog posts.`);
