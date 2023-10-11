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
  plugins: ["@sikaeducation/eslint-config"],
  extends: [
    "plugin:@sikaeducation/eslint-config",
    "plugin:@sikaeducation/eslint-config/configs/formatting",
  ],
};
```

- If you use the formatting configuration, it should always be last.
- Integrate this with your editor's ESLint plugin for fix-on-save. Neovim's is part of `nvim-lsp-config`.

## Available Configs

- `"@sikaeducation/eslint-config/configs/js"`
- `"@sikaeducation/eslint-config/configs/ts"`
- `"@sikaeducation/eslint-config/configs/react"`
- `"@sikaeducation/eslint-config/configs/react-ts"`
- `"@sikaeducation/eslint-config/configs/jest"`
- `"@sikaeducation/eslint-config/configs/jest-ts"`
- `"@sikaeducation/eslint-config/configs/storybook"`
- `"@sikaeducation/eslint-config/configs/playwright-test"`
- `"@sikaeducation/eslint-config/configs/playwright-jest"`
- `"@sikaeducation/eslint-config/configs/formatting"`

Default is everything except formatting.

## Development

Publish updates by incrementing version (eg. `npm version patch`) and pushing.
