import { Construct, CustomResource, CustomResourceProps } from "@aws-cdk/core";
import { SesSmtpCredentialsProvider } from "./ses-smtp-credentials-provider";

export interface SmtpCredentials {
  readonly username: string;
  readonly password: string;
}

export interface SesSmtpCredentialsProps {
  readonly username: string;
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
  public readonly credentials: SmtpCredentials;

  public constructor(scope: Construct, id: string, props: SesSmtpCredentialsProps) {
    super(scope, id);

    const { username } = props;

    const { serviceToken } = new SesSmtpCredentialsProvider(this, "Provider", {});

    // TODO: Create Secret to store SmtpCredentials

    const credentials = new CustomResource(this, "Lambda", {
      serviceToken,
      properties: {
        UserName: username,
      },
    } as CustomResourceProps);

    this.credentials = {
      username: credentials.getAttString("AccessKeyId"),
      password: credentials.getAttString("SmtpPassword"),
    } as SmtpCredentials; // TODO: credentials.getAttString("SecretArn"); Secret.fromCompleteArn(secretArn);
  }
}
