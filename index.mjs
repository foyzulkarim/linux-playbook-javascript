await sleep(1000);
await $`clear`;
console.log(`Welcome to Linux Playbook repository. The aim of this repository is to provide a collection of scripts to quickly setup your Linux system for (mainly) development purpose.\n \n`);
console.log(`We will install the following packages: \n - yarn \n - git \n - net-tools (to use ifconfig command) \n - openssh (to allow ssh sessions from remote pc) \n - ufw (uncomplicated firewalll) and enable port 22, 80, 443 \n - nginx \n - docker \n - docker-compose \n`);
console.log(`You can choose 'y' for YES or 'n' for NO to decide about each installation.\n\n`);
await sleep(1000);
let shouldProceed = await question('Do you want to proceed? (y/n) ');
if (shouldProceed === 'y' || shouldProceed === 'yes') {
    console.log(`Thank you for your choice. Installation process will start now. \n\n`);
    await sleep(1000);
    console.log(`Installing packages...`);
    await sleep(1000);
    console.log('Hello, user!');
    console.log('First, we are updating and upgrading your system...');
    await $`sudo apt update`
    await $`sudo apt upgrade`
    await sleep(1000);
    console.log('Now, we are installing the packages:');
    await $`zx https://raw.githubusercontent.com/foyzulkarim/linux-playbook-javascript/main/script.mjs`;
    await sleep(1000);
} else {
    console.log(`You can't proceed.`);
    await sleep(1000);
}
