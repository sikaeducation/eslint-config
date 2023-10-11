module.exports = {
	plugins: ["@sikaeducation/eslint-config"],
	extends: ["plugin:@sikaeducation/eslint-config"],
	overrides: [
		{
			files: ["**/*.js"],
			rules: {
				"import/no-unresolved": "off",
			},
			plugins: ["import"],
		},
	],
};
