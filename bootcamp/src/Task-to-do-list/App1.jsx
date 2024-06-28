import React,{useRef, useState} from 'react'
import Styles from "./App1.module.css"

const App1 = () => {
    const [task,setTask]=useState("");
    const [todos,setTodos]=useState([]);

    const changeHandler=e=>{
        setTask(e.target.value)
    }
    const submitHandler=e=>{
        e.preventDefault();
        //console.log(task);
        const newTodos=[...todos,task];
        setTodos(newTodos);
        setTask("");
    }
    let inputValue=useRef();
let addButt=useRef();

    let handleAdd=()=>{

    }


  return (
    <div id={Styles.cont}>
    <h1 id={Styles.heading}>To-Do List</h1><br/>
    <div id={Styles.cont}>
    <div id={Styles.Task}>
    {/*<form onSubmit={submitHandler}>*/}
        <input type="text" name="task" value={task} onChange={changeHandler}/>&nbsp;
        {/*<input type="submit" value="Add" name="Add"/>*/}
        <button id={Styles.butt} ref={addButt} onClick={handleAdd}>Add</button>
    </div>
      </div>  
    </div>
  )
}

export default App1