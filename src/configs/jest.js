module.exports = {
  plugins: ["jest", "jest-formatting", "jest-extended"],
  extends: ["plugin:jest/recommended"],
  overrides: [
    {
      files: [
        "**/features/**/*.{js,jsx,ts,tsx}",
        "**/*.{test,spec,stories}.{js,jsx,ts,tsx}",
      ],
      env: {
        "jest/globals": true,
      },
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: [
              "**/features/**/*.{ts,tsx,js,jsx}",
              "**/*.{test,spec,stories}.{ts,tsx,js,jsx}",
            ],
          },
        ],
        "jest/expect-expect": "error",
        "jest/no-alias-methods": "error",
        "jest/no-commented-out-tests": "error",
        "jest/no-conditional-expect": "error",
        "jest/no-conditional-in-test": "error",
        "jest/no-deprecated-functions": "error",
        "jest/no-disabled-tests": "warn",
        "jest/no-done-callback": "error",
        "jest/no-duplicate-hooks": "error",
        "jest/no-export": "error",
        "jest/no-identical-title": "error",
        "jest/no-interpolation-in-snapshots": "error",
        "jest/no-mocks-import": "error",
        "jest/no-jasmine-globals": "error",
        "jest/no-test-return-statement": "error",
        "jest/no-untyped-mock-factory": "error",
        "jest/prefer-called-with": "error",
        "jest/prefer-comparison-matcher": "error",
        "jest/prefer-each": "error",
        "jest/prefer-equality-matcher": "error",
        "jest/prefer-expect-assertions": [
          "error",
          {
            onlyFunctionsWithAsyncKeyword: true,
            onlyFunctionsWithExpectInLoop: true,
            onlyFunctionsWithExpectInCallback: true,
          },
        ],
        "jest/prefer-expect-resolves": "error",
        "jest/prefer-hooks-in-order": "error",
        "jest/prefer-hooks-on-top": "error",
        "jest/prefer-mock-promise-shorthand": "error",
        "jest/prefer-spy-on": "error",
        "jest/prefer-to-be": "error",
        "jest/prefer-to-contain": "error",
        "jest/prefer-to-have-length": "error",
        "jest/valid-describe-callback": "error",
        "jest/valid-expect": "error",
        "jest/valid-expect-in-promise": "error",
        "jest/valid-title": "error",
        "jest/unbound-method": "error",
        "jest-formatting/padding-around-after-all-blocks": "error",
        "jest-formatting/padding-around-after-each-blocks": "error",
        "jest-formatting/padding-around-before-all-blocks": "error",
        "jest-formatting/padding-around-before-each-blocks": "error",
        "jest-formatting/padding-around-describe-blocks": "error",
        "jest-formatting/padding-around-test-blocks": "error",
        "jest-extended/prefer-to-be-array": "error",
        "jest-extended/prefer-to-be-object": "error",
        "jest-extended/prefer-to-be-false": "error",
        "jest-extended/prefer-to-be-true": "error",
        "jest-extended/prefer-to-have-been-called-once": "error",
        "unbound-method": "off",
        "no-floating-promises": "off",
      },
    },
  ],
};