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
}

if (filenames.length === 0) errors.push('No published blog posts found.');

if (errors.length > 0) {
  console.error(`Content validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`Content validation passed for ${filenames.length} blog posts.`);
