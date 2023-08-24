import pluginJest from "eslint-plugin-jest";

export default [
	{
		files: [
			"**/*.{test,spec}.{ts,tsx,js,jsx}",
			"**/features/**/*.{ts,tsx}",
			"**/setupTests.{js,ts}",
			"**/reportWebVitals.{js,ts}",
			"**/*.{mdx}",
		],
		rules: {
			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: [
						"**/*.{test,spec}.{ts,tsx,js,jsx}",
						"**/features/**/*.{ts,tsx}",
						"**/setupTests.{js,ts}",
						"**/reportWebVitals.{js,ts}",
					],
				},
			],
		},
		plugins: {
			jest: pluginJest,
		},
	},
	{
		files: ["**/test-runner.js"],
		rules: {
			"@typescript-eslint/no-var-requires": "off",
		},
	},
	{
		files: ["**/features/**/*.ts"],
		rules: {
			"func-names": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"testing-library/prefer-screen-queries": "off",
		},
	},
];
