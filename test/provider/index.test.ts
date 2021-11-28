import { calculateSmtpPassword } from "../../src/provider";

test("Calculate smtp password from aws secret access key", () => {
  // Given
  const accessKey = "dhSgJJyAs+2z19oLOVkwBrE6GkdNQD5fL5Dou5Tb";
  const region = "eu-central-1";

  // When
  const password = calculateSmtpPassword(accessKey, region);

  // Then
  expect(password).toEqual("BK0hyoUp3vjB+NdwhSiUpkA9oA84fNaqhEKrXZ5PkcX2");
});
