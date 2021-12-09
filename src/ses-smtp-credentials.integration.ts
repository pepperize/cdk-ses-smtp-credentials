import { User } from "@aws-cdk/aws-iam";
import { App, Stack } from "@aws-cdk/core";
import { SesSmtpCredentials } from "./ses-smtp-credentials";

const app = new App();
const stack = new Stack(app, "SesSmtpCredentialsStack", {});

const user = new User(stack, "User", {});
new SesSmtpCredentials(stack, "Credentials", {
  user: user,
});

app.synth();
