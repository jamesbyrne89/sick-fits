module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',
    ],
    rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
    },
};
