import "./App.css";
import React, { Component } from "react";
import Counter from "./Components/Counter";

class App extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        <div className={this.state.visible ? "visible" : "hidden"}>
          <Counter />
        </div>

        <div style={this.state.visible ? {} : { display: "none" }}>
          <Counter />
        </div>

        <button onClick={() => this.setState({ visible: !this.state.visible })}>
          lol
        </button>
      </div>
    );
  }
}

export default App;
