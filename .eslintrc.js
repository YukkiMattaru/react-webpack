module.exports = {
    env: {
        browser: true,
        node: true,
        es2022: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        jsx: true
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    rules: {
        // игнорируем полностью, так как юзаем эти конструкции только в webpack.config.js
        "@typescript-eslint/no-var-requires": 0
    }
}
