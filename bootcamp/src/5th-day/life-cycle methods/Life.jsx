import React, { Component } from 'react'
import LifeChild from './LifeChild';

export default class Life extends Component {
    constructor(){
        super();
        this.state={
            name:"chintu",
        }
        console.log("constructor method");
    }
    componentDidMount(){
        console.log("component did mount method");
    }
    changeName=()=>{
        this.setState({name:this.state.name="bunty"});
    }
    componentDidUpdate(){
        console.log("component did update");
    }

  render() {
    console.log("render method");
    return (

      <div>
        <h2>{this.state.name}</h2>
        <button onClick={this.changeName}>change</button>

        {/*<LifeChild/>*/}
        {this.state.name=="chintu"?<LifeChild/>:""}

    
      </div>
    )
  }
}
