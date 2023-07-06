# Empathy ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies

NPM
```
npm i -D eslint @empathy-company/eslint-config
```
YARN
```
yarn add -D eslint @empathy-company/eslint-config
```


2. Create a `.eslintrc.json` file extending the config:

```
{
  "extends": "@empathy-company/eslint-config/node"
//  "extends": "@empathy-company/eslint-config/react"
//  "extends": "@empathy-company/eslint-config/react-native"
//  "extends": "@empathy-company/eslint-config/next"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
