import process from 'node:process'
import nodemailer from 'nodemailer'
import fs from 'fs-extra'

const { QQ_EMAIL, WY_EMAIL, QQ_EMAIL_AUTH } = process.env
console.log('[ process.env ]-5', process.env)
console.log('[ QQ_EMAIL, WY_EMAIL, QQ_EMAIL_AUTH ]-5', QQ_EMAIL, WY_EMAIL, QQ_EMAIL_AUTH)
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 587,
  secure: false,
  auth: {
    user: QQ_EMAIL, // 我的邮箱
    pass: QQ_EMAIL_AUTH, // 授权码
  },
})
const html = fs.readFileSync('./assets/email.html', 'utf-8')
async function sendEMail() {
  await transporter.sendMail({
    from: QQ_EMAIL, // 发送人邮箱
    to: WY_EMAIL, // 发送给谁
    subject: '🎉Github Trends🎉 成功部署！🎉', // 标题
    // text: '部署内容!', // 内容
    html, // html 内容
  }, (err: Error | null, info: any) => {
    if (err)
      console.error('发送失败', err)

    console.log('信息对象', info)
  })
}

sendEMail()
