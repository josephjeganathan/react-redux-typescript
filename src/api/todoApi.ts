import * as axios from 'axios';
import { Todo } from '../models/Todo';

const apiBaseUrl = 'http://localhost:8000/todos';

export class TodoApi {
  static loadTodos() {
    let options = {
      url: apiBaseUrl,
      method: 'GET'
    };

    return new Promise<Todo[]>((resolve, reject) => {
      axios(options)
        .then(function (response) {
          resolve(response.data as Todo[]);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  static addTodo(text: string) {
    let options = {
      url: apiBaseUrl,
      data: {
        text: text
      },
      method: 'POST'
    };

    return new Promise<Todo>((resolve, reject) => {
      axios(options)
        .then(function (response) {
          resolve(response.data as Todo);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  static toggleTodo(id: number) {
    let options = {
      url: `${apiBaseUrl}/toggle`,
      data: {
        id: id
      },
      method: 'POST'
    };

    return new Promise((resolve, reject) => {
      axios(options)
        .then(function (response) {
          resolve(response.data as Todo);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}
