import pluginJest from "eslint-plugin-jest"
import pluginStorybook from "eslint-plugin-storybook"
import importPlugin from "eslint-plugin-import"

export default [{
	files: [
		"**/*.{test,spec}.{ts,tsx,js,jsx}",
		"**/features/**/*.{ts,tsx}",
		"**/setupTests.{js,ts}",
		"**/reportWebVitals.{js,ts}",
	],
	rules: {
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: [
					"**/*.{test,spec}.{ts,tsx,js,jsx}",
					"**/features/**/*.{ts,tsx}",
					"**/setupTests.{js,ts}",
					"**/reportWebVitals.{js,ts}",
				],
			},
		],
	},
	plugins: {
		jest: pluginJest,
	},
},
{
	files: ["**/features/**/*.ts"],
	rules: {
		"func-names": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"testing-library/prefer-screen-queries": "off",
	},
},
{
	files: ["**/*.stories.*", "**/*.mdx"],
	rules: {
		...pluginStorybook.configs.recommended.rules,
		"import/no-anonymous-default-export": "off",
		"react/function-component-definition": "off",
		"react/jsx-props-no-spreading": "off",
		"import/no-extraneous-dependencies": "off",
		"@typescript-eslint/no-empty-function": "off",
		"no-console": "off",
		"react/jsx-filename-extension": "off",
		"react/destructuring-assignment": "off",
	},
	plugins: {
		storybook: pluginStorybook,
		"import": importPlugin,
	},
},
]
