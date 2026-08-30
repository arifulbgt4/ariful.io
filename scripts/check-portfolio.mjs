import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const rootDirectory = process.cwd();
const siteDataPath = path.join(rootDirectory, 'content', 'site.ts');
const genericWorkTemplatePath = path.join(rootDirectory, 'app', 'work', '[slug]', 'page.tsx');
const requiredCoreFields = [
  'targetUsers',
  'buyerOutcome',
  'role',
  'maturity',
  'lifecycle',
  'constraints',
  'evidence',
  'systemMap',
  'caseStudySections',
  'clientApplications',
];
const requiredMailServerFields = ['seo', 'benefits', 'faqs'];
const forbiddenProjectFields = new Set(['flagship', 'featured']);
const codeExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs']);
const errors = [];

function relativePath(filePath) {
  return path.relative(rootDirectory, filePath) || path.basename(filePath);
}

function sourceFileFor(filePath, source) {
  const extension = path.extname(filePath);
  const scriptKind = extension === '.tsx' || extension === '.jsx' ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  return ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true, scriptKind);
}

function locationFor(sourceFile, node) {
  const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
  return `${relativePath(sourceFile.fileName)}:${line + 1}:${character + 1}`;
}

function addNodeError(sourceFile, node, message) {
  errors.push(`${locationFor(sourceFile, node)} ${message}`);
}

function unwrapExpression(node) {
  let current = node;

  while (
    ts.isParenthesizedExpression(current)
    || ts.isAsExpression(current)
    || ts.isSatisfiesExpression(current)
    || ts.isTypeAssertionExpression(current)
  ) {
    current = current.expression;
  }

  return current;
}

function propertyName(property) {
  if (!property.name) return undefined;
  if (ts.isIdentifier(property.name) || ts.isStringLiteralLike(property.name) || ts.isNumericLiteral(property.name)) {
    return property.name.text;
  }
  return undefined;
}

function propertiesByName(sourceFile, objectLiteral, projectLabel) {
  const properties = new Map();

  for (const property of objectLiteral.properties) {
    if (ts.isSpreadAssignment(property)) {
      addNodeError(
        sourceFile,
        property,
        `${projectLabel} must declare its fields directly; spread properties cannot be validated statically.`,
      );
      continue;
    }

    const name = propertyName(property);
    if (!name) {
      addNodeError(sourceFile, property, `${projectLabel} uses a computed field name that cannot be validated statically.`);
      continue;
    }

    if (properties.has(name)) {
      addNodeError(sourceFile, property, `${projectLabel} declares duplicate field "${name}".`);
    }
    properties.set(name, property);
  }

  return properties;
}

function staticStringValue(sourceFile, property, fieldName, projectLabel) {
  if (!property || !ts.isPropertyAssignment(property)) {
    errors.push(`${relativePath(sourceFile.fileName)} ${projectLabel} must declare "${fieldName}" as a static string.`);
    return undefined;
  }

  const value = unwrapExpression(property.initializer);
  if (!ts.isStringLiteralLike(value)) {
    addNodeError(sourceFile, property, `${projectLabel} must declare "${fieldName}" as a static string.`);
    return undefined;
  }

  return value.text;
}

