import * as axios from 'axios';
import { Todo } from '../models/Todo';

const apiBaseUrl = 'http://localhost:8000/todos';

export class TodoApi {
  static loadTodos() {
    let options = {
      url: apiBaseUrl,
      method: 'GET'
    };

    return axios(options).then(response => response.data as Todo[]);
  }

  static addTodo(text: string) {
    let options = {
      url: apiBaseUrl,
      data: {
        text: text
      },
      method: 'POST'
    };

    return axios(options).then(response => response.data as Todo);
  }

  static toggleTodo(id: number) {
    let options = {
      url: `${apiBaseUrl}/toggle`,
      data: {
        id: id
      },
      method: 'POST'
    };

    return axios(options).then(response => response.data as Todo);
  }
}
