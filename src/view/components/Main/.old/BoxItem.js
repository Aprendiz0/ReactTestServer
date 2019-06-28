import React from 'react';
import BoxItemInput from './BoxItens/BoxItemInput';
import BoxItemSwitch from './BoxItens/BoxItemSwitch';

class BoxItem extends React.Component {

    render() {
        let item;

        switch (this.props.type) {
            case 'switch':
                item = <BoxItemSwitch
                    name={this.props.name}
                />
                break;
            case 'input':
                item = <BoxItemInput
                    name={this.props.name}
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