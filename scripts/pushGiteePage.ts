import process from 'node:process'
import { execa } from 'execa'

export async function pushGiteePage() {
  try {
    console.log('==>Running build command...')
    await execa('pnpm', ['build'])

    console.log('==>Running generate command...')
    await execa('pnpm', ['generate'])

    console.log('==>Changing directory to ./.output/public...')
    process.chdir('./.output/public')

    console.log('==>Initializing git...')
    await execa('git', ['init'])

    console.log('==>Adding files...')
    await execa('git', ['add', '-A'])

    console.log('==>Committing changes...')
    await execa('git', ['commit', '-m', '🎉deploy gh-pages🎉'])

    console.log('==>Pushing changes...')
    await execa('git', ['push', '-f', 'git@gitee.com:fxzer/github-trends.git', 'main:gh-pages'])

    console.log('==>Changing directory back to original...')
    process.chdir('../..')

    console.log('Done.')
  }
  catch (error) {
    console.error(error)
  }
}
await pushGiteePage()
