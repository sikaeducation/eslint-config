'use strict';

var eslintrc = require('@eslint/eslintrc');
var path = require('path');
var js = require('@eslint/js');
var confusingBrowserGlobals = require('confusing-browser-globals');
var pluginJSXA11y = require('eslint-plugin-jsx-a11y');
var pluginStorybook = require('eslint-plugin-storybook');
var mdx = require('eslint-mdx');

// @ts-ignore

const nodeModulesPath = path.dirname(".");

var compat = new eslintrc.FlatCompat({
	baseDirectory: nodeModulesPath,
	resolvePluginsRelativeTo: nodeModulesPath,
	recommendedConfig: js.configs.recommended,
});

var javascript_config = [
	...compat.extends("plugin:@typescript-eslint/recommended"),
	...compat.config({
		extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
		parser: '@typescript-eslint/parser',
		plugins: ['@typescript-eslint'],
	}),
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		rules: {
			//
			'array-callback-return': ['error', { allowImplicit: true }],
			complexity: ['warn', 20],
			'class-methods-use-this': 'error',
			'consistent-return': 'error',
			curly: ['error', 'multi'],
			'default-case-last': 'error',
			'default-param-last': 'error',
			'dot-notation': ['error', { allowKeywords: true }],
			'dot-location': ['error', 'property'],
			eqeqeq: ['error', 'always', { null: 'ignore' }],
			'grouped-accessor-pairs': 'error',
			'no-alert': 'error',
			'no-caller': 'error',
			'no-case-declarations': 'error',
			'no-constructor-return': 'error',
			'no-div-regex': 'off',
			'no-else-return': ['error', { allowElseIf: false }],
			'no-empty-function': ['error', {
				allow: [
					'arrowFunctions',
					'functions',
					'methods',
				]
			}],
			'no-eq-null': 'error',
			'no-eval': 'error',
			'no-extend-native': 'error',
			'no-extra-bind': 'error',
			'no-extra-label': 'error',
			'no-fallthrough': 'error',
			'no-floating-decimal': 'error',
			'no-global-assign': ['error', { exceptions: [] }],
			'no-implicit-coercion': ['off', {
				boolean: false,
				number: true,
				string: true,
				allow: [],
			}],
			'no-implicit-globals': 'off',
			'no-implied-eval': 'error',
			'no-invalid-this': 'off',
			'no-iterator': 'error',
			'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
			'no-lone-blocks': 'error',
			'no-loop-func': 'error',
			'no-magic-numbers': ['error', {
				ignore: [],
				ignoreArrayIndexes: true,
				enforceConst: true,
				detectObjects: false,
			}],
			'no-multi-spaces': ['error', {
				ignoreEOLComments: false,
			}],
			'no-multi-str': 'error',
			'no-new': 'error',
			'no-new-func': 'error',
			'no-new-wrappers': 'error',
			'no-nonoctal-decimal-escape': 'error',
			'no-octal': 'error',
			'no-octal-escape': 'error',
			'no-param-reassign': ['error', {
				props: true,
				ignorePropertyModificationsFor: [
					'request', // for Express requests
					'response', // for Express responses
				]
			}],
			'no-proto': 'error',
			'no-redeclare': 'error',
			'no-restricted-properties': ['error', {
				object: 'arguments',
				property: 'callee',
				message: 'arguments.callee is deprecated',
			}, {
					object: 'global',
					property: 'isFinite',
					message: 'Please use Number.isFinite instead',
				}, {
					object: 'self',
					property: 'isFinite',
					message: 'Please use Number.isFinite instead',
				}, {
					object: 'window',
					property: 'isFinite',
					message: 'Please use Number.isFinite instead',
				}, {
					object: 'global',
					property: 'isNaN',
					message: 'Please use Number.isNaN instead',
				}, {
					object: 'self',
					property: 'isNaN',
					message: 'Please use Number.isNaN instead',
				}, {
					object: 'window',
					property: 'isNaN',
					message: 'Please use Number.isNaN instead',
				}, {
					property: '__defineGetter__',
					message: 'Please use Object.defineProperty instead.',
				}, {
					property: '__defineSetter__',
					message: 'Please use Object.defineProperty instead.',
				}, {
					object: 'Math',
					property: 'pow',
					message: 'Use the exponentiation operator (**) instead.',
				}],
			'no-return-assign': ['error', 'always'],
			'no-return-await': 'error',
			'no-script-url': 'error',
			'no-self-assign': ['error', {
				props: true,
			}],
			'no-self-compare': 'error',
			'no-sequences': 'error',
			'no-throw-literal': 'error',
			'no-unmodified-loop-condition': 'off',
			'no-unused-expressions': ['error', {
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false,
			}],
			'no-unused-labels': 'error',
			'no-useless-call': 'off',
			'no-useless-catch': 'error',
			'no-useless-concat': 'error',
			'no-useless-escape': 'error',
			'no-useless-return': 'error',
			'no-void': 'error',
			'no-warning-comments': ['error', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
			'no-with': 'error',
			'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
			'prefer-object-has-own': 'error',
			'prefer-regex-literals': ['error', {
				disallowRedundantWrapping: true,
			}],
			'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
			yoda: 'error',
			'for-direction': 'error',
			'getter-return': ['error', { allowImplicit: true }],
			'no-async-promise-executor': 'error',
			'no-await-in-loop': 'error',
			'no-compare-neg-zero': 'error',
			'no-cond-assign': ['error', 'always'],
			'no-console': 'warn',
			'no-constant-condition': 'warn',
			'no-control-regex': 'error',
			'no-debugger': 'error',
			'no-dupe-args': 'error',
			'no-dupe-else-if': 'error',
			'no-dupe-keys': 'error',
			'no-duplicate-case': 'error',
			'no-empty': 'error',
			'no-ex-assign': 'error',
			'no-extra-boolean-cast': 'error',
			'no-extra-parens': ['off', 'all', {
				conditionalAssign: true,
				nestedBinaryExpressions: false,
				returnAssign: false,
				ignoreJSX: 'all', // delegate to eslint-plugin-react
				enforceForArrowConditionals: false,
			}],
			'no-extra-semi': 'error',
			'no-func-assign': 'error',
			'no-import-assign': 'error',
			'no-invalid-regexp': 'error',
			'no-irregular-whitespace': 'error',
			'no-loss-of-precision': 'error',
			'no-misleading-character-class': 'error',
			'no-obj-calls': 'error',
			'no-promise-executor-return': 'error',
			'no-prototype-builtins': 'error',
			'no-regex-spaces': 'error',
			'no-setter-return': 'error',
			'no-sparse-arrays': 'error',
			'no-template-curly-in-string': 'error',
			'no-unexpected-multiline': 'error',
			'no-unreachable': 'error',
			'no-unreachable-loop': ['error', {
				ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
			}],

			'no-unsafe-finally': 'error',
			'no-unsafe-negation': 'error',
			'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
			'no-unused-private-class-members': 'error',
			'no-useless-backreference': 'error',
			'use-isnan': 'error',
			'valid-jsdoc': 'error',
			'valid-typeof': ['error', { requireStringLiterals: true }],
			'arrow-body-style': ['error', 'as-needed', {
				requireReturnForObjectLiteral: false,
			}],
			'arrow-parens': ['error', 'always'],
			'arrow-spacing': ['error', { before: true, after: true }],
			'constructor-super': 'error',
			'generator-star-spacing': ['error', { before: false, after: true }],
			'no-class-assign': 'error',
			'no-confusing-arrow': ['error', {
				allowParens: true,
			}],
			'no-const-assign': 'error',
			'no-dupe-class-members': 'error',
			'no-new-symbol': 'error',
			'no-restricted-exports': ['error', {
				restrictedNamedExports: [
					'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
				],
			}],
			'no-this-before-super': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-constructor': 'error',
			'no-useless-rename': ['error', {
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false,
			}],
			'no-var': 'error',
			'object-shorthand': ['error', 'always', {
				ignoreConstructors: false,
				avoidQuotes: true,
			}],
			'prefer-arrow-callback': ['error', {
				allowNamedFunctions: false,
				allowUnboundThis: true,
			}],
			'prefer-const': ['error', {
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			}],
			'prefer-destructuring': ['error', {
				VariableDeclarator: {
					array: false,
					object: true,
				},
				AssignmentExpression: {
					array: true,
					object: false,
				},
			}, {
					enforceForRenamedProperties: false,
				}],
			'prefer-numeric-literals': 'error',
			'prefer-reflect': 'off',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			'require-yield': 'error',
			'rest-spread-spacing': ['error', 'never'],
			'sort-imports': ['off', {
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			}],
			'symbol-description': 'error',
			'template-curly-spacing': 'error',
			'yield-star-spacing': ['error', 'after'],
			//
			'import/no-unresolved': 'off',
			'import/named': 'error',
			'import/default': 'error',
			'import/namespace': 'error',
			'import/export': 'error',
			'import/no-named-as-default': 'off',
			'import/no-extraneous-dependencies': ['error', {
				devDependencies: [
					'test/**', // tape, common npm pattern
					'tests/**', // also common npm pattern
					'spec/**', // mocha, rspec-like pattern
					'**/__tests__/**', // jest pattern
					'**/__mocks__/**', // jest pattern
					'test.{js,jsx}', // repos with a single test file
					'test-*.{js,jsx}', // repos with multiple top-level test files
					'**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
					'**/jest.config.{js,ts}', // jest config
					'**/jest.setup.{js,ts}', // jest setup
					'**/vue.config.js', // vue-cli config
					'**/webpack.config.js', // webpack config
					'**/webpack.config.*.js', // webpack config
					'**/rollup.config.js', // rollup config
					'**/rollup.config.*.js', // rollup config
					'**/.eslintrc.js', // eslint config
					'**/eslintrc.config.js' // eslint config
				],
				optionalDependencies: false,
			}],
			'import/no-mutable-exports': 'error',
			'import/no-commonjs': 'error',
			'import/no-amd': 'error',
			'import/first': 'error',
			'import/no-duplicates': 'error',
			'import/extensions': ['error', 'ignorePackages', {
				js: 'never',
				mjs: 'never',
				jsx: 'never',
			}],
			'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
			'import/newline-after-import': 'error',
			'import/prefer-default-export': 'error',
			'import/no-restricted-paths': 'off',
			'import/no-absolute-path': 'error',
			'import/no-dynamic-require': 'error',
			'import/no-internal-modules': ['error', {
				allow: [],
			}],
			'import/no-webpack-loader-syntax': 'error',
			'import/no-named-default': 'off',
			'import/no-self-import': 'error',
			'import/no-cycle': ['error', { maxDepth: '∞' }],
			'import/no-useless-path-segments': ['error', { commonjs: true }],
			'import/no-import-module-exports': ['error', {
				exceptions: [],
			}],
			'import/no-relative-packages': 'error',
			//
			'global-require': 'off',
			'handle-callback-err': 'error',
			'no-buffer-constructor': 'error',
			'no-mixed-requires': "error",
			'no-new-require': 'error',
			'no-path-concat': 'error',
			'no-sync': 'error',
			//
			camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
			'comma-dangle': ['error', {
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			}],
			'comma-spacing': ['error', { before: false, after: true }],
			'comma-style': ['error', 'last', {
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
				}
			}],
			'computed-property-spacing': ['error', 'never'],
			'consistent-this': 'off',
			'function-call-argument-newline': ['error', 'consistent'],
			'func-call-spacing': ['error', 'never'],
			'func-name-matching': ['off', 'always', {
				includeCommonJSModuleExports: false,
				considerPropertyDescriptor: true,
			}],
			'func-names': 'warn',
			'function-paren-newline': ['error', 'multiline-arguments'],
			'implicit-arrow-linebreak': ['error', 'beside'],
			'max-lines': ['warn', {
				max: 150,
				skipBlankLines: true,
				skipComments: true
			}],
			'max-lines-per-function': ['warn', {
				max: 20,
				skipBlankLines: true,
				skipComments: true,
				IIFEs: true,
			}],
			'max-params': ['warn', 3],
			'max-statements': ['warn', 10],
			'max-statements-per-line': ['warn', { max: 1 }],
			'new-cap': ['error', {
				newIsCap: true,
				newIsCapExceptions: [],
				capIsNew: false,
				capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
			}],
			'no-array-constructor': 'error',
			'no-bitwise': 'error',
			'no-mixed-operators': ['error', {
				// the list of arithmetic groups disallows mixing `%` and `**`
				// with other arithmetic operators.
				groups: [
					['%', '**'],
					['%', '+'],
					['%', '-'],
					['%', '*'],
					['%', '/'],
					['/', '*'],
					['&', '|', '<<', '>>', '>>>'],
					['==', '!=', '===', '!=='],
					['&&', '||'],
				],
				allowSamePrecedence: false
			}],
			'no-multi-assign': ['error'],
			'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
			'no-new-object': 'error',
			'no-restricted-syntax': [
				'error',
				{
					selector: 'ForInStatement',
					message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
				},
				{
					selector: 'ForOfStatement',
					message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
				},
				{
					selector: 'LabeledStatement',
					message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
				},
				{
					selector: 'WithStatement',
					message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
				},
			],
			'no-underscore-dangle': ['error', {
				allow: [],
				allowAfterThis: false,
				allowAfterSuper: false,
				enforceInMethodNames: true,
			}],
			'no-unneeded-ternary': ['error', { defaultAssignment: false }],
			'no-whitespace-before-property': 'error',
			'operator-assignment': ['error', 'always'],
			'prefer-exponentiation-operator': 'error',
			'prefer-object-spread': 'error',
			'quote-props': ['error', 'consistent-as-needed', { keywords: false, unnecessary: false, numbers: false }],
			'space-infix-ops': 'error',
			'space-unary-ops': ['error', {
				words: true,
				nonwords: false,
				overrides: {
				},
			}],
			'spaced-comment': ['error', 'always', {
				line: {
					exceptions: ['-', '+'],
					markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
				},
				block: {
					exceptions: ['-', '+'],
					markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
					balanced: true,
				}
			}],
			'switch-colon-spacing': ['error', { after: true, before: false }],
			'unicode-bom': ['error', 'never'],
			'wrap-regex': 'off',
			//
			'no-delete-var': 'error',
			'no-label-var': 'error',
			'no-restricted-globals': [
				'error',
				{
					name: 'isFinite',
					message:
						'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
				},
				{
					name: 'isNaN',
					message:
						'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
				},
			].concat(confusingBrowserGlobals.map((g) => ({
				name: g,
				message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
			}))),

			'no-shadow': 'error',
			'no-shadow-restricted-names': 'error',
			'no-undef': 'error',
			'no-undef-init': 'error',
			'no-undefined': 'error',
			'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
			'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
		},
	},
	{
		files: ["**/*.{js,jsx}"],
		rules: {
			'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
			"import/extensions": [
				"error",
				"ignorePackages",
				{
					js: "always",
				},
			],
			'import/no-commonjs': 'off',
			'import/default': 'off',
		},
	},
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
			},
		},
		settings: {
			"import/parsers": {
				espree: [
					".js",
					".cjs",
					".mjs",
					".jsx",
				],
				"@typescript-eslint/parser": [".ts", ".tsx"],
			},
			"import/resolver": {
				typescript: {
					extensions: [".ts", ".tsx"],
				},
				node: {
					extensions: [".js", ".jsx"],
				},
			},
		},
	},
];

