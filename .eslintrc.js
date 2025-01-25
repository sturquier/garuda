module.exports = {
  extends: [
    'expo',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['prettier', 'import', '@tanstack/query'],
  ignorePatterns: ['/.expo/*', '/node_modules/', 'expo-env.d.ts'],
  rules: {
    '@typescript-eslint/no-empty-object-type': 'off',
    'prettier/prettier': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '../**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: './**',
            group: 'sibling',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
  },
};
