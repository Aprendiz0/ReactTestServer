import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { alterMainPage } from '../actions'

class NavItens extends React.Component {
    constructor(props) {
        super(props);
        /*
            props = {
                type: 'collapsible' || 'normal'
                name: 'Item Nav 1'
                itens: [
                    'Item 1',
                    'Item 2'
                ]
            }
        */
    }

    render() {

        const { alterMainPage } = this.props;

        const nothing = () => {};

        return (
            <li className="noPadding">
                <ul className="collapsible collapsible-accordion">
                    <li>
                        <a onClick={this.props.toPage ? () => alterMainPage(this.props.toPage): () => nothing()} className={(this.props.itens ? "collapsible-header " : "") + "waves-effect principal-textcolor"}>{this.props.name}</a>
                        {this.props.itens &&
                            <div className="collapsible-body">
                                <ul>
                                    {this.props.itens.map((item, key) =>
                                        <li key={key}>
                                            <a onClick={() => alterMainPage(item.toPage)} href="#!" className="principal-textcolor">{item.name}</a>
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
    ...state
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ alterMainPage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavItens);