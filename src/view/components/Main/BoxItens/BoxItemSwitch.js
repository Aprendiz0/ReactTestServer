import React from 'react';

class BoxItemSwitch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            switchValue: 0
        }

        this.handleSwitch = this.handleSwitch.bind(this);
    }

    handleSwitch(e) {
        let value = e.target.checked;
        this.setState({ switchValue: value })
    }

    render() {
        return (
            <>
                <div className="col" style={styles.labelWithSwitch}>{this.props.name}</div>
                <div className="right" style={styles.mSwitch}>
                    <div className="switch">
                        <label>
                            Off
                            <input type="checkbox" checked={this.state.switchValue} onChange={this.handleSwitch} />
                            <span className="lever"></span>
                            On
                        </label>
                    </div>
                </div>
            </>
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

export default BoxItemSwitch;