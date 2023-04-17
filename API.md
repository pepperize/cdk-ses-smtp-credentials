[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![GitHub](https://img.shields.io/github/license/pepperize/cdk-ses-smtp-credentials?style=flat-square)](https://github.com/pepperize/cdk-ses-smtp-credentials/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-ses-smtp-credentials?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-ses-smtp-credentials)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-ses-smtp-credentials?style=flat-square)](https://pypi.org/project/pepperize.cdk-ses-smtp-credentials/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.SesSmtpCredentials?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.SesSmtpCredentials/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-ses-smtp-credentials?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-ses-smtp-credentials/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pepperize/cdk-ses-smtp-credentials/release.yml?branch=main&label=release&style=flat-square)](https://github.com/pepperize/cdk-ses-smtp-credentials/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-ses-smtp-credentials?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-ses-smtp-credentials/releases)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/pepperize/cdk-ses-smtp-credentials)

# AWS CDK Ses Smtp Credentials

Generate SES smtp credentials for a user and store the credentials in a SecretsManager Secret.

[![View on Construct Hub](https://constructs.dev/badge?package=%40pepperize%2Fcdk-ses-smtp-credentials)](https://constructs.dev/packages/@pepperize/cdk-ses-smtp-credentials)

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

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesSmtpCredentials <a name="SesSmtpCredentials" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials"></a>

This construct creates an access key for the given user and stores the generated SMTP credentials inside a secret.

Attaches an inline policy to the user allowing to send emails

```typescript
const user = User.fromUserName("ses-user-example");
const credentials = new SesSmtpCredentials(this, 'SmtpCredentials', {
     user: user,
});
// smtpCredentials.secret contains json value {username: "<the generated access key id>", password: "<the calculated ses smtp password>"}
```

#### Initializers <a name="Initializers" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer"></a>

```typescript
import { SesSmtpCredentials } from '@pepperize/cdk-ses-smtp-credentials'

new SesSmtpCredentials(scope: Construct, id: string, props: SesSmtpCredentialsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps">SesSmtpCredentialsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps">SesSmtpCredentialsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.isConstruct"></a>

```typescript
import { SesSmtpCredentials } from '@pepperize/cdk-ses-smtp-credentials'

SesSmtpCredentials.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The secret that contains the calculated AWS SES Smtp Credentials. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `secret`<sup>Required</sup> <a name="secret" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The secret that contains the calculated AWS SES Smtp Credentials.

```typescript
import { aws_ecs } from "aws-cdk-lib";

const containerDefinitionOptions: aws_ecs.ContainerDefinitionOptions = {
     // ...
     secrets: {
         MAIL_USERNAME: aws_ecs.Secret.fromSecretsManager(smtpCredentials.secret, "username"),
         MAIL_PASSWORD: aws_ecs.Secret.fromSecretsManager(smtpCredentials.secret, "password"),
     }
}
```

---


## Structs <a name="Structs" id="Structs"></a>

### SesSmtpCredentialsProps <a name="SesSmtpCredentialsProps" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.Initializer"></a>

```typescript
import { SesSmtpCredentialsProps } from '@pepperize/cdk-ses-smtp-credentials'

const sesSmtpCredentialsProps: SesSmtpCredentialsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | Optional, an SecretsManager secret to write the AWS SES Smtp credentials to. |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.user">user</a></code> | <code>aws-cdk-lib.aws_iam.IUser</code> | The user for which to create an AWS Access Key and to generate the smtp password. |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.userName">userName</a></code> | <code>string</code> | Optional, a username to create a new user if no existing user is given. |

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

Optional, an SecretsManager secret to write the AWS SES Smtp credentials to.

---

##### `user`<sup>Optional</sup> <a name="user" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.user"></a>

```typescript
public readonly user: IUser;
```

- *Type:* aws-cdk-lib.aws_iam.IUser

The user for which to create an AWS Access Key and to generate the smtp password.

If omitted a user will be created.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Optional, a username to create a new user if no existing user is given.

---



## Enums <a name="Enums" id="Enums"></a>

### Credentials <a name="Credentials" id="@pepperize/cdk-ses-smtp-credentials.Credentials"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.Credentials.USERNAME">USERNAME</a></code> | The key of the username stored in the secretsmanager key/value json. |
| <code><a href="#@pepperize/cdk-ses-smtp-credentials.Credentials.PASSWORD">PASSWORD</a></code> | The key of the password stored in the secretsmanager key/value json. |

---

##### `USERNAME` <a name="USERNAME" id="@pepperize/cdk-ses-smtp-credentials.Credentials.USERNAME"></a>

The key of the username stored in the secretsmanager key/value json.

---


##### `PASSWORD` <a name="PASSWORD" id="@pepperize/cdk-ses-smtp-credentials.Credentials.PASSWORD"></a>

The key of the password stored in the secretsmanager key/value json.

---

