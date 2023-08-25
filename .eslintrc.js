module.exports = {
	overrides: [
		require("./lib/javascript.overrides.js"),
		require("./lib/react.overrides.js"),
		require("./lib/jest.overrides.js"),
		require("./lib/storybook.overrides.js"),
		require("./lib/mdx.overrides.js"),
		require("./lib/feature-tests.overrides.js"),
		require("./lib/formatting.overrides.js"),
	],
};
