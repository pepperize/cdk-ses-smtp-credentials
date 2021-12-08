[![GitHub](https://img.shields.io/github/license/pepperize/cdk-ses-smtp-credentials?style=flat-square)](https://github.com/pepperize/cdk-ses-smtp-credentials/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-ses-smtp-credentials?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-ses-smtp-credentials)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-ses-smtp-credentials?style=flat-square)](https://pypi.org/project/pepperize.cdk-ses-smtp-credentials/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.SesSmtpCredentials?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.SesSmtpCredentials/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-ses-smtp-credentials/release/main?label=release&style=flat-square)](https://github.com/pepperize/cdk-ses-smtp-credentials/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-ses-smtp-credentials?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-ses-smtp-credentials/releases)

# AWS CDK Ses Smtp Credentials

This projects provides a CDK construct to create ses smtp credentials for a given user. It takes a username, creates an AccessKey and generates the smtp password.

## Example

```shell
npm install @pepperize/cdk-ses-smtp-credentials
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

// returns {username: "<the generated access key id>", password: "<the calculated ses smtp password>"}
console.log(smtpCredentials.credentials);
```
