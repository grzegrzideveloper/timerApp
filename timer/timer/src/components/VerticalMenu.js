import React from "react";
import { Link } from "react-router-dom";
const VerticalMenu = () => {
    const verticalMenuStyles = {
        borderTopLeftRadius: '0', 
        borderTopRightRadius: '0', 
        borderBottomLeftRadius: '0'
    };
    return (
        <div className="ui vertical blue inverted left floated labeled icon menu" style={verticalMenuStyles}>
            <div className="item" >
              <Link to="/alarm"><i className="big black bell icon" /> Budzik</Link>
          </div>
          <div className="item">
              <Link to="/stopwatch"><i className="big black stopwatch icon" />Stoper</Link>
            </div>
          <div className="item">
              <Link to="/timer"><i className="big black clock icon" />Minutnik</Link>
          </div>
        </div>
    );
};

export default VerticalMenu;