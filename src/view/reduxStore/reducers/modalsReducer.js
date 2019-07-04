import { SET_COMP_TO_ADVOP_MODAL, CLEAR_COMP_TO_ADVOP_MODAL } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    componentAdvancOp: {
        key: undefined,
        component: {}
    }
};

export const modalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMP_TO_ADVOP_MODAL:
            return update(state, {
                componentAdvancOp: {
                    key: {
                        $set: action.componentKey
                    },
                    component: {
                        $set: action.component
                    }
                }
            });
        case CLEAR_COMP_TO_ADVOP_MODAL:
            return update(state, {
                componentAdvancOp: {
                    $set: initialState
                }
            });
    }

    return state;
};