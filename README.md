# Sika's ESLint Config

[![CI](https://github.com/sikaeducation/eslint-config/actions/workflows/main.yml/badge.svg)](https://github.com/sikaeducation/eslint-config/actions/workflows/main.yml)

Install with `npm install -D eslint @sikaeducation/eslint-config`.

## Usage

```bash
# Install dependencies for TS and React
npm i -D eslint @sikaeducation/eslint-config
```

```js
// .eslintrc.js
module.exports = {
  extends: [
    "@sikaeducation",
    "@sikaeducation/eslint-config/src/configs/vitest",
  ],
};
```

- Integrate this with your editor's ESLint plugin for fix-on-save. Neovim's is part of `nvim-lsp-config`. If the app is `{"type": "module"}`, use `.eslintrc.cjs`.

## Available Configs

- `"@sikaeducation/eslint-config/src/configs/js"`
- `"@sikaeducation/eslint-config/src/configs/ts"`
- `"@sikaeducation/eslint-config/src/configs/react"`
- `"@sikaeducation/eslint-config/src/configs/react-ts"`
- `"@sikaeducation/eslint-config/src/configs/jest"`
- `"@sikaeducation/eslint-config/src/configs/jest-ts"`
- `"@sikaeducation/eslint-config/src/configs/storybook"`
- `"@sikaeducation/eslint-config/src/configs/playwright-test"`
- `"@sikaeducation/eslint-config/src/configs/playwright-jest"`
- `"@sikaeducation/eslint-config/src/configs/vitest"`

Default is JS+TS+React+React TS.

## Deployment

Set `NPM_TOKEN` on GitHub Actions to publish. Generate it on [Sika's npm page](https://www.npmjs.com/settings/sikaeducation/tokens) then add it to the [secrets page](https://github.com/sikaeducation/eslint-config/settings/secrets/actions).

Publish updates by incrementing the version with `npm version patch|minor|major` and pushing.
