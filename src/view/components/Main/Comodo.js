import React from 'react';
import Box from './Box';
import Utils from '../../ultils/index';
import ModalBox from './ModalBox';

class Comodo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ...props,
            pulseSave: false,
            newNameBox: '',
            chkbox: false,
            editMode: false
        }

        this.idModal = 'modalBox';

        this.saveState = this.saveState.bind(this);
        this.addNewBox = this.addNewBox.bind(this);
        this.inEditMode = this.inEditMode.bind(this);
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

    outEditMode() {
        this.setState({ editMode: false });
    }

    addNewBox(itens) {
        let boxName = itens.newNameBox;
        let chkbox = itens.chkbox;
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
                        editMode={this.state.editMode}
                    />
                )}
                <div className="fixed-action-btn">
                    <a onClick={this.openfloatingActionButton} className={"btn-floating tooltipped btn-large grey darken-3" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Configurar">
                        <i className="large material-icons">settings</i>
                    </a>
                    <ul>
                        <li><a onClick={this.saveState} className={"btn-floating tooltipped grey darken-1" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Salvar"><i className="material-icons">save</i></a></li>
                        <li><a className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Cancelar"><i className="material-icons">clear</i></a></li>
                        <li><a onClick={this.inEditMode} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">edit</i></a></li>
                        <li><a onClick={this.openModalBox} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">add</i></a></li>
                    </ul>
                </div>
                <ModalBox
                    idModal={this.idModal}
                    addNewBoxMethod={this.addNewBox}
                />
            </>
        );
    }
}

export default Comodo;