import React, { useState } from 'react'

const ControlForm = () => {
    let [state,setstate]=useState({
        name:"",
        password:"",
        gender:"",

    });
    let[skills,setSkills]=useState([]);
    let {name,password,gender}=state;
    let handleSubmit=(e)=>{
        //console.log(e);
        e.preventDefault();
        console.log(state);
        console.log(skills);
    }
    let handleChange=(e)=>{
        let {name,value}=e.target;
        setstate({...state,[name]:value});
        }
    let handleskills=(e)=>{
        setSkills([...skills,e.target.value])
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your name" value={name} name='name' onChange={handleChange}/>
            <br/><br/>
            <input type="text" placeholder="enter your password" value={password} name='password' onChange={handleChange}/>
            <br/><br/>
            <div onChange={handleChange} value={gender} name="gender">
                <input type="radio" name='gender' value="m"/>Male
                <input type="radio" name='gender' value="f"/>Female
                <input type="radio" name='gender' value="o"/>Others

            </div>
            <div value={skills} name="skills" onChange={handleskills}>
                <input type="checkbox" name='skills' value="html" />Html
                <input type="checkbox" name='skills' value="css" />Css
                <input type="checkbox" name='skills' value="js" />Javascript
                <input type="checkbox" name='skills' value="react" />React js
            </div>
            <input type="submit"/>
            <input type="reset"/>


        </form>
    </div>
  )
}

export default ControlForm