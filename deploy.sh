set -e

git add .
git commit -m 'Deploy'
git push origin master

npm run build
cd dist
git add .
git commit 'Deploy'
git push origin gh-pages