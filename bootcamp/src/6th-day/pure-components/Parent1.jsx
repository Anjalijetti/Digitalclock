import React, { Component } from 'react'
import AlternateForPure from "./AlternateForPure";

export default class Parent1 extends Component {
    state={
        name:"chintu",
    };
    changeName=()=>{
        this.setState({name:"chintu;"})
    }
  render() {
    console.log("comp rendered");
    return (
      <div>
        <AlternateForPure name={this.state.name}/>
        <button onClick={this.changeName}>change</button>
      </div>
    )
  }
}
