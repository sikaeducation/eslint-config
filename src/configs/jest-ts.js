module.exports = {
  extends: ["./ts", "./jest"],
  overrides: [
    {
      files: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
      env: {
        "jest/globals": true,
      },
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
          },
        ],
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-floating-promises": "off",
      },
    },
    {
      files: ["**/features/**/*.{ts,tsx}"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: ["**/features/**/*.{ts,tsx}"],
          },
        ],
      },
    },
  ],
};
