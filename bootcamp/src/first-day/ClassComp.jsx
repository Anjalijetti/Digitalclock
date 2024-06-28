import React from "react";
 export default class ClassComp extends React.Component
 {
    state={
        counter:0,
    }

    incre=()=>{
        this.setState({counter:this.state.counter+1})

    }
    
    decre=()=>{
        this.setState({counter:this.state.counter-1})
        
    }
    
    reset=()=>{
        this.setState({counter:this.state.counter=0})
        
    }
    render(){
        return <div>
            <h2>{this.state.counter}</h2> 
            <button onClick={this.incre}>increment</button>
            <button onClick={this.decre}>decrement</button>
            <button onClick={this.reset}>reset</button>
        </div>
   
    }

}