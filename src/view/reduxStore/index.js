import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

// use applyMiddleware to add the thunk middleware to the store
export const Store = createStore(rootReducer, applyMiddleware(thunk));