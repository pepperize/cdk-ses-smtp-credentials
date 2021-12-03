# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### SesSmtpCredentials <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials" id="pepperizetestingcdksessmtpcredentialssessmtpcredentials"></a>

This construct converts the access key to SMTP credentials.

#### Initializers <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer" id="pepperizetestingcdksessmtpcredentialssessmtpcredentialsinitializer"></a>

```typescript
import { SesSmtpCredentials } from '@pepperize-testing/cdk-ses-smtp-credentials'

new SesSmtpCredentials(scope: Construct, id: string, props: SesSmtpCredentialsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizetestingcdksessmtpcredentialssessmtpcredentialsparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`id`](#pepperizetestingcdksessmtpcredentialssessmtpcredentialsparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizetestingcdksessmtpcredentialssessmtpcredentialsparameterprops)<span title="Required">*</span> | [`@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps`](#@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials.parameter.scope" id="pepperizetestingcdksessmtpcredentialssessmtpcredentialsparameterscope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials.parameter.id" id="pepperizetestingcdksessmtpcredentialssessmtpcredentialsparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials.parameter.props" id="pepperizetestingcdksessmtpcredentialssessmtpcredentialsparameterprops"></a>

- *Type:* [`@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps`](#@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`credentials`](#pepperizetestingcdksessmtpcredentialssessmtpcredentialspropertycredentials)<span title="Required">*</span> | [`@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials`](#@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials) | *No description.* |

---

##### `credentials`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials.property.credentials" id="pepperizetestingcdksessmtpcredentialssessmtpcredentialspropertycredentials"></a>

```typescript
public readonly credentials: SmtpCredentials;
```

- *Type:* [`@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials`](#@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials)

---


## Structs <a name="Structs" id="structs"></a>

### SesSmtpCredentialsProps <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps" id="pepperizetestingcdksessmtpcredentialssessmtpcredentialsprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SesSmtpCredentialsProps } from '@pepperize-testing/cdk-ses-smtp-credentials'

const sesSmtpCredentialsProps: SesSmtpCredentialsProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`username`](#pepperizetestingcdksessmtpcredentialssessmtpcredentialspropspropertyusername)<span title="Required">*</span> | `string` | *No description.* |

---

##### `username`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.username" id="pepperizetestingcdksessmtpcredentialssessmtpcredentialspropspropertyusername"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

---

### SmtpCredentials <a name="@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials" id="pepperizetestingcdksessmtpcredentialssmtpcredentials"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SmtpCredentials } from '@pepperize-testing/cdk-ses-smtp-credentials'

const smtpCredentials: SmtpCredentials = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`password`](#pepperizetestingcdksessmtpcredentialssmtpcredentialspropertypassword)<span title="Required">*</span> | `string` | *No description.* |
| [`username`](#pepperizetestingcdksessmtpcredentialssmtpcredentialspropertyusername)<span title="Required">*</span> | `string` | *No description.* |

---

##### `password`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials.property.password" id="pepperizetestingcdksessmtpcredentialssmtpcredentialspropertypassword"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials.property.username" id="pepperizetestingcdksessmtpcredentialssmtpcredentialspropertyusername"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

---



