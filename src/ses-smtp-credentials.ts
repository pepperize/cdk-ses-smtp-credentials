import { CustomResource, CustomResourceProps } from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";
import { CredentialsProvider } from "./provider/credentials-provider";

export interface SesSmtpCredentialsProps {
  /**
   * The user for which to create an AWS Access Key and to generate the smtp password.
   */
  readonly user?: iam.IUser;
  /**
   * The username to create a new user if no existing user is given.
   */
  readonly userName?: string;
  /**
   * Optional, an SecretsManager secret to write the AWS SES Smtp credentials to.
   */
  readonly secret?: secretsmanager.ISecret;
}

/**
 * This construct creates an access key for the given user and stores the generated SMTP credentials inside a secret.
 *
 * ```typescript
 * const user = User.fromUserName("ses-user-example");
 * const credentials = new SesSmtpCredentials(this, 'SmtpCredentials', {
 *     user: user,
 * });
 * // credentials.secret
 * ```
 */
export class SesSmtpCredentials extends Construct {
  public readonly secret: secretsmanager.ISecret;

  public constructor(scope: Construct, id: string, props: SesSmtpCredentialsProps) {
    super(scope, id);

    const user =
      props.user ??
      new iam.User(this, "User", {
        userName: props.userName,
      });

    const policy = new iam.Policy(this, "Policy", {
      statements: [
        new iam.PolicyStatement({
          // https://github.com/awsdocs/amazon-ses-developer-guide/blob/master/doc-source/sending-authorization-policies.md
          effect: iam.Effect.ALLOW,
          actions: ["ses:SendRawEmail"],
          resources: ["*"],
        }),
      ],
    });
    user.attachInlinePolicy(policy);

    this.secret =
      props.secret ||
      new secretsmanager.Secret(this, "Secret", {
        description: `SES Smtp credentials (username, password) for ${user.userName}`,
      });

    const provider = CredentialsProvider.getOrCreate(this);
    provider.grant(user, this.secret);

    const customResource = new CustomResource(this, "Lambda", {
      serviceToken: provider.serviceToken,
      properties: {
        UserName: user.userName,
        SecretId: this.secret.secretArn,
      },
    } as CustomResourceProps);
    customResource.node.addDependency(user);
    customResource.node.addDependency(this.secret);
  }
}
