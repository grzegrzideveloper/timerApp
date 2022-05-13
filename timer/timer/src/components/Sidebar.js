import React from "react";

const Sidebar = ({toggle, darkmode, color}) => {


    return (
        <div className={`ui sidebar push right inverted  menu vertical animating ${toggle.toggleSidebar ? 'visible' : ''}`}>
            <i onClick={toggle.setToggle} className="close inverted big icon" style={{cursor: 'pointer', marginTop: '5px'}}></i>
            <div className="item"></div>
            <div className="item">
                <div onClick={darkmode.setDarkmode} className="ui toggle inverted checkbox">
                    <input type="checkbox" tabIndex="0" checked={darkmode.darkmodeChecked} id="darkmodeCheckbox" className="hidden" readOnly/>
                    <label>Tryb Ciemny</label>
                </div>
            </div>
            <div className="item">
                <p>Kolor Zegara:</p>
                <div>
                    <i onClick={() => color.setFontColor('#DB2828') } className={ color.fontColor === '#DB2828' ? "circle check large red icon" : "circle large red icon"}></i>
                    <i onClick={() => color.setFontColor('#2185d0') } className={color.fontColor === '#2185d0' ? "circle check large blue icon" : "circle large blue icon"}></i>
                    <i onClick={() => color.setFontColor('#F2711C') } className={color.fontColor === '#F2711C' ? "circle check large orange icon" : "circle large orange icon"}></i>
                    <i onClick={() => color.setFontColor('#E03997') } className={color.fontColor === '#E03997' ? "circle check large pink icon" : "circle large pink icon"}></i>
                    <i onClick={() => color.setFontColor('#21BA45') } className={color.fontColor === '#21BA45' ? "circle check large green icon" : "circle large green icon"}></i>
                    <i onClick={() => color.setFontColor('#FBBD08') } className={color.fontColor === '#FBBD08' ? "circle check large yellow icon" : "circle large yellow icon"}></i>
                    <i onClick={() => {if(darkmode.darkmodeChecked) {color.setFontColor('white')} else {color.setFontColor('black')}} } className={color.fontColor === 'black' || color.fontColor === 'white' ? "circle check outline large icon" : "circle outline large icon"}></i>
                </div>
            </div>
            <div className="item">
                <p>Dźwięk dzwonka:</p>
                <div class="ui inverted form">
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency" defaultChecked disabled/>
                            <label>Domyślny</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="frequency" disabled/>
                            <label>Własny</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;