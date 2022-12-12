#!/usr/bin/env zx
import chalk from "chalk";
// await sleep(1000);
const log = console.log;

await $`clear`;
log(chalk.green(`Welcome to Linux Playbook repository!`));
console.log(
  chalk.bgYellowBright(
    `No blackmagic here. The script is using instruction from \n https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html \n and you can check the code before running. `
  )
);
console.log(
  chalk.blue(
    `You can choose 'y' for YES or 'n' for NO to decide about each installation.\n\n`
  )
);

// await sleep(1000);

// let shouldProceed = await question("Do you want to proceed? (y/n) ");
let shouldProceed = "y";
if (shouldProceed === "y" || shouldProceed === "yes") {
  // ask for os
  console.log(
    `version: ${os.version()} type ${os.type()} platform ${os.platform()}`
  );
  let isAwsInstalled = false;
  try {
    const whichAws = await $`which aws`;
    const awsVersion = await $`aws --version`;
    console.log(`RESULT: ${whichAws} \t ${awsVersion}`);
    isAwsInstalled = true;
  } catch (error) {
    console.error(error);
  }
  console.log(`AWS CLI installed? ${isAwsInstalled}`);
  if (!isAwsInstalled && os.platform() === "darwin") {
    console.log(`It looks like you are on MAC. Using MAC instructions.`);
    await sleep(1000);
    console.log(
      `Downloading AWS CLI V2 Package from "https://awscli.amazonaws.com/AWSCLIV2.pkg"`
    );
    // curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
    // await $`curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"`;
    console.log("Starting installation");
    await sleep(1000);
    // await $`sudo installer -pkg ./AWSCLIV2.pkg -target /`
    console.log(`installation is successful`);
    // await sleep(1000);
    console.log(`verifying the installation`);
    // await sleep(1000);
    // await $`which aws`;
    // await $`aws --version`;
  }

  console.log("Now the installation is done, lets start the configuration. \n");
  console.log("Checking the existing configs and credentials.\n");
  // await $`cat ~/.aws/config`;
  // await $`cat ~/.aws/credentials`;
  // const upsertProfile = await question(
  //   `Do you want to create/update the profile (y / yes)?\n`
  // );
  // const q =
  //   upsertProfile === "y" || upsertProfile === "yes"
  //     ? "what do you want to name the profile?"
  //     : "what profile you want to test?";
  // const profileName = await question(`${q}\n`);
  // if (upsertProfile === "y" || upsertProfile === "yes") {
  //   console.log(`setting up for ${profileName} \n`);
  //   await $`aws configure --profile ${profileName}`;
  // }
  // await $`aws iam get-user --profile ${profileName}`;
  // await $`aws s3 ls --profile ${profileName}`;

  // console.log("config done");
  // await sleep(2000);
  // const ans = await question(`are you happy?\n`);
  //console.log(ans);
} else {
  console.log(`You can't proceed.`);
  await sleep(1000);
}
