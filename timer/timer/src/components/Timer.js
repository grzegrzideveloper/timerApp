import React, { useMemo, useState } from "react";
import useInterval from "../useInterval";
import ringtone1 from '../ringtones/ringtone1.mp3';
import Modal from './Modals/Modal';
const Timer = ({darkmode}) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalEndOpen, setModalEndOpen] = useState(false);
    const [delay, setDelay] = useState(null);
    const audio = useMemo(() => new Audio(ringtone1), [ringtone1]);
    audio.loop = true;

    const timerModalProps = {
      seconds: {seconds, setSeconds},
      minutes: {minutes, setMinutes},
      hours: {hours, setHours}
    };
    const endModalProps = {
      header: 'Odliczanie Zakonczone'
    }

    const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    useInterval(()=>{tick()}, delay);
    
    const playAudio = () => {
      audio.play();
    };

    const stopAudio = () => {
      audio.pause();
      audio.currentTime = 0;
    }

    const tick = () => {
        if(seconds === 0 && minutes === 0 && hours === 0){
          setDelay(null);
          setModalEndOpen(true);
          playAudio();
        }
        else if (seconds === 0 && (minutes > 0 || hours > 0)){
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
          if (minutes === 0 && hours > 0){
            setMinutes(59);
            setSeconds(59);
            setHours((prevHours) => prevHours - 1);
          }
        } 
        else{
          setSeconds((prevSeconds) => prevSeconds - 1);
        } 
    };
    return (
      <div style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap', textAlign:'center'}}>
        <p className="orbitron" style={{width: '100%',marginTop: '30px', fontSize: '4rem'}}>{time}</p> 
        <div className="ui buttons">
          <button className="ui green button" onClick={() => setModalOpen(true)}>Ustaw czas</button>
          <button className="ui gray button" onClick={() => {setHours(0); setMinutes(0); setSeconds(0)}}>Wyzeruj</button>
          <button className={seconds === 0 && minutes === 0 && hours === 0 ? "ui blue disabled button" : "ui blue button"} onClick={() => setDelay(1000)}>Start</button>
          <button className={delay ? "ui red button": "ui red disabled button"} onClick={() => setDelay(null)}>Stop</button>
        </div>
        
        
        <Modal darkmode={darkmode} open={modalOpen} modal='timermodal' modalProps={timerModalProps} close={() => setModalOpen(false)}/>
        <Modal darkmode={darkmode} open={modalEndOpen} modal='endmodal' modalProps={endModalProps} close={() => {setModalEndOpen(false); stopAudio();}} />
      </div>
    );
};

export default Timer;
