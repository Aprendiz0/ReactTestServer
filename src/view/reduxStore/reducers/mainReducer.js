import React from 'react';
import Home from '../../components/Main/Home';
import { ALTER_MAIN_PAGE } from '../actions/actionTypes';

const initialState = {
    page: <Home />
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALTER_MAIN_PAGE:
            console.warn('rwarw')
            return {
                ...state,
                page: action.page
            }
    }

    return state;
};