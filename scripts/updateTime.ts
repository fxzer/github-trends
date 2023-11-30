import { saveData } from './saveData'
import dayjs from '~/utils/day'

export async function saveUpdateTime() {
  const updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
  await saveData(`export const updateTime = '${updateTime}'`, `updateTime.js`)
}
