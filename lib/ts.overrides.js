module.exports = {
	files: ["**/*.{ts,tsx}"],
	plugins: [
		"@typescript-eslint",
		"import",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		project: "./tsconfig.json",
		ecmaFeatures: {
			jsx: true,
		},
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
	overrides: [
		require("@sikaeducation/eslint-config-ts-react/js"),
		{
			files: ["**/*.{ts,tsx}"],
			extends: ["plugin:@typescript-eslint/recommended-type-checked"],
		},
		{
			files: ["**/*.{ts,tsx}"],
			rules: {
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/no-floating-promises": "off",
			},
		},
	],
};
