// #! /usr/bin/env node
import process from 'node:process'
import puppeteer from 'puppeteer'
import { saveUpdateTime } from './updateTime'

/**
   在 ~/.zshrc 中配置环境变量（保护隐私）  例如：
  export GITEE_NAME="Gitee 用户名"
  export GITEE_PSWD="Gitee 登录密码"
 */
const { GITEE_NAME = '', GITEE_PSWD = '' } = process.env
const GITEE_HOME = 'https://gitee.com/'
const GITEE_LOGIN = 'https://gitee.com/login'
const GITEE_PAGES = 'https://gitee.com/fxzer/github-trends/pages'
const GITEE_PAGES_URL = 'https://fxzer.gitee.io/github-trends'
const delay = ms => new Promise(res => setTimeout(res, ms))

async function giteeUpdate() {
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  })
  /* 获取输入框，并自动输入 */
  async function autoInput(selector, text) {
    const inputEl = await page.waitForSelector(selector)
    await inputEl.type(text)
  }
  /* 自动点击 */
  async function autoClick(selector) {
    const btn = await page.waitForSelector(selector)
    await btn.click()
  }
  //  1. 打开gitee登录页面
  await page.goto(GITEE_LOGIN)
  //  2. 输入用户名和密码
  await autoInput('input.login-password__account-input', GITEE_NAME)
  await autoInput('#user_password', GITEE_PSWD)
  await autoClick('.field .submit')
  //  3. 点击登录按钮，判断是否登录成功
  while (true) {
    await delay(100)
    const currentUrl = page.url()
    if (currentUrl === GITEE_HOME) {
      console.log('登录成功')
      break
    }
  }
  //  4. 跳转项目的gitee pages页面
  await page.goto(GITEE_PAGES)
  //  5. 监听弹窗，确认更新
  await page.on('dialog', async dialog => dialog.accept())
  //  6. 点击更新按钮
  await autoClick('.redeploy-button')
  // 循环检查加载图标是否可见

  let updateTimes = 0
  const waitTimer = 10 * 1000
  while (true) {
    await delay(waitTimer)
    // 使用 isVisible 方法检查元素是否可见
    const loading = await page.waitForSelector('.pages_message_loading')
    const isVisible = await loading.isVisible()
    updateTimes = (updateTimes + waitTimer) / 1000

    if (!isVisible) {
      console.log(`更新完毕，用时：${updateTimes}s，请查阅：${GITEE_PAGES_URL}`)
      break
    }
    console.log('更新中...，已用时：', updateTimes, 's')
  }
  await delay(100)
  //  8.更新完毕，关闭浏览器
  browser.close()
}
giteeUpdate()
saveUpdateTime()
