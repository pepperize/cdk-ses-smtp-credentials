import { App, Environment, Stack } from "aws-cdk-lib";
import { User } from "aws-cdk-lib/aws-iam";
import { SesSmtpCredentials } from "./ses-smtp-credentials";

// export CDK_DEFAULT_REGION=us-east-1
// export CDK_DEFAULT_ACCOUNT=123456789012
// projen bundle:provider/credentials-handler.lambda
// cdk deploy --app 'npx ts-node -P tsconfig.json --prefer-ts-exts ./src/integ.default.ts'

export const app = new App();

const env: Environment = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};

export const stack = new Stack(app, "SesSmtpCredentialsIntegrationTest", { env: env });

const user = new User(stack, "User", { userName: "SesTestUser" });

new SesSmtpCredentials(stack, "Credentials", { user: user });
