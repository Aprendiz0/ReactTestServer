import React from "react";
import { connect } from 'react-redux';
import Nav from './Nav';
import Main from './Main';
import Utils from '../ultils';
import Login from "./Login";
import { userTestAuth } from '../reduxStore/actions';

class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            host: 'IP xxx.xxx.xxx.xxx'
        }

        this.setIntervalAuth = this.setIntervalAuth.bind(this);
    }

    componentDidMount() {
        M.AutoInit();

        const onFinish = () => (Utils.loadPage.hide());

        this.props.userTestAuth(onFinish, onFinish);

        this.setIntervalAuth()
    }

    setIntervalAuth() {
        let that = this;
        if (!this.intervalAuth) this.intervalAuth = setInterval(() => {
            this.props.userTestAuth();
        }, 5000);
    }

    render() {
        return (
            <>
                {
                    this.props.logged ?
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
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.userState.logged
})

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ userTestAuth })
)(Layout);