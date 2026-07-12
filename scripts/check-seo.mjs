import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const appDirectory = path.join(process.cwd(), 'app');
const errors = [];
let profilePageCount = 0;

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
      const label = `${path.relative(process.cwd(), filename)}:${location.line + 1}`;
      const mainEntity = getProperty(node, 'mainEntity');

      if (!mainEntity || !ts.isPropertyAssignment(mainEntity) || !ts.isObjectLiteralExpression(mainEntity.initializer)) {
        errors.push(`${label}: ProfilePage.mainEntity must be an inline Person or Organization object.`);
      } else {
        const entityType = getStringValue(getProperty(mainEntity.initializer, '@type'));
        if (entityType !== 'Person' && entityType !== 'Organization') {
          errors.push(`${label}: ProfilePage.mainEntity must explicitly declare @type Person or Organization.`);
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

if (errors.length > 0) {
  console.error(`SEO validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`SEO ProfilePage source guard passed for ${profilePageCount} inline documents.`);
