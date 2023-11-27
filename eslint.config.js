import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    rules: {
      '@typescript-eslint/no-import-type-side-effects': 'error',
    },
  },
  unocss.configs.flat,
)
