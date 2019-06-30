import React from 'react';
import Utils from '../../ultils';
import { connect } from 'react-redux';
import { deleteComponent, changeComponentName, changeComponentNode, changeComponentPort, changeNameIcon, changeComponentTypeValue, changeComponentTypeIO } from '../../reduxStore/actions';

class ComponentCard extends React.Component {
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

        let { component, componentKey } = this.props;

        let listNodes = this.props.availableNodePorts;
        let listPortsOfNode = [];
        let nodeObj = listNodes.filter(value => value.node === component.node)[0];

        if (typeof nodeObj !== "undefined") listPortsOfNode = nodeObj.ports;
        if (!listPortsOfNode.includes(component.port) && listPortsOfNode[0] !== undefined) this.props.changeComponentPort({ key: componentKey, value: listPortsOfNode[0] });

        return (
            <div className="col s12 m6 l4">
                <div className="card" style={{ ...styles.cardSize, ...styles.background }}>
                    <div className="card-image waves-effect waves-block waves-light activator center" style={styles.backgroundTittle}>
                        <i className="material-icons large">{component.nameIcon}</i>
                    </div>
                    <div className="card-content" style={styles.backgroundContent}>
                        <span className="card-title activator grey-text text-darken-4">{component.name}<i className="material-icons right">settings</i></span>
                        <div className="row" style={styles.rowContentCard}>
                            <div style={styles.rowContentCard}>
                                <i className="material-icons" style={styles.iconNP}>call_split</i>
                                Node: {component.node}
                            </div>
                            <div style={styles.rowContentCard}>
                                <i className="material-icons" style={styles.iconNP}>settings_input_component</i>
                                Port: {component.port}
                            </div>
                        </div>
                        {
                            this.props.deleteMode &&
                            <div style={styles.btnDelete}>
                                <a className="btn waves-effect waves-light red" onClick={() => this.props.deleteComponent({ key: componentKey })}><i className="material-icons">delete_sweep</i></a>
                            </div>
                        }
                    </div>
                    <div className="card-reveal" style={styles.backgroundReveal}>
                        <div className="row">
                            <div className="card-title">
                                <input className="input-field" placeholder="Component Name" style={styles.inputName} value={component.name} onChange={(e) => this.props.changeComponentName({ key: componentKey, value: e.target.value })} />
                                <i className="material-icons right">expand_more</i>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">call_split</i>
                                <select value={component.node} onChange={(e) => this.props.changeComponentNode({ key: componentKey, value: e.target.value })}>
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
                                <select value={component.port} onChange={(e) => this.props.changeComponentPort({ key: componentKey, value: e.target.value })}>
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
                                <i className="material-icons prefix">swap_calls</i>
                                <select value={component.typeValue} onChange={(e) => this.props.changeComponentTypeValue({ key: componentKey, value: e.target.value })}>
                                    <option value="01">Digital - 0~1</option>
                                    <option value="02">PWM - 0~255</option>
                                    <option value="03">Analógico - 0~1023</option>
                                </select>
                                <label>Tipo de valor</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">swap_horiz</i>
                                <select value={component.typeIO} onChange={(e) => this.props.changeComponentTypeIO({ key: componentKey, value: e.target.value })}>
                                    <option value="01" disabled={component.typeValue === "02"}>Input</option>
                                    <option value="02" disabled={component.typeValue === "03"}>Output</option>
                                </select>
                                <label>I/O</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">star</i>
                                <input id="nameIcon" type="text" value={component.nameIcon} onChange={(e) => this.props.changeNameIcon({ key: componentKey, value: e.target.value })} />
                                <label htmlFor="nameIcon" className="active">Nome do Icone</label>
                                <a href="https://material.io/tools/icons/" target="_blank">Mais ícones</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        height: "400px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    inputName: {
        width: "calc(100% - 50px)",
        height: "35px"
    },
    rowContentCard: {
        paddingTop: "5px",
        paddingBottom: "5px"
    },
    iconNP: {
        marginRight: "10px"
    },
    background: {
        backgroundColor: "rgba(0,0,0,0.1)"

    },
    backgroundReveal: {
        backgroundColor: "rgba(255, 255, 255, 0.9)"
    },
    backgroundTittle: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        height: "100px"
    },
    backgroundContent: {
        height: "300px"
    },
    btnDelete: {
        position: "absolute",
        bottom: "0",
        right: "0"
    }
}

const mapStateToProps = (state) => ({
    components: state.registroComponentsState.components,
    availableNodePorts: state.registroComponentsState.availableNodePorts
})

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ deleteComponent, changeComponentName, changeComponentNode, changeComponentPort, changeNameIcon, changeComponentTypeValue, changeComponentTypeIO })
)(ComponentCard);