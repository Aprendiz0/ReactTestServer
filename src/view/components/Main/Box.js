import React from "react";
import BoxItem from './BoxItem';

class Box extends React.Component {

    render() {
        return (
            <div className="col s12" style={styles.box}>
                <div className="row">
                    <div className="col left">
                        <h5 className="">{this.props.titleBox}:</h5>
                    </div>
                    {this.props.editMode &&
                        <div className="right" style={styles.settingBox}>
                            <div><a onClick={() => this.props.parentFuncSetEdit(this.props.itemKey)}><i className="material-icons small principalcolor">settings</i></a></div>
                        </div>
                    }
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
                {this.props.boxItens &&
                    <>
                        <div className="row">
                            <hr />
                        </div>
                        <form className="col s12">
                            {this.props.boxItens.map((item, key) =>
                                <BoxItem
                                    key={key}
                                    name={item.name}
                                    type={item.type}
                                />
                            )}
                        </form>
                    </>
                }
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
    },
    settingBox: {
        marginTop: '1.3rem',
        marginRight: '11px',
        height: '30px'
    }
}

export default Box;