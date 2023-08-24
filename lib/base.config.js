import parserTS from "@typescript-eslint/parser";

import compat from "./compat.js";

export default [
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
	...compat.extends("airbnb", "plugin:@typescript-eslint/recommended"),
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
