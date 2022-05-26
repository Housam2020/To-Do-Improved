import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

const initalState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

class ValidationForm extends Component {
  state = initalState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (this.state.name < 1) {
      nameError = "name must be longer than 4";
    }

    if (!this.state.email.includes("@")) {
      emailError = "must be valid email";
    }
    if (this.state.password.length < 4) {
      passwordError = "password must be at least 4 chars";
    }

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }
    return true;
  };

  letsSee = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initalState);
    }
  };

  render() {
    return (
      <form>
        <input
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <div style={{ color: "red", fontSize: 12 }}>{this.state.nameError}</div>

        <input
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
        ></input>
        <div style={{ color: "red", fontSize: 12 }}>
          {this.state.emailError}
        </div>

        <input
          name="password"
          placeholder="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        ></input>
        <div style={{ color: "red", fontSize: 12 }}>
          {this.state.passwordError}
        </div>

        <button onClick={this.letsSee}> slatt </button>
      </form>
    );
  }
}

export default ValidationForm;
