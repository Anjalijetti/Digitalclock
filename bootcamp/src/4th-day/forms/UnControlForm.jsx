import React,{useRef} from 'react'

const UnControlForm = () => {
    let nameref=useRef();
    let emailref=useRef();
    let passwordref=useRef();
    let maleref=useRef();
    let femaleref=useRef();
    let  othersref=useRef();
    let htmlref=useRef();
    let cssref=useRef();
    let jsref=useRef();
    let reactref=useRef();

let handlesubmit=(e)=>{
    e.preventDefault();
let name=nameref.current.value;
let email=emailref.current.value;
let pw=passwordref.current.value;

let gender=maleref.current.checked ?"male":
femaleref.current.checked ?"female":
othersref.current.checked ?"others": "null"

let skills=[];
if(htmlref.current.checked) skills.push("html");
if(cssref.current.checked) skills.push("css");
if(jsref.current.checked) skills.push("javascript");
if(reactref.current.checked) skills.push("react")

console.log(name,email,pw,gender,skills);
} 

  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder='enter your name'     ref={nameref}/><br/><br/>
            <input type="text" placeholder='enter your email'    ref={emailref}/><br/><br/>
            <input type="text" placeholder='enter your password' ref={passwordref}/><br/><br/>
            <div>
            <label htmlFor="gen">Gender:</label>
            <input type="radio" id='gen' ref={maleref} name='gender' value="male"/>Male
            <input type="radio" id='gen' ref={femaleref} name='gender' value="female"/>Female
            <input type="radio" id='gen' ref={othersref} name='gender' value="others"/>Others
            </div>
            <div>
                <label htmlFor="skill">Skills</label>
                <input type="checkbox" id='skill' name='skill' ref={htmlref} />HTML
                <input type="checkbox" id='skill' name='skill' ref={cssref} />CSS
                <input type="checkbox" id='skill' name='skill' ref={jsref} />JS
                <input type="checkbox" id='skill' name='skill' ref={reactref} />React
            </div>
            <input type="submit" />
            <input type="reset" />
            
        </form>
    </div>
  )
}

export default UnControlForm