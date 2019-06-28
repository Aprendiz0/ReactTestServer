import React from 'react';

class BoxItemInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 0
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;

        try {
            if (!value) value = 0;
            value = parseInt(value);
            this.setState({ inputValue: value })
        } catch (e) { console.warn(`${value} is not a number`) }
    }

    render() {
        return (
            <>
                <div className="col s4 m4 l3" style={styles.labelInput}>{this.props.name}</div>
                <div className="col s6 m4 l4">
                    <div className="input-field">
                        <a  className="prefix" onClick={() => this.setState({ inputValue: --this.state.inputValue })}><i className="material-icons prefix">remove_circle_outline</i></a>
                        <input type="text" className="center" value={this.state.inputValue} onChange={this.handleInput} />
                        <a  className="prefix" onClick={() => this.setState({ inputValue: ++this.state.inputValue })}><i className="material-icons prefix right">add_circle_outline</i></a>
                    </div>
                </div>
            </>
        );
    }
}

const styles = {
    labelInput: {
        position: 'relative',
        marginTop: '2rem',
        marginBottom: '1rem'
    }
}

export default BoxItemInput;