module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    ["eslint:recommended", "prettier"], //can add fix here later
    "plugin:react/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
