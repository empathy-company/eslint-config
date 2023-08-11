module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 4,
        useTabs: true,
        endOfLine: 'auto',
        singleQuote: false,
        trailingComma: "all",
        semi: true,
        arrowParens: 'always',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-interface': 'off', // disable rule
    '@typescript-eslint/no-unused-vars': 'off', //disable rule
    indent: ['error', 'tab'],
    'linebreak-style': ['off'],
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: false }],
    'semi-style': 'error',
    'no-duplicate-imports': 'error',
    'array-bracket-spacing': 'error',
    'space-in-parens': 'error',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'no-irregular-whitespace': 'error',
    'brace-style': ['error', '1tbs'],
    'arrow-body-style': 'error',
    'multiline-comment-style': ['error', 'separate-lines'],
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-implicit-coercion': 'warn',
    yoda: 'error',
    'no-unneeded-ternary': 'warn',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'block-spacing': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'dot-location': ['error', 'object'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [
      'error',
      {
        minProperties: 3,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'rest-spread-spacing': ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'template-curly-spacing': ['error', 'never'],
  },
};
