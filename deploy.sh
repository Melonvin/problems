set -e

git config --local user.name Melonvin
git config --local user.email 1176891456@qq.com

npm run docs:build

cd docs/.vuepress/dist

git init 
git add .
git commit -m 'deploy'

git push -f git@github.com:Melonvin/problems.git master:gh-pages

cd ..

rm -rf dist