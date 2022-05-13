import React from "react";
import ReactDOM from 'react-dom';
import TimerModal from "./TimerModal";
import EndModal from "./EndModal";
import AlarmModal from "./AlarmModal";
const Modal = ({open, close, modalProps, modal, darkmode}) => {
    let x;
    if (modal === 'endmodal') {
        x = <EndModal darkmode={darkmode} close={close} modalProps={modalProps}/>;
    }else if (modal === 'timermodal'){
        x = <TimerModal darkmode={darkmode} close={close} time={modalProps}/>;
    }else if (modal === 'alarmmodal'){
        x = <AlarmModal darkmode={darkmode} close={close} time={modalProps}/>;
    }
    if (!open) return null;
    return ReactDOM.createPortal(x, document.querySelector('#modal'));

};

export default Modal;