import { CdkCustomResourceEvent as OnEventRequest, CdkCustomResourceResponse as OnEventResponse } from "aws-lambda";
import * as SDK from "aws-sdk";
import { PutSecretValueRequest } from "aws-sdk/clients/secretsmanager";
import * as AWS from "aws-sdk-mock";
import * as sinon from "sinon";

describe("provider.credentials-handler.lambda", () => {
  jest.setTimeout(60_000);
  console.log = jest.fn();
  process.env.AWS_DEFAULT_REGION = "us-east-1";

  let handler: (event: OnEventRequest) => Promise<OnEventResponse | undefined>;
  beforeEach(async () => {
    //AWS.setSDKInstance(SDK);
    AWS.setSDK(require.resolve("aws-sdk"));
    handler = (await import("../../src/provider/credentials-handler.lambda")).handler;
    jest.resetModules();
  });

  afterEach(() => {
    AWS.restore("IAM");
    AWS.restore("SecretsManager");
  });

  const event: Partial<OnEventRequest> = {
    ServiceToken: "serviceToken",
    ResponseURL: "https://localhost",
    StackId: "stackId",
    RequestId: "requestId",
    LogicalResourceId: "logicalResourceId",
    ResourceType: "Custom::AWS",
    ResourceProperties: {
      ServiceToken: "serviceToken",
    },
  };

  it("Should create account status", async () => {
    // Given
    const accessKeyMock: SDK.IAM.CreateAccessKeyResponse = {
      AccessKey: {
        UserName: "TestUser",
        AccessKeyId: "access-key-id-1234",
        SecretAccessKey: "dhSgJJyAs+2z19oLOVkwBrE6GkdNQD5fL5Dou5Tb",
        Status: "Active",
      },
    };
    const createAccessKeyFake = sinon.fake.resolves(accessKeyMock);
    AWS.mock("IAM", "createAccessKey", createAccessKeyFake);
    const putSecretValueFake = sinon.fake.resolves({});
    AWS.mock("SecretsManager", "putSecretValue", putSecretValueFake);

    const request = {
      ...event,
      RequestType: "Create",
      ResourceProperties: {
        ...event.ResourceProperties,
        UserName: "TestUser",
        SecretId: "secret-1234",
      },
    };
    // When
    const response = await handler(request as OnEventRequest);

    // Then
    expect(response).not.toBeUndefined();
    expect(response?.PhysicalResourceId).toEqual("access-key-id-1234");
    sinon.assert.calledOnce(createAccessKeyFake);
    sinon.assert.calledOnce(putSecretValueFake);
    sinon.assert.calledOnceWithMatch(
      putSecretValueFake,
      sinon.match.has("SecretString").and(
        sinon.match((value: PutSecretValueRequest) => {
          const secretString = JSON.parse(value.SecretString as string);

          return secretString.username == "access-key-id-1234";
        }),
      ),
    );
  });
});
