import parserTS from "@typescript-eslint/parser";
declare const _default: ({
    files: string[];
    rules: {
        'array-callback-return': (string | {
            allowImplicit: boolean;
        })[];
        complexity: (string | number)[];
        'class-methods-use-this': string;
        'consistent-return': string;
        curly: string[];
        'default-case-last': string;
        'default-param-last': string;
        'dot-notation': (string | {
            allowKeywords: boolean;
        })[];
        'dot-location': string[];
        eqeqeq: (string | {
            null: string;
        })[];
        'grouped-accessor-pairs': string;
        'no-alert': string;
        'no-caller': string;
        'no-case-declarations': string;
        'no-constructor-return': string;
        'no-div-regex': string;
        'no-else-return': (string | {
            allowElseIf: boolean;
        })[];
        'no-empty-function': (string | {
            allow: string[];
        })[];
        'no-eq-null': string;
        'no-eval': string;
        'no-extend-native': string;
        'no-extra-bind': string;
        'no-extra-label': string;
        'no-fallthrough': string;
        'no-floating-decimal': string;
        'no-global-assign': (string | {
            exceptions: never[];
        })[];
        'no-implicit-coercion': (string | {
            boolean: boolean;
            number: boolean;
            string: boolean;
            allow: never[];
        })[];
        'no-implicit-globals': string;
        'no-implied-eval': string;
        'no-invalid-this': string;
        'no-iterator': string;
        'no-labels': (string | {
            allowLoop: boolean;
            allowSwitch: boolean;
        })[];
        'no-lone-blocks': string;
        'no-loop-func': string;
        'no-magic-numbers': (string | {
            ignore: never[];
            ignoreArrayIndexes: boolean;
            enforceConst: boolean;
            detectObjects: boolean;
        })[];
        'no-multi-spaces': (string | {
            ignoreEOLComments: boolean;
        })[];
        'no-multi-str': string;
        'no-new': string;
        'no-new-func': string;
        'no-new-wrappers': string;
        'no-nonoctal-decimal-escape': string;
        'no-octal': string;
        'no-octal-escape': string;
        'no-param-reassign': (string | {
            props: boolean;
            ignorePropertyModificationsFor: string[];
        })[];
        'no-proto': string;
        'no-redeclare': string;
        'no-restricted-properties': (string | {
            object: string;
            property: string;
            message: string;
        } | {
            property: string;
            message: string;
            object?: undefined;
        })[];
        'no-return-assign': string[];
        'no-return-await': string;
        'no-script-url': string;
        'no-self-assign': (string | {
            props: boolean;
        })[];
        'no-self-compare': string;
        'no-sequences': string;
        'no-throw-literal': string;
        'no-unmodified-loop-condition': string;
        'no-unused-expressions': (string | {
            allowShortCircuit: boolean;
            allowTernary: boolean;
            allowTaggedTemplates: boolean;
        })[];
        'no-unused-labels': string;
        'no-useless-call': string;
        'no-useless-catch': string;
        'no-useless-concat': string;
        'no-useless-escape': string;
        'no-useless-return': string;
        'no-void': string;
        'no-warning-comments': (string | {
            terms: string[];
            location: string;
        })[];
        'no-with': string;
        'prefer-promise-reject-errors': (string | {
            allowEmptyReject: boolean;
        })[];
        'prefer-object-has-own': string;
        'prefer-regex-literals': (string | {
            disallowRedundantWrapping: boolean;
        })[];
        'wrap-iife': (string | {
            functionPrototypeMethods: boolean;
        })[];
        yoda: string;
        'for-direction': string;
        'getter-return': (string | {
            allowImplicit: boolean;
        })[];
        'no-async-promise-executor': string;
        'no-await-in-loop': string;
        'no-compare-neg-zero': string;
        'no-cond-assign': string[];
        'no-console': string;
        'no-constant-condition': string;
        'no-control-regex': string;
        'no-debugger': string;
        'no-dupe-args': string;
        'no-dupe-else-if': string;
        'no-dupe-keys': string;
        'no-duplicate-case': string;
        'no-empty': string;
        'no-ex-assign': string;
        'no-extra-boolean-cast': string;
        'no-extra-parens': (string | {
            conditionalAssign: boolean;
            nestedBinaryExpressions: boolean;
            returnAssign: boolean;
            ignoreJSX: string;
            enforceForArrowConditionals: boolean;
        })[];
        'no-extra-semi': string;
        'no-func-assign': string;
        'no-import-assign': string;
        'no-invalid-regexp': string;
        'no-irregular-whitespace': string;
        'no-loss-of-precision': string;
        'no-misleading-character-class': string;
        'no-obj-calls': string;
        'no-promise-executor-return': string;
        'no-prototype-builtins': string;
        'no-regex-spaces': string;
        'no-setter-return': string;
        'no-sparse-arrays': string;
        'no-template-curly-in-string': string;
        'no-unexpected-multiline': string;
        'no-unreachable': string;
        'no-unreachable-loop': (string | {
            ignore: never[];
        })[];
        'no-unsafe-finally': string;
        'no-unsafe-negation': string;
        'no-unsafe-optional-chaining': (string | {
            disallowArithmeticOperators: boolean;
        })[];
        'no-unused-private-class-members': string;
        'no-useless-backreference': string;
        'use-isnan': string;
        'valid-jsdoc': string;
        'valid-typeof': (string | {
            requireStringLiterals: boolean;
        })[];
        'arrow-body-style': (string | {
            requireReturnForObjectLiteral: boolean;
        })[];
        'arrow-parens': string[];
        'arrow-spacing': (string | {
            before: boolean;
            after: boolean;
        })[];
        'constructor-super': string;
        'generator-star-spacing': (string | {
            before: boolean;
            after: boolean;
        })[];
        'no-class-assign': string;
        'no-confusing-arrow': (string | {
            allowParens: boolean;
        })[];
        'no-const-assign': string;
        'no-dupe-class-members': string;
        'no-new-symbol': string;
        'no-restricted-exports': (string | {
            restrictedNamedExports: string[];
        })[];
        'no-this-before-super': string;
        'no-useless-computed-key': string;
        'no-useless-constructor': string;
        'no-useless-rename': (string | {
            ignoreDestructuring: boolean;
            ignoreImport: boolean;
            ignoreExport: boolean;
        })[];
        'no-var': string;
        'object-shorthand': (string | {
            ignoreConstructors: boolean;
            avoidQuotes: boolean;
        })[];
        'prefer-arrow-callback': (string | {
            allowNamedFunctions: boolean;
            allowUnboundThis: boolean;
        })[];
        'prefer-const': (string | {
            destructuring: string;
            ignoreReadBeforeAssign: boolean;
        })[];
        'prefer-destructuring': (string | {
            VariableDeclarator: {
                array: boolean;
                object: boolean;
            };
            AssignmentExpression: {
                array: boolean;
                object: boolean;
            };
            enforceForRenamedProperties?: undefined;
        } | {
            enforceForRenamedProperties: boolean;
            VariableDeclarator?: undefined;
            AssignmentExpression?: undefined;
        })[];
        'prefer-numeric-literals': string;
        'prefer-reflect': string;
        'prefer-rest-params': string;
        'prefer-spread': string;
        'prefer-template': string;
        'require-yield': string;
        'rest-spread-spacing': string[];
        'sort-imports': (string | {
            ignoreCase: boolean;
            ignoreDeclarationSort: boolean;
            ignoreMemberSort: boolean;
            memberSyntaxSortOrder: string[];
        })[];
        'symbol-description': string;
        'template-curly-spacing': string;
        'yield-star-spacing': string[];
        'import/no-unresolved': string;
        'import/named': string;
        'import/default': string;
        'import/namespace': string;
        'import/export': string;
        'import/no-named-as-default': string;
        'import/no-extraneous-dependencies': (string | {
            devDependencies: string[];
            optionalDependencies: boolean;
        })[];
        'import/no-mutable-exports': string;
        'import/no-commonjs': string;
        'import/no-amd': string;
        'import/first': string;
        'import/no-duplicates': string;
        'import/extensions': (string | {
            js: string;
            mjs: string;
            jsx: string;
        })[];
        'import/order': (string | {
            groups: string[][];
        })[];
        'import/newline-after-import': string;
        'import/prefer-default-export': string;
        'import/no-restricted-paths': string;
        'import/no-absolute-path': string;
        'import/no-dynamic-require': string;
        'import/no-internal-modules': (string | {
            allow: never[];
        })[];
        'import/no-webpack-loader-syntax': string;
        'import/no-named-default': string;
        'import/no-self-import': string;
        'import/no-cycle': (string | {
            maxDepth: string;
        })[];
        'import/no-useless-path-segments': (string | {
            commonjs: boolean;
        })[];
        'import/no-import-module-exports': (string | {
            exceptions: never[];
        })[];
        'import/no-relative-packages': string;
        'global-require': string;
        'handle-callback-err': string;
        'no-buffer-constructor': string;
        'no-mixed-requires': string;
        'no-new-require': string;
        'no-path-concat': string;
        'no-sync': string;
        camelcase: (string | {
            properties: string;
            ignoreDestructuring: boolean;
        })[];
        'comma-dangle': (string | {
            arrays: string;
            objects: string;
            imports: string;
            exports: string;
            functions: string;
        })[];
        'comma-spacing': (string | {
            before: boolean;
            after: boolean;
        })[];
        'comma-style': (string | {
            exceptions: {
                ArrayExpression: boolean;
                ArrayPattern: boolean;
                ArrowFunctionExpression: boolean;
                CallExpression: boolean;
                FunctionDeclaration: boolean;
                FunctionExpression: boolean;
                ImportDeclaration: boolean;
                ObjectExpression: boolean;
                ObjectPattern: boolean;
                VariableDeclaration: boolean;
                NewExpression: boolean;
            };
        })[];
        'computed-property-spacing': string[];
        'consistent-this': string;
        'function-call-argument-newline': string[];
        'func-call-spacing': string[];
        'func-name-matching': (string | {
            includeCommonJSModuleExports: boolean;
            considerPropertyDescriptor: boolean;
        })[];
        'func-names': string;
        'function-paren-newline': string[];
        'implicit-arrow-linebreak': string[];
        'max-lines': (string | {
            max: number;
            skipBlankLines: boolean;
            skipComments: boolean;
        })[];
        'max-lines-per-function': (string | {
            max: number;
            skipBlankLines: boolean;
            skipComments: boolean;
            IIFEs: boolean;
        })[];
        'max-params': (string | number)[];
        'max-statements': (string | number)[];
        'max-statements-per-line': (string | {
            max: number;
        })[];
        'new-cap': (string | {
            newIsCap: boolean;
            newIsCapExceptions: never[];
            capIsNew: boolean;
            capIsNewExceptions: string[];
        })[];
        'no-array-constructor': string;
        'no-bitwise': string;
        'no-mixed-operators': (string | {
            groups: string[][];
            allowSamePrecedence: boolean;
        })[];
        'no-multi-assign': string[];
        'no-multiple-empty-lines': (string | {
            max: number;
            maxBOF: number;
            maxEOF: number;
        })[];
        'no-new-object': string;
        'no-restricted-syntax': (string | {
            selector: string;
            message: string;
        })[];
        'no-underscore-dangle': (string | {
            allow: never[];
            allowAfterThis: boolean;
            allowAfterSuper: boolean;
            enforceInMethodNames: boolean;
        })[];
        'no-unneeded-ternary': (string | {
            defaultAssignment: boolean;
        })[];
        'no-whitespace-before-property': string;
        'operator-assignment': string[];
        'prefer-exponentiation-operator': string;
        'prefer-object-spread': string;
        'quote-props': (string | {
            keywords: boolean;
            unnecessary: boolean;
            numbers: boolean;
        })[];
        'space-infix-ops': string;
        'space-unary-ops': (string | {
            words: boolean;
            nonwords: boolean;
            overrides: {};
        })[];
        'spaced-comment': (string | {
            line: {
                exceptions: string[];
                markers: string[];
            };
            block: {
                exceptions: string[];
                markers: string[];
                balanced: boolean;
            };
        })[];
        'switch-colon-spacing': (string | {
            after: boolean;
            before: boolean;
        })[];
        'unicode-bom': string[];
        'wrap-regex': string;
        'no-delete-var': string;
        'no-label-var': string;
        'no-restricted-globals': (string | {
            name: string;
            message: string;
        })[];
        'no-shadow': string;
        'no-shadow-restricted-names': string;
        'no-undef': string;
        'no-undef-init': string;
        'no-undefined': string;
        'no-unused-vars': (string | {
            vars: string;
            args: string;
            ignoreRestSiblings: boolean;
        })[];
        'no-use-before-define': (string | {
            functions: boolean;
            classes: boolean;
            variables: boolean;
        })[];
    };
    languageOptions?: undefined;
    linterOptions?: undefined;
    settings?: undefined;
} | {
    files: string[];
    rules: {
        'import/no-unresolved': (string | {
            commonjs: boolean;
            caseSensitive: boolean;
        })[];
        "import/extensions": (string | {
            js: string;
        })[];
        'import/no-commonjs': string;
        'import/default': string;
        'array-callback-return'?: undefined;
        complexity?: undefined;
        'class-methods-use-this'?: undefined;
        'consistent-return'?: undefined;
        curly?: undefined;
        'default-case-last'?: undefined;
        'default-param-last'?: undefined;
        'dot-notation'?: undefined;
        'dot-location'?: undefined;
        eqeqeq?: undefined;
        'grouped-accessor-pairs'?: undefined;
        'no-alert'?: undefined;
        'no-caller'?: undefined;
        'no-case-declarations'?: undefined;
        'no-constructor-return'?: undefined;
        'no-div-regex'?: undefined;
        'no-else-return'?: undefined;
        'no-empty-function'?: undefined;
        'no-eq-null'?: undefined;
        'no-eval'?: undefined;
        'no-extend-native'?: undefined;
        'no-extra-bind'?: undefined;
        'no-extra-label'?: undefined;
        'no-fallthrough'?: undefined;
        'no-floating-decimal'?: undefined;
        'no-global-assign'?: undefined;
        'no-implicit-coercion'?: undefined;
        'no-implicit-globals'?: undefined;
        'no-implied-eval'?: undefined;
        'no-invalid-this'?: undefined;
        'no-iterator'?: undefined;
        'no-labels'?: undefined;
        'no-lone-blocks'?: undefined;
        'no-loop-func'?: undefined;
        'no-magic-numbers'?: undefined;
        'no-multi-spaces'?: undefined;
        'no-multi-str'?: undefined;
        'no-new'?: undefined;
        'no-new-func'?: undefined;
        'no-new-wrappers'?: undefined;
        'no-nonoctal-decimal-escape'?: undefined;
        'no-octal'?: undefined;
        'no-octal-escape'?: undefined;
        'no-param-reassign'?: undefined;
        'no-proto'?: undefined;
        'no-redeclare'?: undefined;
        'no-restricted-properties'?: undefined;
        'no-return-assign'?: undefined;
        'no-return-await'?: undefined;
        'no-script-url'?: undefined;
        'no-self-assign'?: undefined;
        'no-self-compare'?: undefined;
        'no-sequences'?: undefined;
        'no-throw-literal'?: undefined;
        'no-unmodified-loop-condition'?: undefined;
        'no-unused-expressions'?: undefined;
        'no-unused-labels'?: undefined;
        'no-useless-call'?: undefined;
        'no-useless-catch'?: undefined;
        'no-useless-concat'?: undefined;
        'no-useless-escape'?: undefined;
        'no-useless-return'?: undefined;
        'no-void'?: undefined;
        'no-warning-comments'?: undefined;
        'no-with'?: undefined;
        'prefer-promise-reject-errors'?: undefined;
        'prefer-object-has-own'?: undefined;
        'prefer-regex-literals'?: undefined;
        'wrap-iife'?: undefined;
        yoda?: undefined;
        'for-direction'?: undefined;
        'getter-return'?: undefined;
        'no-async-promise-executor'?: undefined;
        'no-await-in-loop'?: undefined;
        'no-compare-neg-zero'?: undefined;
        'no-cond-assign'?: undefined;
        'no-console'?: undefined;
        'no-constant-condition'?: undefined;
        'no-control-regex'?: undefined;
        'no-debugger'?: undefined;
        'no-dupe-args'?: undefined;
        'no-dupe-else-if'?: undefined;
        'no-dupe-keys'?: undefined;
        'no-duplicate-case'?: undefined;
        'no-empty'?: undefined;
        'no-ex-assign'?: undefined;
        'no-extra-boolean-cast'?: undefined;
        'no-extra-parens'?: undefined;
        'no-extra-semi'?: undefined;
        'no-func-assign'?: undefined;
        'no-import-assign'?: undefined;
        'no-invalid-regexp'?: undefined;
        'no-irregular-whitespace'?: undefined;
        'no-loss-of-precision'?: undefined;
        'no-misleading-character-class'?: undefined;
        'no-obj-calls'?: undefined;
        'no-promise-executor-return'?: undefined;
        'no-prototype-builtins'?: undefined;
        'no-regex-spaces'?: undefined;
        'no-setter-return'?: undefined;
        'no-sparse-arrays'?: undefined;
        'no-template-curly-in-string'?: undefined;
        'no-unexpected-multiline'?: undefined;
        'no-unreachable'?: undefined;
        'no-unreachable-loop'?: undefined;
        'no-unsafe-finally'?: undefined;
        'no-unsafe-negation'?: undefined;
        'no-unsafe-optional-chaining'?: undefined;
        'no-unused-private-class-members'?: undefined;
        'no-useless-backreference'?: undefined;
        'use-isnan'?: undefined;
        'valid-jsdoc'?: undefined;
        'valid-typeof'?: undefined;
        'arrow-body-style'?: undefined;
        'arrow-parens'?: undefined;
        'arrow-spacing'?: undefined;
        'constructor-super'?: undefined;
        'generator-star-spacing'?: undefined;
        'no-class-assign'?: undefined;
        'no-confusing-arrow'?: undefined;
        'no-const-assign'?: undefined;
        'no-dupe-class-members'?: undefined;
        'no-new-symbol'?: undefined;
        'no-restricted-exports'?: undefined;
        'no-this-before-super'?: undefined;
        'no-useless-computed-key'?: undefined;
        'no-useless-constructor'?: undefined;
        'no-useless-rename'?: undefined;
        'no-var'?: undefined;
        'object-shorthand'?: undefined;
        'prefer-arrow-callback'?: undefined;
        'prefer-const'?: undefined;
        'prefer-destructuring'?: undefined;
        'prefer-numeric-literals'?: undefined;
        'prefer-reflect'?: undefined;
        'prefer-rest-params'?: undefined;
        'prefer-spread'?: undefined;
        'prefer-template'?: undefined;
        'require-yield'?: undefined;
        'rest-spread-spacing'?: undefined;
        'sort-imports'?: undefined;
        'symbol-description'?: undefined;
        'template-curly-spacing'?: undefined;
        'yield-star-spacing'?: undefined;
        'import/named'?: undefined;
        'import/namespace'?: undefined;
        'import/export'?: undefined;
        'import/no-named-as-default'?: undefined;
        'import/no-extraneous-dependencies'?: undefined;
        'import/no-mutable-exports'?: undefined;
        'import/no-amd'?: undefined;
        'import/first'?: undefined;
        'import/no-duplicates'?: undefined;
        'import/order'?: undefined;
        'import/newline-after-import'?: undefined;
        'import/prefer-default-export'?: undefined;
        'import/no-restricted-paths'?: undefined;
        'import/no-absolute-path'?: undefined;
        'import/no-dynamic-require'?: undefined;
        'import/no-internal-modules'?: undefined;
        'import/no-webpack-loader-syntax'?: undefined;
        'import/no-named-default'?: undefined;
        'import/no-self-import'?: undefined;
        'import/no-cycle'?: undefined;
        'import/no-useless-path-segments'?: undefined;
        'import/no-import-module-exports'?: undefined;
        'import/no-relative-packages'?: undefined;
        'global-require'?: undefined;
        'handle-callback-err'?: undefined;
        'no-buffer-constructor'?: undefined;
        'no-mixed-requires'?: undefined;
        'no-new-require'?: undefined;
        'no-path-concat'?: undefined;
        'no-sync'?: undefined;
        camelcase?: undefined;
        'comma-dangle'?: undefined;
        'comma-spacing'?: undefined;
        'comma-style'?: undefined;
        'computed-property-spacing'?: undefined;
        'consistent-this'?: undefined;
        'function-call-argument-newline'?: undefined;
        'func-call-spacing'?: undefined;
        'func-name-matching'?: undefined;
        'func-names'?: undefined;
        'function-paren-newline'?: undefined;
        'implicit-arrow-linebreak'?: undefined;
        'max-lines'?: undefined;
        'max-lines-per-function'?: undefined;
        'max-params'?: undefined;
        'max-statements'?: undefined;
        'max-statements-per-line'?: undefined;
        'new-cap'?: undefined;
        'no-array-constructor'?: undefined;
        'no-bitwise'?: undefined;
        'no-mixed-operators'?: undefined;
        'no-multi-assign'?: undefined;
        'no-multiple-empty-lines'?: undefined;
        'no-new-object'?: undefined;
        'no-restricted-syntax'?: undefined;
        'no-underscore-dangle'?: undefined;
        'no-unneeded-ternary'?: undefined;
        'no-whitespace-before-property'?: undefined;
        'operator-assignment'?: undefined;
        'prefer-exponentiation-operator'?: undefined;
        'prefer-object-spread'?: undefined;
        'quote-props'?: undefined;
        'space-infix-ops'?: undefined;
        'space-unary-ops'?: undefined;
        'spaced-comment'?: undefined;
        'switch-colon-spacing'?: undefined;
        'unicode-bom'?: undefined;
        'wrap-regex'?: undefined;
        'no-delete-var'?: undefined;
        'no-label-var'?: undefined;
        'no-restricted-globals'?: undefined;
        'no-shadow'?: undefined;
        'no-shadow-restricted-names'?: undefined;
        'no-undef'?: undefined;
        'no-undef-init'?: undefined;
        'no-undefined'?: undefined;
        'no-unused-vars'?: undefined;
        'no-use-before-define'?: undefined;
    };
    languageOptions?: undefined;
    linterOptions?: undefined;
    settings?: undefined;
} | {
    files: string[];
    languageOptions: {
        parser: typeof parserTS;
        parserOptions: {
            ecmaFeatures: {
                jsx: boolean;
            };
            project: boolean;
            ecmaVersion?: undefined;
        };
    };
    rules?: undefined;
    linterOptions?: undefined;
    settings?: undefined;
} | {
    files: string[];
    linterOptions: {
        reportUnusedDisableDirectives: boolean;
    };
    languageOptions: {
        parserOptions: {
            ecmaVersion: string;
            ecmaFeatures?: undefined;
            project?: undefined;
        };
        parser?: undefined;
    };
    settings: {
        "import/parsers": {
            espree: string[];
            "@typescript-eslint/parser": string[];
        };
        "import/resolver": {
            typescript: {
                extensions: string[];
            };
            node: {
                extensions: string[];
            };
        };
    };
    rules?: undefined;
})[];
export default _default;
