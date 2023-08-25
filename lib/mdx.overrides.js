module.exports = {
	files: ["**/*.{md,mdx}"],
	extends: ["plugin:mdx/recommended"],
	plugins: ["mdx"],
	parser: mdx,
	settings: {
		"mdx/code-block": true,
	},
	languageOptions: {
		sourceType: "module",
		ecmaVersion: "latest",
		globals: {
			React: false,
		},
	},
	rules: {
		"mdx/remark": "error",
	},
}
