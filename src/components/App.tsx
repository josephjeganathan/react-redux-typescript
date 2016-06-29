import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloWorld } from './HelloWorld';

interface IHotModule {
  hot?: { accept: (path: string, callback: () => void) => void };
};

declare const module: IHotModule;

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <HelloWorld name={'John Smith'} />
    );
  }
}
