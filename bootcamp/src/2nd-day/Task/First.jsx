import React, { useState } from 'react'
import Second from './Second';

const First = () => {
    let [x,y]=useState(0);
    let incre=()=>{
        y(x+1);
    }
  return (
    <Second A={x} B={incre}/>
  )
}

export default First