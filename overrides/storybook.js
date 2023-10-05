module.exports = {
	files: [
		"*.stories.@(ts|tsx|js|jsx|mjs|cjs)",
	],
	plugins: [
		"storybook",
	],
	overrides: [
		{
			files: [
				"*.stories.@(ts|tsx|js|jsx|mjs|cjs)",
			],
			extends: [
				"plugin:storybook/recommended",
			],
		},
		{
			files: [
				"*.stories.@(ts|tsx|js|jsx|mjs|cjs)",
			],
			rules: {
				"react/jsx-filename-extension": [
					"error",
					{
						extensions: [
							".mdx",
							".jsx",
							".tsx",
						],
					},
				],
				"import/no-extraneous-dependencies": [
					"error",
					{
						devDependencies: [
							"**/*.stories.*",
							"**/*.mdx",
						],
					},
				],
			},
		},
	],
};
