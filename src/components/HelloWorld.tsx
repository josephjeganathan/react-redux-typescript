import * as React from 'react';

interface IHelloWorldProps {
  name: string;
}

// e.g. stateless/functional component 
export function HelloWorld(props: IHelloWorldProps) {
  return (
    <p>
      Hello {props.name}
    </p>
  );
}
