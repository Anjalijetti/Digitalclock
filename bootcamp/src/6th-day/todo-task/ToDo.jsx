import React, { useState } from 'react'

const ToDo = () => {
    let [state,setState]=useState("");
    let [items,setItems]=useState([]);
    let addtask=()=>{
        if(state==""){

        }
        else{
            setItems([...items,state]);
            setState("");
        }
    }
    let deleteitem=(id)=>{
        //console.log(id);
        let updateddata=items.filter((ele,index)=>{
            console.log(ele);
            return id !=index;
        })
        setItems(updateddata);
    }
  return (
    <div>
        <h1>To-do-list</h1>
        <input type="text" value={state} onChange=
        {(e)=>{setState(e.target.value)}}/>
        <button onClick={addtask}>Add</button>
        <div>
            {items.map((data,index)=>{
                return <ul key={index}>
                    <li>{data}</li>
                    <button onClick={()=>deleteitem
                    (index)}>delete</button>
                    <button>edit</button>
                </ul>
            })}
        </div>

    </div>
  )
}

export default ToDo