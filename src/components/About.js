import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            test: ''
        }

        this.handlerInputTest = this.handlerInputTest.bind(this)
    }

    handlerInputTest(event) {
        this.setState({ test: event.target.value })
    }

    render() {

        return (
            <div>
                <h2>This is the about page</h2>
                <input type="text" name="fname" onChange={this.handlerInputTest} />
                <h1>{this.state.test}</h1>
            </div>
        );
    }
}

export default About;
