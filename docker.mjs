#!/usr/bin/env zx

console.log('Update & upgrade');
await $`sudo apt update`
await $`sudo apt upgrade`
console.log('Install docker');
await $`sudo apt install apt-transport-https ca-certificates curl software-properties-common`
await $`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
await $`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`
await $`sudo apt update`
await $`apt-cache policy docker-ce`
await $`sudo apt install docker-ce`
await $`sudo systemctl status docker`
