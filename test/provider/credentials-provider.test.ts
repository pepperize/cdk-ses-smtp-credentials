import { Stack } from "aws-cdk-lib";
import { Capture, Match, Template } from "aws-cdk-lib/assertions";
import { User } from "aws-cdk-lib/aws-iam";
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
});
