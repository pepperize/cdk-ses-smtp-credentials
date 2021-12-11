import { Template } from "@aws-cdk/assertions";
import { App, Aspects, Stack } from "@aws-cdk/core";
import { AwsSolutionsChecks } from "cdk-nag";
import { SesSmtpCredentials } from "../src";

jest.mock("../src/ses-smtp-credentials-provider.ts");

describe("SesSmtpCredentials", () => {
  it("Should match snapshot", () => {
    // Given
    const app = new App();
    const stack = new Stack(app);

    // Then
    new SesSmtpCredentials(stack, "SesSmtpCredentials", {
      username: "Micha",
    });
    const template = Template.fromStack(stack);

    // Then
    expect(template).toMatchSnapshot();
  });

  it("Should comply to best practices", () => {
    // Given
    const app = new App();
    const stack = new Stack(app);

    // Then
    new SesSmtpCredentials(stack, "SesSmtpCredentials", {
      username: "Micha",
    });

    // Then
    Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
  });
});
