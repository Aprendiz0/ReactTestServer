import React from 'react';
import Utils from '../../ultils';
import { connect } from 'react-redux';
import { changeComponentName, changeComponentNode, changeComponentPort, changeNameIcon } from '../../reduxStore/actions';

class RegistroComponents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onDeleteMode: false
        }

        this.toggleDelete = this.toggleDelete.bind(this);
    }

    componentDidMount() {
        $('select').formSelect();
    }

    componentDidUpdate() {
        $('select').formSelect('destroy').formSelect();
    }

    toggleDelete() {
        let deleteMode = !this.state.onDeleteMode; // State não atualiza instantaniamente
        this.setState({ onDeleteMode: deleteMode });
    }

    render() {
        return (
            <>
                <a className="waves-effect btn-small principalBackgroundColor" style={styles.headerBtn}><i className="material-icons left">add</i>Novo Componente</a>
                <a className="waves-effect btn-small principalBackgroundColor" onClick={this.toggleDelete} style={styles.headerBtn}><i style={(this.state.onDeleteMode ? styles.iconDelete : {})} className="material-icons left">delete</i>Deletar Componente</a>
                <hr />
                {this.props.components.map((item, key) => {
                    let listNodes = this.props.availableNodePorts;
                    let listPortsOfNode = [];
                    let nodeObj = listNodes.filter(value => value.node === item.node)[0];

                    if (typeof nodeObj !== "undefined") listPortsOfNode = nodeObj.ports;
                    if (!listPortsOfNode.includes(item.port) && listPortsOfNode[0] !== undefined) this.props.changeComponentPort({ key, value: listPortsOfNode[0] });

                    return (
                        <div key={key} className="card indigo lighten-2" style={styles.cardSize}>
                            <div className="card-image waves-effect waves-block waves-light activator center indigo lighten-1" style={{ width: "100%" }}>
                                <i className="material-icons large" style={styles.iconNP}>{item.nameIcon}</i>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{item.name}<i className="material-icons right">settings</i></span>
                                <div className="row" style={styles.rowContentCard}>
                                    <div style={styles.rowContentCard}>
                                        <i className="material-icons" style={styles.iconNP}>call_split</i>
                                        Node: {item.node}
                                    </div>
                                    <div style={styles.rowContentCard}>
                                        <i className="material-icons" style={styles.iconNP}>settings_input_component</i>
                                        Port: {item.port}
                                    </div>
                                </div>
                            </div>
                            <div className="card-reveal">
                                <div className="card-title">
                                    <input className="input-field" placeholder="Component Name" style={styles.inputName} value={item.name} onChange={(e) => this.props.changeComponentName({ key, value: e.target.value })} />
                                    <i className="material-icons right">expand_more</i>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">call_split</i>
                                        <select value={item.node} onChange={(e) => this.props.changeComponentNode({ key, value: e.target.value })}>
                                            {
                                                listNodes.map((item, key) => {
                                                    return (
                                                        <option key={key} value={item.node}>{item.node}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                        <label>Node</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">settings_input_component</i>
                                        <select value={item.port} onChange={(e) => this.props.changeComponentPort({ key, value: e.target.value })}>
                                            {
                                                listPortsOfNode.map((item, key) => {
                                                    return (
                                                        <option key={key} value={item}>{item}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                        <label>Port</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">star</i>
                                        <input id="nameIcon" type="text" value={item.nameIcon} onChange={(e) => this.props.changeNameIcon({ key, value: e.target.value })} />
                                        <label htmlFor="nameIcon" className="active">Nome do Icone</label>
                                        <a href="https://material.io/tools/icons/" target="_blank">Mais ícones</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    }
}

const styles = {
    iconDelete: {
        color: "red"
    },
    headerBtn: {
        margin: "5px"
    },
    cardSize: {
        width: "300px",
        height: "400px"
    },
    inputName: {
        width: "calc(100% - 50px)",
        height: "35px"
    },
    iconNP: {
        marginRight: "10px"
    },
    rowContentCard: {
        paddingTop: "5px",
        paddingBottom: "5px"
    }
}

const mapStateToProps = (state) => ({
    components: state.registroComponentsState.components,
    availableNodePorts: state.registroComponentsState.availableNodePorts
})

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ changeComponentName, changeComponentNode, changeComponentPort, changeNameIcon })
)(RegistroComponents);