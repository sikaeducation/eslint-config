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
		require("@sikaeducation/eslint-config/js"),
		{
			files: ["**/*.{ts,tsx}"],
			rules: {
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/no-floating-promises": "off",
				"@typescript-eslint/await-thenable": "error",
				"@typescript-eslint/ban-ts-comment": "error",
				"@typescript-eslint/ban-types": "error",
				"@typescript-eslint/no-array-constructor": "error",
				"@typescript-eslint/no-base-to-string": "error",
				"@typescript-eslint/no-duplicate-enum-values": "error",
				"@typescript-eslint/no-duplicate-type-constituents": "error",
				"@typescript-eslint/no-explicit-any": "error",
				"@typescript-eslint/no-extra-non-null-assertion": "error",
				"@typescript-eslint/no-for-in-array": "error",
				"no-implied-eval": "off", // Use TS version
				"@typescript-eslint/no-implied-eval": "error",
				"no-loss-of-precision": "off", // Use TS version
				"@typescript-eslint/no-loss-of-precision": "error",
				"@typescript-eslint/no-misused-new": "error",
				"@typescript-eslint/no-misused-promises": "error",
				"@typescript-eslint/no-namespace": "error",
				"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
				"@typescript-eslint/no-redundant-type-constituents": "error",
				"@typescript-eslint/no-this-alias": "error",
				"@typescript-eslint/no-unnecessary-type-assertion": "error",
				"@typescript-eslint/no-unnecessary-type-constraint": "error",
				"@typescript-eslint/no-unsafe-argument": "error",
				"@typescript-eslint/no-unsafe-assignment": "error",
				"@typescript-eslint/no-unsafe-call": "error",
				"@typescript-eslint/no-unsafe-declaration-merging": "error",
				"@typescript-eslint/no-unsafe-enum-comparison": "error",
				"@typescript-eslint/no-unsafe-member-access": "error",
				"@typescript-eslint/no-unsafe-return": "error",
				"no-unused-vars": "off", // Use TS version
				"@typescript-eslint/no-unused-vars": [
					"error",
					{ vars: "all", args: "after-used", ignoreRestSiblings: true, destructuredArrayIgnorePattern: "^_" },
				],
				"@typescript-eslint/prefer-as-const": "error",
				"require-await": "off", // Use TS version
				"@typescript-eslint/require-await": "error",
				"@typescript-eslint/restrict-plus-operands": "error",
				"@typescript-eslint/restrict-template-expressions": "error",
				"@typescript-eslint/triple-slash-reference": "error",
				"@typescript-eslint/unbound-method": "error",
			},
		},
	],
};
