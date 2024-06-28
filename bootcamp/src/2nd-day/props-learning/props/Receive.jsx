import React from 'react'
import ptype from "prop-types";


const Receive = ({name,age}) => {
  console.log("receive comp");
  return (
    <div>
        <h2>name-{name} </h2>
        <h2>age-{age}</h2>
        
            
        </div>
  )
}
Receive.defaultProps={
  name:"bunty",
  age:25,
  
}
Receive.propTypes={
  name:ptype.string,
  name:ptype.number,
}

export default Receive
