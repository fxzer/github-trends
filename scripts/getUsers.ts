import { USER_RANGES } from '../utils'
import { saveData } from './saveData'
import { orequest } from './octokit'

export async function getUserInfo(username: string) {
  return await orequest(`GET /users/${username}`)
}
export async function getUsers(page: number, isChina?: boolean) {
  const dt = await orequest('GET /search/users', {
    q: `followers:>1000${isChina ? '+location:China' : ''}`,
    sort: 'followers',
    page,
    per_page: 10,
  })
  return dt.items || []
}

export async function getUsersData() {
  const allUsers: any = { }
  for (const range of USER_RANGES) {
    const users = []
    for (let i = 1; i <= 1; i++) {
      const dt = await getUsers(i, range === 'China')
      if (dt && dt.length)
        users.push(...dt)
    }
    // 获取用户详细信息
    for (const user of users) {
      const userInfo = await getUserInfo(user.login)
      Object.assign(user, userInfo)
    }
    allUsers[range] = users
  }
  await saveData(allUsers, `users.js`)
}
getUserInfo('fxzer')
