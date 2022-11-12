import React, { Component } from "react";

const text_green = { color: "green", backgroundColor: "red", padding: "20px" };
export class Footer extends Component {
  render() {
    return <h1 style={text_green}>I am A Footer Component</h1>;
  }
}
