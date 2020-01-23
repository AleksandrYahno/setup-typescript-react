module.exports = {
  extends: ['airbnb-typescript-prettier'],
  settings: {
    'import/resolver': {
      node: {
        extension: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        paths: ['./src'],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-prototype-builtins': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 0,
    'react/state-in-constructor': 0,
    'function-paren-newline': 'off',
    'prettier/prettier': ['error'],
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
