const featureTestOverrides = require("./feature-test-overrides");
const storybookOverrides = require("./storybook-overrides");
const testOverrides = require("./test-overrides")
const reactOverrides = require("./react-overrides");
const jsOverrides = require("./js-overrides");

module.exports = {
	parser: "@typescript-eslint/parser",
	env: {
		browser: true,
		node: true,
		es2022: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: ["./tsconfig.json"],
		sourceType: "module",
		ecmaVersion: "latest",
	},
	settings: {
		"import/resolver": {
			typescript: {},
		},
	},
	plugins: [
		"@typescript-eslint",
		"react",
		"react-hooks",
		"jsx-a11y",
		"jest-dom",
		"prettier",
	],
	extends: [
		"airbnb",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:storybook/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:jest-dom/recommended",
		"plugin:prettier/recommended",
	],
	rules: jsOverrides,
	overrides: [
		{
			files: [
				"**/*.{test,spec}.{ts,tsx,js,jsx}",
				"**/features/**/*.{ts,tsx}",
				"**/setupTests.{js,ts}",
				"**/reportWebVitals.{js,ts}",
			],
			rules: testOverrides,
		},
		{
			files: ["**/*.stories.*", "**/*.mdx"],
			rules: storybookOverrides,
		},
		{
			files: ["**/features/**/*.ts"],
			rules: featureTestOverrides,
		},
		{
			files: ["**/*.{tsx,jsx}"],
			rules: reactOverrides,
		},
		{
			files: ["**/slices/*.ts"],
			rules: {
				"no-param-reassign": "off",
			},
		},
	],
};
