# eslint-config-antoine

ESLint configurations for React/TypeScript projects.

## Installation

```bash
npm install --save-dev eslint typescript prettier eslint-config-antoine
```

## Usage

### ESLint v9 (`eslint.config.js`)

```js
import { flatConfig } from "eslint-config-antoine";

export default [
  ...flatConfig,
  // Your additional rules here...
];
```

### ESLint v8 (`.eslintrc.js`)

```js
module.exports = {
  extends: ["antoine"]
}
```

## Features

- ✨ Support for both ESLint v8 and v9 configurations
- 🎯 TypeScript and React best practices
- 🎨 Prettier integration
- ⚡️ Zero config setup
- 🔄 Auto-detects React version

## What's included

- TypeScript support via `@typescript-eslint`
- React rules and best practices
- Prettier formatting rules
- Modern JavaScript features (ES2022)
- Browser and Node.js environments