import pluginJest from "eslint-plugin-jest";
import pluginStorybook from "eslint-plugin-storybook";
import * as mdx from "eslint-plugin-mdx";

export default [
  {
    files: [
      "**/*.{test,spec}.{ts,tsx,js,jsx}",
      "**/features/**/*.{ts,tsx}",
      "**/setupTests.{js,ts}",
      "**/reportWebVitals.{js,ts}",
      "**/*.{mdx}",
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
    files: ["**/test-runner.js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
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
    files: ["**/*.{md,mdx}"],
    languageOptions: {
      ...mdx.flat.languageOptions,
    },
    plugins: {
      ...mdx.flat.plugins,
    },
    rules: {
      ...mdx.flat.rules,
    },
    // 	processor: mdx.createRemarkProcessor({
    // 		// lintCodeBlocks: true,
    // 	}),
    // },
    // {
    // 	...mdx.flatCodeBlocks,
    // 	rules: {
    // 		...mdx.flatCodeBlocks.rules,
    // 	},
  },
  {
    files: ["**/*.stories.*", "**/*.mdx"],
    rules: {
      ...pluginStorybook.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".mdx"],
        },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: ["**/*.stories.*", "**/*.mdx"],
        },
      ],
    },
    plugins: {
      storybook: pluginStorybook,
    },
  },
];
