import React, { useMemo,useState } from 'react'

const UseMemoLearn = () => {
let [count1,setCount1]=useState(0);
let [count2,setCount2]=useState(50) ;   
let increasecount1=()=>{
    setCount1(count1+1)
}
let increasecount2=()=>{
    setCount2(count2+5)

}
let isEven=useMemo(()=>{
    let i=0;
    while(i<999999999) i++;
    return count1%2==0
},[count1])
  return (
    <div>
<h2>{count1}</h2>
{isEven?"even":"odd"}
<button onClick={increasecount1}>increasecount1</button><br/>
<h2>{count2}</h2>
{isEven?"even":"odd"}
<button onClick={increasecount2}>increasecount2</button><br/>
    </div>
  )
}

export default UseMemoLearn