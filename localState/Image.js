import React from "react";

class Image extends React.Component {
  constructor() {
    console.log("Img Component Constuctor");
    super();
    this.state = {
      timer: "",
    };
  }

  componentDidMount() {
    console.log("Image Component Mounted");
  }

  componentWillUnmount() {
    console.log("Image component has been unmounted");
  }

  render() {
    return <h1>I am Image Component</h1>;
  }
}

export default Image;
