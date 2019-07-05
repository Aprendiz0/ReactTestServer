import { ADD_COMPONENT, DELETE_COMPONENT, UPDATE_COMPONENT } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    components: [{
        name: "Component Name",
        node: "01",
        port: "4",
        typeValue: "03",
        typeIO: "01",
        nameIcon: "view_carousel",
        value: 435
    }],
    availableNodePorts: [{
        node: "00",
        ports: ["1", "2", "3", "4", "5"]
    }, {
        node: "01",
        ports: ["1", "2", "3", "4", "5", "6"]
    }],
};

export const registroComponentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_COMPONENT:
            return update(state, {
                components: {
                    $push: initialState.components
                }
            });
        case DELETE_COMPONENT:
            return update(state, {
                components: {
                    $splice: [[action.componentKey, 1]]
                }
            });
        case UPDATE_COMPONENT:
            return update(state, {
                components: {
                    [action.componentKey]: {
                        $set: action.component
                    }
                }
            });
    }

    return {
        ...state
    };
};