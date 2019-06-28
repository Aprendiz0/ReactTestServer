import {
    ALTER_MAIN_PAGE,
    USER_LOGIN,
    TOGGLE_DAY,
    CHANGE_JOB_NAME,
    ADD_JOB,
    DELETE_JOB,
    CHANGE_TIME,
    ADD_GENERAL_GROUP,
    DELETE_GENERAL_GROUP,
    CHANGE_COMPONENT_NAME,
    CHANGE_COMPONENT_NODE,
    CHANGE_COMPONENT_PORT,
    CHANGE_NAME_ICON
} from './actionTypes';

export const alterMainPage = value => {
    return ({
        type: ALTER_MAIN_PAGE,
        page: value
    })
};

export const userLogin = (context, doneCallback, failCallback) => {
    return dispatch => {
        $.ajax({
            method: "POST",
            url: "/auth/login",
            cache: false,
            data: { userName: context.user, userPassword: context.password }
        }).done(function (response) {
            if (doneCallback) doneCallback(response);
            dispatch({
                type: USER_LOGIN,
                user: response,
                logged: true
            })
        }).fail((jqXHR) => {
            if (failCallback) failCallback(jqXHR);
        });
    }
};

export const userLogout = (doneCallback, failCallback) => {
    return dispatch => {

        $.ajax({
            type: "POST",
            url: "/auth/logout",
            cache: false
        }).done(function (response) {
            if (doneCallback) doneCallback(response);
            dispatch({
                type: USER_LOGIN,
                user: response,
                logged: false
            })
        }).fail((jqXHR) => {
            if (failCallback) failCallback(jqXHR);
        });
    }
};

export const userTestAuth = (doneCallback, failCallback) => {
    return dispatch => {
        $.ajax({
            type: "POST",
            url: "/auth/authenticate",
            cache: false
        }).done((response) => {
            if (doneCallback) {
                dispatch({
                    type: USER_LOGIN,
                    user: response,
                    logged: true
                })
                doneCallback(response);
            }
        }).fail((jqXHR) => {
            dispatch({
                type: USER_LOGIN,
                logged: false
            })
            if (failCallback) failCallback(jqXHR);
        });
    }
}

export const toggleDay = value => {
    return ({
        type: TOGGLE_DAY,
        jobKey: value.key,
        day: value.day
    })
};

export const changeJobName = value => {
    return ({
        type: CHANGE_JOB_NAME,
        jobKey: value.key,
        value: value.value
    })
};

export const addJob = () => {
    return ({
        type: ADD_JOB
    })
};

export const deleteJob = value => {
    return ({
        type: DELETE_JOB,
        jobKey: value.key
    })
};

export const changeTime = value => {
    return ({
        type: CHANGE_TIME,
        jobKey: value.key,
        timeAttr: value.timeAttr,
        value: value.value
    })
};

export const addGeneralGroup = () => {
    return ({
        type: ADD_GENERAL_GROUP
    })
}

export const deleteGeneralGroup = value => {
    return ({
        type: DELETE_GENERAL_GROUP,
        groupKey: value.key
    })
};

export const changeComponentName = value => {
    return ({
        type: CHANGE_COMPONENT_NAME,
        componentKey: value.key,
        value: value.value
    })
};

export const changeComponentNode = value => {
    return ({
        type: CHANGE_COMPONENT_NODE,
        componentKey: value.key,
        value: value.value
    })
};

export const changeComponentPort = value => {
    return ({
        type: CHANGE_COMPONENT_PORT,
        componentKey: value.key,
        value: value.value
    })
};

export const changeNameIcon = value => {
    return ({
        type: CHANGE_NAME_ICON,
        componentKey: value.key,
        value: value.value
    })
};