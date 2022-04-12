const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['prettier', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-unused-vars': 0,
    'consistent-return': 0,
    'no-console': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'implicit-arrow-linebreak': 0,
    'no-unused-expressions': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'no-await-in-loop': 0,
  },
  plugins: ['prettier'],
};
