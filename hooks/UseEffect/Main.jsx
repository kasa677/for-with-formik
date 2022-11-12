import React, { useState, useEffect } from "react";
import Img from "./Img";
import Products from "./Products";

function Main() {
  const [name, setName] = useState("Krupa");
  const [number, setNumber] = useState(10);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    console.log("Component has Mounted");
  }, []);

  function inc() {
    setNumber(number + 1);
  }

  function dec() {
    setNumber(number - 1);
  }

  return (
    <div className="container">
      <h2>I am Main Component</h2>
      <h3>My name is {name}</h3>
      <button onClick={() => setName("Karan")}> Change Name </button>
      <hr />

      <h3> total Item {number} </h3>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <hr />
      <button onClick={() => setIsShowing(!isShowing)}>Hide/Show Image</button>
      {isShowing ? <Products /> : ""}
    </div>
  );
}

export default Main;
