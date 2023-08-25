module.exports = {
	files: ["**/features/**/*.{ts,tsx}"],
	rules: {
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: ["**/features/**/*.{ts,tsx}"],
			},
		]
	},
}
