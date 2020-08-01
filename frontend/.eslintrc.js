module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react', '@typescript-eslint'],
    extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/react',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
    },
};
