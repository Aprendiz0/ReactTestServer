import { CHANGE_COMPONENT_NAME, CHANGE_COMPONENT_NODE, CHANGE_COMPONENT_PORT, CHANGE_NAME_ICON } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    components: [{
        name: "Component Name",
        node: "01",
        port: "4",
        nameIcon: "call_split"
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
        case CHANGE_COMPONENT_NAME:
            return update(state, {
                components: {
                    [action.componentKey]: {
                        name: {
                            $set: action.value
                        }
                    }
                }
            });
        case CHANGE_COMPONENT_NODE:
            return update(state, {
                components: {
                    [action.componentKey]: {
                        node: {
                            $set: action.value
                        }
                    }
                }
            });
        case CHANGE_COMPONENT_PORT:
            return update(state, {
                components: {
                    [action.componentKey]: {
                        port: {
                            $set: action.value
                        }
                    }
                }
            });
        case CHANGE_NAME_ICON:
            return update(state, {
                components: {
                    [action.componentKey]: {
                        nameIcon: {
                            $set: action.value
                        }
                    }
                }
            });
    }

    return {
        ...state
    };
};