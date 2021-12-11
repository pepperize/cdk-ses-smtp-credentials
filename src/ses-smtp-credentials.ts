import { IUser } from "@aws-cdk/aws-iam";
import { ISecret, Secret } from "@aws-cdk/aws-secretsmanager";
import { Construct, CustomResource, CustomResourceProps } from "@aws-cdk/core";
import { SesSmtpCredentialsProvider } from "./ses-smtp-credentials-provider";

export interface SesSmtpCredentialsProps {
  readonly user: IUser;
  readonly secret?: ISecret;
}

/**
 * This construct creates an access key for the given user and stores the generated SMTP credentials inside a secret.
 *
 * @example
 *
 * const user = User.fromUserName("ses-user-example");
 * new SmtpCredentials(this, 'SmtpCredentials', {
 *     user: user,
 * });
 */
export class SesSmtpCredentials extends Construct {
  public readonly secret: ISecret;

  public constructor(scope: Construct, id: string, props: SesSmtpCredentialsProps) {
    super(scope, id);

    const { user } = props;

    this.secret =
      props.secret ||
      new Secret(this, "Secret", {
        description: `SES Smtp credentials (username, password) for ${user.userName}`,
      });

    const { serviceToken } = new SesSmtpCredentialsProvider(this, "Provider", {
      user: user,
      secret: this.secret,
    });

    const customResource = new CustomResource(this, "Lambda", {
      serviceToken,
      properties: {
        UserName: user.userName,
        SecretId: this.secret.secretArn,
      },
    } as CustomResourceProps);
    customResource.node.addDependency(user);
    customResource.node.addDependency(this.secret);
  }
}
