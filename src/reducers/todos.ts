import { Todo } from '../models/Todo';
import { LOAD_TODOS, ADD_TODO, TOGGLE_TODO } from '../constants/actionTypes';

const todo = (state: Todo, action: any) => {
  switch (action.type) {
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};

const todos = (state: Todo[] = [], action: any) => {
  switch (action.type) {
    case LOAD_TODOS:
      return action.todos;
    case ADD_TODO:
      return [
        ...state,
        action.todo
      ];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
