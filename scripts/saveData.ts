import path from 'node:path'
import fs from 'fs-extra'

//* * 获取当前脚本绝对路径 */
const dirname = path.dirname(new URL(import.meta.url).pathname)
export async function saveData(data: string, filename: string) {
  const dataPath = path.resolve(dirname, '../data')
  const dataStr = JSON.stringify(data, null, 2)
  await fs.outputFile(path.join(dataPath, filename), `export default ${dataStr}`)
}
