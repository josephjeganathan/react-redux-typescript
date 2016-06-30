import * as React from 'react';
import { Todo } from '../models/Todo';

interface TodoProp extends Todo {
  onClick: Function;
}

export class TodoRow extends React.Component<TodoProp, any> {
  render() {

    let { onClick, completed, text } = this.props;

    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        >
        {text}
      </li>
    );
  }
}
