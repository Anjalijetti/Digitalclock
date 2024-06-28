import React from 'react'

const Second = (props) => {
  return (
    <div>
    <h1>{props.A}</h1>
    <button onClick={props.B}>increment</button>
    </div>
  )
}

export default Second