var featureTests_config = [
	{
		files: ["**/features/**/*.{ts,tsx}"],
		rules: {
			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: ["**/features/**/*.{ts,tsx}"],
				},
			],
		},
	},
];

// @ts-ignore

var react_config = [
	{
		files: ["**/*.{tsx,jsx}"],
		...compat.plugins(
			"react", "react-hooks", "jsx-a11y",
		),
		rules: {
			"react/button-has-type": "error",
			"react/destructuring-assignment": "error",
			"react/forbid-component-props": "error",
			"react/function-component-definition": "error",
			"react/hook-use-state": ["error", { allowDestructuredState: true }],
			"react/iframe-missing-sandbox": "error",
			"react/jsx-boolean-value": ["error", "never"],
			"react/jsx-closing-bracet-location": "error",
			"react/jsx-closing-tag-location": "error",
			"react/jsx-curly-brace-presence": [
				"error",
				{
					props: "always",
					children: "never",
					propElementValues: "always",
				},
			],
			"react/jsx-curly-newline": "error",
			"react/jsx-curly-spacing": { when: "never", children: true },
			"react/jsx-equals-spacing": "error",
			"react/jsx-filename-extension": [
				"error",
				{
					extensions: [".tsx", ".jsx"],
				},
			],
			"react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
			"react/jsx-fragments": "error",
			"react/jsx-handler-names": [
				"error",
				{
					eventHandlerPrefix: "handle",
					eventHandlerPropPrefix: "on",
					checkLocalVariables: true,
					checkInlineFunction: true,
				},
			],
			"react/jsx-indent": [
				"error",
				"tab",
				{ indentLogicalExpressions: true },
			],
			"react/jsx-indent-props": ["error", "tab"],
			"react/jsx-key": "error",
			"react/jsx-max-depth": ["warn", { max: "5" }],
			"react/jsx-max-props-per-line": ["error", { when: "multiline" }],
			"react/jsx-newline": "error",
			"react/jsx-no-bind": "error",
			"react/jsx-no-comment-textnodes": "error",
			"react/jsx-no-constructured-context-values": "error",
			"react/jsx-no-duplicate-props": "error",
			"react/jsx-no-leaked-render": "error",
			"react/jsx-no-script-url": "error",
			"react/jsx-no-target-blank": "error",
			"react/jsx-no-undef": "error",
			"react/jsx-no-useless-fragment": "error",
			"react/jsx-pascal-case": "error",
			"react/jsx-props-no-multi-spaces": "error",
			"react/jsx-tag-spacing": {
				closingSlash: "never",
				beforeSelfClosing: "always",
				afterOpening: "never",
				beforeClosing: "allow",
			},
			"react/jsx-uses-vars": "error",
			"react/jsx-wrap-multilines": "error",
			"react/no-array-index-key": "error",
			"react/no-children-prop": "error",
			"react/no-danger": "error",
			"react/no-danger-with-children": "error",
			"react/no-deprecated": "error",
			"react/no-invalid-html-attribute": "error",
			"react/no-multi-comp": "warn",
			"react/no-namespace": "error",
			"react/no-object-type-as-default-prop": "error",
			"react/no-string-refs": "error",
			"react/no-this-in-sfc": "error",
			"react/no-typos": "error",
			"react/no-unescaped-entities": "error",
			"react/no-unknown-property": "error",
			"react/no-unsafe": "error",
			"react/no-unstable-nested-components": "error",
			"react/no-unused-prop-types": "error",
			"react/prefer-exact-props": "error",
			"react/prefer-stateless-functions": "error",
			"react/prop-types": "error",
			"react/self-closing-comp": "error",
			"react/style-prop-object": "error",
			"react/void-dom-elements-no-children": "error",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
			...pluginJSXA11y.configs.strict.rules,
			"jsx-a11y/label-has-associated-control": [
				"error",
				{
					assert: "htmlFor",
				},
			],
		},
		settings: {
			react: {
				version: "detect",
				pragma: "React",
				linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
			},
			"import/resolver": {
				typescript: {
					extensions: [".ts", ".tsx"],
				},
				node: {
					extensions: [".js", ".jsx", ".json"],
				},
			},
			"import/parsers": {
				espree: [
					".js",
					".cjs",
					".mjs",
					".jsx",
				],
				"@typescript-eslint/parser": [".ts", ".tsx"],
			},
		},
	},
	{
		files: ["**/slices/*.ts"],
		rules: {
			"no-param-reassign": "off",
		},
	},
	{
		files: ["**/setupTests.{js,ts}", "**/reportWebVitals.{js,ts}"],
		rules: {
			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: ["**/setupTests.{js,ts}", "**/reportWebVitals.{js,ts}"],
				},
			],
		},
	},
];

