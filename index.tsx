import * as React from "react";

export type TestProps = {
  type: string;
};

export const TestComponent: React.FunctionComponent<TestProps> = props => {
  return <h1>{props.type}</h1>;
};
