import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createAppStore } from './store';
import todoApp from './reducers';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

let store = createAppStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
