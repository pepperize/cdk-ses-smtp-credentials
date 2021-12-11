const { AwsCdkConstructLibrary, NodePackageManager, JsonFile, NpmAccess } = require("projen");

const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "1.134.0",
  defaultReleaseBranch: "main",
  jsiiFqn: "projen.AwsCdkConstructLibrary",
  name: "@pepperize/cdk-ses-smtp-credentials",
  repositoryUrl: "https://github.com/pepperize/cdk-ses-smtp-credentials.git",

  /* AwsCdkConstructLibraryOptions */
  // cdkAssert: true,                                                               /* Install the @aws-cdk/assert library? */
  cdkDependencies: [
    "@aws-cdk/core",
    "@aws-cdk/aws-iam",
    "@aws-cdk/aws-lambda",
    "@aws-cdk/aws-lambda-nodejs",
    "@aws-cdk/aws-logs",
    "@aws-cdk/custom-resources",
  ] /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */,
  // cdkDependenciesAsDeps: true,                                                   /* If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). */
  cdkTestDependencies: ["@aws-cdk/assertions"] /* AWS CDK modules required for testing. */,
  // cdkVersionPinning: false,                                                      /* Use pinned version instead of caret version for CDK. */

  /* ConstructLibraryOptions */
  // catalog: undefined,                                                            /* Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:. */

  /* JsiiProjectOptions */
  // compat: false,                                                                 /* Automatically run API compatibility test against the latest version published to npm after compilation. */
  // compatIgnore: '.compatignore',                                                 /* Name of the ignore file for API compatibility tests. */
  // docgen: true,                                                                  /* Automatically generate API.md from jsii. */
  eslint: true /* Install eslint. */,
  eslintOptions: {
    prettier: true,
  } /* Eslint options. */,
  // excludeTypescript: undefined,                                                  /* Accepts a list of glob patterns. */
  // publishToGo: undefined,                                                        /* Publish Go bindings to a git repository. */
  // publishToMaven: undefined,                                                     /* Publish to maven. */
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.SesSmtpCredentials",
  } /* Publish to NuGet. */,
  publishToPypi: {
    distName: "pepperize.cdk-ses-smtp-credentials",
    module: "pepperize_cdk_ses_smtp_credentials",
  } /* Publish to pypi. */,
  // rootdir: '.',                                                                  /* undefined */
  // sampleCode: true,                                                              /* Generate one-time sample in `src/` and `test/` if there are no files there. */

  /* NodePackageOptions */
  // allowLibraryDependencies: true,                                                /* Allow the project to include `peerDependencies` and `bundledDependencies`. */
  // authorEmail: undefined,                                                        /* Author's e-mail. */
  // authorName: undefined,                                                         /* Author's name. */
  authorOrganization: true /* Author's Organization. */,
  // authorUrl: undefined,                                                          /* Author's URL / Website. */
  // autoDetectBin: true,                                                           /* Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. */
  // bin: undefined,                                                                /* Binary programs vended with your module. */
  bundledDeps: ["aws-lambda", "aws-sdk"] /* List of dependencies to bundle into this module. */,
  deps: ["aws-lambda", "aws-sdk"] /* Runtime dependencies of this module. */,
  description:
    "This projects provides a CDK construct to create ses smtp credentials for a given user. It takes a username, creates an AccessKey and generates the smtp password." /* The description is just a string that helps people understand the purpose of the package. */,
  devDeps: ["@types/aws-lambda", "cdk-nag"] /* Build dependencies for this module. */,
  // entrypoint: 'lib/index.js',                                                    /* Module entrypoint (`main` in `package.json`). */
  // homepage: undefined,                                                           /* Package's Homepage / Website. */
  keywords: ["AWS", "CDK", "SES", "Smtp", "Credentials", "Secret"] /* Keywords to include in `package.json`. */,
  license: "MIT" /* License's SPDX identifier. */,
  // licensed: true,                                                                /* Indicates if a license should be added. */
  // maxNodeVersion: undefined,                                                     /* Minimum node.js version to require via `engines` (inclusive). */
  // minNodeVersion: undefined,                                                     /* Minimum Node.js version to require via package.json `engines` (inclusive). */
  npmAccess: NpmAccess.PUBLIC /* Access level of the npm package. */,
  // npmDistTag: 'latest',                                                          /* Tags can be used to provide an alias instead of version numbers. */
  // npmRegistryUrl: 'https://registry.npmjs.org',                                  /* The base URL of the npm package registry. */
  // npmTaskExecution: NpmTaskExecution.PROJEN,                                     /* Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz). */
  packageManager: NodePackageManager.YARN /* The Node Package Manager used to execute scripts. */,
  // packageName: undefined,                                                        /* The "name" in package.json. */
  // peerDependencyOptions: undefined,                                              /* Options for `peerDeps`. */
  // peerDeps: [],                                                                  /* Peer dependencies for this module. */
  // projenCommand: 'npx projen',                                                   /* The shell command to use in order to run the projen CLI. */
  // repository: undefined,                                                         /* The repository is the location where the actual code for your package lives. */
  // repositoryDirectory: undefined,                                                /* If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. */
  // scripts: {},                                                                   /* npm scripts to include. */
  // stability: undefined,                                                          /* Package's Stability. */

  /* NodeProjectOptions */
  // antitamper: true,                                                              /* Checks that after build there are no modified files on git. */
  // artifactsDirectory: 'dist',                                                    /* A directory which will contain artifacts to be published to npm. */
  // buildWorkflow: undefined,                                                      /* Define a GitHub workflow for building PRs. */
  // codeCov: false,                                                                /* Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. */
  // codeCovTokenSecret: undefined,                                                 /* Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. */
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)" /* License copyright owner. */,
  // copyrightPeriod: undefined,                                                    /* The copyright years to put in the LICENSE file. */
  // dependabot: true,                                                              /* Include dependabot configuration. */
  // dependabotOptions: undefined,                                                  /* Options for dependabot. */
  gitignore: [".idea"] /* Additional entries to .gitignore. */,
  // jest: true,                                                                    /* Setup jest unit tests. */
  // jestOptions: undefined,                                                        /* Jest options. */
  // jsiiReleaseVersion: 'latest',                                                  /* Version requirement of `jsii-release` which is used to publish modules to npm. */
  // mergify: true,                                                                 /* Adds mergify configuration. */
  // mergifyAutoMergeLabel: 'auto-merge',                                           /* Automatically merge PRs that build successfully and have this label. */
  // mergifyOptions: undefined,                                                     /* Options for mergify. */
  // npmignore: undefined,                                                          /* Additional entries to .npmignore. */
  // npmignoreEnabled: true,                                                        /* Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. */
  // projenDevDependency: true,                                                     /* Indicates of "projen" should be installed as a devDependency. */
  // projenUpgradeAutoMerge: undefined,                                             /* Automatically merge projen upgrade PRs when build passes. */
  // projenUpgradeSchedule: [ '0 6 * * *' ],                                        /* Customize the projenUpgrade schedule in cron expression. */
  // projenUpgradeSecret: undefined,                                                /* Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`). */
  // projenVersion: Semver.latest(),                                                /* Version of projen to install. */
  // pullRequestTemplate: true,                                                     /* Include a GitHub pull request template. */
  // pullRequestTemplateContents: undefined,                                        /* The contents of the pull request template. */
  // rebuildBot: undefined,                                                         /* Installs a GitHub workflow which is triggered when the comment "@projen rebuild" is added to a pull request. */
  // rebuildBotCommand: 'rebuild',                                                  /* The pull request bot command to use in order to trigger a rebuild and commit of the contents of the branch. */
  // releaseBranches: [ 'main' ],                                                   /* Branches which trigger a release. */
  // releaseEveryCommit: true,                                                      /* Automatically release new versions every commit to one of branches in `releaseBranches`. */
  // releaseSchedule: undefined,                                                    /* CRON schedule to trigger new releases. */
  releaseToNpm: true /* Automatically release to npm when new versions are introduced. */,
  // releaseWorkflow: undefined,                                                    /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */
  // workflowBootstrapSteps: 'yarn install --frozen-lockfile && yarn projen',       /* Workflow steps to use in order to bootstrap this repo. */
  // workflowContainerImage: undefined,                                             /* Container image to use for GitHub workflows. */
  // workflowNodeVersion: undefined,                                                /* The node version to use in GitHub workflows. */

  /* ProjectOptions */
  // clobber: true,                                                                 /* Add a `clobber` task which resets the repo to origin. */
  // devContainer: false,                                                           /* Add a VSCode development environment (used for GitHub Codespaces). */
  // gitpod: false,                                                                 /* Add a Gitpod development environment. */
  // logging: {},                                                                   /* Configure logging options such as verbosity. */
  // outdir: '.',                                                                   /* The root directory of the project. */
  // parent: undefined,                                                             /* The parent project, if this project is part of a bigger project. */
  // projectType: ProjectType.UNKNOWN,                                              /* Which type of project this is (library/app). */
  // readme: undefined,                                                             /* The README setup. */

  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ["pflorek"], secret: "GITHUB_TOKEN" },
  depsUpgradeOptions: {
    workflowOptions: {
      secret: "PROJEN_GITHUB_TOKEN",
    },
  },
});

project.setScript("format", "prettier --write 'src/**/*.ts' test/**/*.ts '.projenrc.js' 'README.md'");

new JsonFile(project, ".prettierrc", {
  obj: {
    printWidth: 120,
  },
  marker: false,
});

project.synth();
