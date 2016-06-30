import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const logger = (store: any) => (next: any) => (action: any) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();

  return result;
};

export const createAppStore = () => createStore(rootReducer, applyMiddleware(logger));
