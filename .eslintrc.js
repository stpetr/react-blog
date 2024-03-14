module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  "extends": [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:storybook/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true,
      },
      "files": [
        ".eslintrc.{js,cjs}",
      ],
      "parserOptions": {
        "sourceType": "script",
      },
    },
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": './tsconfig.json',
    "tsconfigRootDir": __dirname,
  },
  "plugins": [
    "react",
    "i18next",
    "react-hooks",
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-exports": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/comma-dangle": ["error", "only-multiline"],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/space-before-function-paren": "off",
    "i18next/no-literal-string": ["error", { markupOnly: true }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
}
