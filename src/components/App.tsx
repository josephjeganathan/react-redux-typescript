import * as React from 'react';
import { Footer } from './todo/Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <h1>TODOS</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
