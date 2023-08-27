# Sika's ESLint Config

Install with `npm install -D eslint @sikaeducation/eslint-config-ts-react`, as well as any dependencies for specific exports you need (such as `@typescript-eslint/eslint-plugin`).

```js
module.exports = {
	parserOptions: {
		project: "./tsconfig.json",
	},
}
```

## Usage

Example usage:

```bash
# Install dependencies
npm install -D eslint @sikaeducation/eslint-config-ts-react @typescript-eslint/eslint-plugin
npm i -D eslint @sikaeducation/eslint-config-ts-react eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin eslint-plugin-import 
```

```js
// .eslintrc
module.exports = {
	overrides: [
		require("@sikaeducation/eslint-config-react-ts/ts-react"),
		require("@sikaeducation/eslint-config-react-ts/ts-jest"),
		require("@sikaeducation/eslint-config-react-ts/formatting"),
	],
};
```

## Exports

| Export | Dependencies to install |
| --- | --- |
| [`js`](./lib/js.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config-ts-react eslint-plugin-import` |
| [`ts`](./lib/ts.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config-ts-react eslint-import-resolver-typescript @typescript-eslint/eslint-plugin eslint-plugin-import` |
| [`react`](./lib/react.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config-ts-react eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y` |
| [`react-ts`](./lib/react.ts.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config-ts-react eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y` |
| [`jest`](./lib/jest.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config-ts-react eslint-plugin-jest eslint-plugin-jest-formatting eslint-plugin-jest-extended` |
| [`jest-ts`](./lib/jest.ts.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config-ts-react eslint-plugin-jest eslint-plugin-jest-formatting eslint-plugin-jest-extended` |
| [`storybook`](./lib/storybook.overrides.js) | `npm i -D eslint @sikaeducation/eslint-config-ts-react eslint-plugin-storybook` |
| [`formatting`](./lib/formatting.overrides.js) (This is an override, not a config) | `npm i -D eslint @sikaeducation/eslint-config-ts-react` |


## Development

Publish updates by incrementing version (eg. `npm version patch`) and pushing
