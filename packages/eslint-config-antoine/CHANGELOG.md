# eslint-config-antoine

## 3.0.0

### Major Changes

- 38f7c80: Complete migration to ESLint v9:
  - Drop support for ESLint v8 configurations
  - Use flat config format exclusively
  - Simplify imports and configuration
  - Update dependencies to support ESLint v9
  - Upgrade to eslint-config-prettier v10
  - Improve type safety with direct plugin imports

### Minor Changes

- 7045e64: Add support for ESLint v9 flat config:
  - Add flat config export alongside eslintrc config
  - Support direct plugin imports for better type checking
  - Add TypeScript types for flat config

## 1.1.0

### Minor Changes

- d52c1f7: Add support for ESLint v9 by:
  - Use string literals for rule severity instead of numbers
  - Add react.version setting
  - Add test suite for v8/v9 compatibility

## 1.0.14

### Patch Changes

- abbbe41: Fix lint errors
- abbbe41: Upgrade dependencies

## 1.0.13

### Patch Changes

- 21839ad: Update eslint config with ts no unused vars

## 1.0.12

### Patch Changes

- e775776: Update ts no explicit any to warn instead of error

## 1.0.11

### Patch Changes

- 33ab889: Add prettier trailing comma rule instead of comma dangle

## 1.0.10

### Patch Changes

- 8392f42: Add comma dangle rule and revert prettier custom config

## 1.0.9

### Patch Changes

- cc644d1: Remove eslint prettier custom config

## 1.0.8

### Patch Changes

- d8035ae: Upgrade dependencies

## 1.0.7

### Patch Changes

- e01719d: Remove ignore enums from eslint config which cause errors

## 1.0.6

### Patch Changes

- 7fdf0b6: Fix ignore enums rule

## 1.0.5

### Patch Changes

- dc7632f: Add ignore enums rule to eslint config

## 1.0.4

### Patch Changes

- 8af6c38: Upgrade dependencies

## 1.0.3

### Patch Changes

- 84ce318: Add missing deps

## 1.0.2

### Patch Changes

- 62632a8: Add varsIgnorePattern to the no-unused-vars rule to ignore variables starting with an underscore in eslint-config-antoine

## 1.0.1

### Patch Changes

- c3ba43f: Fix eslint config export mode

## 1.0.0

### Major Changes

- afb8f94: Initialize projects
