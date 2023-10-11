module.exports = {
  plugins: ["storybook"],
  extends: ["plugin:storybook/recommended"],
  overrides: [
    {
      files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      rules: {
        "react/jsx-filename-extension": [
          "error",
          {
            extensions: [".mdx", ".jsx", ".tsx"],
          },
        ],
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: ["**/*.stories.*", "**/*.mdx"],
          },
        ],
      },
    },
  ],
};
