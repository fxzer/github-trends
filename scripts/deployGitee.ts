import process from 'node:process'
import { execa } from 'execa'

async function deploy() {
  try {
    await execa('pnpm', ['build'])
    await execa('pnpm', ['generate'])

    process.chdir('./.output/public')

    await execa('git', ['init'])
    await execa('git', ['add', '-A'])
    await execa('git', ['commit', '-m', '🎉deploy gh-pages🎉'])
    await execa('git', ['push', '-f', 'git@gitee.com:fxzer/github-trends.git', 'main:gh-pages'])

    process.chdir('../..')
  }
  catch (error) {
    console.error(error)
  }
}

deploy()
