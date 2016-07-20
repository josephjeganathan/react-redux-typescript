import { TodoApi } from '../api/todoApi';
import { Todo } from '../models/Todo';
import * as actionTypes from '../constants/actionTypes';

export const loadTodosSuccess = (todos: Todo[]) => {
  return {
    type: actionTypes.LOAD_TODOS,
    todos
  };
};

export const addTodoSuccess = (todo: Todo) => {
  return {
    type: actionTypes.ADD_TODO,
    todo
  };
};

export const toggleTodoSuccess = (id: number) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    id
  };
};

export const setVisibilityFilter = (filter: string) => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
};

export const loadTodos = () => (dispatch: any) => {
  return TodoApi.loadTodos()
    .then(todos => {
      dispatch(loadTodosSuccess(todos));
    })
    .catch(err => {
      throw (err);
    });
};

export const addTodo = (text: string) => (dispatch: any) => {
  return TodoApi.addTodo(text);
};

export const toggleTodo = (id: number) => (dispatch: any) => {
  return TodoApi.toggleTodo(id);
};

