import React from "react";
import BoxItem from './BoxItem';

class Box extends React.Component {
    /*
    boxName
    titleSwitch
    */

    render() {
        return (
            <div className="col s12" style={styles.box}>
                <div className="row">
                    <div className="col left">
                        <h5 className="">{this.props.boxName}:</h5>
                    </div>
                    {this.props.titleSwitch &&
                        <div className="right" style={styles.mSwitch}>
                            <div className="switch">
                                <label>
                                    Off
                                <input type="checkbox" />
                                    <span className="lever"></span>
                                    On
                            </label>
                            </div>
                        </div>
                    }
                </div>
                <div className="row">
                    <hr />
                </div>
                <form className="col s12">
                    <BoxItem
                        itemName='Principal'
                        type='switch'
                    />
                    <BoxItem
                        itemName='Principal'
                        type='input'
                    />
                </form>
            </div>
        );
    }
}

const styles = {
    box: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'gray',
        borderRadius: '30px',
        padding: '10px 30px 0px',
        marginBottom: '20px'
    },
    mSwitch: {
        marginTop: '1.4rem',
        marginRight: '11px'
    }
}

/*
.boxlogin{
            background - color: rgba(255,255,255,0.2);
        border-style: solid;
        border-width: 1px;
        border-color: gray;
        border-radius: 30px;
        padding: 10px 30px 10px !important;
    }
*/

export default Box;