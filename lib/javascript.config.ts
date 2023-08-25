import parserTS from "@typescript-eslint/parser";
// import compat from "./compat.js";
import confusingBrowserGlobals from "confusing-browser-globals"

export default [
	// ...compat.extends("plugin:@typescript-eslint/recommended"),
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
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: parserTS,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				project: true,
			},
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
