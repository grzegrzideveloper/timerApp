import React, {useState} from "react";
import useInterval from "../useInterval";
const Stopwatch = () => {
  
    const [miliseconds, setMiliseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [delay, setDelay] = useState(null);
    const [rounds, setRounds] = useState([]);
    const time = <p className="orbitron" style={{width: '100%',marginTop: '30px', fontSize: '4rem'}}>{`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:`}<small>{miliseconds < 10 ? `0${miliseconds}` : miliseconds}</small></p>;
    
    useInterval(() => tick(), delay);
    
    const tick = () => {
      if(miliseconds < 1000) {
        setMiliseconds(prevMiliseconds => prevMiliseconds + 10);
      }
      else if (miliseconds === 1000){
        setMiliseconds(0);

        if(seconds < 59){
          setSeconds(prevSeconds => prevSeconds + 1);
        }
        else if(seconds === 59){
          setSeconds(0);
          if(minutes < 59){
            setMinutes(prevMinutes => prevMinutes + 1);
          }
          else if (minutes === 59){
            setMinutes(0);
            setHours(prevHours => prevHours + 1);
          }
          
        }
      }
    }

    const stop = () => {
      setDelay(null);
      setMiliseconds(0);
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setRounds([]);
    };
    const round = () => {
      const round = {
        miliseconds,
        seconds,
        minutes,
        hours
      };
      setRounds(prevRounds => [...prevRounds, round]);
    };
    const renderRounds = ()=> {
      return rounds.map((r, index)=> {
        return <p className="orbitron" style={{ fontSize: '1.4rem', width: '100%'}}>{`Runda${index+1} - ${r.hours < 10 ? `0${r.hours}` : r.hours}:${r.minutes < 10 ? `0${r.minutes}` : r.minutes}:${r.seconds < 10 ? `0${r.seconds}` : r.seconds}:`}<small>{r.miliseconds < 10 ? `0${r.miliseconds}` : r.miliseconds}</small></p>;
      });
    };

    return (
      <div style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap', textAlign:'center'}}>
              {time}
              <div className="ui buttons">
                <button className="ui orange button" onClick={round}>Runda</button>
                <button className="ui gray button" onClick={stop}>Wyzeruj</button>
                <button className={delay ? "ui blue disabled button" : "ui blue button" } onClick={() => setDelay(10)}>Start</button>
                <button className={delay ? "ui red button": "ui red disabled button"} onClick={() => setDelay(null)}>Pauza</button>
              </div>
              <p className="orbitron" style={{ fontSize: '1.4rem', width: '100%', marginTop: '20px'}}>rundy:</p>
              {renderRounds()}
            
      </div>
    );
}

export default Stopwatch;
