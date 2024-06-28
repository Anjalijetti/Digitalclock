import React, { useContext } from "react";
import Global from './GlobalData'
const Consumer=()=>{
    let{name,age}=useContext(Global);
    //console.log(a);
    return(
        <div>
            <h1>{name} </h1>
            <h1>{age}</h1>
        </div>
    )
}
export default Consumer;