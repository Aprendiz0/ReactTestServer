import { ALTER_MAIN_PAGE } from '../actions/actionTypes';

const initialState = {
    mainPage: 'OPA'
};

export const mainPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ALTER_MAIN_PAGE:
            return {
                ...state,
                mainPage: action.mainPage
            }
    }

    return state;
};