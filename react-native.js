module.exports = {
  root: true,
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": latest,
    "sourceType": "module"
  },
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  rules: {
    'import/extensions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-lone-blocks': 'off',
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
