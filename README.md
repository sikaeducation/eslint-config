# Sika's ESLint Config

* Install with `npm install eslint @sikaeducation/eslint-config-ts-react`
	* ESLint must be install: `npm i eslint`
* Add to project config with: `{ extends: ["@sikaeducation/ts-react"] }`
* Exports
	* [`javascript`](./lib/javascript.config.js)
	* [`react`](./lib/react.config.js)
	* [`jest`](./lib/jest.config.js)
	* [`featureTests`](./lib/feature-tests.config.js)
	* [`storybook`](./lib/storybook.config.js)
	* [`formattng`](./lib/formatting.config.js)
* Publish updates by incrementing version (eg. `npm version patch`) and pushing

Example usage:

```js
// eslint.config.js
import { javascript, formatting } from "@sikaeducation/eslint-config-ts-react";

export default [
	...javascript,
	...formatting,
]
```
