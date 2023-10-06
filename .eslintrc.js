module.exports = {
  overrides: [
    require("@sikaeducation/eslint-config/js"),
    {
      files: ["**/*.js"],
      rules: {
        "import/no-unresolved": "off",
      },
      plugins: ["import"],
    },
  ],
};
