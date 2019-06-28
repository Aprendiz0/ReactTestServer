import { mainReducer } from './mainReducer';
import { userReducer } from './userReducer';
import { jobReducer } from './jobReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    mainState: mainReducer,
    userState: userReducer,
    jobState: jobReducer
});