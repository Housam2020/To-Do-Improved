import React from "react";

export default class MyForm extends React.Component {
  state = {
    name: "",
    candy: "",
    rememberMe: false,
    title: "hoso",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <textarea
          name="candy"
          value={this.state.candy}
          onChange={this.handleChange}
        ></textarea>

        <input
          type="checkbox"
          name="rememberMe"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
        ></input>

        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>hoso</option>
            <option>homo</option>
          </select>
        </div>

        <button type="submit">submit</button>
      </form>
    );
  }
}
