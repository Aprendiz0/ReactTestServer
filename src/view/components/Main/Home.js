import React from "react";

class Home extends React.Component {

    render() {
        return (
            <div className="s12">
                <h3> Bem-Vindo</h3>
                <p>
                    ao Room Control, criado especialmente para o controle dessa residência.<br />
                    Nesse site você tem total controle sobre os equipamentos conectados e configurados para trabalhar em conjunto
                    com
                    este site, como:
                </p>
                <p>
                    <li>Iluminação (Em Dev)</li>
                    <li>Fitas de Led Controladas por arduino 1 e 2 (Em Dev)</li>
                </p>
                <p className="right">
                    By Nathan Cardoso Barcelos
                </p>
            </div>
        );
    }
}

export default Home;