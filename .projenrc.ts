import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
import { awscdk, javascript } from "projen";
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.278.0",
  jsiiVersion: "~6.0.0",
  name: "@pepperize/cdk-ses-smtp-credentials",
  description: "Generate SES smtp credentials for a given user and store the credentials in a SecretsManager Secret.",
  keywords: ["AWS", "CDK", "SES", "Smtp", "Credentials", "SecretsManager", "Secret", "Utilities"],
  repositoryUrl: "https://github.com/pepperize/cdk-ses-smtp-credentials.git",

  projenrcTs: true,
  minNodeVersion: "22.13.0",
  workflowNodeVersion: "24.x",
  jestOptions: {
    jestVersion: "^30",
  },
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,

  lambdaOptions: {
    runtime: awscdk.LambdaRuntime.NODEJS_26_X,
  },

  deps: [],
  bundledDeps: [],
  devDeps: [
    "@pepperize/projen-awscdk-construct@~0.1.2",
    "@types/node@^22",
    "typescript@~6.0",
    "@types/aws-lambda",
    "@types/sinon",
    "aws-lambda",
    "aws-sdk",
    "aws-sdk-mock",
    "sinon",
  ],

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
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-ses-smtp-credentials",
    javaPackage: "com.pepperize.cdk.ses_smtp_credentials",
  },

  gitpod: true,
});

project.gitignore.exclude("cdk.out/");

// handler tests use dynamic import(); jest needs vm modules for that
project.testTask.env("NODE_OPTIONS", "--experimental-vm-modules");

project.tasks.tryFind("package:python")?.prependExec("pip3 install packaging");

project.gitpod?.addCustomTask({
  name: "setup",
  init: "yarn install && npx projen build",
  command: "npx projen watch",
});

project.gitpod?.addVscodeExtensions("dbaeumer.vscode-eslint");

project.synth();
