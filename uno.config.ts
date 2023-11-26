import {
  defineConfig,
  presetUno, transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
    ['flex-start-center', 'flex justify-start items-center'],
    ['flex-between-center', 'flex justify-between items-center'],
    // 宽高相同
    [/^wh-(.+)$/, ([, c]) => `w-${c}  h-${c}`],
  ],
  rules: [
    [/^clamp-(\d+)$/, ([, d]) => ({
      'display': '-webkit-box',
      '-webkit-box-orient': ' vertical',
      '-webkit-line-clamp': d,
      'overflow': 'hidden',
    })],
    [/^sd-(\d+)-(\d+)$/, ([, d, a]) => ({
      'box-shadow': `0 0 ${d}px rgba(0, 0, 0, 0.${a})`,
    })],
  ],
  theme: {
    colors: {
    },
  },
  presets: [
    presetUno(),
    presetRemToPx(),
  ],
  transformers: [
    transformerDirectives(), // @apply, @screen, @variants
    transformerVariantGroup(), // 样式分组
  ],
})
