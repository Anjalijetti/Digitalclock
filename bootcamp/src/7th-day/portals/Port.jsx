import React, { useState } from 'react'
import ReactDom from 'react-dom';
import Model from './Model';
import Styles from "./Form.module.css";

const Port = () => {
  let [click,setClick]=useState(false);
  let changestate=()=>{
    setClick(!click)

  }
  return (
   <div>
    {click?ReactDom.createPortal(<Model/>,document.getElementById("portals")):""}
    <button className={click?Styles.cancel:Styles.signin} onClick={changestate}>
      {click?document.className="cancel":document.className="signin"}
    </button>
   </div>
  )
}

export default Port