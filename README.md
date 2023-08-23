# Sika's ESLint Config

* Install with `npm install eslint prettier @sikaeducation/eslint-config-ts-react`
	* Prettier and ESLint are dependencies
* Add to project config with: `{ extends: ["@sikaeducation/ts-react"] }`
* Configure overrides:
	* [./src/base.config.js](./src/base.config.js)
	* [./src/test.config.js](./src/test.config.js)
	* [./src/react.config.js](./src/react.config.js)
* Publish updates by incrementing version (eg. `npm version patch`) and pushing