function staticBooleanValue(sourceFile, property, fieldName, projectLabel) {
  if (!property || !ts.isPropertyAssignment(property)) {
    errors.push(`${relativePath(sourceFile.fileName)} ${projectLabel} must declare "${fieldName}" as a static boolean.`);
    return undefined;
  }

  const value = unwrapExpression(property.initializer);
  if (value.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (value.kind === ts.SyntaxKind.FalseKeyword) return false;

  addNodeError(sourceFile, property, `${projectLabel} must declare "${fieldName}" as a static boolean.`);
  return undefined;
}

function findProjectsDeclaration(sourceFile) {
  let projectsDeclaration;

  function visit(node) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === 'projects') {
      if (projectsDeclaration) {
        addNodeError(sourceFile, node, 'Only one "projects" declaration is allowed.');
      } else {
        projectsDeclaration = node;
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return projectsDeclaration;
}

function declarationIsExported(declaration) {
  const variableStatement = declaration.parent?.parent;
  return ts.isVariableStatement(variableStatement)
    && variableStatement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword);
}

function validateProjectType(sourceFile) {
  function validateMembers(members) {
    for (const member of members) {
      const name = propertyName(member);
      if (name && forbiddenProjectFields.has(name)) {
        addNodeError(sourceFile, member, `Project type must not expose the legacy "${name}" field.`);
      }
    }
  }

  for (const statement of sourceFile.statements) {
    if (ts.isTypeAliasDeclaration(statement) && statement.name.text === 'Project' && ts.isTypeLiteralNode(statement.type)) {
      validateMembers(statement.type.members);
    }
    if (ts.isInterfaceDeclaration(statement) && statement.name.text === 'Project') {
      validateMembers(statement.members);
    }
  }
}

function validateProjects() {
  if (!fs.existsSync(siteDataPath)) {
    errors.push('content/site.ts is missing; portfolio records cannot be validated.');
    return { coreCount: 0, labCount: 0, projectCount: 0 };
  }

  const source = fs.readFileSync(siteDataPath, 'utf8');
  const sourceFile = sourceFileFor(siteDataPath, source);
  validateProjectType(sourceFile);

  const declaration = findProjectsDeclaration(sourceFile);
  if (!declaration?.initializer) {
    errors.push('content/site.ts must export a "projects" array initialized with project object literals.');
    return { coreCount: 0, labCount: 0, projectCount: 0 };
  }
  if (!declarationIsExported(declaration)) {
    addNodeError(sourceFile, declaration, '"projects" must remain exported as the public portfolio source of truth.');
  }

  const initializer = unwrapExpression(declaration.initializer);
  if (!ts.isArrayLiteralExpression(initializer)) {
    addNodeError(sourceFile, declaration, '"projects" must be an array literal so portfolio records can be validated statically.');
    return { coreCount: 0, labCount: 0, projectCount: 0 };
  }

  const slugs = new Map();
  const highlightedProjects = [];
  let coreCount = 0;
  let labCount = 0;

  initializer.elements.forEach((element, index) => {
    const project = unwrapExpression(element);
    const fallbackLabel = `Project record ${index + 1}`;

    if (!ts.isObjectLiteralExpression(project)) {
      addNodeError(sourceFile, element, `${fallbackLabel} must be an object literal.`);
      return;
    }

    const fields = propertiesByName(sourceFile, project, fallbackLabel);
    const slug = staticStringValue(sourceFile, fields.get('slug'), 'slug', fallbackLabel);
    const projectLabel = slug ? `Project "${slug}"` : fallbackLabel;
    const tier = staticStringValue(sourceFile, fields.get('tier'), 'tier', projectLabel);
    const highlightedProperty = fields.get('highlighted');
    const highlighted = highlightedProperty
      ? staticBooleanValue(sourceFile, highlightedProperty, 'highlighted', projectLabel)
      : false;

    if (slug !== undefined && slug.trim() === '') {
      addNodeError(sourceFile, fields.get('slug'), `${fallbackLabel} must use a non-empty slug.`);
    }

    for (const forbiddenField of forbiddenProjectFields) {
      const property = fields.get(forbiddenField);
      if (property) {
        addNodeError(sourceFile, property, `${projectLabel} must remove legacy field "${forbiddenField}".`);
      }
    }

    if (slug) {
      const previous = slugs.get(slug);
      if (previous) {
        addNodeError(
          sourceFile,
          fields.get('slug'),
          `${projectLabel} duplicates the slug declared at ${locationFor(sourceFile, previous)}.`,
        );
      } else {
        slugs.set(slug, fields.get('slug'));
      }

      if (slug === 'graphql-todo-application') {
        addNodeError(sourceFile, fields.get('slug'), `${projectLabel} is retired and must not return to the public portfolio.`);
      }
    }


    if (highlighted) {
      highlightedProjects.push({ slug, tier, node: highlightedProperty });
    }

    if (tier === 'core') {
      coreCount += 1;
      const missingFields = requiredCoreFields.filter((field) => !fields.has(field));
      if (missingFields.length > 0) {
        addNodeError(
          sourceFile,
          project,
          `${projectLabel} is core and must include: ${missingFields.map((field) => `"${field}"`).join(', ')}.`,
        );
      }

      if (slug === 'otask-mail-server') {
        const missingMailServerFields = requiredMailServerFields.filter((field) => !fields.has(field));
        if (missingMailServerFields.length > 0) {
          addNodeError(
            sourceFile,
            project,
            `${projectLabel} must include: ${missingMailServerFields.map((field) => `"${field}"`).join(', ')}.`,
          );
        }
        if (fields.has('repository')) {
          addNodeError(sourceFile, fields.get('repository'), `${projectLabel} must not expose its private repository URL.`);
        }
      }
    } else if (tier === 'lab') {
      labCount += 1;
    } else if (tier !== undefined) {
      addNodeError(sourceFile, fields.get('tier'), `${projectLabel} has invalid tier "${tier}"; use "core" or "lab".`);
    }
  });

  if (coreCount !== 5) {
    errors.push(`content/site.ts must expose exactly 5 core projects; found ${coreCount}.`);
  }
  if (labCount !== 2) {
    errors.push(`content/site.ts must expose exactly 2 lab projects; found ${labCount}.`);
  }
  if (initializer.elements.length !== 7) {
    errors.push(`content/site.ts must expose exactly 7 project records; found ${initializer.elements.length}.`);
  }
  if (highlightedProjects.length !== 1) {
    errors.push(`content/site.ts must expose exactly 1 highlighted project; found ${highlightedProjects.length}.`);
  } else {
    const [highlightedProject] = highlightedProjects;
    if (highlightedProject.slug !== 'eee-simulator' || highlightedProject.tier !== 'lab') {
      addNodeError(
        sourceFile,
        highlightedProject.node,
        'The highlighted project must remain the "eee-simulator" Lab record.',
      );
    }
  }

  return { coreCount, labCount, projectCount: initializer.elements.length };
}

function listCodeFiles(directory) {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listCodeFiles(filePath);
    return entry.isFile() && codeExtensions.has(path.extname(entry.name)) ? [filePath] : [];
  });
}

