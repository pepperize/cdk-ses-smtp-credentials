import { Duration } from "aws-cdk-lib";
import { IUser, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import { CredentialsHandlerFunction } from "./credentials-handler-function";

export interface SesSmtpCredentialsProviderProps {
  readonly user: IUser;
  readonly secret: ISecret;
}

export class CredentialsProvider extends Construct {
  public readonly serviceToken: string;

  constructor(scope: Construct, id: string, props: SesSmtpCredentialsProviderProps) {
    super(scope, id);

    const { secret, user } = props;

    // https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-nodejs-readme.html
    const onEvent = new CredentialsHandlerFunction(this, "ses-smtp-credentials-handler", {
      timeout: Duration.minutes(1),
      initialPolicy: [
        new PolicyStatement({
          resources: [user.userArn],
          actions: ["iam:CreateAccessKey", "iam:DeleteAccessKey"],
        }),
        new PolicyStatement({
          resources: [secret.secretArn],
          actions: ["secretsmanager:PutSecretValue"],
        }),
      ],
    });

    const provider = new Provider(this, "ses-smtp-credentials-provider", {
      onEventHandler: onEvent,
      logRetention: RetentionDays.ONE_DAY, // default is INFINITE
    });

    this.serviceToken = provider.serviceToken;
  }
}
