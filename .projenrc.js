const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const { javascript } = require("projen");
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.8.0",
  jsiiFqn: "projen.AwsCdkConstructLibrary",
  name: "@pepperize/cdk-ses-smtp-credentials",
  repositoryUrl: "https://github.com/pepperize/cdk-ses-smtp-credentials.git",

  testDeps: ["@aws-cdk/assertions"] /* AWS CDK modules required for testing. */,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.SesSmtpCredentials",
  } /* Publish to NuGet. */,
  publishToPypi: {
    distName: "pepperize.cdk-ses-smtp-credentials",
    module: "pepperize_cdk_ses_smtp_credentials",
  } /* Publish to pypi. */,

  /* NodePackageOptions */
  bundledDeps: ["aws-lambda", "aws-sdk"] /* List of dependencies to bundle into this module. */,
  deps: ["aws-lambda", "aws-sdk"] /* Runtime dependencies of this module. */,
  description:
    "This projects provides a CDK construct to create ses smtp credentials for a given user. It takes a username, creates an AccessKey and generates the smtp password." /* The description is just a string that helps people understand the purpose of the package. */,
  devDeps: [
    "@pepperize/projen-awscdk-construct",
    "@types/aws-lambda",
    "@types/sinon",
    "cdk-nag@^2.0.0",
    "aws-sdk-mock",
    "sinon",
  ] /* Build dependencies for this module. */,
  keywords: ["AWS", "CDK", "SES", "Smtp", "Credentials", "Secret"] /* Keywords to include in `package.json`. */,
  license: "MIT" /* License's SPDX identifier. */,
  npmAccess: javascript.NpmAccess.PUBLIC /* Access level of the npm package. */,
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)" /* License copyright owner. */,
  releaseToNpm: true /* Automatically release to npm when new versions are introduced. */,
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
});

project.gitignore.exclude("cdk.out/");

project.tasks.tryFind("package:python")?.prependExec("pip3 install packaging");

project.synth();
