module.exports = {
    //testEnvironment: "node",
    // Performance optimazation
    cacheDirectory: "./.cache",
    maxWorkers: 3,
    testTimeout: 20000,
    testEnvironmentOptions: {
        "jest-playwright": {
            browsers: ["chromium"],
            launchOptions: {
                // executablePath: process.env.PLAYWRIGHT_CHROME_EXECUTABLE_PATH,
                chromium: {
                    headless: true,
                    executablePath: "/home/x/.guix-profile/bin/chromium",
                },
            },
        },
    },
    verbose: true,
    errorOnDeprecated: true,
    preset: "jest-playwright-preset",
    bail: 1,
    watchPlugins: [
        ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
        ["jest-watch-repeat", { key: "r", prompt: "repeat test runs." }],
        [
            "jest-watch-continue",
            {
                key: "n",
                prompt: "start continue mode",
            },
        ],
        [
            "jest-watch-random",
            { key: "R", prompt: "randomly pick some test suites to run" },
        ],
        [
            "jest-watch-suspend",
            {
                // override key press
                key: "s",
                // override prompt
                prompt: "suspend watch mode",
                // starts in suspend mode
                "suspend-on-start": true,
            },
        ],
    ],

    transform: {
        "^.+\\.svelte$": [
            "svelte-jester",
            {
                preprocess: "./svelte.config.js",
            },
        ],
        "^.+\\.ts$": "ts-jest",
        "^.+\\.js$": "ts-jest",
    },
    moduleFileExtensions: ["js", "ts", "svelte"],
    moduleNameMapper: {
        "^\\$lib(.*)$": "<rootDir>/src/lib$1",
        "^\\$app(.*)$": [
            "<rootDir>/.svelte-kit/dev/runtime/app$1",
            "<rootDir>/.svelte-kit/build/runtime/app$1",
        ],
    },
    setupFilesAfterEnv: [
        // "@testing-library/jest-dom/extend-expect",
        "<rootDir>/jest-setup.ts",
    ],
};
