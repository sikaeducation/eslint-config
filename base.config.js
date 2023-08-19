import globals from "globals"
import parser from "@typescript-eslint/parser"
import pluginTS from "@typescript-eslint/eslint-plugin"
import pluginPrettier from "eslint-plugin-prettier"

export default [{
	linterOptions: {
		reportUnusedDisableDirectives: true,
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
		},
	},
	settings: {
		"import/resolver": {
			typescript: {},
		},
	},
	plugins: [
		pluginTS,
		pluginPrettier,
	],
	rules: {
		quotes: ["error", "double"],
		"no-shadow": "off",
		"no-use-before-define": "off",
		"no-underscore-dangle": "off",
		"import/extensions": "off",
		"no-restricted-exports": "off",
	},
}]
