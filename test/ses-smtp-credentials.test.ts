import { Template } from "@aws-cdk/assertions";
import { User } from "@aws-cdk/aws-iam";
import { App, Aspects, Stack } from "@aws-cdk/core";
import { AwsSolutionsChecks } from "cdk-nag";
import { SesSmtpCredentials } from "../src";

jest.mock("../src/ses-smtp-credentials-provider.ts");

describe("SesSmtpCredentials", () => {
  it("Should match snapshot", () => {
    // Given
    const app = new App();
    const stack = new Stack(app);
    const user = new User(stack, "User", {
      userName: "Micha",
    });

    // Then
    new SesSmtpCredentials(stack, "SesSmtpCredentials", {
      user: user,
    });
    const template = Template.fromStack(stack);

    // Then
    expect(template).toMatchSnapshot();
  });

  it("Should comply to best practices", () => {
    // Given
    const app = new App();
    const stack = new Stack(app);
    const user = new User(stack, "User", {
      userName: "Micha",
    });

    // Then
    new SesSmtpCredentials(stack, "SesSmtpCredentials", {
      user: user,
    });

    // Then
    Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
  });
});
