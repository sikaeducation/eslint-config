# Sika's ESLint Config

* Install with `npm install eslint @sikaeducation/eslint-config-ts-react`
* Exports
	* [`javascript`](./lib/javascript.overrides.js)
	* [`typescript`](./lib/typescript.overrides.js)
	* [`react`](./lib/react.overrides.js)
	* [`react-typescript`](./lib/react.typescript.overrides.js)
	* [`jest`](./lib/jest.overrides.js)
	* [`storybook`](./lib/storybook.overrides.js)
	* [`formattng`](./lib/formatting.overrides.js)
* Publish updates by incrementing version (eg. `npm version patch`) and pushing

Example usage:

```js
// .eslintrc
require("@sikaeducation/eslint-config-ts-react");

module.exports = {
	overrides: [
		require("@sikaeducation/eslint-config-ts-react/react-typescript"),
		require("@sikaeducation/eslint-config-ts-react/formatting"),
	],
};
```
