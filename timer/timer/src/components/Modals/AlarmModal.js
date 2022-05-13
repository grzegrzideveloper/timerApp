import React from "react";

const AlarmModal = ({close, time, darkmode}) => {
    const columnStyle = {textAlign: 'center', fontSize: '2rem'};
    const className = darkmode ? "ui standard modal visible active" : "ui standard modal inverted visible active";
    return (
        <div className="ui dimmer modals visible active" onClick={close}>
            <div onClick={e => e.stopPropagation()} className={className} style={{maxWidth: '500px'}}>
            <div className="header " ><span className="orbitron">Ustaw Alarm</span></div>
                <div className="content">
                    <div className="ui grid">
                        <div className="two column row">
                            <div className="column" style={columnStyle}>
                                <p className="orbitron" style={{margin:0}}>Godzina</p>
                                <span className="orbitron">{time.hours.hours}</span>
                                <div>
                                    <button onClick={() => {time.hours.hours === 23 ? time.hours.setHours(0) : time.hours.setHours(time.hours.hours+1)}} className="ui button"><i className="angle up icon"></i></button>
                                    <button onClick={() => {time.hours.hours === 0 ? time.hours.setHours(23) : time.hours.setHours(time.hours.hours-1)}} className="ui button"><i className="angle down icon"></i></button>
                                </div>
                            </div>
                            <div className="column" style={columnStyle}>
                            <p className="orbitron" style={{margin:0}}>Minuta</p>
                                <span className="orbitron">{time.minutes.minutes}</span>
                                <div>
                                    <button className="ui button" onClick={() => {time.minutes.minutes === 59 ? time.minutes.setMinutes(0) : time.minutes.setMinutes(time.minutes.minutes+1)}}><i className="angle up icon"></i></button>
                                    <button className="ui button" onClick={() => {time.minutes.minutes === 0 ? time.minutes.setMinutes(59) : time.minutes.setMinutes(time.minutes.minutes-1)}}><i className="angle down icon"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div onClick={close} className="ui red button">Anuluj</div>
                    <div onClick={time.turnOn} className="ui green button">OK</div>
                </div>
            </div>
        </div>
    );
};

export default AlarmModal;