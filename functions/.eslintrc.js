/* eslint linebreak-style: ["error", "windows"] */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    indent: "off",
    quotes: ["error", "double"],
    undefined: "off",
  },
};
