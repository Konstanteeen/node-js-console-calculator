module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base/legacy",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        "node/no-unpublished-require": 0,
        "jsdoc/no-undefined-types": 1,
        "no-restricted-syntax": 1,
        "no-await-in-loop": 0,
    }
};
