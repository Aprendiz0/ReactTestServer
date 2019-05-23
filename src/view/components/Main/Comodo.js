import React from 'react';
import Box from './Box';
import Utils from '../../ultils/index';

class Comodo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pulseSave: false,
            editMode: false,
            editModalBox: {
                titleBox: '',
                titleSwitch: false,
                boxItens: [{}]
            },
            editModalBoxKeyItem: undefined,
            boxes: Utils.cloneJSON(this.props.boxes)
            /*{
                titleBox: '',
                titleSwitch: false,
                boxItens: [{}]
            }*/
        };

        if (typeof this.state.boxes == 'undefined' || !this.state.boxes) this.state.boxes = [];

        this.backupState = Utils.cloneJSON(this.state);

        this.idModal = 'modalBox';
        this.idModalConfigItem = 'modalConfigItem';

        this.saveState = this.saveState.bind(this);
        this.saveEditBox = this.saveEditBox.bind(this);
        this.inEditMode = this.inEditMode.bind(this);
        this.cancelState = this.cancelState.bind(this);
        this.outEditMode = this.outEditMode.bind(this);
        this.openModalBox = this.openModalBox.bind(this);
        this.clearModalBox = this.clearModalBox.bind(this);

        this.onAddItem = this.onAddItem.bind(this);
        this.onChangeItem = this.onChangeItem.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.openModalConfigItem = this.openModalConfigItem.bind(this);
        this.changeEditModalBox = this.changeEditModalBox.bind(this);
        this.setBoxToEdit = this.setBoxToEdit.bind(this);
        this.setBoxToAdd = this.setBoxToAdd.bind(this);
    }

    componentDidMount() {
        let that = this;

        $('.fixed-action-btn').floatingActionButton();
        $('.tooltipped').tooltip();
        $(`#${that.idModal}`).modal({
            onCloseEnd: () => {
                that.clearModalBox();
            }
        })
        $(`#${that.idModalConfigItem}`).modal()
        $('select').formSelect();
    }

    componentDidUpdate() {
        $('select').formSelect();
    }

    openModalBox() {
        let idModal = this.idModal;
        $(`#${idModal}`).modal('open')
    }

    openModalConfigItem() {
        let idModal = this.idModalConfigItem;
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

    saveEditBox() {
        let titleBox = this.state.editModalBox.titleBox;
        let titleSwitch = this.state.editModalBox.titleSwitch;
        let boxItensEdit = this.state.editModalBox.boxItens;

        let boxItens = [];

        boxItensEdit.map((item) => {
            boxItens.push({
                name: item.name,
                type: item.type
            });
        });

        let boxes = this.state.boxes;

        if (typeof this.state.editModalBoxKeyItem == 'undefined') {
            boxes.push({
                titleBox,
                titleSwitch,
                boxItens,
            });
        } else {
            boxes[this.state.editModalBoxKeyItem] = {
                titleBox,
                titleSwitch,
                boxItens,
            };
        }

        this.setState({ boxes });

        this.clearModalBox();
    }

    saveState() {
        this.backupState = Utils.cloneJSON(this.state);
        this.outEditMode();
        Utils.toast('Salvo');
    }

    cancelState() {
        this.setState({
            ...Utils.cloneJSON(this.backupState)
        });
        this.outEditMode();
        Utils.toast('Cancelado');
    }

    changeEditModalBox(fields) {
        this.setState(state => {
            let editModalBox = state.editModalBox;
            for (const key in fields) {
                editModalBox[key] = fields[key];
            }

            return {
                editModalBox,
            };
        });
    }

    onAddItem(key) {
        this.state.editModalBox.boxItens.splice(key + 1, 0, {});
        this.changeEditModalBox({ boxItens: this.state.editModalBox.boxItens });
    }

    onChangeItem(key, fieldsItem) {

        const boxItens = this.state.editModalBox.boxItens.map((item, keyMap) => {
            if (keyMap === key) {
                for (let field in fieldsItem) {
                    item[field] = fieldsItem[field];
                    return item;
                }
            }
            return item;
        });

        this.changeEditModalBox({ boxItens });
    }

    onRemoveItem(key) {

        const boxItens = this.state.editModalBox.boxItens.filter((item, keyMap) => key !== keyMap);

        this.changeEditModalBox({ boxItens });
    };

    clearModalBox() {
        this.changeEditModalBox({
            titleBox: '',
            titleSwitch: false,
            boxItens: [{}]
        });
    }

    setBoxToEdit(key) {
        this.setState({
            editModalBoxKeyItem: key,
            editModalBox: Utils.cloneJSON(this.state.boxes[key])
        });
        this.openModalBox();
    }

    setBoxToAdd() {
        this.setState({ editModalBoxKeyItem: undefined });
        this.openModalBox();
    }

    render() {
        return (
            <>
                {this.state.boxes.map((item, key) =>
                    <Box
                        key={key}
                        itemKey={key}
                        titleBox={item.titleBox}
                        boxItens={item.boxItens}
                        titleSwitch={item.titleSwitch}
                        editMode={this.state.editMode}
                        parentFuncSetEdit={this.setBoxToEdit}
                    />
                )}
                <div className="col s12" style={styles.bottom}></div>
                <div className="fixed-action-btn">
                    <a onClick={this.openfloatingActionButton} className={"btn-floating tooltipped btn-large grey darken-3" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Configurar">
                        <i className="large material-icons">settings</i>
                    </a>
                    <ul>
                        <li><a onClick={this.saveState} className={"btn-floating tooltipped grey darken-1" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Salvar"><i className="material-icons">save</i></a></li>
                        <li><a onClick={this.cancelState} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Cancelar"><i className="material-icons">clear</i></a></li>
                        <li><a onClick={this.inEditMode} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">edit</i></a></li>
                        <li><a onClick={this.setBoxToAdd} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">add</i></a></li>
                    </ul>
                </div>
                <div id={this.idModal} className="modal bottom-sheet">
                    <div className="modal-content center">
                        <div className="container">
                            <h4>Novo Item (Box)</h4>
                            <br />
                            <div className="row container">
                                <div className="input-field col s10">
                                    <input id="newNameItemBox" type="text" className="center" placeholder="Titulo" value={this.state.editModalBox.titleBox} onChange={(e) => this.changeEditModalBox({ titleBox: e.target.value })} />
                                </div>
                                <div className="col s2" style={styles.chkboxEditSwitch}>
                                    <label>
                                        <input type="checkbox" className="filled-in" checked={this.state.editModalBox.titleSwitch} onChange={(e) => this.changeEditModalBox({ titleSwitch: e.target.checked })} />
                                        <span>Switch</span>
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <h4>Itens</h4>
                            <br />
                            {this.state.editModalBox.boxItens.length == 0 &&
                                <div className="row container">
                                    <div className="col s4 m2 offset-s4 offset-m5" style={styles.addRemoveItem}>
                                        <div className="col s6"><a onClick={() => this.onRemoveItem(0)}><i className="material-icons">clear</i></a></div>
                                        <div className="col s6"><a onClick={() => this.onAddItem(0)}><i className="material-icons">add</i></a></div>
                                    </div>
                                </div>
                            }
                            {
                                this.state.editModalBox.boxItens.map((item, key) => {
                                    if (!item.type) item.type = "input";
                                    return (
                                        <div className="row container" key={key}>
                                            <div className="input-field col s12 m8">
                                                <div className="left col s12 m2" style={styles.settingBox}>
                                                    <a onClick={this.openModalConfigItem}><i className="material-icons small">settings</i></a>
                                                </div>
                                                <div className="col s12 m10">
                                                    <input type="text" className="center" placeholder="Nome do item" value={item.name || ''} onChange={(e) => this.onChangeItem(key, { name: e.target.value })} />
                                                </div>
                                            </div>
                                            <div className="input-field s8 col m2">
                                                <select value={item.type} onChange={(e) => this.onChangeItem(key, { type: e.target.value })}>
                                                    <option value="input">Input</option>
                                                    <option value="switch">Switch</option>
                                                </select>
                                                <label>Tipo</label>
                                            </div>
                                            <div className="col s4 m2 input-field" style={styles.addRemoveItem}>
                                                <div className="col s6"><a onClick={() => this.onRemoveItem(key)}><i className="material-icons">clear</i></a></div>
                                                <div className="col s6"><a onClick={() => this.onAddItem(key)}><i className="material-icons">add</i></a></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a onClick={this.clearModalBox} className="modal-close waves-effect waves-green btn-flat">Cancel</a>
                        <a onClick={() => this.saveEditBox()} className="modal-close waves-effect waves-green btn-flat">
                            {typeof this.state.editModalBoxKeyItem != 'undefined' ?
                                'Edit'
                                :
                                'Add'
                            }

                        </a>
                    </div>
                </div>
                <div id={this.idModalConfigItem} className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a onClick={this.clearModalBox} className="modal-close waves-effect waves-green btn-flat">Cancel</a>
                        <a onClick={() => this.saveEditBox()} className="modal-close waves-effect waves-green btn-flat">Test</a>
                    </div>
                </div>
            </>
        );
    }
}

const styles = {
    chkboxEditSwitch: {
        marginTop: '30px'
    },
    addRemoveItem: {
        marginTop: '30px'
    },
    settingBox: {
        marginTop: '0.9rem',
        height: '30px'
    },
    bottom: {
        height: '30px'
    }
}

export default Comodo;