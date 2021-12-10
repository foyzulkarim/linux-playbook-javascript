#!/bin/bash

# My first script

echo "Hello World!"
sudo apt install curl 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install node
npm i -g npm@latest
npm install -g zx
source ~/.bashrc
zx index.mjs