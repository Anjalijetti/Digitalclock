import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
    let [state,setState]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/").then(res=>{
            setState(res.data);
        })
    .catch(()=>{
        console.log("loading...");
    });
    })
  return (
  
    <div> 
        {state.map((data)=>{
            return<div key={data.id}>
                <p>{data.title}</p>
                <img src={data.image} alt=""/>
                <p>{data.price}</p>
                <p>Category:{data.category}</p>
                <link to={`/cart/${data.id}`}>go to cart</link>


                </div>

        })}
    </div>
  )
}

export default Product