# eslint-config-antoine

ESLint configurations for React/TypeScript projects.

## Installation

```bash
npm install --save-dev eslint typescript prettier eslint-config-antoine
```

## Usage

### ESLint v9 (`eslint.config.js`)

```js
import { flat } from "eslint-config-antoine";

export default [
  ...flat,
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