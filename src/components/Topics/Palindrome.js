import React, { Component } from "react";

class Palindrome extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      palindrome: ''
    }

    this.checkPalindrome = this.checkPalindrome.bind(this);
  }

  checkPalindrome(){
    const arrToCheck = Array.from(this.state.userInput.toLowerCase());
    const reverseArr = [];

    while(arrToCheck.length !== 0){
      reverseArr.push(arrToCheck.pop())
    }


    if(this.state.userInput === reverseArr.join('')){
      this.setState({palindrome: "It is a palindrome!!!!!"})
    }
    else this.setState({ palindrome: "It is not a palindrome" });

    this.setState({userInput: ''});
  }

  render() {
      return (
        <div className="puzzleBox filterObjectPB">
          <h4>Palindrome</h4>
          <input className="inputLine" onChange={(event)=>this.setState({userInput: event.target.value})} value={this.state.userInput}/>
          <button className="confirmationButton" onClick={this.checkPalindrome}>Check</button>
          <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
        </div>
      )
  }
}

export { Palindrome as default };
