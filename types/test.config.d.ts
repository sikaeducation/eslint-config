declare const _default: ({
    files: string[];
    rules: {
        "import/no-extraneous-dependencies": (string | {
            devDependencies: string[];
        })[];
        "@typescript-eslint/no-var-requires"?: undefined;
        "func-names"?: undefined;
        "@typescript-eslint/ban-ts-comment"?: undefined;
        "testing-library/prefer-screen-queries"?: undefined;
    };
    plugins: {
        jest: any;
        storybook?: undefined;
        import?: undefined;
    };
} | {
    files: string[];
    rules: {
        "@typescript-eslint/no-var-requires": string;
        "import/no-extraneous-dependencies"?: undefined;
        "func-names"?: undefined;
        "@typescript-eslint/ban-ts-comment"?: undefined;
        "testing-library/prefer-screen-queries"?: undefined;
    };
    plugins?: undefined;
} | {
    files: string[];
    rules: {
        "func-names": string;
        "@typescript-eslint/ban-ts-comment": string;
        "testing-library/prefer-screen-queries": string;
        "import/no-extraneous-dependencies"?: undefined;
        "@typescript-eslint/no-var-requires"?: undefined;
    };
    plugins?: undefined;
} | {
    files: string[];
    rules: any;
    plugins: {
        storybook: any;
        import: any;
        jest?: undefined;
    };
})[];
export default _default;
