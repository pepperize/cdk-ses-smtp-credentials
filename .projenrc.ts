import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
import { javascript } from "projen";
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.8.0",
  name: "@pepperize/cdk-ses-smtp-credentials",
  description: "Generate SES smtp credentials for a given user and store the credentials in a SecretsManager Secret.",
  keywords: ["AWS", "CDK", "SES", "Smtp", "Credentials", "SecretsManager", "Secret"],
  repositoryUrl: "https://github.com/pepperize/cdk-ses-smtp-credentials.git",

  projenrcTs: true,

  deps: [],
  bundledDeps: [],
  devDeps: [
    "@pepperize/projen-awscdk-construct",
    "@types/aws-lambda",
    "@types/sinon",
    "aws-lambda",
    "aws-sdk",
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

  defaultReleaseBranch: "main",
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

project.gitpod?.addCustomTask({
  name: "setup",
  init: "yarn install && npx projen build",
  command: "npx projen watch",
});

project.gitpod?.addVscodeExtensions("dbaeumer.vscode-eslint");

project.synth();
