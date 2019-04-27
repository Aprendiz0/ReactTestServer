import React from "react";
import Nav from './Nav'
import Main from './Main'

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
    }

    render() {
        return (
            <div>
                <Nav
                    title='Room Control V0.6 Alpha'
                    host={this.state.host}
                />
                <Main />
            </div>
        );
    }
}