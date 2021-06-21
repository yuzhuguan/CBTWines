module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:vue/recommended',
    'standard',
    'plugin:promise/recommended',
    'plugin:node/recommended',
    'plugin:import/recommended'
  ],
  plugins: [
    'vue',
    'promise'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'import/no-unresolved': 'off',
    'node/no-missing-import': 'off',
    // temp
    'vue/no-mutating-props': 'off',
    'vue/valid-v-slot': 'off',
    'node/no-extraneous-import': 'off',
    'new-cap': 'off'

  },
  globals: {}
}
