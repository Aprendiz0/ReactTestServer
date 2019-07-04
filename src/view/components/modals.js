import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { applyModalAdvOpToComp, clearModalAdvOp } from '../reduxStore/actions';

class Modals extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        $(".modal").modal();
    }

    render() {
        return (
            <>
                <div id={modalIds.advancedComponentOp} className="modal modal-fixed-footer">
                    {
                        this.props.component &&
                        <>
                            <div className="modal-content">
                                <h4>{this.props.component.name}</h4>
                                <p>A bunch of text</p>
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

const modalBase = "modalId_";

export const modalIds = {
    advancedComponentOp: `${modalBase}advancedCompOp`
};

const mapStateToProps = (state) => ({
    component: state.modalsState.componentAdvancOp.component
})

export default connect(
    mapStateToProps,
    (dispatch) => bindActionCreators({ applyModalAdvOpToComp, clearModalAdvOp }, dispatch) // for bug with call Utils... only in this fucking class 
)(Modals);