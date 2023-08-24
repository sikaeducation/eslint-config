import pluginStorybook from "eslint-plugin-storybook";
import mdx from "eslint-mdx";
import compat from "./compat.js";

export default [
	...compat.extends("plugin:mdx/recommended"),
	{
		files: ["**/*.{md,mdx}"],
		...compat.plugins("mdx"),
		rules: {
			"mdx/remark": "error",
		},
		settings: {
			"mdx/code-block": true,
			"import/parsers": {
				espree: [
					".js",
					".cjs",
					".mjs",
					".jsx",
				],
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
		languageOptions: {
			sourceType: "module",
			ecmaVersion: "latest",
			parser: mdx,
			globals: {
				React: false,
			},
		},
	},
	{
		files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
		...compat.plugins("storybook"),
		rules: {
			...pluginStorybook.configs.recommended.rules,
			"react/jsx-filename-extension": [
				"error",
				{
					extensions: [
						".mdx",
						".jsx",
						".tsx",
					],
				},
			],
			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: ["**/*.stories.*", "**/*.mdx"],
				},
			],
		},
	},
	{
		files: [".storybook/test-runner.js"],
		rules: {
			"@typescript-eslint/no-var-requires": "off",
		},
	},
];
