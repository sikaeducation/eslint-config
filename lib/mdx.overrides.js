module.exports = {
	files: ["**/*.mdx"],
	extends: ["plugin:mdx/recommended"],
	settings: {
		"mdx/code-block": true,
	},
	rules: {
		"mdx/remark": "error",
	},
};
