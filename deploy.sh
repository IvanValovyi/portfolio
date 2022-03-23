set -e

git add .
git commit -m 'Deploy'
git push origin master

npm run generate
cd dist
git init
git add .
git commit 'Deploy'
git push -f git@github.com:IvanValovyi/portfolio-site.git master:gh-pages