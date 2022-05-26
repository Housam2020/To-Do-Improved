import "./App.css";
import React, { Component } from "react";
import ImageSlider from "../Components/ImageSlider";

class App extends React.Component {
  state = {
    visible: true,
  };

  render() {
    const buttonText = this.state.visible ? "hide" : "show";

    return (
      <div>
        <div className="App">
          {this.state.visible ? <ImageSlider /> : <p>nuts</p>}
        </div>
        <button onClick={() => this.setState({ visible: !this.state.visible })}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
