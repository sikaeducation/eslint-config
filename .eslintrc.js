module.exports = {
  extends: ["@sikaeducation/eslint-config"],
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "import/no-unresolved": "off",
      },
      plugins: ["import"],
    },
  ],
};
