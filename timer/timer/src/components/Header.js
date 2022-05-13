import React from "react";
import { Link } from "react-router-dom";

const Header = ({toggleSidebar}) => {

    

    return (
        <nav className="ui secondary red inverted menu" style={{marginBottom: '0px'}}>
            <div className="item">
                <i className="clock outline big  icon"></i>
                <Link className="orbitron" to="/" style={{margin: 'auto', fontSize: '1.4rem'}}>TimerApp</Link>
            </div>
            <div className="right menu">
                <div className="item">
                    <i onClick={toggleSidebar} className="wrench big icon" style={{ cursor: 'pointer'}}></i>
                </div>
            </div>
        </nav>
    );
};

export default Header;