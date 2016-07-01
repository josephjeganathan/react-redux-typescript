import * as React from 'react';
import { TodoRow } from './TodoRow';
import { Todo } from '../../models/Todo';

interface TodoListProp {
  todos: Todo[];
  onTodoClick: Function;
}

export class TodoList extends React.Component<TodoListProp, any> {

  render() {

    let { todos, onTodoClick } = this.props;

    return (
      <div>
        {todos.map((todo: any) =>
          <TodoRow
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id) }
            />
        ) }
      </div>
    );
  }
}
