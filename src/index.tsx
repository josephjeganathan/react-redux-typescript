import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createAppStore } from './store';
import { Router, browserHistory } from 'react-router';
import todoApp from './reducers';
import routes from './routes';
import { loadTodos, addTodoSuccess, toggleTodoSuccess } from './actions/';
import 'bootstrap/dist/css/bootstrap.css';
import * as io from 'socket.io-client';
import { Todo } from './models/Todo';

let store = createAppStore();

var socket = io('http://localhost:8001');
socket.on('TodoAdded', function(todo:Todo){
  store.dispatch(addTodoSuccess(todo));
});
socket.on('TodoToggled', function(todo:Todo){
  store.dispatch(toggleTodoSuccess(todo.id));
});

store.dispatch(loadTodos());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
