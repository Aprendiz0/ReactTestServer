import { mainPageReducer } from './mainPageReducer';
import { comodoReducer } from './comodoReducer';
import { userReducer } from './userReducer';
import { jobReducer } from './jobReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    mainPageState: mainPageReducer,
    comodoState: comodoReducer,
    userState: userReducer,
    jobState: jobReducer
});