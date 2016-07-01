import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createAppStore } from './store';
import { Router, browserHistory } from 'react-router';
import todoApp from './reducers';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

let store = createAppStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
