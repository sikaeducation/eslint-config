module.exports = {
  extends: ["./ts", "./react"],
  overrides: [
    {
      files: ["**/slices/*.{ts,tsx}"],
      rules: {
        "no-param-reassign": "off",
      },
    },
    {
      files: ["**/setupTests.ts", "**/reportWebVitals.ts"],
      rules: {
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            ts: "never",
            tsx: "never",
          },
        ],
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: ["**/setupTests.ts", "**/reportWebVitals.ts"],
          },
        ],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "react/jsx-filename-extension": [
          "warn",
          {
            extensions: [".tsx"],
          },
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
      },
    },
  ],
};
