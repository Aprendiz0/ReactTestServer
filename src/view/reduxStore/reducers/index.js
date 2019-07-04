import { mainReducer } from './mainReducer';
import { userReducer } from './userReducer';
import { jobReducer } from './jobReducer';
import { controleGeralReducer } from './controleGeralReducer';
import { registroComponentsReducer } from './registroComponentsReducer';
import { modalsReducer } from './modalsReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    mainState: mainReducer,
    userState: userReducer,
    jobState: jobReducer,
    controleGeralState: controleGeralReducer,
    registroComponentsState: registroComponentsReducer,
    modalsState: modalsReducer
});