module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",

        "plugin:prettier/recommended",
        "plugin:ramda/recommended",
        "plugin:promise/recommended",
        "plugin:functional/external-recommended",
        "plugin:functional/all",
        "plugin:security/recommended",
        "plugin:jest/all",
        "plugin:jest-dom/recommended",
    ],
    plugins: [
        "svelte3",
        "@typescript-eslint",
        "ramda",
        "promise",
        "functional",
        "jest",
        "jest-async",
        "jest-dom",
        "prettier",
        "only-error",
        "security",
    ],

    rules: {
        "@typescript-eslint/explicit-function-return-type": 2,
        "jest-async/expect-return": 2,
        "no-undef": 2,
        "import/no-extraneous-dependencies": ["error", { packageDir: "./" }],

        "functional/functional-parameters": [
            2,
            {
                allowRestParameter: false,
                allowArgumentsKeyword: false,
                enforceParameterCount: false,
            },
        ],
        "no-underscore-dangle": ["error", { allow: ["__"] }],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: ["snake_case"],
            },
            {
                selector: "typeLike",
                format: ["UPPER_CASE"],
            },
        ],
    },
    overrides: [
        {
            files: ["*.test.ts"],
            rules: {
                "functional/no-expression-statement": 0,
            },
        },
    ],

    ignorePatterns: ["*.cjs", "svelte.config.js"],
    overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
    settings: {
        "svelte3/typescript": () => require("typescript"),
    },
    parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: 2019,
    },
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
};
