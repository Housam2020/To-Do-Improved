import "./App.css";
import React, { Component } from "react";
import ImageSlider from "../Components/ImageSlider";
import Counter from "../Components/Counter";
import Header from "../Components/Header";

class App extends React.Component {
  state = {
    visible: true,
    WhatToDisplay: "ImageSlider",
  };

  render() {
    if (this.state.WhatToDisplay === "ImageSlider") {
      return (
        <div className="App">
          <ImageSlider></ImageSlider>
          <button onClick={() => this.setState({ WhatToDisplay: "Counter" })}>
            next
          </button>
        </div>
      );
    } else if (this.state.WhatToDisplay === "Counter") {
      return (
        <div className="App">
          <Counter />
          <button onClick={() => this.setState({ WhatToDisplay: "Header" })}>
            next
          </button>
        </div>
      );
    } else if (this.state.WhatToDisplay === "Header") {
      return (
        <div className="App">
          <Header />
          <button
            onClick={() => this.setState({ WhatToDisplay: "ImageSlider" })}
          >
            next
          </button>
        </div>
      );
    }

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
