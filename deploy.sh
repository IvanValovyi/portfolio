set -e

git add .
git commit -m 'Deploy'
git push -u origin master

npm run generate
cd dist
git init
git add .
git commit -m 'Deploy'
git remote add origin https://github.com/IvanValovyi/portfolio.git
git push origin --delete gh-pages
git branch gh-pages
git push -u origin gh-pages