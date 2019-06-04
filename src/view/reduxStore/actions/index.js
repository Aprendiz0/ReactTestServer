import { ALTER_MAIN_PAGE, SET_COMODOS, USER_LOGIN } from './actionTypes';
import Utils from '../../ultils';

export const alterMainPage = value => {
    return ({
        type: ALTER_MAIN_PAGE,
        mainPage: value
    })
};

export const loadComodos = () => {
    return dispatch => {
        $.ajax({
            method: "POST",
            url: "/project/getComodos",
            cache: false,
        }).done(
            (response) => dispatch(setComodos(response))
        ).fail(Utils.modal.errorFuncCallback(
            () => dispatch(setComodos([]))
        ));
    }
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

export const onLogin = value => {
    return ({
        type: ON_LOGIN,
        comodos: value
    })
};

export const setComodos = value => {
    return ({
        type: SET_COMODOS,
        comodos: value
    })
};