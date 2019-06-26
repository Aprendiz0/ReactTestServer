import { TOGGLE_DAY } from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    job: [{
        name: "Job Name",
        timeOn: "5:59",
        timeOff: "18:10",
        days: {
            dom: true,
            seg: false,
            ter: true,
            qua: true,
            qui: true,
            sex: true,
            sab: true,
        }
    }]
};

export const jobReducer = (state = initialState, action) => {

    switch (action.type) {
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
            })
    }

    return {
        ...state
    };
};