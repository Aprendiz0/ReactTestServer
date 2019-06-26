import React from "react";
import { connect } from 'react-redux';

class Modals extends React.Component {

    render() {

        return (
            <>
                <div className="fixed-action-btn">
                    <a onClick={this.openfloatingActionButton} className={"btn-floating tooltipped btn-large grey darken-3" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Configurar">
                        <i className="large material-icons">settings</i>
                    </a>
                    <ul>
                        <li><a onClick={this.saveState} className={"btn-floating tooltipped grey darken-1" + (this.state.pulseSave ? " pulse" : "")} data-position="left" data-tooltip="Salvar"><i className="material-icons">save</i></a></li>
                        <li><a onClick={this.cancelState} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Cancelar"><i className="material-icons">clear</i></a></li>
                        <li><a onClick={this.inEditMode} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Editar"><i className="material-icons">edit</i></a></li>
                        <li><a onClick={this.setBoxToAdd} className="btn-floating tooltipped grey darken-1" data-position="left" data-tooltip="Adicionar"><i className="material-icons">add</i></a></li>
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
    mainRow: {
        marginTop: '1.3rem',
        marginBottom: '80px'
    }
}

const mapStateToProps = (state) => ({
    mainPage: state.mainPageState.mainPage
});

export default connect(mapStateToProps)(Modals);