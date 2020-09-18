// http://eslint.org/docs/user-guide/configuring

// module.exports = {
//   root: true,
//   parser: "babel-eslint",
//   parserOptions: {
//     sourceType: "module"
//   },
//   env: {
//     browser: true
//   },
//   // required to lint *.vue files
//   // plugins: [
//   //   'html'
//   // ],
//   // add your custom rules here
//   rules: {
//     // allow debugger during development
//     "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
//   }
// };

module.exports = {
  root: false,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard", "@vue/typescript"],
  rules: {
    strict: "off",
    "no-console": "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // "sort-imports": "error",
    "space-before-function-paren": 1,
    quotes: [2, "single", { avoidEscape: true }],
    "vue/no-unused-components": "warn",
    "sort-imports": "warn",
    camelcase: "warn",
    "vue/valid-template-root": "warn",
    "indent": ["warn", 2],
    "eqeqeq": "warn",
    "handle-callback-err": "warn",
    "prefer-promise-reject-errors": "warn",
    "no-unused-vars": "warn",
    "no-undef": "warn",
    "new-cap": "warn",
    "vue/return-in-computed-property": "warn",
    "vue/require-v-for-key": "warn",
    "vue/no-side-effects-in-computed-properties": "warn",
    "vue/valid-v-for": "warn",
    "no-mixed-operators": "warn",
    "vue/no-parsing-error": "warn"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  overrides: [
    {
      files: ["*.js", "*.vue"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
};
