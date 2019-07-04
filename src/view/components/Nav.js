import React from "react";
import { connect } from 'react-redux';
import { alterMainPage, userLogout } from '../reduxStore/actions';
import NavItens from './NavItens';
import Home from './Main/Home';
import Utils from '../ultils';
import Jobs from "./Main/Jobs";
import ControleGeral from "./Main/ControleGeral";
import RegistroComponents from "./Main/RegistroComponents";

class Nav extends React.Component {
    constructor() {
        super();

        this.mobileMenuClick = this.mobileMenuClick.bind(this);
    }

    componentDidMount() {

        $('.collapsible').collapsible();
        $('.sidenav').sidenav();

        let that = this;
        that.ajust();

        $("#slide-out li").click(function () {
            that.ajust();
        });

        $(window).resize(function () {
            that.ajustLastItem();
        });
    }

    ajust() {
        let aj = setInterval(this.ajustLastItem, 0);
        setTimeout(function () { clearInterval(aj); }, 500);
    }

    ajustLastItem() {
        let last = $("#slide-out li").last();
        if (!last.get(0)) return;

        let margin = $(window).height() - last.position().top - last.children().outerHeight(true) + ((last.children().outerHeight(true) - last.children().outerHeight()) / 2);
        if (margin >= 0) last.css("margin-top", margin);
    }

    mobileMenuClick() {
        this.ajust()
    }

    render() {
        return (
            <header>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li>
                        <div className="center principalcolor">
                            <div>
                                <a onClick={() => this.props.alterMainPage(<Home />)}>
                                    <i className="material-icons principalcolor" style={styles.gearIcon}>polymer{/*settings_applications*/}</i>
                                </a>
                            </div>
                            <div>{this.props.title}</div>
                            <div id="d_ip">{this.props.host}</div>
                        </div>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <div className="center principalcolor">
                            <div id="d_name_connected">Conectado como: {this.props.user.name}</div>
                            <div>
                                <a onClick={() => this.props.userLogout()} className="waves-effect btn-small principalBackgroundColor"><i className="material-icons left">details</i>signOut</a>
                            </div>
                        </div>
                    </li>
                    <li className="divider"></li>
                    <NavItens
                        name='Registro de Componentes'
                        toPage={<RegistroComponents />}
                    />
                    <NavItens
                        name='Controle Geral'
                        toPage={<ControleGeral />}
                    />
                    <NavItens
                        name='Jobs'
                        toPage={<Jobs />}
                    />
                    <li>
                        <a id="b_lateral" className="waves-effect btn principalBackgroundColor">
                            Aplicar Configurações </a>
                    </li>
                </ul>
                <nav className="top-nav" style={styles.nav}>
                    <div className="container" style={styles.topNavContainer}>
                        <div className="nav-wrapper principalcolor">
                            <a onClick={this.mobileMenuClick} data-target="slide-out" className="top-nav sidenav-trigger principalcolor" style={styles.mobileMenu}><i className="material-icons" style={{ fontSize: '35px' }}>menu</i></a>
                            <h3 className="center" id="titleNav"> Room Control </h3>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
/*
<div className="fixed-action-btn">
                    <a id="b_flutuante" className="btn-floating btn-large waves-effect tooltipped principalBackgroundColor" data-position="left" data-tooltip="Aplicar Configurações">
                        <i className="large material-icons">check</i>
                    </a>
                </div>
*/

const styles = {
    gearIcon: {
        fontSize: '150px',
        marginTop: '40px'
    },
    nav: {
        height: '70px',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.14)',
        backgroundColor: 'transparent'
    },
    topNavContainer: {
        width: '100%'
    },
    mobileMenu: {
        position: 'absolute',
        textAlign: 'center',
        height: '60px',
        width: '60px',
        top: '-5px',
        left: '-25px',
        zIndex: '2'
    }
}

const mapStateToProps = (state) => ({
    ...state.comodoState,
    ...state.userState
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ alterMainPage, userLogout })
)(Nav);