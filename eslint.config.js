import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";
import tseslint from "typescript-eslint";

const baseConfig = {
  name: "next",
  files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
  plugins: {
    react: reactPlugin,
    "react-hooks": reactHooksPlugin,
    import: importPlugin,
    "jsx-a11y": jsxA11yPlugin,
    "@next/next": nextPlugin,
  },
  settings: {
    react: { version: "detect" },
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2022,
    },
    globals: { ...globals.browser, ...globals.node },
  },
  rules: {
    ...(reactPlugin.configs.recommended?.rules || {}),
    ...(reactHooksPlugin.configs.recommended?.rules || {}),
    ...(nextPlugin.configs.recommended?.rules || {}),
    "import/no-anonymous-default-export": "warn",
    "react-hooks/refs": "off",
    "import/no-anonymous-default-export": "off",
    "react/no-unknown-property": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": ["warn", { elements: ["img"], img: ["Image"] }],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "react/jsx-no-target-blank": "off",
  },
};

const typescriptConfig = {
  name: "next/typescript",
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    "@typescript-eslint": tseslint.plugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: { sourceType: "module" },
  },
};

const ignores = {
  name: "ignores",
  ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "public/**"],
};

// Core Web Vitals additional rules
const coreWebVitals = {
  name: "next/core-web-vitals",
  rules: { ...(nextPlugin.configs["core-web-vitals"]?.rules || {}) },
};

export default [baseConfig, typescriptConfig, ignores, coreWebVitals];
