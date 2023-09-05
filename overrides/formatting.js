/* eslint-disable max-lines */
module.exports = {
	files: ["**/*"],
	rules: {
		"array-bracket-newline": [
			"error",
			{ multiline: true },
		],
		"array-bracket-spacing": ["error"],
		"array-element-newline": ["error"],
		"arrow-parens": "error",
		"arrow-spacing": [
			"error",
			{ before: true, after: true },
		],
		"block-spacing": [
			"error",
			"always",
		],
		"brace-style": [
			"error",
			"1tbs",
		],
		"comma-style": [
			"error",
			"last",
		],
		"comma-spacing": [
			"error",
			{ before: false, after: true },
		],
		"comma-dangle": [
			"error",
			"always-multiline",
		],
		"computed-property-spacing": [
			"error",
			"never",
		],
		"dot-location": [
			"error",
			"property",
		],
		"eol-last": [
			"error",
			"always",
		],
		"func-call-spacing": [
			"error",
			"never",
		],
		"function-call-argument-newline": [
			"error",
			"consistent",
		],
		"function-paren-newline": [
			"error",
			{ minItems: 3 },
		],
		"generator-star-spacing": [
			"error",
			{ before: true, after: false },
		],
		"implicit-arrow-linebreak": [
			"error",
			"beside",
		],
		"indent": [
			"error",
			"tab",
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				// MemberExpression: null,
				FunctionDeclaration: {
					parameters: 1,
					body: 1,
				},
				FunctionExpression: {
					parameters: 1,
					body: 1,
				},
				CallExpression: {
					arguments: 1,
				},
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				// list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
				ignoredNodes: [
					"JSXElement",
					"JSXElement > *",
					"JSXAttribute",
					"JSXIdentifier",
					"JSXNamespacedName",
					"JSXMemberExpression",
					"JSXSpreadAttribute",
					"JSXExpressionContainer",
					"JSXOpeningElement",
					"JSXClosingElement",
					"JSXFragment",
					"JSXOpeningFragment",
					"JSXClosingFragment",
					"JSXText",
					"JSXEmptyExpression",
					"JSXSpreadChild",
				],
				ignoreComments: false,
			},
		],
		"jsx-quotes": [
			"error",
			"prefer-double",
		],
		"key-spacing": "error",
		"keyword-spacing": [
			"error",
			{ before: true },
		],
		"line-comment-position": "off",
		"linebreak-style": [
			"error",
			"unix",
		],
		"lines-around-code": "off",
		"lines-between-class-members": [
			"error",
			"always",
		],
		"max-len": [
			"error",
			{
				code: 80,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: false,
				ignoreRegExpLiterals: true,
			},
		],
		"max-statements-per-line": [
			"error",
			{ max: 1 },
		],
		"multiline-ternary": [
			"error",
			"always-multiline",
		],
		"new-parens": [
			"error",
			"always",
		],
		"newline-per-chained-call": [
			"error",
			{ ignoreChainWithDepth: 2 },
		],
		"no-extra-parens": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": "error",
		"no-tabs": "off",
		"no-trailing-spaces": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": [
			"error",
			"beside",
		],
		"object-curly-newline": ["error"],
		"operator-linebreak": [
			"error",
			"before",
		],
		"padded-blocks": [
			"error",
			"never",
		],
		"quotes": [
			"error",
			"double",
			{ allowTemplateLiterals: true },
		],
		"rest-spread-spacing": [
			"error",
			"never",
		],
		"semi": "error",
		"semi-spacing": "error",
		"space-before-blocks": [
			"error",
			"never",
		],
		"space-before-function-paren": [
			"error",
			"never",
		],
		"space-in-parens": [
			"error",
			"never",
		],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"switch-colon-spacing": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		"wrap-iife": "error",
		"yield-star-spacing": "error",
	},
};
