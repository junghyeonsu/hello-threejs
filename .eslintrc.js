module.exports = {
  plugins: ["@junghyeonsu"],
  extends: ["plugin:@junghyeonsu/auto"],
  rules: {
    "no-undef": "off",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    es6: true,
  },
};
