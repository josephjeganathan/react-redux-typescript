import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';

// this file can't be hot reloaded, so if you change
// it you'll need to reload the page
render(<App />, document.getElementById('app'));
