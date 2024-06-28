import React,{useState} from "react";
const FunComp=()=>{
    //let a=useState();
    //console.log(a);
    //destructure usestate
    let [x,y]=useState("react");
    // x is initial value,y is fuction to updatel values
    let change=()=>{
        y("node js");
    }
    return <div>
        <h2>{x}</h2>
<button onClick={change}>change</button>
    </div>
};
export default FunComp;