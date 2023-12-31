module.exports = {
  plugins: ["playwright"],
  extends: ["plugin:playwright/recommended"],
  overrides: [
    {
      files: ["**/*.{test,spec,stories}.{js,jsx,ts,tsx}"],
      rules: {
        "no-empty-pattern": "off",
        "playwright/expect-expect": "warn",
        "playwright/max-nested-describe": "warn",
        "playwright/missing-playwright-await": "error",
        "playwright/no-conditional-in-test": "warn",
        "playwright/no-element-handle": "warn",
        "playwright/no-eval": "warn",
        "playwright/no-focused-test": "error",
        "playwright/no-force-option": "warn",
        "playwright/no-nested-step": "warn",
        "playwright/no-networkidle": "error",
        "playwright/no-page-pause": "warn",
        "playwright/no-skipped-test": "warn",
        "playwright/no-useless-await": "warn",
        "playwright/no-useless-not": "warn",
        "playwright/no-wait-for-timeout": "warn",
        "playwright/prefer-web-first-assertions": "error",
        "playwright/valid-expect": "error",
      },
    },
  ],
};
