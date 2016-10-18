#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

echo "deploying to gh-pages..."
SHA=`git rev-parse --verify HEAD`
URL='git@github.com:VS-work/VS-work.github.io.git'

openssl aes-256-cbc -K $encrypted_3fc7c455333c_key -iv $encrypted_3fc7c455333c_iv -in deploy_key.enc -out deploy_key -d

chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

./node_modules/.bin/gh-pages -d dist -r "${URL}" -b master -m "Deploy to GitHub Pages: ${SHA}"
