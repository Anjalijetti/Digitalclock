import React, { Component } from 'react'

export default class LearnPureComp extends Component {
    state={
        sub:"react"
    }
    changesub=()=>{
        this.setState({sub:"react"});
    }
  render() {
    console.log("component rendering");
    return (
      <div>
        <h2>{this.state.sub}</h2>
        <button onClick={this.changesub}>change</button>
      </div>
    )
  }
}
