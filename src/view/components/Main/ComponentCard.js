import React from 'react';
import Utils from '../../ultils';
import { connect } from 'react-redux';
import { deleteComponent, setOpenCompToModalAdvancedOp } from '../../reduxStore/actions';
import RoundedValueChart from './RoundedValueChart';

class ComponentCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onDeleteMode: false,
            teste: 500
        }

        this.toggleDelete = this.toggleDelete.bind(this);
    }

    componentDidMount() {
        $('select').formSelect();
        let that = this;
        setInterval(function() {
            that.setState({ teste: parseInt(Math.random() * 1023) })
        }, 500)
    }

    toggleDelete() {
        let deleteMode = !this.state.onDeleteMode; // State não atualiza instantaniamente
        this.setState({ onDeleteMode: deleteMode });
    }

    render() {

        let { component, componentKey } = this.props;
        let iconIO = "warning";
        let iconTypeVal = "warning";


        switch (component.typeIO) {
            case "01":
                iconIO = "call_received";
                break;
            case "02":
                iconIO = "call_made";
                break;
        }

        switch (component.typeValue) {
            case "01":
                iconTypeVal = "space_bar";
                break;
            case "02":
                iconTypeVal = "show_chart";
                break;
            case "03":
                iconTypeVal = "swap_calls";
                break;
        }

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
                            <div className="col s6 center">
                                <i className="material-icons" style={styles.iconNP}>device_hub</i>
                                Node: {component.node}
                            </div>
                            <div className="col s6 center">
                                <i className="material-icons" style={styles.iconNP}>settings_input_component</i>
                                Port: {component.port}
                            </div>
                        </div>
                        <div className="row center">
                            <span><i className="material-icons" style={styles.iconNP}>{iconIO}</i></span>
                            <span><i className="material-icons" style={styles.iconNP}>{iconTypeVal}</i></span>
                        </div>
                        <RoundedValueChart
                            id={componentKey}
                            maxValue={1023}
                            value={this.state.teste}//component.value}
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