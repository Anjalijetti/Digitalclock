import React from 'react'
import Three from './Three'

const Two = (props) => {
  return (
    <div>
       {/* <h1>{props.name}-{props.place}</h1>*/}
        <Three name={props.name} place={props.place}/>
    </div>
  )
}

export default Two