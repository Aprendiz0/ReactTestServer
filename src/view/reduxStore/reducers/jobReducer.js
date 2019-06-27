import { TOGGLE_DAY, CHANGE_JOB_NAME, ADD_JOB, CHANGE_TIME, DELETE_JOB } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    job: [{
        name: "Job Name",
        timeOn: "18:00",
        timeOff: "18:10",
        days: {
            dom: false,
            seg: false,
            ter: false,
            qua: false,
            qui: false,
            sex: false,
            sab: false,
        }
    }]
};

export const jobReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_JOB:
            return update(state, {
                job: {
                    $push: initialState.job
                }
            });
        case DELETE_JOB:
            return update(state, {
                job: {
                    $splice: [[action.jobKey, 1]]
                }
            });
        case TOGGLE_DAY:
            return update(state, {
                job: {
                    [action.jobKey]: {
                        days: {
                            [action.day]: {
                                $set: !state.job[action.jobKey].days[action.day]
                            }
                        }
                    }
                }
            });
        case CHANGE_JOB_NAME:
            return update(state, {
                job: {
                    [action.jobKey]: {
                        name: {
                            $set: action.value
                        }
                    }
                }
            });
        case CHANGE_TIME:
            return update(state, {
                job: {
                    [action.jobKey]: {
                        [action.timeAttr]: {
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