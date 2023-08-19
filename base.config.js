import globals from "./globals"
import pluginTS from "@typescript-eslint"
import pluginJestDOM from "eslint-plugin-jest-dom"
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
		pluginJestDOM,
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
