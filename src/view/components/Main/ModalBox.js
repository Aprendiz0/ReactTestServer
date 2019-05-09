import React from 'react';
import Utils from '../../ultils';

class ModalBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newNameBox: '',
            chkbox: false
        }

        if (!this.props.addNewBoxMethod) this.addNewBoxMethod = () => { Utils.toast('Sem método atribuido') };
        else this.addNewBoxMethod = this.props.addNewBoxMethod;

        this.addNewBox = this.addNewBox.bind(this);
        this.clearModalBox = this.clearModalBox.bind(this);
    }

    clearModalBox() {
        this.setState({ newNameBox: '', chkbox: false });
    }

    addNewBox() {
        let itens = {
            newNameBox: this.state.newNameBox,
            chkbox: this.state.chkbox
        };

        this.addNewBoxMethod(itens);
        this.clearModalBox();
    }

    render() {
        return (
            <div id={this.props.idModal} className="modal bottom-sheet">
                <div className="modal-content center">
                    <h4>Novo Item (Box)</h4>
                    <br />
                    <div className="row container">
                        <div className="input-field col s12 m6 offset-m3">
                            <input id="newNameItemBox" type="text" className="center" placeholder="Novo nome" value={this.state.newNameBox} onChange={(e) => this.setState({ newNameBox: e.target.value })} />
                        </div>
                        <div className="col s3 m3 offset-s4" style={styles.chkbox}>
                            <label>
                                <input type="checkbox" className="filled-in" checked={this.state.chkbox} onChange={(e) => this.setState({ chkbox: e.target.checked })} />
                                <span>Switch</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a onClick={this.clearModalBox} className="modal-close waves-effect waves-green btn-flat">Cancel</a>
                    <a onClick={this.addNewBox} className="modal-close waves-effect waves-green btn-flat">Add</a>
                </div>
            </div>
        );
    }
}

const styles = {
    chkbox: {
        marginTop: '30px'
    }
}

export default ModalBox;