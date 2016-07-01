import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { TodoForm } from '../components/todo/TodoForm';

interface AddTodoState {
  text: string;
}

class AddTodo extends React.Component<any, AddTodoState> {

  constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  handleChange(event: any) {
    this.setTodo(event.target.value);
  }

  saveTodo(event: any) {
    event.preventDefault();

    if (!this.state.text) {
      return;
    }

    let { dispatch } = this.props;
    dispatch(addTodo(this.state.text));
    this.setTodo('');
  }

  setTodo(text: string) {
    this.setState({ text: text });
  }

  render() {
    return (
      <TodoForm
        text={this.state.text}
        onChange={this.handleChange}
        onSave={this.saveTodo} />
    );
  }
}

export default connect()(AddTodo);
