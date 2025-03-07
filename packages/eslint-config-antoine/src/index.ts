import type { Linter as _Linter } from "eslint";

import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import reactPlugin from "eslint-plugin-react";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

type FlatESLintConfig = {
  files?: string[];
  ignores?: string[];
  plugins?: Record<string, unknown>;
  languageOptions?: {
    ecmaVersion?: number;
    sourceType?: string;
    parser?: unknown;
    globals?: Record<string, boolean>;
    parserOptions?: {
      ecmaFeatures?: {
        jsx?: boolean;
      };
    };
  };
  settings?: {
    react?: {
      version?: string;
    };
  };
  rules?: Record<string, unknown>;
  linterOptions?: {
    reportUnusedDisableDirectives?: string;
  };
};

const config: FlatESLintConfig[] = [
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
      "no-unused-vars": "off",
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
  // Ignore common directories and test files
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.turbo/**"
    ]
  },
  // Prettier config should be last to override other style rules
  eslintConfigPrettier,
];

export default config;