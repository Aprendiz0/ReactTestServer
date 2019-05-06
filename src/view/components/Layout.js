import React from "react";
import { Provider } from 'react-redux';
import { Store } from '../store';
import Nav from './Nav';
import Main from './Main';
import Utils from '../ultils';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            host: 'IP xxx.xxx.xxx.xxx'
        }
    }

    componentDidMount() {
        M.AutoInit();

        this.setState({
            host: window.location.host
        });

        Utils.loadPage.hide();
    }

    render() {
        return (
            <Provider store={Store}>
                <Nav
                    title='Room Control V0.6 Alpha'
                    host={this.state.host}
                />
                <Main />
            </Provider>
        );
    }
}