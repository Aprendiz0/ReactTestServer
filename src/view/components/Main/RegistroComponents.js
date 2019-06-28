import React from 'react';
import Utils from '../../ultils';
import { connect } from 'react-redux';
import { addComponent } from '../../reduxStore/actions';
import ComponentCard from './ComponentCard';

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
                <a className="waves-effect btn-small principalBackgroundColor" onClick={() => this.props.addComponent()} style={styles.headerBtn}><i className="material-icons left">add</i>Novo Componente</a>
                <a className="waves-effect btn-small principalBackgroundColor" onClick={this.toggleDelete} style={styles.headerBtn}><i style={(this.state.onDeleteMode ? styles.iconDelete : {})} className="material-icons left">delete</i>Deletar Componente</a>
                <hr />
                {this.props.components.map((item, key) => {
                    return (
                        <ComponentCard
                            key={key}
                            componentKey={key}
                            component={item}
                        />
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
    Utils.bindMapDispatchToProps({ addComponent })
)(RegistroComponents);