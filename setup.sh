#!/bin/bash
# My first script
echo "This script will setup node in this machine:"
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
export NVM_DIR="$HOME/.nvm"
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install --lts
npm i -g npm@latest
npm install -g zx
source ~/.bashrc
zx -v

echo "Do you want to install other packages using index.mjs?"
read -p "y/n: " answer
if [ "$answer" = "y" ]; then
  zx './index.mjs'
else
  echo "Ok, bye!"

# zx https://raw.githubusercontent.com/foyzulkarim/linux-playbook-javascript/main/index.mjs
