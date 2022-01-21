import { App, Stack } from "aws-cdk-lib";
import { User } from "aws-cdk-lib/aws-iam";
import { SesSmtpCredentials } from "./ses-smtp-credentials";

// yarn run cdk deploy --app "npx ts-node ./src/ses-smtp-credentials.integration.ts"

const app = new App();
const stack = new Stack(app, "SesSmtpCredentialsStack", {});

const user = new User(stack, "User", {});
new SesSmtpCredentials(stack, "Credentials", {
  user: user,
});

app.synth();
