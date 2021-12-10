console.log('Update & upgrade');
await $`sudo apt update`
await $`sudo apt upgrade`
console.log('Install docker compose 1.29.2');
await $`sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
await $`sudo chmod +x /usr/local/bin/docker-compose`
await $`sudo docker-compose --version`