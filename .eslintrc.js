module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
    // enable additional rules
        "indent": ["error", 4,],
        "linebreak-style": ["error", "unix",],
        "quotes": ["error", "double",],
        "semi": ["error", "always",],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always",],
        "no-cond-assign": ["error", "always",],

        // disable rules from base configurations
        "no-console": "off",
    },
};