var jest_config = [
	{
		files: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
		...compat.plugins(
			"jest", "jest-formatting", "jest-extended",
		),
		rules: {
			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
				},
			],
			rules: {
				"jest/expect-expect": "error",
				"jest/no-alias-methods": "error",
				"jest/no-commented-out-tests": "error",
				"jest/no-conditional-expect": "error",
				"jest/no-conditional-in-test": "error",
				"jest/no-deprecated-functions": "error",
				"jest/no-disabled-tests": "warn",
				"jest/no-done-callback": "error",
				"jest/no-duplicate-hooks": "error",
				"jest/no-export": "error",
				"jest/no-identical-title": "error",
				"jest/no-interpolation-in-snapshots": "error",
				"jest/no-mocks-import": "error",
				"jest/no-jasmine-globals": "error",
				"jest/no-test-statement-return": "error",
				"jest/no-untyped-mock-factory": "error",
				"jest/prefer-called-with": "error",
				"jest/prefer-comparison-matcher": "error",
				"jest/prefer-each": "error",
				"jest/prefer-equality-matcher": "error",
				"jest/prefer-expect-assertions": [
					"error",
					{
						onlyFunctionsWithAsyncKeyword: true,
						onlyFunctionsWithExpectInLoop: true,
						onlyFunctionsWithExpectInCallback: true,
					},
				],
				"jest/prefer-expect-resolves": "error",
				"jest/prefer-hooks-in-order": "error",
				"jest/prefer-hooks-on-top": "error",
				"jest/prefer-mock-promise-shorthand": "error",
				"jest/prefer-spy-on": "error",
				"jest/prefer-to-be": "error",
				"jest/prefer-contain": "error",
				"jest/prefer-to-have-length": "error",
				"jest/valid-describe-callback": "error",
				"jest/valid-expect": "error",
				"jest/valid-expect-in-promise": "error",
				"jest/valid-title": "error",
				// you should turn the original rule off *only* for test files
				"@typescript-eslint/unbound-method": "off",
				"jest/unbound-method": "error",
				"jest-formatting/padding-around-after-all-blocks": "error",
				"jest-formatting/padding-around-after-each-blocks": "error",
				"jest-formatting/padding-around-before-all-blocks": "error",
				"jest-formatting/padding-around-before-each-blocks": "error",
				"jest-formatting/padding-around-describe-blocks": "error",
				"jest-formatting/padding-around-test-blocks": "error",
				"jest-extended/prefer-to-be-array": "error",
				"jest-extended/prefer-to-be-object": "error",
				"jest-extended/prefer-to-be-false": "error",
				"jest-extended/prefer-to-be-true": "error",
				"jest-extended/prefer-to-have-been-called-once": "error",
			},
		},
	},
];

