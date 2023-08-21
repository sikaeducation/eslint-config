import globals from "globals"
import parser from "@typescript-eslint/parser"
import pluginTS from "@typescript-eslint/eslint-plugin"
import importPlugin from "eslint-plugin-import"
import pluginPrettier from "eslint-plugin-prettier"
import configAirbnb from "eslint-config-airbnb";

export default [{
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
				project: "./tsconfig.json",
			}
		},
	},
	settings: {
		"import/resolver": {
			typescript: {},
		},
	},
	plugins: {
		"import": importPlugin,
		"@typescript-eslint": pluginTS,
		// prettier: pluginPrettier,
	},
	rules: {
		...pluginTS.configs.recommended.rules,
		...configAirbnb.rules,
		quotes: ["error", "double"],
		"no-shadow": "off",
		"no-use-before-define": "off",
		"no-underscore-dangle": "off",
		"import/extensions": "off",
		"no-restricted-exports": "off",
	},
}]
