# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SesSmtpCredentials <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials"></a>

This construct converts the access key to SMTP credentials.

#### Initializers <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials.Initializer"></a>

```typescript
import { SesSmtpCredentials } from '@pepperize-testing/cdk-ses-smtp-credentials'

new SesSmtpCredentials(scope: Construct, id: string, props: SesSmtpCredentialsProps)
```

##### `scope`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials.parameter.props"></a>

- *Type:* [`@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps`](#@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps)

---



#### Properties <a name="Properties"></a>

##### `credentials`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentials.property.credentials"></a>

```typescript
public readonly credentials: SmtpCredentials;
```

- *Type:* [`@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials`](#@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials)

---


## Structs <a name="Structs"></a>

### SesSmtpCredentialsProps <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SesSmtpCredentialsProps } from '@pepperize-testing/cdk-ses-smtp-credentials'

const sesSmtpCredentialsProps: SesSmtpCredentialsProps = { ... }
```

##### `username`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

---

### SmtpCredentials <a name="@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SmtpCredentials } from '@pepperize-testing/cdk-ses-smtp-credentials'

const smtpCredentials: SmtpCredentials = { ... }
```

##### `password`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SmtpCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

---



