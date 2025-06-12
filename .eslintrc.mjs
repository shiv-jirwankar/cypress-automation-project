export default {
  root: true,
  env: {
    node: true,
    es2022: true,
    "cypress/globals": true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "cypress"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:cypress/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // General rules
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "prefer-const": "error",
    "no-var": "error",
    eqeqeq: ["error", "always"],
    curly: ["error", "all"],
    "max-lines-per-function": ["warn", { max: 50 }],
    complexity: ["warn", 10],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "cypress/no-unnecessary-waiting": "error",
  },
  ignorePatterns: [
    "dist/",
    "node_modules/",
    "cypress/videos/",
    "cypress/screenshots/",
  ],
};
