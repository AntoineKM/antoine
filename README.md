# antoine

cool tools to code like me.

# eslint-config-antoine

ESLint configurations for React/TypeScript projects using ESLint v9.

## Installation

```bash
npm install --save-dev eslint@latest prettier@latest eslint-config-antoine@latest
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import antoine from "eslint-config-antoine";

export default [
  ...antoine,
  // Your additional rules here...
];
```

Make sure your package.json has `"type": "module"` if you're using import/export syntax.

## Features

- 🎯 TypeScript and React best practices
- 🎨 Prettier integration
- ⚡️ Zero config setup
- 🔄 Auto-detects React version
- 🚀 Fully supports ESLint v9 flat config

## Migration from v1.x

If you're migrating from v1.x (ESLint v8):

1. Update your ESLint to v9:
   ```bash
   npm install --save-dev eslint@^9.0.0
   ```

2. Replace your `.eslintrc.js` with a new `eslint.config.js`:
   ```js
   import antoine from "eslint-config-antoine";
   
   export default [
     ...antoine,
     // Your additional rules here...
   ];
   ```

3. Make sure your package.json has `"type": "module"` if you're using import/export syntax.