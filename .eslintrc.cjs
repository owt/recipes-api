module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['#src', './src'],
        ],
      },
    },
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'ignorePackages',
      },
    ],
  },
};
