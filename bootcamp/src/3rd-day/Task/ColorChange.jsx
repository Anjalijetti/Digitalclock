import React, { useState } from 'react'
import Styles from "./cond.module.css";

const ColorChange= () => {
    let [state,setState] =useState(false);
    let ChangeState =()=>{
document.body.classList.toggle(Styles.darkmode);
        
        setState(!state);
}
    
  return (
    <div>

        <button onClick={ChangeState} >{state?"light":"dark"}</button>
    </div>
  )
}

export default ColorChange;