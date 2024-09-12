module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never' }
    ],
    'no-console': 'warn',
    'no-unused-vars': ['warn']
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    }
  }
}
