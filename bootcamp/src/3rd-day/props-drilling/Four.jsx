import React from 'react'
import Five from './Five'

const Four = (props) => {
  return (
    <div>
       {/*< h1>{props.name}</h1>*/}
        <Five name={props.name} place={props.place}/>
    </div>
  )
}

export default Four