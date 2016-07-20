import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import * as thunk from 'redux-thunk';

const logger = (store: any) => (next: any) => (action: any) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();

  return result;
};

export const createAppStore = () => createStore(rootReducer, applyMiddleware(thunk.default, logger));
