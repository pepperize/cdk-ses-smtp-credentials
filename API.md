# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### SesSmtpCredentials <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials" id="pepperizecdksessmtpcredentialssessmtpcredentials"></a>

This construct converts the access key to SMTP credentials.

#### Initializers <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer" id="pepperizecdksessmtpcredentialssessmtpcredentialsinitializer"></a>

```typescript
import { SesSmtpCredentials } from '@pepperize/cdk-ses-smtp-credentials'

new SesSmtpCredentials(scope: Construct, id: string, props: SesSmtpCredentialsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdksessmtpcredentialssessmtpcredentialsparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`id`](#pepperizecdksessmtpcredentialssessmtpcredentialsparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdksessmtpcredentialssessmtpcredentialsparameterprops)<span title="Required">*</span> | [`@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps`](#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.parameter.scope" id="pepperizecdksessmtpcredentialssessmtpcredentialsparameterscope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

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
| [`secret`](#pepperizecdksessmtpcredentialssessmtpcredentialspropertysecret)<span title="Required">*</span> | [`@aws-cdk/aws-secretsmanager.ISecret`](#@aws-cdk/aws-secretsmanager.ISecret) | *No description.* |

---

##### `secret`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentials.property.secret" id="pepperizecdksessmtpcredentialssessmtpcredentialspropertysecret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* [`@aws-cdk/aws-secretsmanager.ISecret`](#@aws-cdk/aws-secretsmanager.ISecret)

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
| [`user`](#pepperizecdksessmtpcredentialssessmtpcredentialspropspropertyuser)<span title="Required">*</span> | [`@aws-cdk/aws-iam.IUser`](#@aws-cdk/aws-iam.IUser) | *No description.* |
| [`secret`](#pepperizecdksessmtpcredentialssessmtpcredentialspropspropertysecret) | [`@aws-cdk/aws-secretsmanager.ISecret`](#@aws-cdk/aws-secretsmanager.ISecret) | *No description.* |

---

##### `user`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.user" id="pepperizecdksessmtpcredentialssessmtpcredentialspropspropertyuser"></a>

```typescript
public readonly user: IUser;
```

- *Type:* [`@aws-cdk/aws-iam.IUser`](#@aws-cdk/aws-iam.IUser)

---

##### `secret`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.secret" id="pepperizecdksessmtpcredentialssessmtpcredentialspropspropertysecret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* [`@aws-cdk/aws-secretsmanager.ISecret`](#@aws-cdk/aws-secretsmanager.ISecret)

---

### SmtpCredentials <a name="@pepperize/cdk-ses-smtp-credentials.SmtpCredentials" id="pepperizecdksessmtpcredentialssmtpcredentials"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SmtpCredentials } from '@pepperize/cdk-ses-smtp-credentials'

const smtpCredentials: SmtpCredentials = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`password`](#pepperizecdksessmtpcredentialssmtpcredentialspropertypassword)<span title="Required">*</span> | `string` | *No description.* |
| [`username`](#pepperizecdksessmtpcredentialssmtpcredentialspropertyusername)<span title="Required">*</span> | `string` | *No description.* |

---

##### `password`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SmtpCredentials.property.password" id="pepperizecdksessmtpcredentialssmtpcredentialspropertypassword"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SmtpCredentials.property.username" id="pepperizecdksessmtpcredentialssmtpcredentialspropertyusername"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

---



