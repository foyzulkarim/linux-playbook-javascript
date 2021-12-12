#!/bin/bash
# My first script
echo "Setting up nvm!"
sudo apt install curl 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install node
npm i -g npm@latest
npm install -g zx
source ~/.bashrc
zx -v
zx index.mjs