function validateApplicationSources() {
  const resumePathPattern = /\/resume(?:[/?#]|$)/i;
  const files = [
    ...listCodeFiles(path.join(rootDirectory, 'app')),
    ...listCodeFiles(path.join(rootDirectory, 'components')),
  ];

  for (const filePath of files) {
    const source = fs.readFileSync(filePath, 'utf8');
    const sourceFile = sourceFileFor(filePath, source);

    function visit(node) {
      if (ts.isStringLiteralLike(node) && resumePathPattern.test(node.text)) {
        addNodeError(sourceFile, node, `Remove the public /resume discovery reference "${node.text}"; use /hire instead.`);
      }
      if (ts.isPropertyAccessExpression(node) && forbiddenProjectFields.has(node.name.text)) {
        addNodeError(sourceFile, node.name, `Remove legacy project field access ".${node.name.text}"; use tier and maturity data instead.`);
      }
      if (
        ts.isElementAccessExpression(node)
        && ts.isStringLiteralLike(node.argumentExpression)
        && forbiddenProjectFields.has(node.argumentExpression.text)
      ) {
        addNodeError(
          sourceFile,
          node.argumentExpression,
          `Remove legacy project field access ["${node.argumentExpression.text}"]; use tier and maturity data instead.`,
        );
      }
      ts.forEachChild(node, visit);
    }

    visit(sourceFile);
  }
}

function validateGenericWorkTemplate() {
  if (!fs.existsSync(genericWorkTemplatePath)) {
    errors.push('app/work/[slug]/page.tsx is missing; generic case-study copy cannot be validated.');
    return;
  }

  const source = fs.readFileSync(genericWorkTemplatePath, 'utf8');
  const lowerSource = source.toLowerCase();

  for (const phrase of ['supplier data', 'commerce team']) {
    const index = lowerSource.indexOf(phrase);
    if (index === -1) continue;

    const line = source.slice(0, index).split('\n').length;
    errors.push(
      `${relativePath(genericWorkTemplatePath)}:${line} Generic case-study template contains commerce-only phrase "${phrase}"; use project-specific data or neutral copy.`,
    );
  }
}

const summary = validateProjects();
validateApplicationSources();
validateGenericWorkTemplate();

if (errors.length > 0) {
  console.error(`Portfolio validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(
  `Portfolio validation passed for ${summary.projectCount} projects (${summary.coreCount} core, ${summary.labCount} lab).`,
);
