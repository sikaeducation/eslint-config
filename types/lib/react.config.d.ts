declare const _default: ({
    files: string[];
    plugins: {
        "react-hooks": any;
    };
    rules: any;
    settings: {
        react: {
            version: string;
        };
        "import/resolver": {
            typescript: {
                extensions: string[];
            };
            node: {
                extensions: string[];
            };
        };
        "import/parsers": {
            espree: string[];
            "@typescript-eslint/parser": string[];
        };
    };
} | {
    files: string[];
    rules: {
        "no-param-reassign": string;
    };
    plugins?: undefined;
    settings?: undefined;
})[];
export default _default;
