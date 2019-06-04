import { USER_LOGIN } from '../actions/actionTypes';

const initialState = {
    user: {
        name: ''
    },
    logged: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:  
        return {
                ...state,
                user: {
                    name: action.user.userId
                },
                logged: action.logged
            }
    }

    return state;
};