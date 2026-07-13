import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const appDirectory = path.join(process.cwd(), 'app');
const errors = [];
let profilePageCount = 0;
const profilePageFiles = new Set();
const requiredProfilePageFiles = ['app/page.tsx', 'app/hire/page.tsx'];

function listTsxFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listTsxFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.tsx') ? [entryPath] : [];
  });
}

function getPropertyName(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteralLike(name)) return name.text;
  return undefined;
}

function getProperty(object, propertyName) {
  return object.properties.find(
    (property) => ts.isPropertyAssignment(property) && getPropertyName(property.name) === propertyName,
  );
}

function getStringValue(property) {
  return property && ts.isPropertyAssignment(property) && ts.isStringLiteralLike(property.initializer)
    ? property.initializer.text
    : undefined;
}

function hasExplicitEntityName(object) {
  const name = getProperty(object, 'name');
  if (!name || !ts.isPropertyAssignment(name)) return false;
  if (ts.isIdentifier(name.initializer) && name.initializer.text === 'undefined') return false;
  if (ts.isStringLiteralLike(name.initializer) && name.initializer.text.trim() === '') return false;
  return true;
}

for (const filename of listTsxFiles(appDirectory)) {
  const source = fs.readFileSync(filename, 'utf8');
  const sourceFile = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  function visit(node) {
    if (ts.isObjectLiteralExpression(node) && getStringValue(getProperty(node, '@type')) === 'ProfilePage') {
      profilePageCount += 1;
      const location = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
      const relativeFilename = path.relative(process.cwd(), filename);
      const label = `${relativeFilename}:${location.line + 1}`;
      profilePageFiles.add(relativeFilename);
      const mainEntity = getProperty(node, 'mainEntity');

      if (!mainEntity || !ts.isPropertyAssignment(mainEntity) || !ts.isObjectLiteralExpression(mainEntity.initializer)) {
        errors.push(`${label}: ProfilePage.mainEntity must be an inline Person object.`);
      } else {
        const entityType = getStringValue(getProperty(mainEntity.initializer, '@type'));
        if (entityType !== 'Person') {
          errors.push(`${label}: ProfilePage.mainEntity must explicitly declare @type Person.`);
        }
        if (!hasExplicitEntityName(mainEntity.initializer)) {
          errors.push(`${label}: ProfilePage.mainEntity must include an explicit, non-empty entity name expression.`);
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

if (profilePageCount === 0) {
  errors.push('No ProfilePage structured data found under app/.');
}

for (const filename of requiredProfilePageFiles) {
  if (!profilePageFiles.has(filename)) {
    errors.push(`${filename}: required inline ProfilePage structured data is missing.`);
  }
}

const resumePage = path.join(appDirectory, 'resume', 'page.tsx');
if (fs.existsSync(resumePage)) {
  errors.push('app/resume/page.tsx: /resume must remain a redirect-only legacy route.');
}

for (const filename of ['app/sitemap.ts', 'app/site-map/page.tsx']) {
  const source = fs.readFileSync(path.join(process.cwd(), filename), 'utf8');
  if (/['"]\/resume['"]/.test(source)) {
    errors.push(`${filename}: redirected /resume must not be advertised as an indexable destination.`);
  }
}

const nextConfigSource = fs.readFileSync(path.join(process.cwd(), 'next.config.ts'), 'utf8');
for (const marker of ["source: '/resume'", "destination: '/hire'", 'permanent: true']) {
  if (!nextConfigSource.includes(marker)) {
    errors.push(`next.config.ts: missing legacy route contract ${marker}.`);
  }
}

for (const filename of ['app/layout.tsx', 'app/manifest.ts', 'app/opengraph-image.tsx']) {
  const source = fs.readFileSync(path.join(process.cwd(), filename), 'utf8');
  if (!source.includes('End-to-End Product Engineer')) {
    errors.push(`${filename}: primary End-to-End Product Engineer identity is missing.`);
  }
}

if (errors.length > 0) {
  console.error(`SEO validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(
  `SEO source guard passed for ${profilePageCount} inline ProfilePage documents, the product-engineer identity, and the /resume redirect contract.`,
);
