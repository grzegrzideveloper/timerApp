import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Alarm from "./components/Alarm";
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modals/Modal";
import Sidebar from "./components/Sidebar";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import VerticalMenu from "./components/VerticalMenu";
const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [darkmodeChecked, setDarkmodeChecked] = useState(false);
  const [fontColor, setFontColor] = useState(darkmodeChecked === true ? 'white':'black');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const setDarkmode = () => {
    if(darkmodeChecked){
      setDarkmodeChecked(!darkmodeChecked);
      document.body.style.backgroundColor = 'white';
      if(fontColor === 'white') setFontColor('black');
      console.log('unchecked');
    }else{
      setDarkmodeChecked(!darkmodeChecked);
      document.body.style.backgroundColor = 'black';
      if(fontColor === 'black') setFontColor('white');
      console.log('checked');
    }
  }
  
  const toggle = {
    toggleSidebar,
    setToggle: () => setToggleSidebar(false)
  };
  const darkmode = {
    darkmodeChecked,
    setDarkmode
  }
  const color = {
    fontColor,
    setFontColor
  }
  console.log(modalProps);
  

  return (
      <>
      
        <Header toggleSidebar={() => setToggleSidebar(true)}/>
        
        <Sidebar toggle={toggle} darkmode={darkmode} color={color}/>
        
        <div className="ui grid" style={{color: fontColor}}>
          <div className="one wide column">
            <VerticalMenu/>
          </div>
          <div className="fifteen wide column">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/alarm" element={ <Alarm darkmode={darkmodeChecked}/> }/>
            <Route path="/stopwatch" element={ <Stopwatch/> }/>
            <Route path="/timer" element={ <Timer darkmode={darkmodeChecked}/> }/> 
          </Routes>
          </div>
        </div>
        
        
        
      </>
    );
}

export default App;
