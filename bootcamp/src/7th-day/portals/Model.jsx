import React from 'react'
import Styles from "./Form.module.css"


const Model = () => {
  return (

    <div>

            <div className={Styles.form}>
                <form action="">
            
                    
                    <input  type="text" placeholder='ENter your name' /><br/><br/>
                    <input  type="text" placeholder='ENter your email' /><br/><br/>
                    <input  type="text" placeholder='ENter your password' /><br/><br/>
                    <button>submit</button>
                    
                    
                    </form>
                </div>
            </div>  
 
  )
}

export default Model