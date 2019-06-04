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

        const { alterMainPage } = this.props;

        return (
            <li className="noPadding">
                <ul className="collapsible collapsible-accordion">
                    <li>
                        <a onClick={this.props.toPage ? () => alterMainPage(this.props.toPage) : () => { }} className={(this.props.itens ? "collapsible-header " : "") + "waves-effect principal-textcolor"}>{this.props.name}</a>
                        {this.props.itens &&
                            <div className="collapsible-body">
                                <ul>
                                    {this.props.itens.map((item, key) =>
                                        <li key={key}>
                                            <a onClick={() => alterMainPage(
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