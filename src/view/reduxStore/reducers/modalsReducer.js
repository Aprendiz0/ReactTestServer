import { SET_COMP_TO_ADVOP_MODAL, CLEAR_COMP_TO_ADVOP_MODAL, CHANGE_COMPONENT_NAME, CHANGE_COMPONENT_NODE, CHANGE_COMPONENT_PORT, CHANGE_NAME_ICON, CHANGE_TYPE_VALUE, CHANGE_TYPE_IO } from '../actions/actionTypes';
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
        case CHANGE_COMPONENT_NAME:
            return update(state, {
                componentAdvancOp: {
                    component: {
                        name: {
                            $set: action.value
                        }
                    }
                }
            });
        case CHANGE_COMPONENT_NODE:
            return update(state, {
                componentAdvancOp: {
                    component: {
                        node: {
                            $set: action.value
                        }
                    }
                }
            });
        case CHANGE_COMPONENT_PORT:
            return update(state, {
                componentAdvancOp: {
                    component: {
                        port: {
                            $set: action.value
                        }
                    }
                }
            });
        case CHANGE_NAME_ICON:
            return update(state, {
                componentAdvancOp: {
                    component: {
                        nameIcon: {
                            $set: action.value
                        }
                    }
                }
            });
        case CHANGE_TYPE_VALUE:
            return update(state, {
                componentAdvancOp: {
                    component: {
                        typeValue: {
                            $set: action.value
                        }
                    }
                }
            });
        case CHANGE_TYPE_IO:
            return update(state, {
                componentAdvancOp: {
                    component: {
                        typeIO: {
                            $set: action.value
                        }
                    }
                }
            });
    }

    return state;
};