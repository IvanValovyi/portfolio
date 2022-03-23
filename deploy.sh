set -e

git add .
git commit -m 'Deploy'
git push origin master

npm run build
cd dist
git init
git add .
git commit 'Deploy'
git branch -d gh-pages
git branch gh-pages
git remote add origin https://github.com/IvanValovyi/portfolio-site.git
git push origin gh-pages