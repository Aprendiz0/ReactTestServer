import React from 'react';
import Home from '../components/Main/Home';
import { ALTER_MAIN_PAGE } from '../actions/actionTypes';

const initialState = {
    mainPage: <Home />
};

export const mainPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ALTER_MAIN_PAGE:
            return {
                ...state,
                mainPage: action.mainPage
            }
    }

    return state;
};