#!/usr/bin/env zx

console.log('Setting up a react app');
await $`npx create-react-app myapp`
await $`cd myapp`
await $`yarn`
await $`yarn start`