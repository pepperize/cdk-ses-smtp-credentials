import * as path from "path";
import { Duration } from "aws-cdk-lib";
import { IUser, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction, NodejsFunctionProps } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";

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
          actions: ["secretsmanager:PutSecretValue"],
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
