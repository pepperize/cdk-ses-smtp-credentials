const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const { javascript } = require("projen");
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  cdkVersion: "2.8.0",
  name: "@pepperize/cdk-ses-smtp-credentials",
  description: "Generate SES smtp credentials for a given user and store the credentials in a SecretsManager Secret.",
  keywords: ["AWS", "CDK", "SES", "Smtp", "Credentials", "SecretsManager", "Secret"],
  repositoryUrl: "https://github.com/pepperize/cdk-ses-smtp-credentials.git",

  deps: ["aws-lambda", "aws-sdk"],
  bundledDeps: ["aws-lambda", "aws-sdk"],
  devDeps: [
    "@pepperize/projen-awscdk-construct",
    "@types/aws-lambda",
    "@types/sinon",
    "cdk-nag@^2.0.0",
    "aws-sdk-mock",
    "sinon",
  ],

  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ["pflorek"],
    secret: "GITHUB_TOKEN",
  },
  depsUpgradeOptions: {
    workflowOptions: {
      secret: "PROJEN_GITHUB_TOKEN",
    },
  },

  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.SesSmtpCredentials",
  },
  publishToPypi: {
    distName: "pepperize.cdk-ses-smtp-credentials",
    module: "pepperize_cdk_ses_smtp_credentials",
  },
  publishToMaven: {
    mavenEndpoint: "https://s01.oss.sonatype.org",
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-ses-smtp-credentials",
    javaPackage: "com.pepperize.cdk.ses_smtp_credentials",
  },

  gitpod: true,
});

project.gitignore.exclude("cdk.out/");

project.tasks.tryFind("package:python")?.prependExec("pip3 install packaging");

project.gitpod.addCustomTask({
  name: "setup",
  init: "yarn install && npx projen build",
  command: "npx projen watch",
});

project.gitpod.addVscodeExtensions("dbaeumer.vscode-eslint");

project.synth();
