#!/usr/bin/env sh

set -e

pnpm build && pnpm generate

cd ./.output/public

git init 

git add -A

git commit -m '🎉deploy gh-pages🎉'

git push -f git@gitee.com:fxzer/github-trends.git main:gh-pages

cd ../..

