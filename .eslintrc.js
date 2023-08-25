module.exports = {
	extends: [
		"./lib/feature-tests.config.js",
		"./lib/formatting.config.js",
		"./lib/javascript.config.js",
		"./lib/jest.config.js",
		"./lib/react.config.js",
		"./lib/storybook.config.js",
	],
	plugins: [
		"mdx",
		"import",
		"jest",
		"jest-extended",
		"react",
		"react-hooks",
		"jsx-a11y",
		"storybook",
	],
};
