module.exports = {
	overrides: [
		require("@sikaeducation/eslint-config/js"),
		require("@sikaeducation/eslint-config/formatting"),
		{
			files: [
				"**/*.js",
			],
			rules: {
				"import/no-unresolved": "off",
			},
			plugins: [
				"import",
			],
		},
	],
};
