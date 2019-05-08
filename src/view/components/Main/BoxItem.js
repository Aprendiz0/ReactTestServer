import React from 'react';
import BoxItemInput from './BoxItens/BoxItemInput';
import BoxItemSwitch from './BoxItens/BoxItemSwitch';

class BoxItem extends React.Component {
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

        let item;

        switch (this.props.type) {
            case 'switch':
                item = <BoxItemSwitch
                    name={this.props.itemName}
                />
                break;
            case 'input':
                item = <BoxItemInput
                    name={this.props.itemName}
                />
                break;
        }

        return (
            <div className="row">
                {item}
            </div>
        );
    }
}

export default BoxItem;