import React, { Component } from "react";
import logo from "../logo.svg";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleButtonClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleButtonClick2 = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count} </div>
        <button onClick={this.handleButtonClick}>increment</button>
        <button onClick={this.handleButtonClick2}> decrement </button>
      </div>
    );
  }
}
