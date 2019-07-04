import React from 'react';
import Utils from '../../ultils';
import { connect } from 'react-redux';
import { deleteComponent, setOpenCompToModalAdvancedOp } from '../../reduxStore/actions';
import RoundedValueChart from './RoundedValueChart';

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

        return (
            <div className="col s12 m6 l4">
                <div className="card" style={{ ...styles.cardSize, ...styles.background }}>
                    <div className="card-image center" style={styles.backgroundTittle}>
                        <i className="material-icons large">{component.nameIcon}</i>
                    </div>
                    <div className="card-content" style={styles.backgroundContent}>
                        <span className="card-title grey-text text-darken-4">
                            {component.name}
                            <i className="material-icons right" style={{ cursor: "pointer" }} onClick={() => this.props.setOpenCompToModalAdvancedOp({ key: componentKey, component })} >settings</i>
                        </span>
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
                        <RoundedValueChart
                            id={componentKey}
                            maxValue={1023}
                            value={component.value}
                        />
                        {
                            this.props.deleteMode &&
                            <div style={styles.btnDelete}>
                                <a className="btn waves-effect waves-light red" onClick={() => this.props.deleteComponent({ key: componentKey })}><i className="material-icons">delete_sweep</i></a>
                            </div>
                        }
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
    Utils.bindMapDispatchToProps({ deleteComponent, setOpenCompToModalAdvancedOp })
)(ComponentCard);