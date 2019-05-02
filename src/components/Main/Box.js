import React from "react";

class Box extends React.Component {

    render() {
        return (
            <div className="s12">
                <h3> Bem-Vindo</h3>
                <p>
                    ao Room Control, criado para especialmente para o controle dessa residência.<br />
                    Nesse site você tem total controle sobre os equipamentos conectados e configurados para trabalhar em conjunto
                    com
                    este site, como:

                    <hl>
                        <li>Iluminação</li>
                        <li>Fitas de Led Controladas por arduino 1 e 2</li>
                    </hl>

                </p>
                <p className="right">
                    By Nathan Cardoso Barcelos
                </p>
            </div>
        );
    }
}

const styles = {
    box: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'gray',
        borderRadius: '30px',
        padding: '10px 30px 0px !important',
        marginBottom: '20px'
    }
}

/*
.boxlogin{
    background-color: rgba(255,255,255,0.2);
    border-style: solid;
    border-width: 1px;
    border-color: gray;
    border-radius: 30px;
    padding: 10px 30px 10px !important;
}
*/

export default Box;