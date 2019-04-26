import React from "react";
import NavItens from './NavItens'

export default class Nav extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "Room Control V0.6 Alpha",
            host: "IP: XXX.XXX.XXX.X",
            user: "Usuário teste",
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <header>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li>
                        <div className="center principalcolor">
                            <div><a href="#!"> <i className="material-icons principalcolor" style={{ fontSize: '150px', marginTop: '40px' }}>settings_applications</i></a></div>
                            <div>{this.state.title}</div>
                            <div id="d_ip">{this.state.host}</div>
                        </div>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <div className="center principalcolor">
                            <div id="d_name_connected">Conectado como: {this.state.user}</div>
                            <div>
                                <a id="signOut" className="waves-effect btn-small principalBackgroundColor"><i className="material-icons left">details</i> signOut </a>
                            </div>
                        </div>
                    </li>
                    <li className="divider"></li>
                    <NavItens />
                    <NavItens />
                    <li>
                        <a id="b_lateral" className="waves-effect btn principalBackgroundColor" style={{ 'display': 'none' }}>
                            Aplicar Configurações </a>
                    </li>
                </ul>
            </header>
        );
    }
}