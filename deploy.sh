set -e

git add .
git commit -m 'Deploy'
git push origin master

npm run generate
cd dist
git init
git add .
git commit -m 'Deploy'
git remote add origin https://github.com/IvanValovyi/portfolio-site.git
git push origin --delete gh-pages
git branch gh-pages
git push origin gh-pages