# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### SesSmtpCredentials <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials" id="pepperizecdksessmtpcredentialssessmtpcredentials"></a>

This construct creates an access key for the given user and stores the generated SMTP credentials inside a secret.

#### Initializers <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer" id="pepperizecdksessmtpcredentialssessmtpcredentialsinitializer"></a>

```typescript
import { SesSmtpCredentials } from '@pepperize/cdk-ses-smtp-credentials'

new SesSmtpCredentials(scope: Construct, id: string, props: SesSmtpCredentialsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdksessmtpcredentialssessmtpcredentialsparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#pepperizecdksessmtpcredentialssessmtpcredentialsparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdksessmtpcredentialssessmtpcredentialsparameterprops)<span title="Required">*</span> | [`@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps`](#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.parameter.scope" id="pepperizecdksessmtpcredentialssessmtpcredentialsparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.parameter.id" id="pepperizecdksessmtpcredentialssessmtpcredentialsparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.parameter.props" id="pepperizecdksessmtpcredentialssessmtpcredentialsparameterprops"></a>

- *Type:* [`@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps`](#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`secret`](#pepperizecdksessmtpcredentialssessmtpcredentialspropertysecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | *No description.* |

---

##### `secret`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.property.secret" id="pepperizecdksessmtpcredentialssessmtpcredentialspropertysecret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---


## Structs <a name="Structs" id="structs"></a>

### SesSmtpCredentialsProps <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps" id="pepperizecdksessmtpcredentialssessmtpcredentialsprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SesSmtpCredentialsProps } from '@pepperize/cdk-ses-smtp-credentials'

const sesSmtpCredentialsProps: SesSmtpCredentialsProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`user`](#pepperizecdksessmtpcredentialssessmtpcredentialspropspropertyuser)<span title="Required">*</span> | [`aws-cdk-lib.aws_iam.IUser`](#aws-cdk-lib.aws_iam.IUser) | The user for which to create an AWS Access Key and to generate the smtp password. |
| [`secret`](#pepperizecdksessmtpcredentialssessmtpcredentialspropspropertysecret) | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | Optional, an SecretsManager secret to write the AWS SES Smtp credentials to. |

---

##### `user`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.user" id="pepperizecdksessmtpcredentialssessmtpcredentialspropspropertyuser"></a>

```typescript
public readonly user: IUser;
```

- *Type:* [`aws-cdk-lib.aws_iam.IUser`](#aws-cdk-lib.aws_iam.IUser)

The user for which to create an AWS Access Key and to generate the smtp password.

---

##### `secret`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.secret" id="pepperizecdksessmtpcredentialssessmtpcredentialspropspropertysecret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

Optional, an SecretsManager secret to write the AWS SES Smtp credentials to.

---



## Enums <a name="Enums" id="enums"></a>

### Credentials <a name="Credentials" id="credentials"></a>

| **Name** | **Description** |
| --- | --- |
| [`USERNAME`](#pepperizecdksessmtpcredentialscredentialsusername) | The key of the username stored in the secretsmanager key/value json text. |
| [`PASSWORD`](#pepperizecdksessmtpcredentialscredentialspassword) | The key of the password stored in the secretsmanager key/value json. |

---

#### `USERNAME` <a name="@pepperize/cdk-ses-smtp-credentials.Credentials.USERNAME" id="pepperizecdksessmtpcredentialscredentialsusername"></a>

The key of the username stored in the secretsmanager key/value json text.

---


#### `PASSWORD` <a name="@pepperize/cdk-ses-smtp-credentials.Credentials.PASSWORD" id="pepperizecdksessmtpcredentialscredentialspassword"></a>

The key of the password stored in the secretsmanager key/value json.

---

