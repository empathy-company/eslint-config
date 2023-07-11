module.exports = {
    "parser": "@typescript-eslint/parser",
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
    },
    env: {
        browser: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
    }
}