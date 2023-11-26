import path from 'node:path'
import fs from 'fs-extra'

//* * 获取当前脚本绝对路径 */
const dirname = path.dirname(new URL(import.meta.url).pathname)
export async function saveData(data, filename) {
  const dataPath = path.resolve(dirname, '../data')
  await fs.outputFile(path.join(dataPath, filename), JSON.stringify(data, null, 2))
}
