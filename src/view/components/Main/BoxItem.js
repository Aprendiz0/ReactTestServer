import React from 'react';

class BoxItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col" style={styles.labelWithSwitch}>{this.props.itemName}</div>
                <div className="right" style={styles.mSwitch}>
                    <div className="switch">
                        <label>
                            Off
                            <input type="checkbox" className="isvalue islighting" data-sendName="r0" />
                            <span className="lever"></span>
                            On
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    labelWithSwitch: {
        position: 'relative',
        marginTop: '1.5rem',
        marginBottom: '1rem'
    },
    mSwitch: {
        marginTop: '1.4rem'
    }
}

export default BoxItem;