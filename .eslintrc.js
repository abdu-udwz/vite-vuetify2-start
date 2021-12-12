module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': false,
      'ignores': [],
    } ],
    'vue/no-boolean-default': 'error',
    'vue/no-child-content': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/v-on-function-call': 'error',

    // typescript-eslint rules
    // note you must disable the base rule as it can report incorrect errors
    '@typescript-eslint/ban-ts-comment': 'off',

    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],

    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2 ],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single' ],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error' ],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error' ],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline' ],
    

    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error' ],

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
  },
}
