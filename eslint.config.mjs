import { FlatCompat } from "@eslint/eslintrc";

import tsParser from "@typescript-eslint/parser";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  { ignores: [".next", "src/initial"] },
  { files: ["**/*.{mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
    },
  },
  ...compat.config({
    extends: [
      "next",
      "next/typescript",
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:prettier/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "plugin:jsx-a11y/recommended",
    ],
    plugins: ["prettier", "react", "react-hooks", "import", "jsx-a11y"],
  }),
  {
    settings: {
      react: { version: "detect" },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: { alwaysTryTypes: true },
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "off",
      eqeqeq: ["error", "smart"],
      "import/extensions": [
        "error",
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "import/named": "off",
      "import/no-unresolved": "error",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "import/order": [
        2,
        {
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            orderImportKind: "asc",
            caseInsensitive: true,
          },
          distinctGroup: false,
          groups: [
            "builtin",
            "external",
            "type",
            "internal",
            ["parent", "sibling", "index"],
            "object",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@mui/**",
              group: "external",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
        },
      ],
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
      "no-unused-expressions": "error",
      "no-alert": "error",
      "no-console": ["error", { allow: ["info", "error", "warn"] }],
      "no-duplicate-imports": "error",
      "no-unused-vars": "off",
      "no-use-before-define": "off",
      "no-useless-constructor": "error",
      "padding-line-between-statements": [
        2,
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "any", prev: "directive", next: "directive" },
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
        { blankLine: "always", prev: "export", next: "*" },
        { blankLine: "any", prev: "export", next: "export" },
        { blankLine: "always", prev: "*", next: "block" },
        { blankLine: "always", prev: "block", next: "*" },
        { blankLine: "always", prev: "*", next: "multiline-block-like" },
        { blankLine: "always", prev: "multiline-block-like", next: "*" },
        { blankLine: "always", prev: "*", next: "multiline-expression" },
        {
          blankLine: "any",
          prev: "expression",
          next: "multiline-expression",
        },
        { blankLine: "always", prev: "multiline-expression", next: "*" },
        {
          blankLine: "any",
          prev: "multiline-expression",
          next: "expression",
        },
        { blankLine: "always", prev: "cjs-import", next: "*" },
        { blankLine: "any", prev: "cjs-import", next: "cjs-import" },
        { blankLine: "always", prev: "cjs-export", next: "*" },
        { blankLine: "any", prev: "cjs-export", next: "cjs-export" },
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".js", "jsx", ".ts", ".tsx"] },
      ],
      "react/jsx-uses-react": "error",
      "react/react-in-jsx-scope": 0,
      semi: ["error", "always"],
      "sort-imports": [
        2,
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
          allowSeparatedGroups: true,
        },
      ],
    },
  },
];

export default eslintConfig;
