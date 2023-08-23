import globals from "globals"
import parser from "@typescript-eslint/parser"
import pluginTS from "@typescript-eslint/eslint-plugin"
import js from "@eslint/js"
import pluginImport from "eslint-plugin-import"
import pluginPrettier from "eslint-plugin-prettier"

import { FlatCompat } from "@eslint/eslintrc"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname,
});

export default [
	{
		files: ["**/*.{js}"],
		rules: {
			...js.configs.recommended.rules,
		},
	},
	...compat.extends("airbnb", "plugin:@typescript-eslint/recommended"),
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		linterOptions: {
			reportUnusedDisableDirectives: false,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
				...globals.jest,
			},
			parser: parser,
			parserOptions: {
				ecmaFeatures: {
					modules: true,
					jsx: true,
				}
			},
		},
		settings: {
			"import/parsers": {
				"@typescript-eslint/parser": [".ts", ".tsx"],
			},
			"import/resolver": {
				typescript: {},
			},
		},
		plugins: {
			"import": pluginImport,
			"@typescript-eslint": pluginTS,
			prettier: pluginPrettier,
		},
		rules: {
			quotes: ["error", "double"],
			"no-shadow": "off",
			"no-use-before-define": "off",
			"no-underscore-dangle": "off",
			"import/extensions": "off",
			"no-restricted-exports": "off",
		},
	},
]
