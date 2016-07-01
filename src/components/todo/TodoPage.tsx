import * as React from 'react';
import { Footer } from './Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

export const TodoPage = () => (
  <div>
    <h1>TODOS</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);
