module.exports = {
    env: {
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
        'react-native/react-native': true,
    },
    extends: [
        'plugin:react/all',
        'plugin:react-native/all',
        'plugin:@typescript-eslint/all',
        'eslint:all',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jest/all',
        'plugin:node/recommended',
        'plugin:promise/recommended',
        'plugin:rxjs/recommended',
        'standard-with-typescript',
        'prettier',
        'plugin:typescript-sort-keys/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    ignorePatterns: ['dist', 'node_modules', 'examples', 'scripts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        project: ['./packages/**/tsconfig.json', './tsconfig.json'],
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-native',
        'import',
        'jest',
        'node',
        'promise',
        'rxjs',
        'typescript-sort-keys',
    ],
    rules: {
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-magic-numbers': ['off'],
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreVoidOperator: true }],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
                multilineDetection: 'brackets',
            },
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                classes: [
                    'signature',
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'public-decorated-field',
                    'protected-decorated-field',
                    'private-decorated-field',
                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',
                    'public-abstract-field',
                    'protected-abstract-field',
                    'public-field',
                    'protected-field',
                    'private-field',
                    'static-field',
                    'instance-field',
                    'abstract-field',
                    'decorated-field',
                    'field',
                    'public-constructor',
                    'protected-constructor',
                    'private-constructor',
                    'constructor',
                    'public-static-get',
                    'protected-static-get',
                    'private-static-get',
                    'public-decorated-get',
                    'protected-decorated-get',
                    'private-decorated-get',
                    'public-instance-get',
                    'protected-instance-get',
                    'private-instance-get',
                    'public-abstract-get',
                    'protected-abstract-get',
                    'public-get',
                    'protected-get',
                    'private-get',
                    'static-get',
                    'instance-get',
                    'abstract-get',
                    'decorated-get',
                    'get',
                    'public-static-set',
                    'protected-static-set',
                    'private-static-set',
                    'public-decorated-set',
                    'protected-decorated-set',
                    'private-decorated-set',
                    'public-instance-set',
                    'protected-instance-set',
                    'private-instance-set',
                    'public-abstract-set',
                    'protected-abstract-set',
                    'public-set',
                    'protected-set',
                    'private-set',
                    'static-set',
                    'instance-set',
                    'abstract-set',
                    'decorated-set',
                    'set',
                    'public-decorated-method',
                    'protected-decorated-method',
                    'private-decorated-method',
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                    'public-abstract-method',
                    'protected-abstract-method',
                    'public-method',
                    'protected-method',
                    'private-method',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                    'static-method',
                    'instance-method',
                    'abstract-method',
                    'decorated-method',
                    'method',
                ],
            },
        ],
        '@typescript-eslint/parameter-properties': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-meaningless-void-operator': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        'lines-between-class-members': 'off',
        'import/namespace': 'off',
        'import/order': [
            'error',
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: 'asc',
                },
                groups: ['builtin', 'external', 'object', 'parent', 'sibling', 'index', 'type'],
                'newlines-between': 'always',
                pathGroups: [
                    {
                        group: 'object',
                        pattern: '@rnw-community/*',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin', 'type'],
            },
        ],
        'no-duplicate-imports': 'off',
        'no-ternary': 'off',
        'no-void': 'off',
        'no-undefined': 'off',
        'node/no-missing-import': [
            'error',
            {
                tryExtensions: ['.js', '.json', '.ts', '.tsx'],
            },
        ],
        'node/no-unsupported-features/es-syntax': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-magic-numbers': ['error', { ignore: [-1, 0, 1, 2, 3, 4, 5, 6] }],
        'sort-imports': [
            'error',
            {
                allowSeparatedGroups: false,
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['all', 'multiple', 'none', 'single'],
            },
        ],
        'no-warning-comments': ['error', { terms: ['fixme', 'xxx'], location: 'start' }],
        'sort-keys': 'off',
        'no-shadow': 'off',
        'no-return-await': 'off',
        'no-empty-function': ['error', { allow: ['constructors'] }],
        'react/prop-types': 'off',
        'capitalized-comments': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        'multiline-ternary': 'off',
        'max-lines-per-function': ['error', { max: 90, skipBlankLines: true, skipComments: true }],
        'max-statements': ['error', { max: 12 }, { ignoreTopLevelFunctions: true }],
        'id-length': ['error', { exceptions: ['x', 'y', 'z', 'i', 'e', '_'] }],
        'max-params': ['error', { max: 4 }],
        'newline-before-return': 'error',
        'react/display-name': 'off',
        'require-await': 'off',
        'react/forbid-component-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-max-depth': ['error', { max: 4 }],
        'react/jsx-no-literals': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-no-constructed-context-values': 'off',
        'react-native/no-raw-text': 'off',
        'prefer-named-capture-group': 'off',
        'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
        'jest/max-expects': 'off',
        'jest/no-untyped-mock-factory': 'off',
    },
    overrides: [{ files: '*.d.ts', rules: { 'init-declarations': 'off' } }],
    settings: {
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/resolver': { node: { moduleDirectory: ['node_modules', 'src'] } },
        jest: { version: require('jest/package.json').version },
        react: { version: 'detect' },
    },
};
