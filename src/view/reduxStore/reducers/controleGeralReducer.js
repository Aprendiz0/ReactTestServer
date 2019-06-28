import { ADD_GENERAL_GROUP, DELETE_GENERAL_GROUP } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    groupControl: [{
        name: 'Group Name'
    }]
};

export const controleGeralReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_GENERAL_GROUP:
            return update(state, {
                groupControl: {
                    $push: initialState.groupControl
                }
            });
        case DELETE_GENERAL_GROUP:
            return update(state, {
                groupControl: {
                    $splice: [[action.groupKey, 1]]
                }
            });
    }

    return {
        ...state
    };
};