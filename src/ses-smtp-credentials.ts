import { IUser } from "@aws-cdk/aws-iam";
import { ISecret, Secret } from "@aws-cdk/aws-secretsmanager";
import { Construct, CustomResource, CustomResourceProps } from "@aws-cdk/core";
import { SesSmtpCredentialsProvider } from "./ses-smtp-credentials-provider";

export interface SesSmtpCredentialsProps {
  readonly user: IUser;
  readonly secret?: ISecret;
}

/**
 * This construct converts the access key to SMTP credentials.
 *
 * @example
 *
 * const accessKey = new CfnAccessKey(this, "ses-access-key", {
 *      userName: username,
 * });
 * new SmtpCredentials(this, 'SmtpCredentials', {
 *     accessKey: accessKey,
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
  }
}
