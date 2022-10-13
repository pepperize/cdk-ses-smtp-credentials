[![GitHub](https://img.shields.io/github/license/pepperize/cdk-ses-smtp-credentials?style=flat-square)](https://github.com/pepperize/cdk-ses-smtp-credentials/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-ses-smtp-credentials?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-ses-smtp-credentials)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-ses-smtp-credentials?style=flat-square)](https://pypi.org/project/pepperize.cdk-ses-smtp-credentials/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.SesSmtpCredentials?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.SesSmtpCredentials/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-ses-smtp-credentials?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-ses-smtp-credentials/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-ses-smtp-credentials/release/main?label=release&style=flat-square)](https://github.com/pepperize/cdk-ses-smtp-credentials/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-ses-smtp-credentials?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-ses-smtp-credentials/releases)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/pepperize/cdk-ses-smtp-credentials)

# AWS CDK Ses Smtp Credentials

Generate SES smtp credentials for a user and store the credentials in a SecretsManager Secret.

## Install

### TypeScript

```shell
npm install @pepperize/cdk-ses-smtp-credentials
```

or

```shell
yarn add @pepperize/cdk-ses-smtp-credentials
```

### Python

```shell
pip install pepperize.cdk-ses-smtp-credentials
```

### C# / .Net

```
dotnet add package Pepperize.CDK.SesSmtpCredentials
```

### Java

```xml
<dependency>
  <groupId>com.pepperize</groupId>
  <artifactId>cdk-ses-smtp-credentials</artifactId>
  <version>${cdkSesSmtpCredentials.version}</version>
</dependency>
```

## Usage

```shell
npm install @pepperize/cdk-ses-smtp-credentials
```

See [API.md](https://github.com/pepperize/cdk-ses-smtp-credentials/blob/main/API.md).

### Create AWS SES Smtp Credentials for a given user

> Attaches an inline policy to the user allowing to send emails

```typescript
import { User } from "@aws-cdk/aws-iam";
import { SesSmtpCredentials } from "@pepperize/cdk-ses-smtp-credentials";

const user = new User(stack, "SesUser", {
  userName: "ses-user",
});
const smtpCredentials = new SesSmtpCredentials(this, "SmtpCredentials", {
  user: user,
});

// smtpCredentials.secret contains json value {username: "<the generated access key id>", password: "<the calculated ses smtp password>"}
```

See [API Reference - SesSmtpCredentials](https://github.com/pepperize/cdk-ses-smtp-credentials/blob/main/API.md#sessmtpcredentials-)

### Create AWS SES Smtp Credentials and create a new user

> Attaches an inline policy to the user allowing to send emails

```typescript
import { User } from "@aws-cdk/aws-iam";
import { SesSmtpCredentials } from "@pepperize/cdk-ses-smtp-credentials";

const smtpCredentials = new SesSmtpCredentials(this, "SmtpCredentials", {
  userName: "ses-user",
});

// smtpCredentials.secret contains json value {username: "<the generated access key id>", password: "<the calculated ses smtp password>"}
```

See [API Reference - SesSmtpCredentials](https://github.com/pepperize/cdk-ses-smtp-credentials/blob/main/API.md#sessmtpcredentials-)

### Calculate the AWS SES Smtp password on your own

```typescript
import * as AWS from "aws-sdk";
import { calculateSesSmtpPassword } from "@pepperize/cdk-ses-smtp-credentials";

const iam = new AWS.IAM();
const accessKey = await iam
  .createAccessKey({
    UserName: username,
  })
  .promise();
const accessKeyId = accessKey.AccessKey.AccessKeyId;
const secretAccessKey = accessKey.AccessKey.SecretAccessKey;

const password = calculateSesSmtpPassword(secretAccessKey, "us-east-1");

console.log({
  username: accessKeyId,
  password: password,
});
```

See [Obtaining Amazon SES SMTP credentials by converting existing AWS credentials](https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html#smtp-credentials-convert)
