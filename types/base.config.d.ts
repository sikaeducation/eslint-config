declare const _default: {
    files: string[];
    linterOptions: {
        reportUnusedDisableDirectives: boolean;
    };
    languageOptions: {
        globals: any;
        parser: any;
        parserOptions: {
            ecmaFeatures: {
                modules: boolean;
                jsx: boolean;
            };
        };
    };
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": string[];
        };
        "import/resolver": {
            typescript: {};
        };
    };
    plugins: {
        import: any;
        "@typescript-eslint": {
            configs: Record<string, import("@typescript-eslint/utils/dist/ts-eslint/Linter").Linter.Config>;
            rules: import("@typescript-eslint/eslint-plugin/rules").TypeScriptESLintRules;
        };
        prettier: ESLint.Plugin;
    };
    rules: any;
}[];
export default _default;
