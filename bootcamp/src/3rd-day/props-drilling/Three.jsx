import React from 'react'
import Four from './Four'

const Three = (props) => {
  return (
    <div>
       {/* <h2>{props.name}</h2>*/}
        
        <Four name={props.name} place={props.place}/>

    </div>
  )
}

export default Three