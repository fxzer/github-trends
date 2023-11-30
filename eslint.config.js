import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    ignores: [
      'data',
      '**/types',
      '**/cache',
      '**/dist',
      '**/.temp',
      '**/*.svg',
    ],
  },
  unocss.configs.flat,
)
