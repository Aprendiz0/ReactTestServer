import React from "react";
import NavItens from './NavItens'
import PageTest from './PageTest'

export default class Nav extends React.Component {
    constructor() {
        super();

        this.state = {
            userName: "Usuário teste"
        };
    }

    render() {
        return (
            <header>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li>
                        <div className="center principalcolor">
                            <div><a href="#!"> <i className="material-icons principalcolor" style={{ fontSize: '150px', marginTop: '40px' }}>settings_applications</i></a></div>
                            <div>{this.props.title}</div>
                            <div id="d_ip">{this.props.host}</div>
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
                    <NavItens
                        name='Cômodos'
                        itens={[{
                            name: 'Quarto Nathan',
                            toPage: <PageTest />
                        }]}
                    />
                    <NavItens
                        name='Configurações'
                    />
                    <li>
                        <a id="b_lateral" className="waves-effect btn principalBackgroundColor" /*style={{ 'display': 'none' }}*/>
                            Aplicar Configurações </a>
                    </li>
                </ul>
                <nav className="top-nav">
                    <div className="container">
                        <div className="nav-wrapper principalcolor">
                            <a href="#" data-target="slide-out" className="top-nav sidenav-trigger principalcolor"><i className="material-icons" style={{ fontSize: '35px' }}>menu</i></a>
                            <h3 className="center" id="titleNav"> Room Control </h3>
                        </div>
                    </div>
                </nav>
                <div className="fixed-action-btn">
                    <a id="b_flutuante" className="btn-floating btn-large waves-effect tooltipped green principalBackgroundColor" data-position="left" data-tooltip="Aplicar Configurações">
                        <i className="large material-icons">check</i>
                    </a>
                </div>
            </header>
        );
    }
}