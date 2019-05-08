import React from 'react';
import Box from './Box';

class Comodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pulseSave: false
        }
    }

    componentDidMount() {
        $('.fixed-action-btn').floatingActionButton();
        $('.tooltipped').tooltip();
        $('#modalBox').modal()
    }

    openModalBox() {
        $('#modalBox').modal('open')
    }

    openfloatingActionButton() {
        $('.fixed-action-btn').floatingActionButton('open');
    }

    render() {
        return (
            <>
                {this.props.boxes.map((item, key) =>
                    <Box
                        key={key}
                        boxName={item.boxName}
                        subItens={item.subItens}
                        titleSwitch={item.titleSwitch}
                    />
                )}
                <div className="fixed-action-btn">
                    <a onClick={() => this.openfloatingActionButton()} className={"btn-floating tooltipped btn-large grey darken-3" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Configurar">
                        <i className="large material-icons">settings</i>
                    </a>
                    <ul>
                        <li><a className={"btn-floating tooltipped grey darken-1" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Salvar"><i className="material-icons">save</i></a></li>
                        <li><a className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Cancelar"><i className="material-icons">clear</i></a></li>
                        <li><a className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">edit</i></a></li>
                        <li><a onClick={() => this.openModalBox()} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">add</i></a></li>
                    </ul>
                </div>
                <div id="modalBox" class="modal bottom-sheet">
                    <div class="modal-content center">
                        <h4>Novo Item (Box)</h4>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="last_name" type="text" class="validate" />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Add</a>
                    </div>
                </div>
            </>
        );
    }
}

export default Comodo;