![GitHub](https://img.shields.io/github/license/pepperize/cdk-ses-smtp-credentials?style=flat-square)
![npm (scoped)](https://img.shields.io/npm/v/@pepperize-testing/cdk-ses-smtp-credentials?style=flat-square)
![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-ses-smtp-credentials?style=flat-square)
![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.SesSmtpCredentials?style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-ses-smtp-credentials/build/main?label=build&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-ses-smtp-credentials/release/main?label=release&style=flat-square)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-ses-smtp-credentials?sort=semver&style=flat-square)

# AWS CDK Ses Smtp Credentials

This projects provides a CDK construct to create ses smtp credentials for a given user. It takes a username, creates an AccessKey and generates the smtp password.

## Example

```shell
npm install @pepperize-testing/cdk-ses-smtp-credentials
```

```typescript
import { User } from "@aws-cdk/aws-iam";

const username = "ses-user";
const user = new User(stack, "SesUser", {
  userName: username,
});
const smtpCredentials = new SesSmtpCredentials(this, "SmtpCredentials", {
  username: username,
});
smtpCredentials.node.addDependency(user);
```
