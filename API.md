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

##### `analyticsReporting`<sup>Optional</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* `boolean`
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `description`<sup>Optional</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* [`@aws-cdk/core.Environment`](#@aws-cdk/core.Environment)
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to select the indicated environment (recommended for production stacks), or to the values of environment variables `CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment depend on the AWS credentials/configuration that the CDK CLI is executed under (recommended for development stacks).  If the `Stack` is instantiated inside a `Stage`, any undefined `region`/`account` fields from `env` will default to the same field on the encompassing `Stage`, if configured there.  If either `region` or `account` are not set nor inherited from `Stage`, the Stack will be considered "*environment-agnostic*"". Environment-agnostic stacks can be deployed to any environment but may not be able to take advantage of all features of the CDK. For example, they will not be able to use environmental context lookups such as `ec2.Vpc.fromLookup` and will not automatically translate Service Principals to the right format based on the environment's AWS partition, and other such enhancements.

---

##### `stackName`<sup>Optional</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* `string`
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `synthesizer`<sup>Optional</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* [`@aws-cdk/core.IStackSynthesizer`](#@aws-cdk/core.IStackSynthesizer)
- *Default:* `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag is set, `LegacyStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

---

##### `tags`<sup>Optional</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="@pepperize-testing/cdk-ses-smtp-credentials.SesSmtpCredentialsProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to enable termination protection for this stack.

---

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



