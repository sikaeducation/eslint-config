# Sika's ESLint Config

[![CI](https://github.com/sikaeducation/eslint-config/actions/workflows/main.yml/badge.svg)](https://github.com/sikaeducation/eslint-config/actions/workflows/main.yml)

Install with `npm install -D eslint @sikaeducation/eslint-config`, as well as any dependencies for specific exports you need (such as `@typescript-eslint/eslint-plugin`). See [Available Overrides](#available-overrides) for examples.

Note that the modular exports from this package are eslintrc overrides, not configs.

## Usage

```bash
# Install dependencies for TS and React
npm i -D eslint @sikaeducation/eslint-config eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin eslint-plugin-import
```

```js
// .eslintrc.js
module.exports = {
	overrides: [
		require("@sikaeducation/eslint-config/ts"),
		require("@sikaeducation/eslint-config/react-ts"),
		require("@sikaeducation/eslint-config/formatting"),
	],
};
```

* If you use the formatting overrides, they should always be last.
* Integrate this with your editor's ESLint plugin for fix-on-save. Neovim's is part of `nvim-lsp-config`.

## Available Overrides

| Export | Install Command |
| --- | --- |
| [`js`](./lib/js.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config eslint-plugin-import` |
| [`ts`](./lib/ts.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config eslint-import-resolver-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import` |
| [`react`](./lib/react.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y` |
| [`react-ts`](./lib/react.ts.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y` |
| [`jest`](./lib/jest.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config eslint-plugin-jest eslint-plugin-jest-formatting eslint-plugin-jest-extended` |
| [`jest-ts`](./lib/jest.ts.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config eslint-plugin-jest eslint-plugin-jest-formatting eslint-plugin-jest-extended` |
| [`storybook`](./lib/storybook.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config eslint-plugin-storybook` |
| [`playwright-test`](./lib/playwright.test.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config eslint-plugin-playwright` |
| [`playwright-jest`](./lib/playwright.test.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config eslint-plugin-playwright` |
| [`formatting`](./lib/formatting.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config` |


## Development

Publish updates by incrementing version (eg. `npm version patch`) and pushing
