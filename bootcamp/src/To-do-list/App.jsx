import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Styles from "./App.module.css"
const App = () => {
    let [state,setState]=useState([]);

    let [updateTask,setUpdatetask]=useState('');
    let handleonChange=(e)=>{
       let tas=e.target.value;   
       setUpdatetask(tas);
    }

let inputValue=useRef();
let addButt=useRef();

    let handleAdd=()=>{
        
        if(inputValue.current.value == ""){
           alert("Enter a task");   
        }
        else{
        let newTodo=[...state,{id: uuidv4(),work:updateTask}];
        setState(newTodo);
        inputValue.current.value="";
        }
    }

    let deleteTodo=(id)=>{
        let rem=state.filter(del => del.id !== id);
        setState(rem);
    }
    let updateTodo=(id)=>{
       state.map((upd)=>{
          if(upd.id==id){
              inputValue.current.value=upd.work;
              const buttn=addButt.current;
              buttn.value='update';
          }
       })
    }

  return (
    <div id={Styles.cont}>
        <h1 id={Styles.heading}>To-Do List</h1><br/>
        <div id={Styles.cont}>
            <div id={Styles.Task}>
            <input id={Styles.todo} type="text" onChange={handleonChange} ref={inputValue} placeholder='Enter Task' />
            <button id={Styles.butt} ref={addButt} onClick={handleAdd}>Add</button>
            </div><br/>
            <div id={Styles.taskDiv}>
            {state.map((todo)=>{
                return (
                    <><div id={Styles.task}>
                        <p>{todo.work}</p>
                        <button id={Styles.delbutt} onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                        <button id={Styles.updbutt} onClick={()=>{updateTodo(todo.id)}}>Update</button>
                    </div><br/></>
                )
            })}
            </div>
         </div>
    </div> 
  )
}

export default App