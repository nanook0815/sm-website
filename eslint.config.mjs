// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierConfig from 'eslint-config-prettier'

export default withNuxt(prettierConfig, {
  ignores: ['.claude/**', '.github/**', '.codex/**', '.agents/**', '.impeccable/**']
})
