"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const eslint_plugin_storybook_1 = __importDefault(require("eslint-plugin-storybook"));
const eslint_mdx_1 = __importDefault(require("eslint-mdx"));
const compat_js_1 = __importDefault(require("./compat.js"));
exports.default = [
    ...compat_js_1.default.extends("plugin:mdx/recommended"),
    {
        files: ["**/*.{md,mdx}"],
        ...compat_js_1.default.plugins("mdx"),
        rules: {
            "mdx/remark": "error",
        },
        settings: {
            "mdx/code-block": true,
            "import/parsers": {
                espree: [
                    ".js",
                    ".cjs",
                    ".mjs",
                    ".jsx",
                ],
                "@typescript-eslint/parser": [".ts", ".tsx"],
            },
            "import/resolver": {
                typescript: {
                    extensions: [".ts", ".tsx"],
                },
                node: {
                    extensions: [".js", ".jsx"],
                },
            },
        },
        languageOptions: {
            sourceType: "module",
            ecmaVersion: "latest",
            parser: eslint_mdx_1.default,
            globals: {
                React: false,
            },
        },
    },
    {
        files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
        ...compat_js_1.default.plugins("storybook"),
        rules: {
            ...eslint_plugin_storybook_1.default.configs.recommended.rules,
            "react/jsx-filename-extension": [
                "error",
                {
                    extensions: [
                        ".mdx",
                        ".jsx",
                        ".tsx",
                    ],
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
    {
        files: [".storybook/test-runner.js"],
        rules: {
            "@typescript-eslint/no-var-requires": "off",
        },
    },
];
