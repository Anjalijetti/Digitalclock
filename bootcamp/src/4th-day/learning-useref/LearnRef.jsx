import React, { useRef } from 'react'

const LearnRef = () => {
    let inputref=useRef();
    console.log(inputref);
    let changecolor=()=>{
    inputref.current.style.background="orange";
    inputref.current.focus();
    inputref.current.style.color="white";
    }
  return (
    <div>
        <input type='text' ref={inputref}/>
        <button onClick={changecolor}>change</button>
    </div>
  )
}

export default LearnRef