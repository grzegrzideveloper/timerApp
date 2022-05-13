import React, {useState, useEffect, useMemo} from "react";
import Modal from "./Modals/Modal";
import ringtone1 from '../ringtones/ringtone1.mp3';
const Alarm = ({darkmode}) => {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEndOpen, setModalEndOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [alarm, setAlarm] = useState(false);
  
  const audio = useMemo(() => new Audio(ringtone1), [ringtone1]);
  audio.loop = true;

  const modalProps = {
    minutes: {minutes, setMinutes},
    hours: {hours, setHours},
    turnOn: () => {setAlarm(true); setModalOpen(false);}
  };
  const endModalProps = {
    header: 'Juz ta godzina!'
  }

  const playAudio = () => {
    audio.play();
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
  }


  if (alarm){
    if (minutes === time.getMinutes() && hours === time.getHours() && modalEndOpen === false){
      setModalEndOpen(true);
      playAudio();
      setAlarm(false);
    }
  }

  
  const tick = () => {
    //setTime(new Date().toLocaleTimeString([], timeOptions));
    setTime(new Date());

  };

  useEffect(()=> {
    const intervalID = setInterval(()=>{tick()}, 1000)
    return () => {
      clearInterval(intervalID);
    }
  });

  
  



  return (
    <>
      <div className="ui grid">
        <div className="two column row">
          <div className="column" style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap', textAlign:'center', borderRight: '1px solid black'}}>
            <p className="orbitron" style={{fontSize: '2rem'}}>Godzina:</p>
            <p className="orbitron" style={{width: '100%', fontSize: '4rem'}}>{`${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`}</p>
            <button className="ui green button" onClick={() => setModalOpen(true)}>Ustaw Budzik</button>
          </div>
          <div className="column" style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap', textAlign:'center'}}>
            <p className="orbitron" style={{fontSize: '2rem'}}>Budzik:</p>
            <p className="orbitron" style={{width: '100%', fontSize: '4rem'}}>{alarm ? `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}` : 'Brak Budzika'}</p>
            <button className={alarm ? "ui red button" : "ui disabled red button"} onClick={() => setModalOpen(true)}>Wyłącz Budzik</button>
          </div>
        </div>
      </div>
      <Modal darkmode={darkmode} open={modalOpen} modal='alarmmodal' modalProps={modalProps} close={() => setModalOpen(false)}/>
      <Modal darkmode={darkmode} open={modalEndOpen} modal='endmodal' modalProps={endModalProps} close={() => {setModalEndOpen(false); stopAudio();}}/>
    </>
  );
  

  
}

export default Alarm;
