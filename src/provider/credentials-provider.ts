import { Duration, Lazy, Stack } from "aws-cdk-lib";
import { IUser, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import { CredentialsHandlerFunction } from "./credentials-handler-function";

/**
 * Props for CredentialsHandlerFunction
 */
export interface CredentialsProviderProps {
  /**
   * The region of SES endpoint to use. Defaults to stack region.
   */
  region: string;
}

export class CredentialsProvider extends Construct {
  /**
   * Retrieve CredentialsProvider as stack singleton resource.
   *
   * https://github.com/aws/aws-cdk/issues/5023
   */
  public static getOrCreate(scope: Construct, props: CredentialsProviderProps): CredentialsProvider {
    const stack = Stack.of(scope);
    const id = "cdk-ses-smtp-credentials.CredentialsProvider";
    const existing = stack.node.tryFindChild(id);
    return (existing as CredentialsProvider) || new CredentialsProvider(stack, id, { region: props.region });
  }

  public readonly serviceToken: string;

  private userArns: string[] = [];
  private secretArns: string[] = [];

  constructor(scope: Construct, id: string, props: CredentialsProviderProps) {
    super(scope, id);

    // https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-nodejs-readme.html
    const onEvent = new CredentialsHandlerFunction(this, "ses-smtp-credentials-handler", {
      timeout: Duration.minutes(1),
      initialPolicy: [
        new PolicyStatement({
          resources: Lazy.list({
            produce: () => {
              return this.userArns;
            },
          }),
          actions: ["iam:CreateAccessKey", "iam:DeleteAccessKey"],
        }),
        new PolicyStatement({
          resources: Lazy.list({
            produce: () => {
              return this.secretArns;
            },
          }),
          actions: ["secretsmanager:PutSecretValue"],
        }),
      ],
      logRetention: RetentionDays.ONE_MONTH,
    });
    // register ses-region for auto-generated lambda function
    onEvent.addEnvironment("SES_REGION", props.region, { removeInEdge: true });

    const provider = new Provider(this, "ses-smtp-credentials-provider", {
      onEventHandler: onEvent,
      logRetention: RetentionDays.ONE_DAY, // default is INFINITE
    });

    this.serviceToken = provider.serviceToken;
  }

  public grant(user: IUser, secret: ISecret) {
    this.userArns.push(user.userArn);
    this.secretArns.push(secret.secretArn);
  }
}
