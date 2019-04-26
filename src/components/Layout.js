import React from "react";
import Nav from './Nav'

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to React SSR!",
        };
    }

    render() {
        return (
            <Nav />
        );
    }
}