import React from 'react';

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
                                            <input id="email" type="email" className="validate" />
                                            <label for="email">Email</label>
                                            <span className="helper-text" data-error="E-mail incorreto"></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="password" type="password" className="validate" />
                                            <label for="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col s12">
                                        <label className="col s7 m8" id="error_message" className="left"></label>
                                        <a onclick="signIn()" className="col s5 m4 waves-effect btn right principalBackgroundColor"><i className="material-icons left">change_history</i>Login</a>
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

const styles = {
    boxlogin: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'gray',
        borderRadius: '30px',
        padding: '10px 30px 10px !important'
    }
}

export default Login;