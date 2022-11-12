import React, { useState } from "react";

function Main() {
  let user = "Varun";
  const [userName, setUserName] = useState(user);
  const [age, setAge] = useState(30);
  const [number, setNumber] = useState(10);
  const [isLogin, setIsLogin] = useState(false);

  function changeName() {
    setUserName("Krishna");
    setAge(23);
  }

  function inc() {
    setNumber(number + 1);
  }

  function dec() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  const [details, setDetails] = useState({
    name: "Krishna",
    age: 23,
    address: "adajan patiya",
    city: "Surat",
  });

  function changeDetails() {
    setDetails({ ...details, name: "Alfiya" });
  }

  const { name } = details;

  const [isShowing, setIsShowing] = useState(false);

  function showDetails() {
    setIsShowing(!isShowing);
  }

  if (isLogin) {
    return <h1>Yes I am login</h1>;
  }

  return (
    <>
      <div className="container p-5">
        <h2>User Details</h2>
        <div className="card ">
          <button onClick={showDetails}>Show Details</button>
          {isShowing ? (
            <div className="card-body">
              <h3>User Name : {details.name} </h3>
              <h3>Age : {details.age} </h3>
              <h3>Address : {details.address} </h3>
              <h3> City : {details.city} </h3>
              <button onClick={changeDetails}>Change Data</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="container p-5">
        <div className="card p-3">
          <h2>My name is : {userName} </h2>
          {/* <button onClick={() => setUserName("Krishna")}>Change User</button> */}
          <h3>Age : {age} </h3>
          <button onClick={changeName}>Click Me</button>
        </div>
      </div>
      <div className="container p-5">
        <div className="card p-3">
          <h2>Counter App</h2>
          <h3>Initial Number : {number}</h3>
          <div>
            <button onClick={inc} className="btn btn-primary">
              +
            </button>
            <button onClick={dec} className="btn btn-danger">
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
