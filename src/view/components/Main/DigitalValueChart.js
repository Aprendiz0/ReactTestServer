import React from 'react';

class DigitalValueChart extends React.Component {

    render() {
        return (
            <div className="center" style={{ marginTop: "50px" }}>
                <span>
                    <div className={(this.props.value ? "green" : "red") + " lighten-1 z-depth-1"} style={styles.square}>{this.props.value ? "On" : "Off"}</div>
                </span>
            </div>
        );
    }
}

const styles = {
    square: {
        marginLeft: "auto",
        marginRigth: "auto",
        width: "100px",
        height: "50px",
        display: "table-cell",
        verticalAlign: "middle",
        color: "white",
        borderRadius: "5px"
    }
}

export default DigitalValueChart;