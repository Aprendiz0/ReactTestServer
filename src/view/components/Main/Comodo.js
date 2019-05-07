import React from 'react';
import Box from './Box';

class Comodo extends React.Component {
    constructor(){
        
    }
    
    render() {
        return (
            <>
                <Box
                    boxName='Iluminação'
                />
                <Box
                    boxName='Iluminação'
                    titleSwitch={true}
                />
            </>
        );
    }
}

export default Comodo;