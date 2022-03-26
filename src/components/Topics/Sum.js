import React, { Component } from "react";

class Sum extends Component {
  constructor(props){
    super(props);
    this.state = {
      num1: '',
      num2: '',
      sum: null
    }

    this.add = this.add.bind(this);
  }

  add(){
    this.setState(state =>{
      return {sum: Number(state.num1) + Number(state.num2)}
    })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={(event)=>this.setState({num1:event.target.value})} value={this.state.num1}type='number'/>
        <input className="inputLine" onChange={(event)=>this.setState({num2:event.target.value})} value={this.state.num2} type='number'/>
        <button className="confirmationButton" onClick={this.add}>Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export { Sum as default };
