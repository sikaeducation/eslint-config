module.exports = {
	files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
	extends: ["storybook/recommended"],
	plugins: ["storybook"],
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
				devDependencies: ["**/*.stories.*", "**/*.mdx"],
			},
		],
	},
}
