import pluginPrettier from "eslint-plugin-prettier";
import parserTS from "@typescript-eslint/parser";

import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname,
});

export default [
	{
		files: ["**/*.{js}"],
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
			},
		},
	},
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: "latest",
				project: true,
			},
		},
	},
	...compat.extends("airbnb", "plugin:@typescript-eslint/recommended"),
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		linterOptions: {
			reportUnusedDisableDirectives: false,
		},
		languageOptions: {
			parser: parserTS,
		},
		settings: {
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
		plugins: {
			prettier: pluginPrettier,
		},
	},
	{
		rules: {
			"import/*": "off",
		},
	},
];
