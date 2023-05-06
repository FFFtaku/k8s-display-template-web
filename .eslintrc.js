module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue']
  },
  plugins: [
    'vue'
  ],
  rules: {
    // 不使用分号
    'semi': ['error', 'never'],
    // 禁止使用var
    'no-var': 'error',
    // 使用两个空格长度的缩进
    'indent': ['error', 2],
    // 只能使用单引号
    'quotes': [2, 'single'],
    // 除了_、x、e、i、j、k外不能使用小于三位长度的变量名
    'id-length': ['error', { 'exceptions': ['x', '_', 'e', 'i', 'j', 'k'], 'min': 3 }]
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  }
}
