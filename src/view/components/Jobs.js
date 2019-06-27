import React from 'react';
import Utils from '../ultils';
import { connect } from 'react-redux';
import { toggleDay, changeJobName, addJob, changeTime, deleteJob } from '../reduxStore/actions'

class Jobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onDeleteMode: false
        }

        this.toggleDelete = this.toggleDelete.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.setTimePicker = this.setTimePicker.bind(this);
    }

    toggleDelete() {
        let deleteMode = !this.state.onDeleteMode; // por que o State n atualiza instantaniamente
        this.setState({ onDeleteMode: deleteMode });
        if (deleteMode) {
            $('.collapsibleJob>li').each(function (i) {
                $('.collapsibleJob').collapsible('close', i);
            });
            $('.collapsibleJob').collapsible('destroy');
        }
        else $('.collapsible').collapsible();
    }

    componentDidMount() {
        $('.collapsible').collapsible();
        this.setTimePicker();
    }

    setTimePicker(){
        let that = this;
        $('.timepicker').timepicker({
            twelveHour: false,
            onCloseEnd: function () {
                document.activeElement.blur(); // clear focus of any element
                let data = $(this.el).data();
                that.changeTime(data.key, data.timeattr, this.el.value);
            }
        });
    }

    componentDidUpdate() {
        this.setTimePicker();
    }

    changeTime(key, timeAttr, value) {
        this.props.changeTime({ key, timeAttr, value });
    }

    render() {
        return (
            <>
                <a className="waves-effect btn-small principalBackgroundColor" onClick={() => this.props.addJob()} style={styles.headerBtn}><i className="material-icons left">add</i>Novo Job</a>
                <a className="waves-effect btn-small principalBackgroundColor" onClick={this.toggleDelete} style={styles.headerBtn}><i style={(this.state.onDeleteMode ? styles.iconDelete : {})} className="material-icons left">delete</i>Deletar Job</a>
                <hr />
                <ul className="collapsible collapsibleJob">
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
                                        {this.state.onDeleteMode &&
                                            <a onClick={() => this.props.deleteJob({ key })}><i className="material-icons" style={{ ...styles.iconLeftSpace, ...styles.iconDelete }}>delete_sweep</i></a>
                                        }
                                    </div>
                                </div>
                                <div className="collapsible-body">
                                    <div className="row">
                                        <div className="input-field col s12 m6">
                                            <input type="text" placeholder="Job Name" value={item.name} onChange={(e) => this.props.changeJobName({ key, value: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12" style={{ marginBottom: "10px" }}>Dias de ativação: </div>
                                        <div className="col s12" style={styles.flexBox}>
                                            <div style={styles.circle} className={(item.days.dom ? "light-green" : "grey") + " lighten-1 z-depth-3"} onClick={() => this.props.toggleDay({ key, day: "dom" })}>D</div>
                                            <div style={styles.circle} className={(item.days.seg ? "light-green" : "grey") + " lighten-1 z-depth-3"} onClick={() => this.props.toggleDay({ key, day: "seg" })}>S</div>
                                            <div style={styles.circle} className={(item.days.ter ? "light-green" : "grey") + " lighten-1 z-depth-3"} onClick={() => this.props.toggleDay({ key, day: "ter" })}>T</div>
                                            <div style={styles.circle} className={(item.days.qua ? "light-green" : "grey") + " lighten-1 z-depth-3"} onClick={() => this.props.toggleDay({ key, day: "qua" })}>Q</div>
                                            <div style={styles.circle} className={(item.days.qui ? "light-green" : "grey") + " lighten-1 z-depth-3"} onClick={() => this.props.toggleDay({ key, day: "qui" })}>Q</div>
                                            <div style={styles.circle} className={(item.days.sex ? "light-green" : "grey") + " lighten-1 z-depth-3"} onClick={() => this.props.toggleDay({ key, day: "sex" })}>S</div>
                                            <div style={styles.circle} className={(item.days.sab ? "light-green" : "grey") + " lighten-1 z-depth-3"} onClick={() => this.props.toggleDay({ key, day: "sab" })}>S</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s4">
                                            <i className="material-icons prefix">alarm_on</i>
                                            <input id="timeOn" type="text" className="timepicker" data-key={key} data-timeattr={"timeOn"} value={item.timeOn} onChange={(e) => this.changeTime(key, "timeOn", e.target.value)} />
                                            <label htmlFor="timeOn" className="active">Hora de ativação</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <i className="material-icons prefix">alarm_off</i>
                                            <input id="timeOff" type="text" className="timepicker" data-key={key} data-timeattr={"timeOff"} value={item.timeOff} onChange={(e) => this.changeTime(key, "timeOff", e.target.value)} />
                                            <label htmlFor="timeOff" className="active">Hora de desativação</label>
                                        </div>
                                    </div>
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
    iconDelete: {
        color: "red"
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
    headerBtn: {
        margin: "5px"
    }
}

const mapStateToProps = (state) => ({
    job: state.jobState.job
})

export default connect(
    mapStateToProps,
    Utils.bindMapDispatchToProps({ toggleDay, changeJobName, addJob, changeTime, deleteJob })
)(Jobs);