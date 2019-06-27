import React from 'react';
import Utils from '../ultils';
import { connect } from 'react-redux';
import { toggleDay, changeJobName, addJob } from '../reduxStore/actions'

class Jobs extends React.Component {

    componentDidMount() {
        $('.collapsible').collapsible();
        console.log(this.props.job)
    }

    render() {
        return (
            <>
                <a className="waves-effect btn-small principalBackgroundColor" onClick={() => this.props.addJob()}><i className="material-icons left">add</i>Novo Grupo</a>
                <hr />
                <ul className="collapsible">
                    {
                        this.props.job.map((item, key) =>
                            <li key={key}>
                                <div className="collapsible-header" style={styles.collapsibleHeader}>
                                    <div style={styles.flexBox} className="left">
                                        <i className="material-icons">chevron_right</i>
                                    </div>
                                    {item.name}
                                    <div style={styles.flexBox} className="right">
                                        <i className="material-icons">alarm_on</i>
                                        {item.timeOn}
                                        <i className="material-icons" style={styles.iconLeftSpace}>alarm_off</i>
                                        {item.timeOff}
                                    </div>
                                </div>
                                <div className="collapsible-body">
                                    <div className="row">
                                        <div className="input-field col s12 m6">
                                            <input type="text" placeholder="Job Name" value={item.name} onChange={(e) => this.props.changeJobName({ key, value: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div style={styles.dailyBar}>
                                            <div style={{ marginRight: "10px" }}>Dias de ativação: </div>
                                            <div style={styles.circle} className={(item.days.dom ? "light-green" : "grey") + " lighten-1 z-depth-5"} onClick={() => this.props.toggleDay({ key, day: "dom" })}>D</div>
                                            <div style={styles.circle} className={(item.days.seg ? "light-green" : "grey") + " lighten-1 z-depth-5"} onClick={() => this.props.toggleDay({ key, day: "seg" })}>S</div>
                                            <div style={styles.circle} className={(item.days.ter ? "light-green" : "grey") + " lighten-1 z-depth-5"} onClick={() => this.props.toggleDay({ key, day: "ter" })}>T</div>
                                            <div style={styles.circle} className={(item.days.qua ? "light-green" : "grey") + " lighten-1 z-depth-5"} onClick={() => this.props.toggleDay({ key, day: "qua" })}>Q</div>
                                            <div style={styles.circle} className={(item.days.qui ? "light-green" : "grey") + " lighten-1 z-depth-5"} onClick={() => this.props.toggleDay({ key, day: "qui" })}>Q</div>
                                            <div style={styles.circle} className={(item.days.sex ? "light-green" : "grey") + " lighten-1 z-depth-5"} onClick={() => this.props.toggleDay({ key, day: "sex" })}>S</div>
                                            <div style={styles.circle} className={(item.days.sab ? "light-green" : "grey") + " lighten-1 z-depth-5"} onClick={() => this.props.toggleDay({ key, day: "sab" })}>S</div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </li>
                        )
                    }
                </ul>
            </>
        );
    }
}

const styles = {
    flexBox: {
        display: "-webkit-box",
        display: "-webkit-flex",
        display: "-ms-flexbox",
        display: "flex"
    },
    collapsibleHeader: {
        display: "inherit",
        height: "53px"
    },
    iconLeftSpace: {
        marginLeft: "17px"
    },
    circle: {
        borderRadius: "50%",
        width: "25px",
        height: "25px",
        padding: "1px 0px 0px 8px",
        fontWeight: "bold",
        marginRight: "10px",
        cursor: "pointer"
    },
    dailyBar: {
        display: "flex"
    }
}

const mapStateToProps = (state) => ({
    job: state.jobState.job
})

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ toggleDay, changeJobName, addJob })
)(Jobs);