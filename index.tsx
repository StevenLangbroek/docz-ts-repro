import * as React from "react";

interface Props {
  /** description of type prop */
  type: string;
}

const TestComponent: React.FunctionComponent<Props> = props => {
  return <h1>{props.type}</h1>;
};

export default TestComponent;

export { Props };
