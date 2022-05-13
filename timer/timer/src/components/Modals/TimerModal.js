import React from "react";
import '../../css-files/fonts.css';
import '../../css-files/timermodal.css';
const TimerModal = ({close, time, darkmode}) => {
    const columnStyle = {textAlign: 'center', fontSize: '2rem'};
    const className = darkmode ? "ui standard modal visible active" : "ui standard modal inverted visible active";
    return (
        <div className="ui dimmer modals visible active" onClick={close}>
            <div onClick={e => e.stopPropagation()} className={className} style={{maxWidth: '500px'}}>
                <div className="header " ><span className="orbitron">Ustaw Minutnik</span></div>
                <div className="content">
                    <div className="ui grid" >
                        <div className="three column row">
                            <div className="column" style={columnStyle}>
                                <p className="orbitron" style={{margin:0}}>Godziny</p>
                                <span className="orbitron">{time.hours.hours}</span>
                                <div>
                                    <button onClick={() => {time.hours.hours === 99 ? time.hours.setHours(0) : time.hours.setHours(time.hours.hours+1)}} className="ui button"><i className="angle up icon"></i></button>
                                    <button onClick={() => {time.hours.hours === 0 ? time.hours.setHours(99) : time.hours.setHours(time.hours.hours-1)}} className="ui button"><i className="angle down icon"></i></button>
                                </div>
                            </div>
                            <div className="column" style={columnStyle}>
                                <p className="orbitron" style={{margin:0}}>Minuty</p>
                                <span className="orbitron">{time.minutes.minutes}</span>
                                <div>
                                    <button className="ui button" onClick={() => {time.minutes.minutes === 59 ? time.minutes.setMinutes(0) : time.minutes.setMinutes(time.minutes.minutes+1)}}><i className="angle up icon"></i></button>
                                    <button className="ui button" onClick={() => {time.minutes.minutes === 0 ? time.minutes.setMinutes(59) : time.minutes.setMinutes(time.minutes.minutes-1)}}><i className="angle down icon"></i></button>
                                </div>
                            </div>
                            <div className="column" style={columnStyle}>
                                <p className="orbitron" style={{margin:0}}>Sekundy</p>
                                <span className="orbitron">{time.seconds.seconds}</span>
                                <div>
                                    <button className="ui button" onClick={() => {time.seconds.seconds === 59 ? time.seconds.setSeconds(0) : time.seconds.setSeconds(time.seconds.seconds+1)}}><i className="angle up icon"></i></button>
                                    <button className="ui button" onClick={() => {time.seconds.seconds === 0 ? time.seconds.setSeconds(59) : time.seconds.setSeconds(time.seconds.seconds-1)}}><i className="angle down icon"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div onClick={close} className="ui green button">OK</div>
                </div>
            </div>
        </div>
    );
};

export default TimerModal;