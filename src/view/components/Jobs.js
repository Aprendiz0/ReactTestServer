import React from 'react';
import Utils from '../ultils';
import { connect } from 'react-redux';

class Login extends React.Component {
    render() {
        return (
            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        <div style={styles.boxlogin}>

                            <div className="row">
                                <form className="col s12">
                                    <div className="row center">
                                        <h5>Room Control - Login</h5>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="user" type="text" />
                                            <label htmlFor="user">Usuário</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="password" type="password" />
                                            <label htmlFor="password">Senha</label>
                                        </div>
                                    </div>
                                    <div className="col s12">
                                        <label className="col s7 m8" id="error_message" className="left"></label>
                                        <a onClick={this.signIn} className="col s5 m4 waves-effect btn right principalBackgroundColor">
                                            {this.state.onLogin ?
                                                <div className="preloader-wrapper small active left">
                                                    <div className="spinner-layer spinner-red-only">
                                                        <div className="circle-clipper left">
                                                            <div className="circle"></div>
                                                        </div><div className="gap-patch">
                                                            <div className="circle"></div>
                                                        </div><div className="circle-clipper right">
                                                            <div className="circle"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <i className="material-icons left">change_history</i>
                                            }
                                            Login
                                        </a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    Utils.bindMapDispatchToProps({ userLogin })
)(Login);