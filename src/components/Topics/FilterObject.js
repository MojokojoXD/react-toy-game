import React, { Component } from "react";

class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unfilteredArray: [
        { id: 1, name: "Kelly" },
        { id: 2, name: "Kenneth" },
        { id: 3, name: "Phil" },{id:4, name: 'Julia'}
      ],
      userInput: "",
      filteredArray: [],
    };

    this.filter = this.filter.bind(this);
  }

  filter() {
    const arrfilter = this.state.unfilteredArray.filter(
      (obj) => obj.name === this.state.userInput
    );

    const set = new Set(this.state.unfilteredArray);

    this.state.unfilteredArray.forEach((obj) => {
      if (obj.name === this.state.userInput) {
        set.delete(obj);
      }
    });

    this.setState((state) => {
      if(this.state.userInput !== ''){
        state.filteredArray.push(arrfilter[0]);
      }

      return {
        filteredArray: state.filteredArray,
        unfilteredArray: Array.from(set),
        userInput: ''
      };
    });
  }


  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unfilteredArray)}
        </span>
        <label htmlFor="name">Enter name:</label>
        <input
          className="inputLine"
          onChange={(event) =>this.setState({ userInput: event.target.value })} value={this.state.userInput} id='name'
        />
        <button className="confirmationButton" onClick={this.filter}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export { FilterObject as default };
