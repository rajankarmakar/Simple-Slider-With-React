import React, { Component } from "react";
import "./ImageCircle.css";

class ImageCircle extends Component {
  constructor(props) {
    super(props);
  }
  activeOpacity = () => {
    let ops = "profileImage activeOpacity";
    return (ops += this.props.cssOpacity);
    console.log(ops);
  };
  render() {
    console.log(this.props.opacity);
    return (
      <div className="m-auto p-2">
        <img
          className={this.activeOpacity()}
          src={this.props.img}
          alt="profile"
        />
        <h1> {this.props.opacity} </h1>
      </div>
    );
  }
}

export default ImageCircle;
