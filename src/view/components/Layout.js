import React from "react";
import { Provider } from 'react-redux';
import { Store } from '../reduxStore';
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
        this.triggerLogout = this.triggerLogout.bind(this);
        this.setIntervalAuth = this.setIntervalAuth.bind(this);
    }

    componentDidMount() {
        M.AutoInit();

        let that = this;

        $.ajax({
            type: "POST",
            url: "/auth/authenticate"
        }).done((response) => {
            that.setState({
                logged: true
            });

            Utils.loadPage.hide();
            this.setIntervalAuth()
        }).fail(() => {

            that.setState({
                logged: false
            });

            Utils.loadPage.hide();
        });


    }

    setIntervalAuth() {
        let that = this;
        if (!this.intervalAuth) this.intervalAuth = setInterval(() => {
            $.ajax({
                type: "POST",
                url: "/auth/authenticate",
                cache: false,
                error: (jqXHR) => {
                    Utils.modal.errorFunc(jqXHR)
                    that.setState({
                        logged: false
                    });
                }
            });
        }, 5000);
    }

    triggerLogin() {
        this.setState({ logged: true })
    }

    triggerLogout() {
        $.ajax({
            type: "POST",
            url: "/auth/logout",
            cache: false,
            success: function (response) {

                this.setState({ logged: false });

                Utils.loadPage.hide();
            },
            error: function (xhr, status, err) {
                console.error(xhr)
            }
        });
    }

    render() {
        return (
            <Provider store={Store}>
                {this.state.logged ?
                    <>
                        <Nav
                            title='Room Control V0.8 Alpha'
                            host={this.state.host}
                            triggerLogout={this.triggerLogout}
                        />
                        <Main />
                    </>
                    :
                    <Login triggerLogin={this.triggerLogin} />
                }
            </Provider>
        );
    }
}