module.exports = {
	files: ["**/features/**/*.{js,jsx,ts,tsx}"],
	extends: ["playwright/jest-playwright"],
	plugins: ["playwright"],
	rules: {
		"jest/no-standalone-expect": [
			"error",
			{
				additionalTestBlockFunctions: [
					"test.jestPlaywrightDebug",
					"it.jestPlaywrightDebug",
					"test.jestPlaywrightSkip",
					"it.jestPlaywrightSkip",
					"test.jestPlaywrightConfig",
					"it.jestPlaywrightConfig",
				],
			},
		],
		"playwright/missing-playwright-await": "error",
		"playwright/no-page-pause": "warn",
	},
};
