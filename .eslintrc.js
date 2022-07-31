const path = require('path')
module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'import',
        'jsx-a11y'
    ],
    'rules': {
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'no-console': [process.env.NODE_ENV === 'production' ? 2 : 1, {allow: ['warn', 'error']}],
        'max-lines': [2, {max: 500}],
        'arrow-spacing': [2, {before: true, after: true}],
        'camelcase': [0, {properties: 'always'}],
        'comma-spacing': [2, {before: false, after: true}],
        'eqeqeq': [2, 'always', {'null': 'ignore'}],
        'jsx-quotes': [2, 'prefer-single'],
        'semi': [2, 'never'],
        'semi-spacing': [2, {before: false, after: true}],
        'no-unused-vars': [2, {args: 'none'}],
        'react/jsx-max-props-per-line': [2, {maximum: {single: 3, multi: 1}}],
        'react-hooks/exhaustive-deps': 0,
        'react/jsx-indent': [2, 2],
        'react/jsx-indent-props': [2, 2],
        'react/jsx-props-no-multi-spaces': 2,
        'react/jsx-first-prop-new-line': 2,
        'react/jsx-closing-tag-location': 2,
        'react/jsx-closing-bracket-location': 2
    },
    'settings': {
        'import/resolver': {
            webpack: {
                config: path.join(__dirname, 'webpack.base.config.js')
            }
        },
        'react': {
            'version': 'detect'
        }
    }
}
