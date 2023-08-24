import baseConfig from "./base.config.js";
import reactConfig from "./react.config.js";
import testConfig from "./test.config.js";
import formatting from "./formatting-rules.js";

export default [
	...baseConfig, ...reactConfig, ...testConfig, {
		rules: {
			"no-shadow": "off",
			"no-use-before-define": "off",
			"no-underscore-dangle": "off",
			"import/extensions": "off",
			"import/no-named-as-default": "off",
			"import/no-named-as-default-member": "off",
			"no-restricted-exports": "off",
			...formatting,
		},
	},
];
