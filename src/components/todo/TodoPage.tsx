import * as React from 'react';
import { FilterGroup } from './FilterGroup';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

export const TodoPage = () => (
  <div className='container'>
    <AddTodo />
    <hr />
    <VisibleTodoList />
    <hr />
    <FilterGroup />
  </div>
);
