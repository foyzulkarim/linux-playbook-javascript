#!/usr/bin/env zx
// yarn
await sleep(1000);
let shouldInstallYarn = await question('Do you want to install yarn? [y/n] ');
if (shouldInstallYarn.toLowerCase() === 'y') {
    console.log('Installing yarn');
    await $`npm install -g yarn`
    await $`yarn -v`
} else {
    console.log('Skipping yarn installation');
}

await sleep(1000);
let shouldInstallGit = await question('Do you want to install git? [y/n] ');
if (shouldInstallGit.toLowerCase() === 'y') {
    console.log('Installing git');
    await $`sudo apt install git`
    await $`git --version`
} else {
    console.log('Skipping git installation');
}

//net-tools
await sleep(1000);
let shouldInstallNetTools = await question('Do you want to install net-tools? [y/n] ');
if (shouldInstallNetTools.toLowerCase() === 'y') {
    console.log('Installing net tools');
    await $`sudo apt install net-tools`
    await $`ifconfig`
} else {
    console.log('Skipping net tools installation');
}

//ufw 
await sleep(1000);
let shouldInstallUFW = await question('Do you want to install ufw? [y/n] ');
if (shouldInstallUFW.toLowerCase() === 'y') {
    console.log('Installing and configuring ufw');
    await $`sudo apt install ufw`
    await $`sudo ufw allow 80/tcp`
    await $`sudo ufw allow 443/tcp`
    await $`sudo ufw enable`
    await $`sudo ufw status`
} else {
    console.log('Skipping ufw installation');
}

// nginx
await sleep(1000);
let shouldInstallNginx = await question('Do you want to install nginx? [y/n] ');
if (shouldInstallNginx.toLowerCase() === 'y') {
    console.log('Installing and configuring nginx');
    await $`sudo apt install nginx`
    await $`sudo systemctl enable nginx`
    await $`sudo systemctl start nginx`
    await $`sudo service nginx status`
} else {
    console.log('Skipping nginx installation');
}

// docker 
let shouldInstallDocker = await question('Do you want to install docker? [y/n] ');
if (shouldInstallDocker.toLowerCase() === 'y') {
    await $`zx docker.mjs`
} else {
    console.log('Skipping docker installation');
}

// docker-compose
let shouldInstallDockerCompose = await question('Do you want to install docker-compose? [y/n] ');
if (shouldInstallDockerCompose.toLowerCase() === 'y') {
    await $`zx docker-compose.mjs`
} else {
    console.log('Skipping docker-compose installation');
}
