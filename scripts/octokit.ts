import process from 'node:process'
import { Octokit } from 'octokit'

export const octokit = new Octokit({
  auth: process.env.GITHUB_TRENDS_TOKEN || '',
})

export async function orequest(...args: any[]) {
  const dt = await octokit.request(args[0], { ...args[1], headers: { 'X-GitHub-Api-Version': '2022-11-28' } })
  return dt.data
}
