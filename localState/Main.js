import React from "react";
import Image from "./Image";

class Main extends React.Component {
  constructor() {
    // console.log("Main Constructor");
    super();

    this.state = {
      name: "Varun",
      age: 18,
      city: "Surat",
      isShowing: false,
    };

    // this.changeState = () => {
    //   return this.setState({ name: "Parth", age: 20 });
    // };
  }

  // componentDidMount() {
  //   console.log("Main Component Has Mounted");
  // }

  componentDidUpdate() {
    console.log("Main Component has been updated");
  }

  render() {
    // console.log("Main render mathod");
    return (
      <div>
        {/* <button onClick={this.changeState}>Change Name</button> */}
        <button
          onClick={() => this.setState({ name: "Krishna", city: "Daman" })}
        >
          Change Name
        </button>
        <h1>My name is : {this.state.name} </h1>
        <h2>And My Age is {this.state.age}</h2>
        <h3> I live is {this.state.city}</h3>
        <hr />
        <button
          onClick={() => this.setState({ isShowing: !this.state.isShowing })}
        >
          Hide/Show
        </button>
        {this.state.isShowing ? <Image /> : ""}
      </div>
    );
  }
}

export default Main;
