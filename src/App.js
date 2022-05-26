import "./App.css";
import React, { Component } from "react";
import ToDoList from "./ToDoProject/ToDoList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToDoList></ToDoList>
      </div>
    );
  }
}

export default App;
