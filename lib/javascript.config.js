import parserTS from "@typescript-eslint/parser";
import compat from "./compat.js";

export default [
	...compat.extends("airbnb", "plugin:@typescript-eslint/recommended"),
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		rules: {
			"no-shadow": "off",
			"no-use-before-define": "off",
			"no-underscore-dangle": "off",
			"import/extensions": "off",
			"import/no-named-as-default": "off",
			"import/no-named-as-default-member": "off",
			"no-restricted-exports": "off",
		},
	},
	{
		files: ["**/*.js"],
		rules: {
			"import/extensions": [
				"error",
				"ignorePackages",
				{
					js: "always",
				},
			],
		},
	},
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: parserTS,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				project: true,
			},
		},
	},
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
			},
		},
		settings: {
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
];
