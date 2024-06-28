import React from 'react'

const Child1 = () => {
    console.log("child componenet");
  return (
    <div>{props.count}</div>
  )
}

export default React.memo(Child1)