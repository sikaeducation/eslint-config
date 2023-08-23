import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import baseConfig from "./base.config.js";
import reactConfig from "./react.config.js";
import testConfig from "./test.config.js";

export default [
  ...baseConfig,
  ...reactConfig,
  ...testConfig,
  configPrettier,
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      ...pluginPrettier.configs.recommended.rules,
    },
  },
  {
    rules: {
      quotes: ["error", "double"],
      "no-shadow": "off",
      "no-use-before-define": "off",
      "no-underscore-dangle": "off",
      "import/extensions": "off",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "no-restricted-exports": "off",
    },
  },
];
