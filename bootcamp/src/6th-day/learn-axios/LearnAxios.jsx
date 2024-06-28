import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const LearnAxios = () => {
    let[state,setState]=useState([]);
    useEffect(()=>{
        axios.get("https://api.github.com/users").then
        ((res)=>{
            console.log(res.data);
            setState(res.data);
            
        }).catch(()=>{
            console.log("data is not fetched");
        })
    },[])
  return (
    <div>
        {state.map((product)=>{
            return <div key={product.id}>
                <h3>{product.login}</h3>
                <img src={product.avatar_url} alt=""/>
                

            </div>
        })}
    </div>
  )
}

export default LearnAxios