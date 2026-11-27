import { App, Stack } from "aws-cdk-lib";
import { Annotations, Match, Template } from "aws-cdk-lib/assertions";
import { SesSmtpCredentials } from "../src";

describe("SesSmtpCredentials", () => {
  it("Should pass the ses region to the custom resource", () => {
    // Given
    const stack = new Stack(new App(), "Stack", { env: { region: "eu-central-1" } });

    // When
    new SesSmtpCredentials(stack, "Credentials", { region: "eu-west-1" });

    // Then
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::CloudFormation::CustomResource", {
      SesRegion: "eu-west-1",
    });
  });
  it("Should not pass a ses region by default", () => {
    // Given
    const stack = new Stack(new App(), "Stack", { env: { region: "eu-central-1" } });

    // When
    new SesSmtpCredentials(stack, "Credentials", {});

    // Then
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::CloudFormation::CustomResource", {
      SesRegion: Match.absent(),
    });
  });
  it("Should check the smtp endpoint availability of the ses region", () => {
    // Given
    const stack = new Stack(new App(), "Stack", { env: { region: "ap-east-1" } });

    // When
    new SesSmtpCredentials(stack, "Credentials", { region: "eu-west-1" });

    // Then
    Annotations.fromStack(stack).hasNoWarning("*", Match.stringLikeRegexp("SES Smtp Endpoint is not available"));
  });
});
