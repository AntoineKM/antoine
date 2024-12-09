import { Linter } from "eslint";

const config: Linter.Config = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "universe/native",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
    "import/ignore": ["react-native"],
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-console": "off",
    "no-control-regex": "off",
    "import/extensions": "off",
    "no-unused-vars": "off", // Turned off in favor of @typescript-eslint/no-unused-vars

    // React rules
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".ts"] }],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "always", children: "always" },
    ],

    // Prettier rules
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "all",
      },
    ],

    // TypeScript rules
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
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "warn",
  },
};

module.exports = config;
