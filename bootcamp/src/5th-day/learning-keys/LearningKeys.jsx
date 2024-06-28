import React, { useState } from 'react'

const LearningKeys = () => {
    let [state,setstate]=useState([
        {
            name:"chintu",
            id:123,
            place:"hyderabad"
        },
        {
            name:"bunty",
            id:456,
            place:"hyderabad"
        },
        {
            name:"potti",
            id:789,
            place:"hyderabad"
        },
        {
            name:"chintu",
            id:101,
            place:"hyderabad"
        }

    ]);
  return (
    <div>
        {state.map((data)=>{
            return <ul key={data.id}>
                <li>{data.id}</li>
                <li>{data.name}</li>
                <li>{data.place}</li>
            </ul>       
         })}
    </div>

  )
}

export default LearningKeys