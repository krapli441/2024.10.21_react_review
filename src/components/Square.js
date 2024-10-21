import React, { Component } from "react";
import "./square.css";

class Square extends Component {
  render() {
    return (
      <button className="sqaure" onClick={() => console.log("clicked")}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
