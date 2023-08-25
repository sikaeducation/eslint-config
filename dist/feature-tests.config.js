"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
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
];
