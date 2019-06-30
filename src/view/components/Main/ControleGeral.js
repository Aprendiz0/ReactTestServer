import React from 'react';
import Utils from '../../ultils';
import { connect } from 'react-redux';
import { addGeneralGroup, deleteGeneralGroup } from '../../reduxStore/actions';

class ControleGeral extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onDeleteMode: false
        }

        this.toggleDelete = this.toggleDelete.bind(this);
    }
    
    componentDidMount() {
        $('.collapsible').collapsible();
    }
    
    toggleDelete() {
        let deleteMode = !this.state.onDeleteMode; // State não atualiza instantaniamente
        this.setState({ onDeleteMode: deleteMode });
        if (deleteMode) {
            $('.collapsibleGroup>li').each(function (i) {
                $('.collapsibleGroup').collapsible('close', i);
            });
            $('.collapsibleGroup').collapsible('destroy');
        }
        else $('.collapsible').collapsible();
    }

    render() {
        return (
            <>
                <a className="waves-effect btn-small principalBackgroundColor" onClick={() => this.props.addGeneralGroup()} style={styles.headerBtn}><i className="material-icons left">add</i>Novo Grupo</a>
                <a className="waves-effect btn-small principalBackgroundColor" onClick={this.toggleDelete} style={styles.headerBtn}><i style={(this.state.onDeleteMode ? styles.iconDelete : {})} className="material-icons left">delete</i>Deletar Grupo</a>
                <hr />
                <ul className="collapsible collapsibleGroup">
                    {
                        this.props.groupControl.map((item, key) =>
                            <li key={key}>
                                <div className="collapsible-header" style={styles.collapsibleHeader}>
                                    <div style={styles.flexBox} className="left">
                                        <i className="material-icons">chevron_right</i>
                                    </div>
                                    {item.name}
                                    <div style={styles.flexBox} className="right">
                                        {this.state.onDeleteMode &&
                                            <a onClick={() => this.props.deleteGeneralGroup({ key })}><i className="material-icons" style={{ ...styles.iconLeftSpace, ...styles.iconDelete }}>delete_sweep</i></a>
                                        }
                                    </div>
                                </div>
                                <div className="collapsible-body">
                                        oopa
                                </div>
                            </li>
                        )
                    }
                </ul>
            </>
        );
    }
}

const styles = {
    flexBox: {
        display: "-webkit-box",
        display: "-webkit-flex",
        display: "-ms-flexbox",
        display: "flex"
    },
    collapsibleHeader: {
        display: "inherit",
        height: "53px"
    },
    iconLeftSpace: {
        marginLeft: "17px"
    },
    iconDelete: {
        color: "red"
    },
    headerBtn: {
        margin: "5px"
    }
}

const mapStateToProps = (state) => ({
    groupControl: state.controleGeralState.groupControl
})

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ addGeneralGroup, deleteGeneralGroup })
)(ControleGeral);