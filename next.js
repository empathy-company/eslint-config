module.exports = {
    "extends": [
        "eslint:recommended",
        'plugin:@next/next/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 80,
                tabWidth: 2,
                endOfLine: 'auto',
                singleQuote: false,
                trailingComma: "all",
                semi: true,
                arrowParens: 'always',
            },
        ],
    }
}