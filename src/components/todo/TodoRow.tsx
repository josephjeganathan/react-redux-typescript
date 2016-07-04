import * as React from 'react';
import { Todo } from '../../models/Todo';

interface TodoProp extends Todo {
  onClick: Function;
}

export class TodoRow extends React.Component<TodoProp, any> {
  render() {

    let { onClick, completed, text } = this.props;
    let checkIcon = completed ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked';

    return (
      <div onClick={onClick} className={completed ? 'todo completed' : 'todo'}>
        <span className={checkIcon}></span>
        <span className='todo-text'>{text}</span>
      </div>
    );
  }
}
