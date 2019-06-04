import { SET_COMODOS } from '../actions/actionTypes';

const initialState = {
    comodos: []
};

export const comodoReducer = (state = initialState, action) => {

    let newState = {};

    switch (action.type) {
        case SET_COMODOS:
            newState = {
                comodos: action.comodos
            }
            break;
    }

    return {
        ...state,
        ...newState
    };
};