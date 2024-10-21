module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      '@vue/eslint-config-prettier'
    ],
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  };