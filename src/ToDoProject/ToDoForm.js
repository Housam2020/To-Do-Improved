import React, { Component } from "react";
import shortid from "shortid";

class ToDoForm extends Component {
  defaultState = {
    text: "",
  };
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    //Submit the form
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });

    this.setState(this.defaultState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input">
        <input
          name="text"
          placeholder="Input"
          onChange={this.handleChange}
          value={this.state.text}
        ></input>
        <button onClick={this.handleSubmit}> Add </button>
      </form>
    );
  }
}

export default ToDoForm;
