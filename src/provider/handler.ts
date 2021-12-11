import {
  CloudFormationCustomResourceEvent,
  CloudFormationCustomResourceSuccessResponse,
  CloudFormationCustomResourceResponseCommon,
} from "aws-lambda";
import * as AWS from "aws-sdk";
import { calculateSesSmtpPassword } from "./calculate-ses-smtp-password";
import { Credentials } from "./credentials";

export const onEvent = async (
  event: CloudFormationCustomResourceEvent
): Promise<CloudFormationCustomResourceResponseCommon | any> => {
  const requestType = event.RequestType;
  console.log(`Request of type ${requestType} received`);

  if (requestType == "Create") {
    // Create access key
    const username = event.ResourceProperties.UserName;
    const secretId = event.ResourceProperties.SecretId;
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
          [Credentials.USERNAME]: username,
          [Credentials.PASSWORD]: smtpPassword,
        }),
      })
      .promise();

    return {
      Status: "SUCCESS",
      PhysicalResourceId: accessKeyId,
      StackId: event.StackId,
      RequestId: event.RequestId,
      LogicalResourceId: event.LogicalResourceId,
      Data: {
        AccessKeyId: accessKeyId,
      },
    } as CloudFormationCustomResourceSuccessResponse;
  }

  if (requestType == "Update") {
    console.log("Access key has already been provisioned, no operation to be performed");
  }

  if (requestType == "Delete") {
    console.log(
      "No operation required, deletion of this resource is assumed to occur in conjunction with deletion of an IAM User and a SecretsManager Secret"
    );
  }
};
