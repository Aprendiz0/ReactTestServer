import React from 'react';
import Box from './Box';

class Comodo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                {this.props.boxes.map((item, key) =>
                    <Box
                        key={key}
                        boxName={item.boxName}
                        subItens={item.subItens}
                    />
                )}
                <Box
                    boxName='Iluminação'
                    titleSwitch={true}
                />
            </>
        );
    }
}

export default Comodo;