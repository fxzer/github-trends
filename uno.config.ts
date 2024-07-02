import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
    ['flex-x-center', 'flex justify-center'],
    ['flex-y-center', 'flex items-center'],
    ['flex-start-center', 'flex justify-start items-center'],
    ['flex-between-center', 'flex justify-between items-center'],
    ['flex-around-center', 'flex justify-around items-center'],
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
  ],
  theme: {
    colors: {
      primary: '#44c089',
    },
  },
  safelist: ['text-lime', 'text-green', 'op60', 'i-lucide:bar-chart-horizontal', 'i-lucide:table', 'i-lucide:sliders-horizontal', 'i-lucide:line-chart'],
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetRemToPx(),
  ],
  transformers: [
    transformerDirectives(), // @apply, @screen, @variants
    transformerVariantGroup(), // 样式分组
  ],
})
