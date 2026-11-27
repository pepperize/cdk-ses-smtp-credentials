import { Stack } from "aws-cdk-lib";
import { Capture, Match, Template } from "aws-cdk-lib/assertions";
import { User } from "aws-cdk-lib/aws-iam";
import { CfnKey, Key } from "aws-cdk-lib/aws-kms";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { CredentialsProvider } from "../../src/provider/credentials-provider";

describe("CredentialsProvider", () => {
  it("Should match snapshot", () => {
    // Given
    const stack = new Stack();

    const user = new User(stack, "User");
    const secret = new Secret(stack, "Secret");

    const provider = CredentialsProvider.getOrCreate(stack);
    provider.grant(user, secret);

    // When
    const template = Template.fromStack(stack);

    // Then
    expect(template).toMatchSnapshot();
  });
  it("Should have policy with resource arn", () => {
    // Given
    const stack = new Stack();

    const user = new User(stack, "User");
    const secret = new Secret(stack, "Secret");

    const provider = CredentialsProvider.getOrCreate(stack);
    provider.grant(user, secret);

    // When
    const template = Template.fromStack(stack);

    // Then
    const capture = new Capture();
    template.hasResourceProperties("AWS::IAM::Policy", {
      PolicyName: Match.stringLikeRegexp("DefaultPolicy"),
      PolicyDocument: { Statement: capture },
    });

    expect(capture.asArray()[0].Resource).toHaveLength(1);
    expect(capture.asArray()[1].Resource).toHaveLength(1);
  });
  it("Should use nodejs26.x runtime for the handler", () => {
    // Given
    const stack = new Stack();

    // When
    CredentialsProvider.getOrCreate(stack);

    // Then
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::Lambda::Function", {
      Handler: "index.handler",
      Runtime: "nodejs26.x",
    });
  });
  it("Should grant encrypt on the secret's kms key", () => {
    // Given
    const stack = new Stack();

    const user = new User(stack, "User");
    const key = new Key(stack, "Key");
    const secret = new Secret(stack, "Secret", { encryptionKey: key });

    const provider = CredentialsProvider.getOrCreate(stack);

    // When
    provider.grant(user, secret);

    // Then
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Policy", {
      PolicyName: Match.stringLikeRegexp("sessmtpcredentialshandler.*DefaultPolicy"),
      PolicyDocument: {
        Statement: Match.arrayWith([
          Match.objectLike({
            Action: Match.arrayWith(["kms:Encrypt", "kms:GenerateDataKey*"]),
            Effect: "Allow",
            Resource: { "Fn::GetAtt": [stack.getLogicalId(key.node.defaultChild as CfnKey), "Arn"] },
          }),
        ]),
      },
    });
  });
  it("Should use log groups instead of deprecated log retention", () => {
    // Given
    const stack = new Stack();

    // When
    CredentialsProvider.getOrCreate(stack);

    // Then
    const template = Template.fromStack(stack);
    template.resourceCountIs("Custom::LogRetention", 0);
    template.hasResourceProperties("AWS::Logs::LogGroup", { RetentionInDays: 30 });
    template.hasResourceProperties("AWS::Logs::LogGroup", { RetentionInDays: 1 });
    template.hasResourceProperties("AWS::Lambda::Function", {
      Description: "src/provider/credentials-handler.lambda.ts",
      LoggingConfig: { LogGroup: Match.anyValue() },
    });
  });
});
