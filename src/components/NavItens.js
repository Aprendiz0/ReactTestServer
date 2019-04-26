import React from "react";

export default class NavItens extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'Cômodos'
        };
    }

    render() {
        return (
            <li className="noPadding">
                <ul className="collapsible collapsible-accordion">
                    <li>
                        <a className="collapsible-header waves-effect principal-textcolor">{this.state.name}</a>
                        <div className="collapsible-body">
                            <ul>
                                <li><a href="#!" className="principal-textcolor">Quarto  Nathan</a></li>
                                <li><a href="#!" className="principal-textcolor">Site</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
        );
    }
}