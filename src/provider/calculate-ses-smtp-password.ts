import { Buffer } from "buffer";
import { createHmac } from "crypto";

export const sign = (key: string[], message: string): string[] => {
  const hmac = createHmac("sha256", Buffer.from(key.map((a) => a.charCodeAt(0)))).update(message) as any;

  return hmac.digest("binary").toString().split("");
};

export const calculateSesSmtpPassword = (secretAccessKey: string, region: string): string => {
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
