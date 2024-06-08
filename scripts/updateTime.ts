import { formatDate } from '../utils'
import { saveData } from './saveData'

export async function saveUpdateTime() {
  const now = new Date()
  await saveData(`export const updateTime = '${formatDate(now, 'YYYY-MM-DD HH:mm:ss')}'`, `updateTime.js`)
  console.log('===> 时间更新完成 <===')
}