// @ts-ignore

var storybook_config = [
	...compat.extends("plugin:mdx/recommended"),
	{
		files: ["**/*.{md,mdx}"],
		...compat.plugins("mdx"),
		rules: {
			"mdx/remark": "error",
		},
		settings: {
			"mdx/code-block": true,
			"import/parsers": {
				espree: [
					".js",
					".cjs",
					".mjs",
					".jsx",
				],
				"@typescript-eslint/parser": [".ts", ".tsx"],
			},
			"import/resolver": {
				typescript: {
					extensions: [".ts", ".tsx"],
				},
				node: {
					extensions: [".js", ".jsx"],
				},
			},
		},
		languageOptions: {
			sourceType: "module",
			ecmaVersion: "latest",
			parser: mdx,
			globals: {
				React: false,
			},
		},
	},
	{
		files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
		...compat.plugins("storybook"),
		rules: {
			...pluginStorybook.configs.recommended.rules,
			"react/jsx-filename-extension": [
				"error",
				{
					extensions: [
						".mdx",
						".jsx",
						".tsx",
					],
				},
			],
			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: ["**/*.stories.*", "**/*.mdx"],
				},
			],
		},
	},
	{
		files: [".storybook/test-runner.js"],
		rules: {
			"@typescript-eslint/no-var-requires": "off",
		},
	},
];

