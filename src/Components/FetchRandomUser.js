import React, { Component } from "react";

class FetchRandomUser extends Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading || !this.state.people) {
      return <div> loading.. </div>;
    }

    const peopleJSX = this.state.people.map((person, i) => (
      //root component
      <div key={`${i}`}>
        <div>{person.name.first}</div>
        <img src={person.picture.large} />
      </div>
    ));

    return <div> peopleJSX </div>;
  }
}

export default FetchRandomUser;
