import React ,{useState} from 'react'

const Condition = () => {
    let[num,setNum]=useState(3);
    let[cup,setcup]=useState(0);
    let print;
    if(num%2==0){
        print="even number"
    }
    else{
        print="odd number"
    }
  return (
    <div>
    <h1>{num}</h1>
    <h1>{print}</h1>
  { /* ternary operator-conditional rendering*/}
    {cup!==0?"we have cup":"ee sala cup named🏆"}
    </div>
  )
}

export default Condition
 