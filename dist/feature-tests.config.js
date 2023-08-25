export default [
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
