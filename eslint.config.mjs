import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts'],
    plugins: {
      prettier,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'prettier/prettier': 'error',
    },
  },
];
