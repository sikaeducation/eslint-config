# Sika's ESLint Config

* Install with `npm install eslint @sikaeducation/eslint-config-ts-react`
* Exports
	* [`js`](./lib/js.overrides.js)
	* [`ts`](./lib/ts.overrides.js) (includes `js`)
	* [`react`](./lib/react.overrides.js)
	* [`react-ts`](./lib/react.ts.overrides.js) (includes `ts`)
	* [`jest`](./lib/jest.overrides.js) (includes `js`)
	* [`jest-ts`](./lib/jest.ts.overrides.js) (includes `ts`)
	* [`storybook`](./lib/storybook.overrides.js)
	* [`formatting`](./lib/formatting.overrides.js) (this is an override, not a config)
* Publish updates by incrementing version (eg. `npm version patch`) and pushing

Example usage:

```js
// .eslintrc
module.exports = {
	extends: [
		"plugin:@sikaeducation/react-ts",
		"plugin:@sikaeducation/jest-ts",
	],
	overrides: [
		"plugin:@sikaeducation/formatting",
	],
};
```
