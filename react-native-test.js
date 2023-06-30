module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      "react-native/react-native": true,
    },
    plugins: ["react", "react-native"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "@react-native-community",
      "airbnb-typescript",
      "prettier",
    ],
    rules: {
      "react-native/no-unused-styles": 2,
      "react-native/split-platform-components": 2,
      "react-native/no-color-literals": 2,
      "react-native/no-raw-text": 2,
      "react-native/sort-styles": [
        "error",
        "asc",
        {
          ignoreClassNames: false,
          ignoreStyleProperties: false,
        },
      ],
      "import/extensions": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "import/no-extraneous-dependencies": "off",
      "no-lone-blocks": "off",
      "react-native/no-inline-styles": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  };
  