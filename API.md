# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### CredentialsHandlerFunction <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunction" id="pepperizecdksessmtpcredentialscredentialshandlerfunction"></a>

An AWS Lambda function which executes src/provider/credentials-handler.

#### Initializers <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunction.Initializer" id="pepperizecdksessmtpcredentialscredentialshandlerfunctioninitializer"></a>

```typescript
import { CredentialsHandlerFunction } from '@pepperize/cdk-ses-smtp-credentials'

new CredentialsHandlerFunction(scope: Construct, id: string, props?: CredentialsHandlerFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionparameterprops) | [`@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps`](#@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunction.parameter.scope" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunction.parameter.id" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunction.parameter.props" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionparameterprops"></a>

- *Type:* [`@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps`](#@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps)

---





### CredentialsProvider <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsProvider" id="pepperizecdksessmtpcredentialscredentialsprovider"></a>

#### Initializers <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsProvider.Initializer" id="pepperizecdksessmtpcredentialscredentialsproviderinitializer"></a>

```typescript
import { CredentialsProvider } from '@pepperize/cdk-ses-smtp-credentials'

new CredentialsProvider(scope: Construct, id: string, props: SesSmtpCredentialsProviderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdksessmtpcredentialscredentialsproviderparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#pepperizecdksessmtpcredentialscredentialsproviderparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdksessmtpcredentialscredentialsproviderparameterprops)<span title="Required">*</span> | [`@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProviderProps`](#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProviderProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsProvider.parameter.scope" id="pepperizecdksessmtpcredentialscredentialsproviderparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsProvider.parameter.id" id="pepperizecdksessmtpcredentialscredentialsproviderparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsProvider.parameter.props" id="pepperizecdksessmtpcredentialscredentialsproviderparameterprops"></a>

- *Type:* [`@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProviderProps`](#@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProviderProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`serviceToken`](#pepperizecdksessmtpcredentialscredentialsproviderpropertyservicetoken)<span title="Required">*</span> | `string` | *No description.* |

---

##### `serviceToken`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsProvider.property.serviceToken" id="pepperizecdksessmtpcredentialscredentialsproviderpropertyservicetoken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* `string`

---


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

### CredentialsHandlerFunctionProps <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionprops"></a>

Props for CredentialsHandlerFunction.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CredentialsHandlerFunctionProps } from '@pepperize/cdk-ses-smtp-credentials'

const credentialsHandlerFunctionProps: CredentialsHandlerFunctionProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`maxEventAge`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertymaxeventage) | [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration) | The maximum age of a request that Lambda sends to a function for processing. |
| [`onFailure`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyonfailure) | [`aws-cdk-lib.aws_lambda.IDestination`](#aws-cdk-lib.aws_lambda.IDestination) | The destination for failed invocations. |
| [`onSuccess`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyonsuccess) | [`aws-cdk-lib.aws_lambda.IDestination`](#aws-cdk-lib.aws_lambda.IDestination) | The destination for successful invocations. |
| [`retryAttempts`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyretryattempts) | `number` | The maximum number of times to retry when the function returns an error. |
| [`allowAllOutbound`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyallowalloutbound) | `boolean` | Whether to allow the Lambda to send all network traffic. |
| [`allowPublicSubnet`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyallowpublicsubnet) | `boolean` | Lambda Functions in a public subnet can NOT access the internet. |
| [`architecture`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyarchitecture) | [`aws-cdk-lib.aws_lambda.Architecture`](#aws-cdk-lib.aws_lambda.Architecture) | The system architectures compatible with this lambda function. |
| [`codeSigningConfig`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertycodesigningconfig) | [`aws-cdk-lib.aws_lambda.ICodeSigningConfig`](#aws-cdk-lib.aws_lambda.ICodeSigningConfig) | Code signing config associated with this function. |
| [`currentVersionOptions`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertycurrentversionoptions) | [`aws-cdk-lib.aws_lambda.VersionOptions`](#aws-cdk-lib.aws_lambda.VersionOptions) | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| [`deadLetterQueue`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertydeadletterqueue) | [`aws-cdk-lib.aws_sqs.IQueue`](#aws-cdk-lib.aws_sqs.IQueue) | The SQS queue to use if DLQ is enabled. |
| [`deadLetterQueueEnabled`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertydeadletterqueueenabled) | `boolean` | Enabled DLQ. |
| [`description`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertydescription) | `string` | A description of the function. |
| [`environment`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyenvironment) | {[ key: string ]: `string`} | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| [`environmentEncryption`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyenvironmentencryption) | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | The AWS KMS key that's used to encrypt your function's environment variables. |
| [`events`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyevents) | [`aws-cdk-lib.aws_lambda.IEventSource`](#aws-cdk-lib.aws_lambda.IEventSource)[] | Event sources for this function. |
| [`filesystem`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyfilesystem) | [`aws-cdk-lib.aws_lambda.FileSystem`](#aws-cdk-lib.aws_lambda.FileSystem) | The filesystem configuration for the lambda function. |
| [`functionName`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyfunctionname) | `string` | A name for the function. |
| [`initialPolicy`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyinitialpolicy) | [`aws-cdk-lib.aws_iam.PolicyStatement`](#aws-cdk-lib.aws_iam.PolicyStatement)[] | Initial policy statements to add to the created Lambda Role. |
| [`insightsVersion`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyinsightsversion) | [`aws-cdk-lib.aws_lambda.LambdaInsightsVersion`](#aws-cdk-lib.aws_lambda.LambdaInsightsVersion) | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| [`layers`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertylayers) | [`aws-cdk-lib.aws_lambda.ILayerVersion`](#aws-cdk-lib.aws_lambda.ILayerVersion)[] | A list of layers to add to the function's execution environment. |
| [`logRetention`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertylogretention) | [`aws-cdk-lib.aws_logs.RetentionDays`](#aws-cdk-lib.aws_logs.RetentionDays) | The number of days log events are kept in CloudWatch Logs. |
| [`logRetentionRetryOptions`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertylogretentionretryoptions) | [`aws-cdk-lib.aws_lambda.LogRetentionRetryOptions`](#aws-cdk-lib.aws_lambda.LogRetentionRetryOptions) | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| [`logRetentionRole`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertylogretentionrole) | [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole) | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| [`memorySize`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertymemorysize) | `number` | The amount of memory, in MB, that is allocated to your Lambda function. |
| [`profiling`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyprofiling) | `boolean` | Enable profiling. |
| [`profilingGroup`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyprofilinggroup) | [`aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup`](#aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup) | Profiling Group. |
| [`reservedConcurrentExecutions`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyreservedconcurrentexecutions) | `number` | The maximum of concurrent executions you want to reserve for the function. |
| [`role`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyrole) | [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole) | Lambda execution role. |
| [`securityGroups`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertysecuritygroups) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)[] | The list of security groups to associate with the Lambda's network interfaces. |
| [`timeout`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertytimeout) | [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration) | The function execution time (in seconds) after which Lambda terminates the function. |
| [`tracing`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertytracing) | [`aws-cdk-lib.aws_lambda.Tracing`](#aws-cdk-lib.aws_lambda.Tracing) | Enable AWS X-Ray Tracing for Lambda Function. |
| [`vpc`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyvpc) | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | VPC network to place Lambda network interfaces. |
| [`vpcSubnets`](#pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | Where to place the network interfaces within the VPC. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.maxEventAge" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertymaxeventage"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.onFailure" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyonfailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IDestination`](#aws-cdk-lib.aws_lambda.IDestination)
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.onSuccess" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyonsuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IDestination`](#aws-cdk-lib.aws_lambda.IDestination)
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.retryAttempts" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyretryattempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* `number`
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0 Maximum: 2

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.allowAllOutbound" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyallowalloutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the Lambda to connect to network targets.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.allowPublicSubnet" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyallowpublicsubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* `boolean`
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841

---

##### `architecture`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.architecture" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyarchitecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Architecture`](#aws-cdk-lib.aws_lambda.Architecture)
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.codeSigningConfig" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertycodesigningconfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* [`aws-cdk-lib.aws_lambda.ICodeSigningConfig`](#aws-cdk-lib.aws_lambda.ICodeSigningConfig)
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.currentVersionOptions" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertycurrentversionoptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* [`aws-cdk-lib.aws_lambda.VersionOptions`](#aws-cdk-lib.aws_lambda.VersionOptions)
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.deadLetterQueue" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertydeadletterqueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* [`aws-cdk-lib.aws_sqs.IQueue`](#aws-cdk-lib.aws_sqs.IQueue)
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.deadLetterQueueEnabled" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertydeadletterqueueenabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined, an SQS queue with default options will be defined for your Function.

---

##### `description`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.description" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.environment" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyenvironment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such as test and production environment configurations, without changing your Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.environmentEncryption" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyenvironmentencryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `events`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.events" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyevents"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* [`aws-cdk-lib.aws_lambda.IEventSource`](#aws-cdk-lib.aws_lambda.IEventSource)[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.filesystem" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyfilesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* [`aws-cdk-lib.aws_lambda.FileSystem`](#aws-cdk-lib.aws_lambda.FileSystem)
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.functionName" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyfunctionname"></a>

```typescript
public readonly functionName: string;
```

- *Type:* `string`
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.initialPolicy" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyinitialpolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* [`aws-cdk-lib.aws_iam.PolicyStatement`](#aws-cdk-lib.aws_iam.PolicyStatement)[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.insightsVersion" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyinsightsversion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* [`aws-cdk-lib.aws_lambda.LambdaInsightsVersion`](#aws-cdk-lib.aws_lambda.LambdaInsightsVersion)
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html

---

##### `layers`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.layers" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertylayers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* [`aws-cdk-lib.aws_lambda.ILayerVersion`](#aws-cdk-lib.aws_lambda.ILayerVersion)[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies that can be used by multiple functions.

---

##### `logRetention`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.logRetention" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertylogretention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* [`aws-cdk-lib.aws_logs.RetentionDays`](#aws-cdk-lib.aws_logs.RetentionDays)
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating this property, unsetting it doesn't remove the log retention policy. To remove the retention policy, set the value to `INFINITE`.

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.logRetentionRetryOptions" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertylogretentionretryoptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* [`aws-cdk-lib.aws_lambda.LogRetentionRetryOptions`](#aws-cdk-lib.aws_lambda.LogRetentionRetryOptions)
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.logRetentionRole" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertylogretentionrole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

---

##### `memorySize`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.memorySize" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertymemorysize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* `number`
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU power. For more information, see Resource Model in the AWS Lambda Developer Guide.

---

##### `profiling`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.profiling" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyprofiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* `boolean`
- *Default:* No profiling.

Enable profiling.

> https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html

---

##### `profilingGroup`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.profilingGroup" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyprofilinggroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* [`aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup`](#aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup)
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.reservedConcurrentExecutions" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyreservedconcurrentexecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* `number`
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html

---

##### `role`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.role" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyrole"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution. It controls the permissions that the function will have. The Role must be assumable by the 'lambda.amazonaws.com' service principal.  The default Role automatically has permissions granted for Lambda execution. If you provide a Role, you must add the relevant AWS managed policies yourself.  The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and "service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `securityGroups`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.securityGroups" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertysecuritygroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `timeout`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.timeout" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertytimeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.tracing" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertytracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Tracing`](#aws-cdk-lib.aws_lambda.Tracing)
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.vpc" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="@pepperize/cdk-ses-smtp-credentials.CredentialsHandlerFunctionProps.property.vpcSubnets" id="pepperizecdksessmtpcredentialscredentialshandlerfunctionpropspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

Only used if 'vpc' is supplied. Note: internet access for Lambdas requires a NAT gateway, so picking Public subnets is not allowed.

---

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

### SesSmtpCredentialsProviderProps <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProviderProps" id="pepperizecdksessmtpcredentialssessmtpcredentialsproviderprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SesSmtpCredentialsProviderProps } from '@pepperize/cdk-ses-smtp-credentials'

const sesSmtpCredentialsProviderProps: SesSmtpCredentialsProviderProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`secret`](#pepperizecdksessmtpcredentialssessmtpcredentialsproviderpropspropertysecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | *No description.* |
| [`user`](#pepperizecdksessmtpcredentialssessmtpcredentialsproviderpropspropertyuser)<span title="Required">*</span> | [`aws-cdk-lib.aws_iam.IUser`](#aws-cdk-lib.aws_iam.IUser) | *No description.* |

---

##### `secret`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProviderProps.property.secret" id="pepperizecdksessmtpcredentialssessmtpcredentialsproviderpropspropertysecret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

##### `user`<sup>Required</sup> <a name="@pepperize/cdk-ses-smtp-credentials.SesSmtpCredentialsProviderProps.property.user" id="pepperizecdksessmtpcredentialssessmtpcredentialsproviderpropspropertyuser"></a>

```typescript
public readonly user: IUser;
```

- *Type:* [`aws-cdk-lib.aws_iam.IUser`](#aws-cdk-lib.aws_iam.IUser)

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

