import type { Linter } from "eslint";
import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

// ESLint v8 configuration (main export)
const config: Linter.Config = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".ts"] }],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-curly-brace-presence": ["error", { props: "always", children: "always" }],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: false,
      },
    ],
  },
};

// ESLint v9 flat configuration (named export)
export const flat = [
  js.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".ts"] }],
      "react/jsx-props-no-spreading": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "always", children: "always" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: false,
        },
      ],
    },
  },
  prettierConfig,
];

// Export v8 config as module.exports
module.exports = config;
// Also expose the v9 config
module.exports.flat = flat;