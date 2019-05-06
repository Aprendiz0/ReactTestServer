import React from "react";
import { Provider } from 'react-redux';
import { Store } from '../store';
import Nav from './Nav';
import Main from './Main';
import Utils from '../ultils';
import Login from "./Login";

export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            host: 'IP xxx.xxx.xxx.xxx',
            logged: false
        }

        this.triggerLogin = this.triggerLogin.bind(this);
    }

    componentDidMount() {
        M.AutoInit();

        let that = this;

        $.ajax({
            method: "POST",
            url: "/auth/authenticate",
            cache: false,
            data: { authorization: $.cookie('authorization') }
        }).done(function (response) {
            
            $.cookie('authorization', response.token);

            that.setState({
                logged: true
            });

            Utils.loadPage.hide();
        }).fail(function (jqXHR, status) {
            console.log(jqXHR)
            that.setState({
                logged: false
            });

            Utils.loadPage.hide();
        });

        this.setState({
            host: window.location.host
        });
    }

    triggerLogin() {
        this.setState({ logged: true })
    }

    render() {
        let render;
        if (this.state.logged) {
            render = (
                <>
                    <Nav
                        title='Room Control V0.6 Alpha'
                        host={this.state.host}
                    />
                    <Main />
                </>
            );
        } else {
            render = (<Login triggerLogin={this.triggerLogin} />);
        }
        return (
            <Provider store={Store}>
                {render}
            </Provider>
        );
    }
}