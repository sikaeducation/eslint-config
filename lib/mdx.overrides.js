module.exports = {
	files: ["**/*.{md,mdx}"],
	extends: ["plugin:mdx/recommended"],
	plugins: ["mdx"],
	parser: "eslint-mdx",
	parserOptions: {
		sourceType: "module",
		extensions: ".mdx",
		markdownExtensions: ".md",
	},
	processor: "mdx/remark",
	rules: {
		"mdx/remark": "error",
	},
};
