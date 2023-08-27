module.exports = {
	overrides: [
		require("@sikaeducation/eslint-config-ts-react/js"),
		require("@sikaeducation/eslint-config-ts-react/formatting"),
		{
			files: ["**/*.js"],
			rules: {
				"import/no-unresolved": "off",
			},
			plugins: ["import"],
		},
	],
};
