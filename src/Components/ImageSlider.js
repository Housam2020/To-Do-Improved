import React from "react";

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Great_Mosque_of_Cordoba%2C_interior%2C_8th_-_10th_centuries_%2838%29_%2829721130342%29.jpg/1280px-Great_Mosque_of_Cordoba%2C_interior%2C_8th_-_10th_centuries_%2838%29_%2829721130342%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/20180301124354_IMG_4179And6more_Interior_3.jpg/1280px-20180301124354_IMG_4179And6more_Interior_3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Selimiye_Mosque%2C_Dome.jpg/1280px-Selimiye_Mosque%2C_Dome.jpg",
    ],
    index: 0,
  };

  IncrementImages = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  DecrementImages = () => {
    this.setState({
      index: this.state.index - 1,
    });
  };

  render() {
    return (
      <div>
        <img
          style={{
            width: 200,
            height: 200,
          }}
          src={this.state.images[this.state.index]}
        />
        <button onClick={this.IncrementImages}> next</button>
        <button onClick={this.DecrementImages}> prev</button>
      </div>
    );
  }
}
