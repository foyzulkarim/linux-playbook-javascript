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
    // await $`git config --global user.name "Your Name"`
    // await $`git config --global user.email "
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

//openssh-server
await sleep(1000);
let shouldInstallOpenSSH = await question('Do you want to install openssh-server? [y/n] ');
if (shouldInstallOpenSSH.toLowerCase() === 'y') {
    console.log('Installing openssh-server');
    await $`sudo apt install openssh-server`
    await $`sudo systemctl enable ssh`
    await $`sudo systemctl start ssh`
    await $`sudo systemctl status ssh`
} else {
    console.log('Skipping openssh-server installation');
}

//ufw 
await sleep(1000);
let shouldInstallUFW = await question('Do you want to install ufw? [y/n] ');
if (shouldInstallUFW.toLowerCase() === 'y') {
    console.log('Installing and configuring ufw');
    await $`sudo apt install ufw`
    await $`sudo ufw allow 80/tcp`
    await $`sudo ufw allow 443/tcp`
    await $`sudo ufw allow 22/tcp`
    await $`sudo ufw enable`
    await $`sudo ufw status`
} else {
    console.log('Skipping ufw installation. Remote ssh to this computer may not work if you did not install openssh server');
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
    await $`zx https://raw.githubusercontent.com/foyzulkarim/linux-playbook-javascript/main/docker.mjs`
} else {
    console.log('Skipping docker installation');
}

// docker-compose
let shouldInstallDockerCompose = await question('Do you want to install docker-compose? [y/n] ');
if (shouldInstallDockerCompose.toLowerCase() === 'y') {
    await $`zx https://raw.githubusercontent.com/foyzulkarim/linux-playbook-javascript/main/docker-compose.mjs`
} else {
    console.log('Skipping docker-compose installation');
}
