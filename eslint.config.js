import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import pluginTSLint from "@typescript-eslint/recommended";
import baseConfig from "./base.config"
import reactConfig from "./react.config"
import testConfig from "./test.config"
import configAirbnb from "eslint-config-airbnb";

export default [
	configAirbnb,
	pluginTSLint.configs.recommended,
	...baseConfig,
	...reactConfig,
	...testConfig,
	{
		plugins: [pluginPrettier]
	},
	configPrettier.configs.recommended
]
