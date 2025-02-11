module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [

    'plugin:vue/essential',

    'standard'

  ],

  plugins: [
    'vue'
  ],

  rules: {
    "camelcase": ["error", {"allow": ["aa_bb"]}]
  }
}
