import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { SesSmtpCredentials } from "../src";

describe("SesSmtpCredentials", () => {
  it("Should pass the ses region per credentials, defaulting to the stack region", () => {
    // Given
    const stack = new Stack(undefined, "Stack", { env: { region: "eu-central-1" } });

    // When
    new SesSmtpCredentials(stack, "Default", {});
    new SesSmtpCredentials(stack, "Ireland", { region: "eu-west-1" });

    // Then
    const template = Template.fromStack(stack);
    const regions = Object.values(template.findResources("AWS::CloudFormation::CustomResource")).map(
      (resource) => resource.Properties.Region,
    );
    expect(regions.sort()).toEqual(["eu-central-1", "eu-west-1"]);
  });
});
