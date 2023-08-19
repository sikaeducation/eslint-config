import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginJSXA11y from "eslint-plugin-jsx-a11y"

export default [{
	files: ["**/*.{tsx,jsx}"],
	plugins: {
		pluginReact,
		pluginReactHooks,
		pluginJSXA11y,
	},
	rules: {
		...pluginReact.configs.recommended.rules,
		...pluginReactHooks.configs.recommended.rules,
		...pluginJSXA11y.configs.recommended.rules,
		"react/react-in-jsx-scope": "off",
		"react/require-default-props": "off",
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".tsx", ".jsx"],
			},
		],
		"jsx-a11y/label-has-associated-control": [
			"error",
			{
				assert: "htmlFor",
			},
		],
	},
}, {
	files: ["**/slices/*.ts"],
	rules: {
		"no-param-reassign": "off",
	},
}]