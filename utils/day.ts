import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  relativeTime: {
    past: '%s前',
    s: '几秒',
    m: '几分钟',
    mm: '%d 分钟',
    h: 'an 小时',
    hh: '%d 小时',
    d: '1 天',
    dd: '%d 天',
    M: '1 月',
    MM: '%d 月',
    y: '1 年',
    yy: '%d 年',
  },
})
export default dayjs
