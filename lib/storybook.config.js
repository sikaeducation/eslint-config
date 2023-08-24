import pluginStorybook from "eslint-plugin-storybook";
import compat from "./compat.js";

export default [
	...compat.extends("plugin:mdx/recommended"),
	{
		files: ["**/*.{md,mdx}"],
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
		plugins: {
			storybook: pluginStorybook,
		},
	},
];
