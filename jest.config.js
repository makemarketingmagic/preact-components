module.exports = {
    verbose: true,
    "setupTestFrameworkScriptFile": "./test/setup.js",
    "testURL": "http://localhost:8080",
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
    "snapshotSerializers": [
        "jest-serializer-html-string"
    ],
    "moduleDirectories": [
        "node_modules"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy",
        "^react-dom/server$": "<rootDir>/node_modules/preact-render-to-string/dist/index.js",
        "^react-addons-test-utils$": "<rootDir>/node_modules/preact-test-utils/lib/index.js",
        "^react$": "<rootDir>/node_modules/preact-compat-enzyme/lib/index.js",
        "^react-dom$": "<rootDir>/node_modules/preact-compat-enzyme/lib/index.js"
    },
    "collectCoverageFrom": [
        "src/**/*.{js,jsx}"
    ]
};