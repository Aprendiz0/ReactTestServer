import React from 'react';
import Utils from '../ultils';
import { connect } from 'react-redux';
import { userLogin } from '../reduxStore/actions'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onLogin: false
        }

        this.signIn = this.signIn.bind(this);
    }

    componentDidMount() {
        let that = this;
        $("#user,#password").bind("keypress", function (args) {
            if (args.keyCode == 13) {
                that.signIn();
            }
        });
    }

    componentWillUnmount() {
        $("#user,#password").unbind("keypress");
    }

    signIn() {
        if (this.props.onLogin) return;
        this.setState({ onLogin: true })
        let that = this;
        let user = $('#user').val();
        let password = $('#password').val();

        this.props.userLogin({ user, password },
            () => {
                $("#error_message")
                    .removeClass("error_message")
                    .addClass("success_message")
                    .html("Logado com sucesso");
                this.setState({ onLogin: false })
            },
            (jqXHR) => {
                let message;

                if (jqXHR.status == 401) {
                    message = 'Usuario/Senha não encontrado';
                } else {
                    Utils.modal.errorFunc(jqXHR);
                    message = "Server Error";
                }

                $('#error_message')
                    .removeClass("success_message")
                    .addClass("error_message")
                    .html(message);
                this.setState({ onLogin: false })
            }
        )



    }

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

const styles = {
    boxlogin: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'gray',
        borderRadius: '30px',
        padding: '10px 30px 10px'
    }
}

export default connect(
    null,
    Utils.bindMapDispatchToProps({ userLogin })
)(Login);