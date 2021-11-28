import { Buffer } from "buffer";
import { createHmac } from "crypto";
import {
  CloudFormationCustomResourceEvent,
  CloudFormationCustomResourceSuccessResponse,
  CloudFormationCustomResourceResponseCommon,
} from "aws-lambda";
import * as AWS from "aws-sdk";

export const sign = (key: string[], message: string): string[] => {
  const hmac = createHmac("sha256", Buffer.from(key.map((a) => a.charCodeAt(0)))).update(message) as any;

  return hmac.digest("binary").toString().split("");
};

export const calculateSmtpPassword = (secretAccessKey: string, region: string): string => {
  const date = "11111111";
  const service = "ses";
  const terminal = "aws4_request";
  const message = "SendRawEmail";
  const version = [0x04];

  let signature = sign(`AWS4${secretAccessKey}`.split(""), date);
  signature = sign(signature, region);
  signature = sign(signature, service);
  signature = sign(signature, terminal);
  signature = sign(signature, message);

  const signatureAndVersion = version.slice(); //copy of array

  signature.forEach((a: string) => signatureAndVersion.push(a.charCodeAt(0)));

  return Buffer.from(signatureAndVersion).toString("base64");
};

export const onEvent = async (
  event: CloudFormationCustomResourceEvent
): Promise<CloudFormationCustomResourceResponseCommon | any> => {
  const requestType = event.RequestType;
  console.log(`Request of type ${requestType} received`);

  if (requestType == "Create") {
    // Create access key
    const username = event.ResourceProperties.UserName;
    const region = process.env.AWS_DEFAULT_REGION as string;
    const iam = new AWS.IAM();

    const accessKey = await iam
      .createAccessKey({
        UserName: username,
      })
      .promise();
    const accessKeyId = accessKey.AccessKey.AccessKeyId;
    const secretAccessKey = accessKey.AccessKey.SecretAccessKey;

    // Create ses smtp credentials
    const smtpPassword = calculateSmtpPassword(secretAccessKey, region);

    // TODO: Update in SecretsManager

    return {
      Status: "SUCCESS",
      PhysicalResourceId: accessKeyId,
      StackId: event.StackId,
      RequestId: event.RequestId,
      LogicalResourceId: event.LogicalResourceId,
      Data: {
        AccessKeyId: accessKeyId,
        SecretAccessKey: secretAccessKey,
        SmtpPassword: smtpPassword,
      },
    } as CloudFormationCustomResourceSuccessResponse;
  }

  if (requestType == "Update") {
    console.log("Access key has already been provisioned, no operation to be performed");
  }

  if (requestType == "Delete") {
    console.log(
      "No operation required, deletion of this resource is assumed to occur in conjunction with deletion of an IAM user"
    );
  }
};
