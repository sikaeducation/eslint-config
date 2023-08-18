module.exports = {
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
}
