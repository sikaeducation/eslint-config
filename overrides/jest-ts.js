module.exports = {
	files: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
	plugins: [
		"jest",
		"jest-formatting",
		"jest-extended",
	],
	env: {
		"jest/globals": true,
	},
	overrides: [
		require("@sikaeducation/eslint-config/jest"),
		{
			files: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
			rules: {
				"import/no-extraneous-dependencies": [
					"error",
					{
						devDependencies: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
					},
				],
				"@typescript-eslint/unbound-method": "off",
				"@typescript-eslint/no-floating-promises": "off",
			},
		},
		{
			files: ["**/features/**/*.{ts,tsx}"],
			rules: {
				"import/no-extraneous-dependencies": [
					"error",
					{
						devDependencies: ["**/features/**/*.{ts,tsx}"],
					},
				],
			},
		},
	],
};
