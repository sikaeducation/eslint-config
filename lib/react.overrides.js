/* eslint-disable max-lines */
module.exports = {
	files: ["**/*.{jsx,tsx}"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/strict",
	],
	plugins: [
		"react",
		"react-hooks",
		"jsx-a11y",
	],
	settings: {
		"react": {
			version: "detect",
			pragma: "React",
			linkComponents: [
				"Hyperlink",
				{ name: "Link", linkAttribute: "to" },
			],
		},
		"import/resolver": {
			typescript: {
				extensions: [
					".ts",
					".tsx",
				],
			},
			node: {
				extensions: [
					".js",
					".jsx",
					".json",
				],
			},
		},
		"import/parsers": {
			"espree": [
				".js",
				".cjs",
				".mjs",
				".jsx",
			],
			"@typescript-eslint/parser": [
				".ts",
				".tsx",
			],
		},
	},
	rules: {
		"react/button-has-type": "error",
		"react/destructuring-assignment": "error",
		"react/forbid-component-props": "error",
		"react/function-component-definition": "error",
		"react/hook-use-state": [
			"error",
			{ allowDestructuredState: true },
		],
		"react/iframe-missing-sandbox": "error",
		"react/jsx-boolean-value": [
			"error",
			"never",
		],
		"react/jsx-closing-bracet-location": "error",
		"react/jsx-closing-tag-location": "error",
		"react/jsx-curly-brace-presence": [
			"error",
			"always",
		],
		"react/jsx-curly-newline": "error",
		"react/jsx-curly-spacing": [
			"error",
			{ when: "never", children: true },
		],
		"react/jsx-equals-spacing": "error",
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [
					".tsx",
					".jsx",
				],
			},
		],
		"react/jsx-first-prop-new-line": [
			"error",
			"multiline-multiprop",
		],
		"react/jsx-fragments": "error",
		"react/jsx-handler-names": [
			"error",
			{
				eventHandlerPrefix: "handle",
				eventHandlerPropPrefix: "on",
				checkLocalVariables: true,
				checkInlineFunction: true,
			},
		],
		"react/jsx-indent": [
			"error",
			"tab",
			{ indentLogicalExpressions: true },
		],
		"react/jsx-indent-props": [
			"error",
			"tab",
		],
		"react/jsx-key": "error",
		"react/jsx-max-depth": [
			"warn",
			{ max: 5 },
		],
		"react/jsx-max-props-per-line": [
			"error",
			{ when: "multiline" },
		],
		"react/jsx-newline": "error",
		"react/jsx-no-bind": "error",
		"react/jsx-no-comment-textnodes": "error",
		"react/jsx-no-constructured-context-values": "error",
		"react/jsx-no-duplicate-props": "error",
		"react/jsx-no-leaked-render": "error",
		"react/jsx-no-script-url": "error",
		"react/jsx-no-target-blank": "error",
		"react/jsx-no-undef": "error",
		"react/jsx-no-useless-fragment": "error",
		"react/jsx-pascal-case": "error",
		"react/jsx-props-no-multi-spaces": "error",
		"react/jsx-tag-spacing": [
			"error",
			{
				closingSlash: "never",
				beforeSelfClosing: "always",
				afterOpening: "never",
				beforeClosing: "allow",
			},
		],
		"react/jsx-uses-vars": "error",
		"react/jsx-wrap-multilines": "error",
		"react/no-array-index-key": "error",
		"react/no-children-prop": "error",
		"react/no-danger": "error",
		"react/no-danger-with-children": "error",
		"react/no-deprecated": "error",
		"react/no-invalid-html-attribute": "error",
		"react/no-multi-comp": "warn",
		"react/no-namespace": "error",
		"react/no-object-type-as-default-prop": "error",
		"react/no-string-refs": "error",
		"react/no-this-in-sfc": "error",
		"react/no-typos": "error",
		"react/no-unescaped-entities": "error",
		"react/no-unknown-property": "error",
		"react/no-unsafe": "error",
		"react/no-unstable-nested-components": "error",
		"react/no-unused-prop-types": "error",
		"react/prefer-exact-props": "error",
		"react/prefer-stateless-functions": "error",
		"react/prop-types": "error",
		"react/self-closing-comp": "error",
		"react/style-prop-object": "error",
		"react/void-dom-elements-no-children": "error",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "error",
		"jsx-a11y/label-has-associated-control": [
			"error",
			{
				assert: "htmlFor",
			},
		],
	},
	overrides: [
		{
			files: ["**/slices/*.{js,ts,jsx,tsx}"],
			rules: {
				"no-param-reassign": "off",
			},
		},
		{
			files: [
				"**/setupTests.{js,ts}",
				"**/reportWebVitals.{js,ts}",
			],
			rules: {
				"import/no-extraneous-dependencies": [
					"error",
					{
						devDependencies: [
							"**/setupTests.{js,ts}",
							"**/reportWebVitals.{js,ts}",
						],
					},
				],
			},
		},
	],
};
