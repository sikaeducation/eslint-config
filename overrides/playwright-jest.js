module.exports = {
	files: [
		"**/features/**/*.{js,jsx,ts,tsx}",
	],
	plugins: [
		"playwright",
	],
	overrides: [
		{
			files: [
				"**/features/**/*.{js,jsx,ts,tsx}",
			],
			extends: [
				"plugin:playwright/jest-playwright",
			],
		},
		{
			files: [
				"**/features/**/*.{js,jsx,ts,tsx}",
			],
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
		},
	],
};
