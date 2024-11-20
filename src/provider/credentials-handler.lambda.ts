import { CdkCustomResourceEvent as OnEventRequest, CdkCustomResourceResponse as OnEventResponse } from "aws-lambda";
import * as AWS from "aws-sdk";
import { calculateSesSmtpPassword } from "./calculate-ses-smtp-password";
import { Credentials } from "./credentials";

/**
 * The onEvent handler is invoked whenever a resource lifecycle event for a credentials custom-resource occurs
 *
 * @see https://docs.aws.amazon.com/cdk/api/v1/docs/custom-resources-readme.html#handling-lifecycle-events-onevent
 */
export async function handler(event: OnEventRequest): Promise<OnEventResponse | undefined> {
  const requestType = event.RequestType;
  console.log(`Request of type ${requestType} received`);

  if (requestType == "Create") {
    // Create access key
    const username = event.ResourceProperties.UserName;
    const secretId = event.ResourceProperties.SecretId;
    const userNameSecretKey = event.ResourceProperties.UserNameSecretKey;
    const passwordSecretKey = event.ResourceProperties.PasswordSecretKey;
    const region = process.env.AWS_DEFAULT_REGION as string;
    const iam = new AWS.IAM();
    const secretsManager = new AWS.SecretsManager();

    const accessKey = await iam
      .createAccessKey({
        UserName: username,
      })
      .promise();
    const accessKeyId = accessKey.AccessKey.AccessKeyId;
    const secretAccessKey = accessKey.AccessKey.SecretAccessKey;

    // Create ses smtp credentials
    const smtpPassword = calculateSesSmtpPassword(secretAccessKey, region);

    // TODO: Update in SecretsManager
    await secretsManager
      .putSecretValue({
        SecretId: secretId,
        SecretString: JSON.stringify({
          [userNameSecretKey || Credentials.USERNAME]: accessKeyId,
          [passwordSecretKey || Credentials.PASSWORD]: smtpPassword,
        }),
      })
      .promise();

    return {
      ...event,
      PhysicalResourceId: accessKeyId,
      Data: {
        ...event.ResourceProperties,
        AccessKeyId: accessKeyId,
      },
    };
  }

  if (requestType == "Update") {
    console.log("Access key has already been provisioned, no operation to be performed");
  }

  if (requestType == "Delete") {
    console.log(
      "No operation required, deletion of this resource is assumed to occur in conjunction with deletion of an IAM User and a SecretsManager Secret",
    );
  }

  return {
    ...event,
    Data: {
      ...event.ResourceProperties,
    },
  };
}
