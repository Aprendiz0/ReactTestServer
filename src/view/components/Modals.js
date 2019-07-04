import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { applyModalAdvOpToComp, clearModalAdvOp, changeComponentName, changeComponentNode, changeComponentPort, changeNameIcon, changeComponentTypeValue, changeComponentTypeIO } from '../reduxStore/actions';

class Modals extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        $(".modal").modal();
        $('select').formSelect();
    }

    componentDidUpdate() {
        $('select').formSelect('destroy').formSelect();
    }

    render() {

        let { component } = this.props;

        let listNodes = this.props.availableNodePorts;
        let listPortsOfNode = [];
        let nodeObj = listNodes.filter(value => value.node === component.node)[0];

        if (typeof nodeObj !== "undefined") listPortsOfNode = nodeObj.ports;
        if (!listPortsOfNode.includes(component.port) && listPortsOfNode[0] !== undefined) this.props.changeComponentPort({ key: componentKey, value: listPortsOfNode[0] });


        return (
            <>
                <div id={modalIds.advancedComponentOp} className="modal modal-fixed-footer">
                    {
                        component &&
                        <>
                            <div className="modal-content">
                                <h4>{component.name}</h4>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">star</i>
                                        <input type="text" placeholder="Component Name" style={styles.inputName} value={component.name} onChange={(e) => this.props.changeComponentName({ value: e.target.value })} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">call_split</i>
                                        <select value={component.node} onChange={(e) => this.props.changeComponentNode({ value: e.target.value })}>
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
                                        <select value={component.port} onChange={(e) => this.props.changeComponentPort({ value: e.target.value })}>
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
                                        <select value={component.typeValue} onChange={(e) => this.props.changeComponentTypeValue({ value: e.target.value })}>
                                            <option value="01">Digital - 0~1</option>
                                            <option value="02">PWM - 0~255</option>
                                            <option value="03">Analógico - 0~1023</option>
                                        </select>
                                        <label>Tipo de valor</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">swap_horiz</i>
                                        <select value={component.typeIO} onChange={(e) => this.props.changeComponentTypeIO({ value: e.target.value })}>
                                            <option value="01" disabled={component.typeValue === "02"}>Input</option>
                                            <option value="02" disabled={component.typeValue === "03"}>Output</option>
                                        </select>
                                        <label>I/O</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">star</i>
                                        <input id="nameIcon" type="text" value={component.nameIcon} onChange={(e) => this.props.changeNameIcon({ value: e.target.value })} />
                                        <label htmlFor="nameIcon" className="active">Nome do Icone</label>
                                        <a href="https://material.io/tools/icons/" target="_blank">Mais ícones</a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <a onClick={() => this.props.clearModalAdvOp()} style={{ cursor: "pointer" }} className="btn-flat">Cancelar</a>
                                <a onClick={() => this.props.applyModalAdvOpToComp()} style={{ cursor: "pointer" }} className="btn-flat">Aplicar</a>
                            </div>
                        </>
                    }
                </div>
            </>
        );
    }
}



const styles = {
    inputName: {
        width: "calc(100% - 50px)",
        height: "35px"
    }
}

const modalBase = "modalId_";

export const modalIds = {
    advancedComponentOp: `${modalBase}advancedCompOp`
};

const mapStateToProps = (state) => ({
    component: state.modalsState.componentAdvancOp.component,
    availableNodePorts: state.registroComponentsState.availableNodePorts
})

export default connect(
    mapStateToProps,
    (dispatch) => bindActionCreators({ applyModalAdvOpToComp, clearModalAdvOp, changeComponentName, changeComponentNode, changeComponentPort, changeNameIcon, changeComponentTypeValue, changeComponentTypeIO }, dispatch) // for bug with call Utils... only in this fucking class 
)(Modals);