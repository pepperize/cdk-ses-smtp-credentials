import * as path from "path";
import { IUser, PolicyStatement } from "@aws-cdk/aws-iam";
import { Runtime } from "@aws-cdk/aws-lambda";
import { NodejsFunction, NodejsFunctionProps } from "@aws-cdk/aws-lambda-nodejs";
import { RetentionDays } from "@aws-cdk/aws-logs";
import { ISecret } from "@aws-cdk/aws-secretsmanager";
import { Construct, Duration } from "@aws-cdk/core";
import { Provider } from "@aws-cdk/custom-resources";

interface SesSmtpCredentialsProviderProps {
  readonly user: IUser;
  readonly secret: ISecret;
}

export class SesSmtpCredentialsProvider extends Construct {
  public readonly serviceToken: string;

  constructor(scope: Construct, id: string, props: SesSmtpCredentialsProviderProps) {
    super(scope, id);

    const { secret, user } = props;

    // https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-nodejs-readme.html
    const onEvent = new NodejsFunction(this, "ses-smtp-credentials-handler", {
      runtime: Runtime.NODEJS_14_X,
      entry: path.join(__dirname, "provider", "handler.ts"),
      handler: "onEvent",
      timeout: Duration.minutes(1),
      initialPolicy: [
        new PolicyStatement({
          resources: [user.userArn],
          actions: ["iam:CreateAccessKey", "iam:DeleteAccessKey"],
        }),
        new PolicyStatement({
          resources: [secret.secretArn],
          actions: ["iam:putSecretValue"],
        }),
      ],
    } as NodejsFunctionProps);

    const provider = new Provider(this, "ses-smtp-credentials-provider", {
      onEventHandler: onEvent,
      logRetention: RetentionDays.ONE_DAY, // default is INFINITE
    });

    this.serviceToken = provider.serviceToken;
  }
}
