#!/usr/bin/env zx

console.log('Hello, world!');
console.log('Updating and upgrading');
await $`sudo apt update`
await $`sudo apt upgrade`
console.log('Installing yarn');
await $`npm install -g yarn`
console.log('Installing git');
await $`sudo apt install git`
console.log('Installing net tools');
await $`sudo apt install net-tools`
console.log('Installing and configuring ufw');
await $`sudo apt install ufw`
await $`sudo ufw allow 80/tcp`
await $`sudo ufw allow 443/tcp`
await $`sudo ufw enable`
await $`sudo ufw status`
console.log('Installing and configuring nginx');
await $`sudo apt install nginx`
await $`sudo systemctl enable nginx`
await $`sudo systemctl start nginx`
await $`sudo service nginx status`