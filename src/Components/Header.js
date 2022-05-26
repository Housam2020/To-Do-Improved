import logo from "../logo.svg";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>welcome {this.props.title}</h1>
      </header>
    );
  }
}
