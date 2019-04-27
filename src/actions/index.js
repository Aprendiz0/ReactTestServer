import { ALTER_MAIN_PAGE } from '../actions/actionTypes';

export const alterMainPage = value => ({
    type: ALTER_MAIN_PAGE,
    mainPage: value
});