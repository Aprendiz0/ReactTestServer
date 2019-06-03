import { mainPageReducer } from './mainPageReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    mainPageState: mainPageReducer
});