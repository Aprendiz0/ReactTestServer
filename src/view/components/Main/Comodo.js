import React from 'react';
import Box from './Box';
import Utils from '../../ultils/index';

class Comodo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ...props,
            pulseSave: false,
            newNameBox: '',
            chkbox: false
        }

<<<<<<< HEAD
        this.idModal = 'modalBox';

        this.saveState = this.saveState.bind(this);
=======
>>>>>>> parent of 7acf052... removed #! from a:href, editMode Box
        this.addNewBox = this.addNewBox.bind(this);
        this.inEditMode = this.inEditMode.bind(this);
        this.cancelState = this.cancelState.bind(this);
        this.outEditMode = this.outEditMode.bind(this);
        this.openModalBox = this.openModalBox.bind(this);
    }

    componentDidMount() {
        $('.fixed-action-btn').floatingActionButton();
        $('.tooltipped').tooltip();
        $('#modalBox').modal()
    }

    openModalBox() {
        let idModal = this.idModal;
        $(`#${idModal}`).modal('open')
    }

    openfloatingActionButton() {
        $('.fixed-action-btn').floatingActionButton('open');
    }

    inEditMode() {
        this.setState({ editMode: true });
    }

<<<<<<< HEAD
    outEditMode() {
        this.setState({ editMode: false });
    }

    addNewBox(itens) {
        let boxName = itens.newNameBox;
        let chkbox = itens.chkbox;
=======
    addNewBox() {
        let boxName = this.state.newNameBox;
        let chkbox = this.state.chkbox;
>>>>>>> parent of 7acf052... removed #! from a:href, editMode Box
        let boxes = this.state.boxes;
        
        boxes.push({
            boxName,
            titleSwitch: chkbox,
            subItens: [
                {
                    itemName: "Principal",
                    type: "switch"
                }
            ]
        });

        this.setState({ boxes });
    }

    saveState() {
        this.backupState = this.state;
        this.outEditMode();
        Utils.toast('Salvo');
    }

    cancelState() {
        this.setState({
            ...this.backupState
        });
        this.outEditMode();
        Utils.toast('Cancelado');
    }

    render() {
        return (
            <>
                {this.state.boxes.map((item, key) =>
                    <Box
                        key={key}
                        boxName={item.boxName}
                        subItens={item.subItens}
                        titleSwitch={item.titleSwitch}
                    />
                )}
                <div className="fixed-action-btn">
                    <a onClick={this.openfloatingActionButton} className={"btn-floating tooltipped btn-large grey darken-3" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Configurar">
                        <i className="large material-icons">settings</i>
                    </a>
                    <ul>
<<<<<<< HEAD
                        <li><a onClick={this.saveState} className={"btn-floating tooltipped grey darken-1" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Salvar"><i className="material-icons">save</i></a></li>
                        <li><a onClick={this.cancelState} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Cancelar"><i className="material-icons">clear</i></a></li>
                        <li><a onClick={this.inEditMode} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">edit</i></a></li>
                        <li><a onClick={this.openModalBox} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">add</i></a></li>
                    </ul>
                </div>
=======
                        <li><a className={"btn-floating tooltipped grey darken-1" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Salvar"><i className="material-icons">save</i></a></li>
                        <li><a className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Cancelar"><i className="material-icons">clear</i></a></li>
                        <li><a className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">edit</i></a></li>
                        <li><a onClick={() => this.openModalBox()} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">add</i></a></li>
                    </ul>
                </div>
                <div id="modalBox" className="modal bottom-sheet">
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
                        <a onClick={this.clearModalBox} href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
                        <a onClick={() => this.addNewBox()} href="#!" className="modal-close waves-effect waves-green btn-flat">Add</a>
                    </div>
                </div>
>>>>>>> parent of 7acf052... removed #! from a:href, editMode Box
            </>
        );
    }
}

export default Comodo;