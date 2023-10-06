const jsxIndent = require("eslint-plugin-react/lib/rules/jsx-indent");

/* eslint-disable max-lines */
module.exports = {
  files: [
    "**/*",
  ],
  rules: {
    "array-bracket-newline": [
      "error",
      {
        multiline: true,
        minItems: 1,
      },
    ],
    "array-bracket-spacing": [
      "error",
    ],
    "array-element-newline": [
      "error",
    ],
    "arrow-parens": [
      "error",
      "always",
    ],
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "block-spacing": [
      "error",
      "always",
    ],
    "brace-style": [
      "error",
      "1tbs",
    ],
    "space-before-blocks": [
      "off",
      {
        functions: "never",
        keywords: "always",
        classes: "always",
      },
    ],
    "comma-style": [
      "error",
      "last",
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    "computed-property-spacing": [
      "error",
      "never",
    ],
    "dot-location": [
      "error",
      "property",
    ],
    "eol-last": [
      "error",
      "always",
    ],
    "func-call-spacing": [
      "error",
      "never",
    ],
    "function-call-argument-newline": [
      "error",
    ],
    "function-paren-newline": [
      "error",
    ],
    "generator-star-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "implicit-arrow-linebreak": [
      "error",
      "beside",
    ],
    "indent": [
      "error",
      "tab",
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
      },
    ],
    "jsx-quotes": [
      "error",
      "prefer-double",
    ],
    "key-spacing": "error",
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "line-comment-position": "off",
    "linebreak-style": [
      "error",
      "unix",
    ],
    "lines-around-code": "off",
    "lines-between-class-members": [
      "error",
      "always",
    ],
    "max-len": [
      "warn",
      {
        code: 100,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "max-statements": [
      "warn",
      12,
    ],
    "max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
    "multiline-ternary": [
      "error",
      "always",
    ],
    "new-parens": [
      "error",
      "always",
    ],
    "newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 1,
      },
    ],
    "no-extra-parens": [
      "off",
      "all",
      {
        conditionalAssign: true,
        returnAssign: true,
        nestedBinaryExpressions: true,
        ternaryOperandBinaryExpressions: true,
        ignoreJSX: "all", // delegate to eslint-plugin-react
        enforceForArrowConditionals: true,
        enforceForSequenceExpressions: true,
        enforceForNewInMemberExpressions: true,
      },
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": [
      "error",
      {
        ignoreEOLComments: false,
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    "no-tabs": "off",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": [
      "error",
      "beside",
    ],
    "object-curly-newline": [
      "error",
      "always",
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    "object-property-newline": "error",
    "operator-linebreak": [
      "error",
      "before",
    ],
    "padded-blocks": [
      "error",
      "never",
    ],
    "quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    "rest-spread-spacing": [
      "error",
      "never",
    ],
    "semi": "error",
    "semi-spacing": "error",
    "space-before-function-paren": [
      "error",
      "never",
    ],
    "space-in-parens": [
      "error",
      "never",
    ],
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
        overrides: {
        },
      },
    ],
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "wrap-iife": [
      "error",
      "outside",
      {
        functionPrototypeMethods: false,
      },
    ],
    "yield-star-spacing": [
      "error",
      "after",
    ],
  },
};
