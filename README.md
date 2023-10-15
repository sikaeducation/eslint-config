# Sika's ESLint Config

[![CI](https://github.com/sikaeducation/eslint-config/actions/workflows/main.yml/badge.svg)](https://github.com/sikaeducation/eslint-config/actions/workflows/main.yml)

Install with `npm install -D eslint @sikaeducation/eslint-config`.

## Usage

See [Available Configs](#available-configs) for examples.

```bash
# Install dependencies for TS and React
npm i -D eslint @sikaeducation/eslint-config
```

```js
// .eslintrc.js
module.exports = {
  extends: [
    "@sikaeducation/eslint-config",
    "@sikaeducation/eslint-config/src/configs/jest",
  ],
};
```

- If you use the formatting configuration, it should always be last (but use Prettier instead)
- Integrate this with your editor's ESLint plugin for fix-on-save. Neovim's is part of `nvim-lsp-config`.

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
- `"@sikaeducation/eslint-config/src/configs/formatting"`

Default is JS+TS+React+React TS.

## Development

Publish updates by incrementing version (eg. `npm version patch`) and pushing.
