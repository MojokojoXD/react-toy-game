import React, { Component } from "react";

class FilterObject extends Component {
  constructor(props){
    super(props);
    this.state = {
      unfilteredArray: [{id:1,
      name: 'Kelly'},{id:2, name: 'Kenneth'},{id:3,name: 'Phil'}],
      userInput: '',
      filteredArray: []
    }

    this.filter = this.filter.bind(this);
  }

  filter(){
    const arrfilter = this.state.unfilteredArray.filter(obj => obj.name === this.state.userInput )

    const set = new Set(this.state.unfilteredArray)

    if(set.has(this.state.userInput))

    this.setState(state => {
      state.filteredArray.push(arrfilter[0]);
      
      return {filteredArray: state.filteredArray}
    })
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>filter Object</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
        <input className="inputLine" onChange={(event)=>this.setState({userInput: event.target.value})}/>
        <button className="confirmationButton" onClick={this.filter}>filter</button>
        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export { FilterObject as default };
