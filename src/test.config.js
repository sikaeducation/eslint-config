import pluginJest from "eslint-plugin-jest";
import pluginStorybook from "eslint-plugin-storybook";
import compat from "./compat.js";

export default [
	{
		files: [
			"**/*.{test,spec}.{ts,tsx,js,jsx}",
			"**/features/**/*.{ts,tsx}",
			"**/setupTests.{js,ts}",
			"**/reportWebVitals.{js,ts}",
			"**/*.{mdx}",
		],
		rules: {
			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: [
						"**/*.{test,spec}.{ts,tsx,js,jsx}",
						"**/features/**/*.{ts,tsx}",
						"**/setupTests.{js,ts}",
						"**/reportWebVitals.{js,ts}",
					],
				},
			],
		},
		plugins: {
			jest: pluginJest,
		},
	},
	{
		files: ["**/test-runner.js"],
		rules: {
			"@typescript-eslint/no-var-requires": "off",
		},
	},
	{
		files: ["**/features/**/*.ts"],
		rules: {
			"func-names": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"testing-library/prefer-screen-queries": "off",
		},
	},
	...compat.extends("plugin:mdx/recommend"),
	{
		files: ["**/*.{md,mdx}"],
		settings: {
			"mdx/code-block": true,
			"import/parsers": {
				espree: [".js", ".cjs", ".mjs", ".jsx"],
				"@typescript-eslint/parser": [".ts", ".tsx"],
			},
			"import/resolver": {
				typescript: {
					extensions: [".ts", ".tsx"],
				},
				node: {
					extensions: [".js", ".jsx"],
				},
			},
		},
	},
	{
		files: ["**/*.stories.*", "**/*.mdx"],
		rules: {
			...pluginStorybook.configs.recommended.rules,
			"react-hooks/rules-of-hooks": "off",
			"react/jsx-props-no-spreading": "off",
			"react/jsx-filename-extension": [
				"error",
				{
					extensions: [".mdx", ".jsx", ".tsx"],
				},
			],
			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: ["**/*.stories.*", "**/*.mdx"],
				},
			],
		},
		plugins: {
			storybook: pluginStorybook,
		},
	},
];
