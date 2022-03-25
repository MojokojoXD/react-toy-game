import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };

    this.setInput = this.setInput.bind(this);
    this.toyProblem = this.toyProblem.bind(this);
  }

  toyProblem(stringSeparated){
    const totalArr = stringSeparated.split(',');
    const even = [];
    const odd = [];

    totalArr.forEach(num => {
        if (num % 2 === 0){
            even.push(num);
        }
        else{
            odd.push(num);
        }
    })

    this.setState({evenArray: [...even]})
    this.setState({oddArray: [...odd]})
  }

  setInput(event){
    this.setState({userInput: event.target.value});
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={this.setInput} />
        <button className="confirmationButton" onClick={this.toyProblem}>Results</button>
        <span className="resultsBox">{this.state.evenArray}</span>
        <span className="resultsBox">{this.state.oddArray}</span>
      </div>
    );
  }
}

export { EvenAndOdd as default };
