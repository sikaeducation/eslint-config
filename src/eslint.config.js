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
];
