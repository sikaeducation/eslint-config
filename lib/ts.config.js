/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */

module.exports = {
	overrides: {
		files: ["**/*.{ts,tsx}"],
		extends: [
			"plugin:@sikaeducation/js",
			"plugin:@typescript-eslint/recommended-type-checked",
		],
		plugins: [
			"@typescript-eslint",
			"@sikaeducation/react-ts",
			"import",
		],
		parser: "@typescript-eslint/parser",
		parserOptions: {
			ecmaVersion: "latest",
			tsconfigRootDir: __dirname,
			project: true,
		},
		env: {
			node: true,
			browser: true,
			es6: true,
		},
		settings: {
			"import/parsers": {
				"@typescript-eslint/parser": [
					".ts",
					".tsx",
				],
			},
			"import/resolver": {
				typescript: {
					extensions: [
						".ts",
						".tsx",
					],
				},
			},
		},
		rules: {
			"@typescript-eslint/no-var-requires": "off",
		},
	},
};
