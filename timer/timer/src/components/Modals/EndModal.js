import React from "react";

const EndModal = ({close, modalProps, darkmode}) => {
    const className = darkmode ? "ui standard modal visible active" : "ui standard modal inverted visible active";
    return (
        <div className="ui dimmer modals visible active" onClick={close}>
            <div onClick={e => e.stopPropagation()} className={className} style={{maxWidth: '500px'}}>
                <div className="header " ><span className="orbitron">{modalProps.header}</span></div>
                <div className="content">
                    <p className="orbitron">Wcisnij OK, zeby wylaczyc alarm</p>
                </div>
                <div className="actions">
                    <div onClick={close} className="ui green button">OK</div>
                </div>
            </div>
        </div>
    );
};

export default EndModal;