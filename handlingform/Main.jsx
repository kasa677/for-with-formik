import React, { useState } from "react";

function Main() {
  // 1st step create state of an input
  // 2nd then add that state to our input
  // 3rd call the handle change function
  // submit our form
  const [name, setname] = useState("");
  const [tableDate, setTableData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    setTableData([...tableDate, name]);
    setname("");
  }

  function handleChange(e) {
    setname(e.target.value);
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-primary text-center">Form</h2>
          <form action="">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={handleChange}
              />
            </div>
            <button
              className="btn btn-primary w-100 my-3"
              onClick={handleSubmit}
            >
              Send
            </button>
          </form>

          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {tableDate.map((item) => {
                return (
                  <tr>
                    <td> {item} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Main;
