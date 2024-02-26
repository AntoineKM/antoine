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
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    "import/ignore": ["react-native"],
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-console": 0,
    "no-control-regex": 0,
    "import/extensions": [0],
    "no-unused-vars": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "react/jsx-props-no-spreading": [0],
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "always", children: "always" },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "all",
      },
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
};

module.exports = config;
