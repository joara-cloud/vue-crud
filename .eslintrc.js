module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-console": "off",
    // "prettier/prettier": ['error', { // 이 규칙이 맞지않으면 error를 표시함
    //   singleQuote: true, // 문자열은 작은따옴표
    //   semi: true, // 세미콜론
    //   useTabs: true,
    //   tabWidth: 2,
    //   trailingComma: 'all',
    //   printWidth: 80,
    //   bracketSpacing: true,
    //   arrowParens: 'avoid'
    // }]
    
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
