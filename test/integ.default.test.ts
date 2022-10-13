import { Template } from "aws-cdk-lib/assertions";
import { stack } from "../src/integ.default";

describe("integ.default", () => {
  it("Should match snapshot", () => {
    // When
    const t = Template.fromStack(stack);
    expect(t).toMatchSnapshot();
  });
});
