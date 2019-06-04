import { mainPageReducer } from './mainPageReducer';
import { comodoReducer } from './comodoReducer';
import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    mainPageState: mainPageReducer,
    comodoState: comodoReducer,
    userState: userReducer
});