import React from 'react'
import Childprop from './Childprop'
import style from "./props.module.css"

const ParentProp = () => {
  return (
    <div className={style.div1}>
      
        <Childprop>
            hello,everyone..!
        </Childprop>
    </div>
  )
}

export default ParentProp