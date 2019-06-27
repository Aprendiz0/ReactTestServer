import React from "react";
import { connect } from 'react-redux';
import { alterMainPage } from '../reduxStore/actions'
import Comodo from "./Main/Comodo";
import Utils from '../ultils';

class NavItens extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let haveItens = false;
        let itens = [];

        if(typeof this.props.comodos === 'object'){
            itens = this.props.comodos;
        }

        if(itens.length > 0) haveItens = true;

        return (
            <li className="noPadding">
                <ul className="collapsible collapsible-accordion">
                    <li>
                        <a onClick={this.props.toPage ? () => this.props.alterMainPage(this.props.toPage) : () => { }} className={(haveItens ? "collapsible-header " : "") + "waves-effect principal-textcolor"}>{this.props.name}</a>
                        {haveItens &&
                            <div className="collapsible-body">
                                <ul>
                                    {itens.map((item, key) =>
                                        <li key={key}>
                                            <a onClick={() => this.props.alterMainPage(
                                                <Comodo
                                                    key={key}
                                                    id={key}
                                                    item={item}
                                                />
                                            )} className="principal-textcolor">{item.name}</a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        }
                    </li>
                </ul>
            </li>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state.alterMainPage
});

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ alterMainPage })
)(NavItens);