var formatting_config = [
	{
		rules: {
			"array-bracket-newline": ["error", { multiline: true }],
			"array-bracket-spacing": ["error"],
			"array-element-newline": ["error"],
			"arrow-parens": "error",
			"arrow-spacing": ["error", { before: true, after: true }],
			"block-spacing": ["error", "always"],
			"brace-style": ["error", "1tbs"],
			"comma-style": ["error", "last"],
			"comma-spacing": ["error", { before: false, after: true }],
			"comma-dangle": ["error", "always-multiline"],
			"computed-property-spacing": ["error", "never"],
			"dot-location": ["error", "property"],
			"eol-last": ["error", "always"],
			"func-call-spacing": ["error", "never"],
			"function-call-argument-newline": ["error", "consistent"],
			"function-paren-newline": ["error", { minItems: 3 }],
			"generator-star-spacing": ["error", { before: true, after: false }],
			"implicit-arrow-linebreak": ["error", "beside"],
			indent: ['error', "tab", {
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				// MemberExpression: null,
				FunctionDeclaration: {
					parameters: 1,
					body: 1
				},
				FunctionExpression: {
					parameters: 1,
					body: 1
				},
				CallExpression: {
					arguments: 1
				},
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				// list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
				ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
				ignoreComments: false
			}],
			"jsx-quotes": ["error", "prefer-double"],
			"key-spacing": "error",
			"keyword-spacing": ["error", { before: true }],
			"line-comment-position": "off",
			"linebreak-style": ["error", "unix"],
			"lines-around-code": "off",
			"lines-between-class-members": ["error", "always"],
			"max-len": [
				"error",
				{
					code: 80,
					ignoreTrailingComments: true,
					ignoreUrls: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: false,
					ignoreRegExpLiterals: true,
				},
			],
			"max-statements-per-line": ["error", { max: 1 }],
			"multiline-ternary": ["error", "always-multiline"],
			"new-parens": ["error", "always"],
			"newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
			"no-extra-parens": "error",
			"no-mixed-spaces-and-tabs": "error",
			"no-multi-spaces": "error",
			"no-multiple-empty-lines": "error",
			"no-tabs": "off",
			"no-trailing-spaces": "error",
			"no-whitespace-before-property": "error",
			"nonblock-statement-body-position": ["error", "beside"],
			"object-curly-newline": ["error"],
			"operator-linebreak": ["error", "before"],
			"padded-blocks": ["error", "never"],
			quotes: [
				"error",
				"double",
				{ allowTemplateLiterals: true },
			],
			"rest-spread-spacing": ["error", "never"],
			semi: "error",
			"semi-spacing": "error",
			"space-before-blocks": ["error", "never"],
			"space-before-function-paren": ["error", "never"],
			"space-in-parens": ["error", "never"],
			"space-infix-ops": "error",
			"space-unary-ops": "error",
			"switch-colon-spacing": "error",
			"template-curly-spacing": "error",
			"template-tag-spacing": "error",
			"wrap-iife": "error",
			"yield-star-spacing": "error",
		},
	},
];

exports.featureTests = featureTests_config;
exports.formatting = formatting_config;
exports.javascript = javascript_config;
exports.jest = jest_config;
exports.react = react_config;
exports.storybook = storybook_config;
